# Graphql-Prisma-App-Nodejs
This is an GraphQl app for social media network like a blog.

---

# Installing

## Prerequisites

Before you begin, ensure you have Node.js version 18.16.0 or later installed on your machine.

## Getting Started

To get started with the project server, you need to install all dependencies:

  ```bash
  cd server
  ```

  ```bash
  npm ci
  ```

## Environment Configuration

The repository includes an `example.env` file. You should create the following environment files in folder `config`:
  ```bash
  mkdir config
  ```

- `dev.env`: Development environment for all scripts
- `test.env`: Test environment for testing scripts

You can use the `example.env` file as a template.

PORT - Integer: Port for running server

PRISMA_ENDPOINT - String: URL for postgresql for prisma

PRISMA_SECRET - String: Secret key for prisma

JWT_SECRET - String: JWT secret key

## Running the Application

To run the application, use the following commands:

  ```bash
  npm start
  ```

Once the application is running, you can access it via `http://localhost:4000/`.