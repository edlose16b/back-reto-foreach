
import assert from 'assert';
import { calculatekgO2EmissionPerPerson } from './../app/utils';


// Transport.create({ id: 1, name: 'Metro (Tren, Subway, Subterráneo)', emission: 0.033 });
// Transport.create({ id: 2, name: 'Auto (Gasolina) ', emission: 0.21 });
// Transport.create({ id: 3, name: 'Camioneta (Diésel) ', emission: 0.249 });
// Transport.create({ id: 4, name: 'Motocicleta (Gasolina)', emission: 0.092 });
// Transport.create({ id: 5, name: 'Bus Transantiago (Transporte público) ', emission: 0.039 });
// Transport.create({ id: 6, name: 'Bus (Vehículo privado)', emission: 0.012 });
// Transport.create({ id: 7, name: 'Avión (Chile)', emission: 0.279 });
// Transport.create({ id: 8, name: 'Avión (Internacional)', emission: 0.179 });
// Transport.create({ id: 9, name: 'Caminando', emission: 0 });

describe('test calculate kgO2Emission per person', function () {
    it('should return 0.33 when usas Metro con 2 trabajadores recorriendo 10 km en un viaje de ida y vuelta', function () {
        assert.strictEqual(calculatekgO2EmissionPerPerson(0.033, 2, 10, true), 0.33);
    });

    it('should return 0.350 when usas Auto (Gasolina) con 6 trabajadores recorriendo 10 km en un viaje de ida', function () {
        assert.strictEqual(calculatekgO2EmissionPerPerson(0.21, 6, 10, false), 0.350);
    });

    it('should return 0.780 when usas Bus Transantiafo con 1 trabajador recorriendo 10 km en un viaje de ida y vuelta', function () {
        assert.strictEqual(calculatekgO2EmissionPerPerson(0.039, 1, 10, true), 0.780);
    });

    it('should return 111.600 when usas Avion (Chile)  con 3 trabajadores recorriendo 600 km en un viaje de ida y vuelta', function () {
        assert.strictEqual(calculatekgO2EmissionPerPerson(0.279, 3, 600, true), 111.600);
    });

    it('should return 0.710 when usas Metro con 2 trabajadores recorriendo 43 km en un viaje de ida', function () {
        assert.strictEqual(calculatekgO2EmissionPerPerson(0.033, 2, 43, false), 0.710);
    });

    it('should return 111.517 when usas Avion (Internacional) con 2 trabajadores recorriendo 623 km en un viaje de ida y vuelta', function () {
        assert.strictEqual(calculatekgO2EmissionPerPerson(0.179, 2, 623, true), 111.517);
    });
});