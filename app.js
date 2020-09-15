const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// console.log(argv.direccion);

// lugar.getLugarLatLng(argv.direccion)
//     .then(result => {
//         console.log(result);

//     });

// clima.getClima(40.750000, -74.00000)
//     .then(console.log)
//     .catch(console.log);


// clima.getClima(40.750000, -74.00000).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });


const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const tempLugar = await clima.getClima(coords.lat, coords.lon);
        return `El clima de ${direccion} es de ${tempLugar}°C`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);