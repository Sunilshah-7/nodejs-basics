# Node.js Learning Projects

This repository contains a collection of Node.js projects designed to demonstrate various concepts and technologies, from basic asynchronous programming to full-featured web applications.

## Project Structure

```
nodejs/
├── node_express/          # Basic Express.js server
├── node_mysql/            # Express with MySQL database
├── node_project/          # Full-featured Express app with CouchDB
├── task-manager/          # REST API for task management
├── blocking.js            # Synchronous file I/O example
├── non-blocking.js        # Asynchronous file I/O example
└── first_example.js       # Simple "Hello World" example
```

## Projects

### 1. Basic Examples (Root Level)

Simple JavaScript files demonstrating core Node.js concepts:

- **first_example.js** - Basic console output
- **blocking.js** - Demonstrates synchronous (blocking) file I/O
- **non-blocking.js** - Demonstrates asynchronous (non-blocking) file I/O with callbacks

Run these with:
```bash
node first_example.js
node blocking.js
node non-blocking.js
```

### 2. node_express/

A minimal Express.js server demonstrating:
- Basic routing
- Body parsing middleware
- HTTP request handling

**Dependencies:** express, body-parser

### 3. node_mysql/

Express application with MySQL database integration:
- RESTful API endpoints
- Handlebars templating engine
- Database CRUD operations
- Development auto-reload with nodemon

**Dependencies:** express, body-parser, express-handlebars, mysql2

### 4. node_project/

A comprehensive Express application featuring:
- Session management
- Pug templating engine (formerly Jade)
- CouchDB integration via nano
- Error handling middleware
- Method override for form submissions
- Comprehensive routing system

**Dependencies:** express, body-parser, express-session, pug, nano, method-override, errorhandler

### 5. task-manager/

A RESTful API for managing tasks:
- CRUD operations for tasks
- JSON file-based data storage
- Clean Express.js architecture

**Dependencies:** express

## Setup

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)
- MySQL (for node_mysql project)
- CouchDB (for node_project project)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nodejs
```

2. Install dependencies for each project:

```bash
# node_express
cd node_express && npm install

# node_mysql
cd ../node_mysql && npm install

# node_project
cd ../node_project && npm install

# task-manager
cd ../task-manager && npm install
```

## Running the Projects

```bash
# Basic examples
node first_example.js
node blocking.js
node non-blocking.js

# node_express
cd node_express && node app.js

# node_mysql
cd node_mysql && node server.js
# Or with nodemon for auto-reload:
nodemon server.js

# node_project
cd node_project && node app.js

# task-manager
cd task-manager && node app.js
```

## Security

All projects have been updated with secure package versions. A `.gitignore` file is included to prevent `node_modules/` directories from being committed to version control.

### Vulnerability Fixes Applied

- **express** updated to ^4.21.2 (fixed XSS and open redirect vulnerabilities)
- **body-parser** updated to ^1.20.3 (fixed DoS vulnerability)
- **express-session** updated to ^1.18.1 (fixed cookie vulnerability)
- **jade** replaced with **pug** (jade is deprecated with critical vulnerabilities)
- **mysql** replaced with **mysql2** (modern, maintained MySQL client)
- **nano** updated to ^11.0.5 (fixed prototype pollution)
- Removed deprecated packages (json, logger, serve-favicon, url)

## Learning Path

This repository is organized to help you learn Node.js progressively:

1. Start with the **basic examples** to understand blocking vs non-blocking I/O
2. Move to **node_express** to learn web server basics
3. Explore **task-manager** for REST API patterns
4. Study **node_mysql** for database integration
5. Examine **node_project** for a full-featured application architecture

## License

ISC
