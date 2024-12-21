import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import handleZodError from '../errors/handleZodError';
import { ZodError } from 'zod';
import { IErrorSources } from '../interface/error';
import handleValidationError from '../errors/handleValidationError';
import handleDuplicateError from '../errors/handleDuplicateError';

const globalErrorHandler: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  let errorStatus = err.statusCode || 500;
  let errorMessage = err.message || 'An unexpected error occurred';

  let errorSource: IErrorSources[] = [
    {
      path: '',
      message: 'An unexpected error occurred',
    },
  ];
  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    errorStatus = simplifiedError.statusCode;
    errorMessage = simplifiedError.message;
    errorSource = simplifiedError.errorSources;
  } else if (err?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err);
    errorStatus = simplifiedError.statusCode;
    errorMessage = simplifiedError.message;
    errorSource = simplifiedError.errorSources;
  } else if (err?.code === 11000) {
    const simplifiedError = handleDuplicateError(err);
    errorStatus = simplifiedError.statusCode;
    errorMessage = simplifiedError.message;
    errorSource = simplifiedError.errorSources;
  }

  res.status(errorStatus).send({
    success: false,
    message: errorMessage,
    errorMessage,
    error: { ...err, errorSource },
    stack: err?.stack,
  });
};

export default globalErrorHandler;
