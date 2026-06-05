# task-manager-front

🇺🇸 English | 🇧🇷 [Português](README.md)

> A minimalist React UI for a task manager, wired to a REST API.

## Overview

Frontend for a **task manager** that consumes a REST API (at `http://localhost:3002`) for CRUD operations. Uses the native Fetch API, with no request libraries.

## Features

- List tasks (GET `/tarefas`)
- Create task (POST `/tarefas`)
- Toggle done/pending (PUT `/tarefas/:id`, `feito` flag)
- Inline task name editing (save/cancel)
- Delete task (DELETE `/tarefas/:id`)

## Stack

React 18 · native Fetch API · Create React App.

## Running

```bash
npm install
npm start          # http://localhost:3000
```

> Requires the API backend running at `http://localhost:3002`.

## Project status

Functional. Clean code with logic (`App.js`) separated from presentation (`components/task.js`).

## License

This project does not yet declare a license. Until one is added, all rights are reserved by the author.
