import { parse } from "path";



export const calculatekgO2EmissionPerPerson = (transportCo2: number, parsengers: number, kilometersTraveled: number, roundTrip: boolean) => {


    let total = transportCo2 * kilometersTraveled * (roundTrip ? 2 : 1) / parsengers;

    // console.log('calculatekgO2EmissionPerPerson ES ', total);
    return parseFloat((total).toFixed(3));
}

function _getEmissionPerModeTransport(mode: String) {



}