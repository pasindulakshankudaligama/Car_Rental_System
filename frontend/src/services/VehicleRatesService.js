import axios from '../axios';
import qs from 'qs';

class VehicleRatesService {
    postVehicleRate = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('rates', qs.stringify(data))
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }

    fetchVehicleRate = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('rates')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
    deleteVehicleRates = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('rates', {params:params})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
    updateVehicleRates = async (data) =>{
        const promise = new Promise((resolve, reject) => {
            axios.put('rates',data)
                .then((res)=>{
                    return resolve(res)
                }).catch((err)=>{
                return resolve(err)
            })
        });
        return await promise;
    }
}
export default new VehicleRatesService();