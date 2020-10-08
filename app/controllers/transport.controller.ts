import { Request, Response } from "express";
import { Transport } from "../models/transport";

export default class TransportController {


    public async index(req: Request, res: Response) {
        let transports = await Transport.findAll();

        res.json(transports);
    }
}