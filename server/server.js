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

app.use('/mainimage', (req, res) => {
    res.json({
        products: [
            {
                productId: 1,
                productImage: 'main1'
            },
            {
                productId: 2,
                productImage: 'main2'
            }
        ]
    });
});

app.use('/product', (req, res) => {
    res.json({
        productId: 1,
        productImage: 'aa',
        productName: 'CROWN OF TddHORNS RING',
        productPrice: '199,000 won',
        productOption: [
            '블랙', '화이트', '그레이'
        ]
    });
});

app.listen(port, () => {
    console.log(`express is running on ${port}`);
});