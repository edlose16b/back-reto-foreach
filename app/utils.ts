import { parse } from "path";


export class Emision {
    static Metro = 0.0033;
    static Auto = 0.21;
    static Camioneta = 0.249;
    static Motocicleta = 0.092;
    static BusTransantiago = 0.039;
    static Bus = 0.012;
    static AvionChile = 0.279;
    static AviónInternacional = 0.179;
    static Caminando = 0;
}

export const calculatekgO2EmissionPerPerson = (transportCo2: number, parsengers: number, kilometersTraveled: number, roundTrip: boolean) => {


    let total = transportCo2 * kilometersTraveled * (roundTrip ? 2 : 1) / parsengers;

    console.log('calculatekgO2EmissionPerPerson ES ', total);
    return total;
}

function _getEmissionPerModeTransport(mode: String) {



}