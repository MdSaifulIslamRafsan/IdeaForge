import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import handleZodError from '../errors/handleZodError';
import { ZodError } from 'zod';
import { IErrorSources } from '../interface/error';
import handleValidationError from '../errors/handleValidationError';

const globalErrorHandler: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  let errorStatus = 500;
  let errorMessage = 'An unexpected error occurred';
  
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
  }else if (err?.name === "ValidationError") {
    const simplifiedError = handleValidationError(err);
    errorStatus = simplifiedError.statusCode;
    errorMessage = simplifiedError.message;
    errorSource = simplifiedError.errorSources;
}

  res.status(errorStatus).send({
    success: false,
    message : errorSource[0]?.message || errorMessage,
    errorMessage,
    error: err,
    stack: err?.stack,
  });
};

export default globalErrorHandler;
