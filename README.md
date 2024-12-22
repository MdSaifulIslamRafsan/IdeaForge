# 📃 IdeaForge - Blog Platform

## 🚀 Live Demo
https://assignment3-blue-three.vercel.app/

## 🛠 Project Overview
**IdeaForge** is a blogging platform designed to allow users to write, update, and delete their own blogs, while providing admins with the ability to manage users and their blogs. The platform supports secure authentication, role-based access control (Admin and User), and a public API for reading blogs with search, sort, and filter functionalities.

**Technologies Used:**
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose for schema management)
- **Authentication**: JWT (JSON Web Token)
- **Authorization**: Role-based access control (Admin and User roles)
- **Environment Variables**: dotenv for managing environment configurations

## 🚀 Features

### User Roles
- **Admin**:
  - Predefined credentials (Admin email: `ideaforge@admin.com`, Password: `securepassword`).
  - Can delete any blog.
  - Can block any user.
  - Cannot update any blog.
  
- **User**:
  - Can register and log in.
  - Can create, update, and delete their own blogs.
  - Cannot perform admin actions.

### Authentication & Authorization
- **JWT Authentication**: Users must log in to access certain endpoints.
- **Role-based Authorization**: Different permissions for Admin and User roles.

## 🚀 API Endpoints

### 1. Authentication
- **Register User** (`POST /api/auth/register`): Register a new user. ✍️
- **Login User** (`POST /api/auth/login`): Authenticate a user and return a JWT token. 🔐

### 2. Blog Management
- **Create Blog** (`POST /api/blogs`): Allows a logged-in user to create a blog. 📝
- **Update Blog** (`PATCH /api/blogs/:id`): Allows a logged-in user to update their own blog. ✏️
- **Delete Blog** (`DELETE /api/blogs/:id`): Allows a logged-in user to delete their own blog. 🗑️
- **Get All Blogs** (`GET /api/blogs`): Fetches all blogs with options to search, sort, and filter. 🔍

### 3. Admin Actions
- **Block User** (`PATCH /api/admin/users/:userId/block`): Admin can block a user by setting `isBlocked` to true. 🚫
- **Delete Blog** (`DELETE /api/admin/blogs/:id`): Admin can delete any blog. 🔨

## 🛠️ Setup and Usage

### Step 1: Clone the Repository
```bash
git clone https://github.com/MdSaifulIslamRafsan/IdeaForge.git
cd IdeaForge
```
### Step 2: Install Dependencies
npm install
### Step 3: Configure Environment Variables
Create a .env file in the root directory and add your configuration. Example:
```sh
NODE_ENV=development
PORT=5000
DB_URL=your_database_url
JWT_SECRET : 
```

### Step 4: Run the Application
Development Mode:
```sh
npm run start:dev
```

Production Mode:
```sh
npm run build
npm run start or npm run start:prod
```

### Step 5: Lint and Format Code
 
- To check for linting errors:

```sh
npm run lint
```

- To automatically fix linting issues:

```sh
npm run lint:fix
```

- To format code using Prettier:

```sh
npm run format
```

### 🤝 Contribution
We welcome contributions to enhance this project! Please feel free to fork the repository, submit pull requests, or report issues.
### 📞 Support
If you encounter any issues or have suggestions, please feel free to contact the author at:

### Email: mdsaifulislamrafsan099@gmail.com
