import axios from '../axios';
import qs from 'qs';

class CustomerService {
    postCustomer = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('customer/upload', qs.stringify(data))
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }

    fetchCustomers = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('customer')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
    deleteCustomers = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('customer',{params:params})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }
    customerCount = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('customer/count')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }
}

export default new CustomerService();