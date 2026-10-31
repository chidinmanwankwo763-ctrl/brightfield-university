const express = require('express');

const app = express();
const PORT = 3000;

// Allow the server to read JSON data
app.use(express.json());

// Allow the server to read form data
app.use(express.urlencoded({ extended: true }));
// Serve the Brightfield website files
app.use(express.static(__dirname));

// Test route
app.get('/', (req, res) => {
    res.send('Welcome to Brightfield University!');
});

// Receive application submissions
app.post('/apply', (req, res) => {
    console.log('New application received:');
    console.log(req.body);

    res.json({
        success: true,
        message: 'Application submitted successfully!'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Brightfield server is running on port ${PORT}`);
});