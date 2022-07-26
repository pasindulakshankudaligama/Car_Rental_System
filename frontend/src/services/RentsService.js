import axios from 'axios';
import qs from 'qs';

class RentsService {
    postRent = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('rent', qs.stringify(data))
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }

    fetchRent = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('rent')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
}

export default new RentsService();