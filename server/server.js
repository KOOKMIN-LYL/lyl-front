const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/category', (req, res) => {
    res.json({
        category: [
            {
                categoryId: 1,
                categoryName: 'shirt'
            },
            {
                categoryId: 2,
                categoryName: 'pants'
            },
            {
                categoryId: 3,
                categoryName: 'jaket'
            }
        ]
    });
});

app.listen(port, () => {
    console.log(`express is running on ${port}`);
});