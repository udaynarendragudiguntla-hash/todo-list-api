# ToDo List API

A simple backend REST API built with Node.js and Express.js for managing tasks. Task data is stored in a local `tasks.json` file instead of a database.

---

## Features

- Create Task
- Get All Tasks
- Update Task
- Delete Task
- Filter Tasks by Status
- File-based Storage using `tasks.json`

---

## Tech Stack

- Node.js
- Express.js
- File System (`fs`)

---

## Project Structure

```bash
project-folder/
│
├── controllers/
│   └── taskController.js
│
├── routes/
│   └── taskRoutes.js
│
├── data/
│   └── tasks.json
│
├── server.js
├── package.json
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/udaynarendragudiguntla-hash/todo-list-api.git
```

Move into the project folder:

```bash
cd todo-list-api
```

Install dependencies:

```bash
npm install
```

---

## Required Packages

```bash
npm install express
```

---

## Run the Server

```bash
node server.js
```

or

```bash
npx nodemon server.js
```

Server runs on:

```bash
http://localhost:5000
```

---

## API Endpoints

### Create Task

**POST** `/tasks`

```json
{
  "title": "Learn Node.js",
  "status": "pending"
}
```

### Process

1. Reads tasks from `tasks.json`
2. Creates new task
3. Stores task in `tasks.json`

---

### Get All Tasks

**GET** `/tasks`

### Example

```bash
http://localhost:5000/tasks
```

### Process

1. Reads all tasks from `tasks.json`
2. Sends all tasks as response

### Response

```json
[
  {
    "id": 1,
    "title": "Learn Node.js",
    "status": "pending"
  }
]
```

---

### Filter Tasks by Status

**GET** `/tasks?status=completed`

### Example

```bash
http://localhost:5000/tasks?status=completed
```

### Process

1. Reads tasks from `tasks.json`
2. Filters tasks based on status
3. Returns filtered tasks

### Response

```json
[
  {
    "id": 2,
    "title": "Build Todo API",
    "status": "completed"
  }
]
```

---

### Update Task

**PUT** `/tasks/:id`

### Example

```bash
http://localhost:5000/tasks/1
```

```json
{
  "title": "Learn Express.js",
  "status": "completed"
}
```

### Process

1. Finds task using ID
2. Updates task data
3. Saves updated data in `tasks.json`

### Response

```json
{
  "message": "Task updated successfully"
}
```

---

### Delete Task

**DELETE** `/tasks/:id`

### Example

```bash
http://localhost:5000/tasks/1
```

### Process

1. Finds task using ID
2. Removes task from array
3. Saves updated tasks in `tasks.json`

### Response

```json
{
  "message": "Task deleted successfully"
}
```

---

## Example tasks.json

```json
[
  {
    "id": 1,
    "title": "Learn Node.js",
    "status": "pending"
  },
  {
    "id": 2,
    "title": "Build Todo API",
    "status": "completed"
  }
]
```

---

## HTTP Methods Used

| Method | Purpose |
|--------|----------|
| GET | Fetch Tasks |
| POST | Create Task |
| PUT | Update Task |
| DELETE | Delete Task |

---

## Example Status Values

```text
pending
completed
```

---

## Future Improvements

- MongoDB Integration
- JWT Authentication
- User Accounts
- Search Tasks
- Pagination
- Due Dates
- Priority Levels

---

## Learning Goals

This project helps beginners understand:

- REST API Basics
- CRUD Operations
- Express.js Routing
- File Handling in Node.js
- JSON Data Storage
- Query Parameters
- Backend Project Structure

---

## Author

Developed by Uday Narendra
