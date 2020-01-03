import axios from 'axios'
import qs from 'qs'
import Vue from 'vue';
import router from './router/index'
const http = axios.create({
    baseURL: "http://10.1.53.138:8087/",
    transformRequest: function (data) {
        return qs.stringify(data)
    }
})

http.interceptors.request.use(function (config) {
    // Do something before request is sent
    if (localStorage.token) {
        config.headers.Authorization = 'Bearer ' + (localStorage.token || ' ')
    }
    return config
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

http.interceptors.response.use(res => {
    return res
}, err => {
    if (err.response.data.message) {
        console.log(err);
        if (err.response.status === 401) {
            Vue.prototype.$message.error({ type: 'warning', message: '请登录' })
            localStorage.clear()
            router.push('/')
        }
        if (err.response.status === 403) {
            // localStorage.clear()
            router.push('/')
        }
    }
    return Promise.reject(err)
})



export default http
