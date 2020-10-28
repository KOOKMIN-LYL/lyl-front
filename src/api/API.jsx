import axios from 'axios';

//axios.defaults.baseURL = 'http://10.19.247.182:3001';
axios.defaults.baseURL = 'http://localhost:8080';

export default {

    login(data) {
        console.log(data);
        return axios.post('/login', data);
    },

    getCategory() {
        return axios.get('/category');
    },

    getCategoryItems(id, page, size) {
        return axios.get(`/category/${id}?page=${page}&size=${size}`);
    },

    getMainImage() {
        return axios.get('/mainimage');
    },

    getProduct(data) {
        return axios.get(`/product${data}`)
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