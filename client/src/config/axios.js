import Axios from 'axios'

const axios = Axios.create({
    baseURL: '/https://ticket-master-app-aman.herokuapp.com/'
})

export default axios