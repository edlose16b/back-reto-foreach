import { Model, DataTypes } from "sequelize";
import { database } from './index';
import { Transport } from "./transport";


// Dirección del punto de partida
// Dirección del punto de termino
// Medio de transporte.
// cantidad de kilómetros.
// Nombre de trabajadores en el viaje.
// ¿Es ida y vuelta o solo un viaje?

export interface ITravel {
    id?: number,
    startingPoint: String,
    arrivalPoint: String,
    transportId: number,
    kilometersTraveled: number,
    passengers: number,
    roundTrip: boolean,
    KgCoPerPerson: number,
}




export class Travel extends Model<ITravel, ITravel> implements ITravel {
    public readonly id!: number;
    public startingPoint!: String;
    public arrivalPoint!: String;
    public kilometersTraveled!: number;
    public transportId!: number;
    public passengers!: number;
    public roundTrip!: boolean;
    public KgCoPerPerson!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;


}

console.log('Iniciando Model Travel');

Travel.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    startingPoint: DataTypes.STRING,
    arrivalPoint: DataTypes.STRING,
    kilometersTraveled: DataTypes.DOUBLE,
    transportId: {
        type: DataTypes.INTEGER,

    },
    passengers: DataTypes.INTEGER,
    roundTrip: DataTypes.BOOLEAN,
    KgCoPerPerson: DataTypes.DOUBLE,

}, { tableName: 'travel', sequelize: database, });

Travel.sync({ force: false }).then(() => {
    Travel.belongsTo(Transport, { as: 'transport' });

    console.log('travel synced');
});

