# Building a Books API with NestJS

This project focuses on creating a RESTful API for managing a collection of books using NestJS, a powerful Node.js framework.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone this repository.
2. Run `npm install` to install dependencies.

### Running the Application

Start the server:
```npm run start```

The server runs at `http://localhost:3000` by default.

## API Endpoints

### Books

#### Get All Books

```GET /book```
Retrieve a list of all books.

```GET /book/featured```
Retrieve a featured books.

#### Get a Specific Book
```GET /book/:id```
Retrieve details of a specific book by its ID.

#### Add a Book
```POST /book/new```

## Technologies Used

- NestJS
- TypeORM (soon)

### Note
More features will be added soon including database and other routes, and yeah Athentication/Authrization too