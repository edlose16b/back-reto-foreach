import { Model, DataTypes } from "sequelize";
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

    Transport.create({ id: 1, name: 'Metro (Tren, Subway, Subterráneo)', emission: 0.033 });
    Transport.create({ id: 2, name: 'Auto (Gasolina) ', emission: 0.21 });
    Transport.create({ id: 3, name: 'Camioneta (Diésel) ', emission: 0.249 });
    Transport.create({ id: 4, name: 'Motocicleta (Gasolina)', emission: 0.092 });
    Transport.create({ id: 5, name: 'Bus Transantiago (Transporte público) ', emission: 0.039 });
    Transport.create({ id: 6, name: 'Bus (Vehículo privado)', emission: 0.012 });
    Transport.create({ id: 7, name: 'Avión (Chile)', emission: 0.279 });
    Transport.create({ id: 8, name: 'Avión (Internacional)', emission: 0.179 });
    Transport.create({ id: 9, name: 'Caminando', emission: 0 });

});

