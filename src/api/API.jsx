import axios from 'axios';

//axios.defaults.baseURL = 'http://10.19.247.182:3001';
axios.defaults.baseURL = 'http://localhost:3001';

export default {

    getCategory() {
        return axios.get('/category');
    },

    getMainImage() {
        return axios.get('/mainimage');
    },

    getProduct(data) {
        return axios.post('/product', {
            productId : data,
        });
    },

    getCart(data) {
        return axios.post('/cart', {
            usn: data
        });
    },

    addCart(data) {
        return axios.post('/addcart', {
            productId : data,
        });
    },

    deleteCart(data) {
        return axios.post('/cart', {
            productId : data,
        });
    },

    getOrder(data) {
        return axios.post('/order', {
            usn: data
        });
    },

};