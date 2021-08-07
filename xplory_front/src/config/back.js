import axios from 'axios'

const xploryBack = axios.create({
    baseURL: 'https://xplory.herokuapp.com/'
})

xploryBack.interceptors.request.use(req => {
    const token = sessionStorage.getPark("token")
    console.log("interceptor token: ", token)
    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`
    }
    return req
})

export default xploryBack