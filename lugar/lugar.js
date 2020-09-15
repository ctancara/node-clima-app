const axios = require('axios');

// console.log(argv.direccion);

const getLugarLatLng = async(direccion) => {

    // const encodeUrl = encodeURI(argv.direccion);
    // console.log(encodeUrl);
    const instance = axios.create({
        // baseURL: 'https://api.openweathermap.org/data/2.5/weather?q=Chicago,us&APPID=b08c5c31c839b18afea3996523ba2e11',
        baseURL: 'https://api.openweathermap.org/data/2.5/weather',
        params: {
            // q: 'New York',
            q: direccion,
            APPID: 'b08c5c31c839b18afea3996523ba2e11'
        }
        // headers: {}
    });

    const resp = await instance.get().catch((err) => {
        // console.log('CODE:', err);
        if (err.response.status === 404) {
            throw new Error(`No hay resultados para ${direccion}`);
            return;
        }
    });;

    const data = resp.data;
    const name = data.name;
    const country = data.sys.country;
    const lat = data.coord.lat;
    const lon = data.coord.lon;

    return {
        name,
        country,
        lat,
        lon
    }

    // instance.get()
    //     .then(result => {
    //         console.log(result.data);
    //     }).catch(err => {
    //         console.log('Error: ', err);
    //     });

}


module.exports = {
    getLugarLatLng
}