import { Sequelize } from "sequelize";
import databaseConfig from './../config/database.config';

console.log('Iniciando Sequelize');

export const database = new Sequelize({
    database: databaseConfig.DB,
    username: databaseConfig.USER,
    password: databaseConfig.PASSWORD,
    dialect: "mysql",
});



