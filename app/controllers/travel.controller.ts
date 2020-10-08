import { Request, Response } from "express";
import { ITravel, Travel } from "../models/travel";
import { Transport } from '../models/transport';
import { Op } from "sequelize";
import { values } from "sequelize/types/lib/operators";
import { calculatekgO2EmissionPerPerson } from "../utils";
import { json } from "body-parser";

export default class TravelController {

    /**
     * Return all travel registers
     * @param req 
     * @param res 
     */
    public async index(req: Request, res: Response) {

        let total = await Travel.findAll();

        res.send(total);
    }

    public async store(req: Request, res: Response) {

        let { startingPoint, arrivalPoint, transportId, kilometersTraveled, passengers, roundTrip } = req.body;

        let transport = await Transport.findByPk(transportId);

        if (transport == null) return res.status(404).json();

        let totalPassengers = (passengers as String).split(',').length;

        let KgCoPerPerson = calculatekgO2EmissionPerPerson(transport.emission, totalPassengers, kilometersTraveled, roundTrip);


        let data: ITravel = {
            startingPoint,
            arrivalPoint,
            kilometersTraveled,
            transportId,
            passengers: totalPassengers,
            roundTrip,
            KgCoPerPerson,
        };


        let travel = await Travel.create(data);

        return res.json({ ...travel.toJSON(), transport: transport.name });
    }



}
