import axios from 'axios';
import Cookies from 'js-cookie';
//axios.defaults.baseURL = 'http://10.19.247.182:3001';
axios.defaults.baseURL = 'http://localhost:8080';

export default {
    login(data) {
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
        return axios.get(`/product/${data}`)
    },

    getCart() {
        console.log(Cookies.get('token'));
        
        return axios.get('/cart', {
            headers: {
                'X-AUTH-TOKEN' : Cookies.get('token')
            },
        })
    },

    addCart(data) {
        return axios.post(`/cart/${data}`, {
            productId: data,
            productOptionId: 1,
            quantity: 1
        });
    },

    deleteCart(data) {
        return axios.post('/cart', {
            productId: data,
        });
    },

    getOrder(data) {
        return axios.post('/order', {
            usn: data
        });
    },

};