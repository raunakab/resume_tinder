import express, { Router } from "express";
import Database from "../database";
import PeopleRoute from "./people/peopleRoute";

export default class MainRouter {
    public router: Router;
    private peopleRoute: PeopleRoute;

    constructor(db: Database) {
        this.router = express.Router();
        this.peopleRoute = new PeopleRoute(db);
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.use("/people", this.peopleRoute.router);
    }
}
