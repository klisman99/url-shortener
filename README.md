# URL Shortener

This is a simple URL shortening service built as a **learning project** to explore web development concepts, Docker containerization, and full-stack application deployment. It consists of a React frontend with TypeScript and a Node.js backend with Express and SQLite. The project is not intended for production use but serves as an educational tool to understand modern development workflows.

## Features
- **Frontend**: A React app with TypeScript for entering URLs and displaying shortened links.
- **Backend**: A Node.js server with Express that generates short IDs and stores URLs in an SQLite database.
- **Redirection**: Clicking a shortened URL redirects to the original URL.
- **Docker**: Both frontend and backend run in Docker containers, orchestrated with Docker Compose.

## Technologies Used
- **Frontend**: React, TypeScript, Axios
- **Backend**: Node.js, Express, SQLite3, Shortid, CORS
- **Containerization**: Docker, Docker Compose

## Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.
- [Node.js](https://nodejs.org/) (optional, for local development outside Docker).
- Basic familiarity with Docker and JavaScript/TypeScript.