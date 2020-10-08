import { Model, Optional, DataTypes, Sequelize } from "sequelize";
import { database } from './index';
import { Travel } from "./travel";

interface IModeTransport {
    id?: number,
    name: string,
    emission: number,
}




export class Transport extends Model<IModeTransport, IModeTransport> implements IModeTransport {
    public readonly id!: number;
    public name!: string;
    public emission!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;


}

console.log('Iniciando Model Transport');

Transport.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    emission: DataTypes.DOUBLE,

}, { tableName: 'transportations', sequelize: database, });


Transport.sync({ force: true }).then(() => {
    console.log('transportations synced');
    Transport.hasMany(Travel, { foreignKey: 'transportId' });

    Transport.create({ id: 1, name: 'Metro', emission: 0.0033 });
    Transport.create({ id: 2, name: 'Auto', emission: 0.2 });
    Transport.create({ id: 3, name: 'Camioneta', emission: 0.29 });
    Transport.create({ id: 4, name: 'Motocicleta', emission: 0.02 });
    Transport.create({ id: 5, name: 'Bus (Transantiago)', emission: 0.09 });
    Transport.create({ id: 6, name: 'Bus', emission: 0.02 });
    Transport.create({ id: 7, name: 'Avión (Chile)', emission: 0.29 });
    Transport.create({ id: 8, name: 'Avión (Internacional)', emission: 0.19 });
    Transport.create({ id: 9, name: 'Caminando', emission: 0 });

});

