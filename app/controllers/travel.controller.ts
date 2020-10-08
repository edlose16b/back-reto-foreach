import { Request, Response } from "express";
import { ITravel, Travel } from "../models/travel";
import { Transport } from '../models/transport';
import { calculatekgO2EmissionPerPerson } from "../utils";

export default class TravelController {

    /**
     * Return all travel registers
     * @param req 
     * @param res 
     */
    public async index(req: Request, res: Response) {

        let travels = await Travel.findAll({
            include: [{ model: Transport, as: 'transport', attributes: ['name'] }]
        });

        let data = travels.map((travel: any) => ({ ...travel.toJSON(), transport: travel.transport.name }));


        res.json(data);
    }

    public async store(req: Request, res: Response) {

        console.log('[POST] new Post Request', req.body);
        let { startingPoint, arrivalPoint, transportId, kilometersTraveled, passengers, roundTrip } = req.body;

        let transport = await Transport.findByPk(parseInt(transportId));

        console.log('Transporte revisado ', transport);

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
