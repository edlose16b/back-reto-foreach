import { Application } from "express";
import TransportController from "../controllers/transport.controller";

import TravelController from "./../controllers/travel.controller";



export class Routes {

    travelController: TravelController = new TravelController();
    transportController: TransportController = new TransportController();

    public routes(app: Application) {
        app.get('/', (_, res) => res.send('Hola .forEach'));
        app.get(`/api/travels`, this.travelController.index);
        app.post(`/api/travels`, this.travelController.store);
        app.get(`/api/transportations`, this.transportController.index);

    }
}