# inclass-Node

A simple Node.js application that handles user name submission via POST request and displays the name via GET request with a web interface.

## Features

- **POST Endpoint** (`/submit-name`) - Accept user's name from a form submission
- **GET Endpoint** (`/display-name`) - Display the submitted name on a styled page
- **Home Page** (`/`) - Form to enter user's name
- **Persistent Storage** - Name is stored in a variable during the server session
- **Responsive UI** - Beautiful gradient design with hover effects

## Prerequisites

- Node.js (v14 or higher)
- npm

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Hiran-Abhisheka/inclass-Node.git
cd inclass-Node
```

2. Install dependencies:

```bash
npm install
```

## Usage

1. Start the server:

```bash
npm start
```

2. Open your browser and navigate to:

```
http://localhost:3000
```

3. Enter your name in the form and submit
4. You'll be redirected to see your name displayed

## API Endpoints

### GET `/`

- Home page with form to enter name
- Returns: HTML form

### POST `/submit-name`

- Accept user's name from form submission
- Body: `{ name: "John" }`
- Redirects to: `/display-name`

### GET `/display-name`

- Display the submitted name
- Returns: HTML page with the stored name
- Link to return to home page

## Files

- `server.js` - Main server file with all endpoints
- `package.json` - Project dependencies and scripts
- `.gitignore` - Git ignore rules for Node.js projects
- `README.md` - This file

## Technologies Used

- Express.js
- body-parser
- Node.js

