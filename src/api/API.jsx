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
        return axios.get('/cart', {
            headers: {
                'X-AUTH-TOKEN' : Cookies.get('token')
            },
        })
    },

    addCart(pId, oId, quantity) {
        return axios.post('/cart/product', 
        {
            productId: pId,
            productOptionId: oId,
            quantity: quantity
        },
        {
            headers: {
                'X-AUTH-TOKEN' : Cookies.get('token')
            },
        });
    },

    deleteCart(data) {
        return axios.delete(`/cart/product/${data}`,
        {
            headers: {
                'X-AUTH-TOKEN' : Cookies.get('token')
            },
        });
    },

    changeQuantity(cartId, pId, oId, quantity) {
        return axios.put(`/cart/order/${cartId}`, 
        {
            productId: pId,
            productOptionId: oId,
            quantity: quantity
        },
        {
            headers: {
                'X-AUTH-TOKEN' : Cookies.get('token')
            },
        });
    },

    buyProduct(pId, oId, quantity) {
        return axios.post('/order/product', 
        {
            productId: pId,
            productOptionId: oId,
            quantity: quantity
        },
        {
            headers: {
                'X-AUTH-TOKEN' : Cookies.get('token')
            },
        });
    },

    buyCart(product) {
        return axios.post('/cart/order', 
        {  
            "orderInfos" : product 
        },
        {
            headers: {
                'X-AUTH-TOKEN' : Cookies.get('token')
            },
        });
    },

    getOrder(data) {
        return axios.get(`/order/${data}`, {
            headers: {
                'X-AUTH-TOKEN' : Cookies.get('token')
            },
        })
    },
};