import axios from 'axios';
import qs from 'qs';

class VehicleService {
    postVehicle = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('vehicle', qs.stringify(data))
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }

    fetchVehicle = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('vehicle')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
}

export default new VehicleService();