import express, { Application } from 'express';

import bodyParser from "body-parser";
import { Routes } from "./routes";
import cors from 'cors';

class App {

    public app: Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }

    private config(): void {
        this.app.use(cors())
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;