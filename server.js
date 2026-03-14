const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Variable to store the user's name
let userName = '';

// Serve static files (HTML form)
app.use(express.static('public'));

// POST endpoint to accept user's name
app.post('/submit-name', (req, res) => {
  // Get the name from the request body
  userName = req.body.name;
  
  console.log(`Name received: ${userName}`);
  
  // Redirect to the GET endpoint to display the name
  res.redirect('/display-name');
});

// GET endpoint to display the name
app.get('/display-name', (req, res) => {
  if (userName) {
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>User Name Display</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          .container {
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            text-align: center;
          }
          h1 {
            color: #667eea;
            margin: 0 0 20px 0;
          }
          .name {
            font-size: 32px;
            color: #764ba2;
            font-weight: bold;
            margin: 20px 0;
          }
          a {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background: #667eea;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: background 0.3s;
          }
          a:hover {
            background: #764ba2;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome!</h1>
          <p>Your name is:</p>
          <div class="name">${userName}</div>
          <a href="/">Enter another name</a>
        </div>
      </body>
      </html>
    `);
  } else {
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Error</title>
      </head>
      <body>
        <h1>No name provided</h1>
        <p><a href="/">Go back</a></p>
      </body>
      </html>
    `);
  }
});

// GET endpoint to serve the home page (form)
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Enter Your Name</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .container {
          background: white;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          text-align: center;
        }
        h1 {
          color: #667eea;
          margin: 0 0 30px 0;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        input[type="text"] {
          padding: 12px;
          border: 2px solid #667eea;
          border-radius: 5px;
          font-size: 16px;
          transition: border-color 0.3s;
        }
        input[type="text"]:focus {
          outline: none;
          border-color: #764ba2;
        }
        button {
          padding: 12px;
          background: #667eea;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s;
        }
        button:hover {
          background: #764ba2;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Enter Your Name</h1>
        <form method="POST" action="/submit-name">
          <input 
            type="text" 
            name="name" 
            placeholder="Enter your name" 
            required
          >
          <button type="submit">Submit</button>
        </form>
      </div>
    </body>
    </html>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
