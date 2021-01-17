import ApiRoute from "../apiRoute";
import Database from "../../database";

export default class PeopleRoute extends ApiRoute {
    constructor(db: Database) {
        super(db);
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.exampleRoute();
    }

    private exampleRoute(): void {
        this.router.get("/1", (req, res) => {
            res.send("GET TEST");
        });

        this.router.post("/1", (req, res) => {
            res.send("POST TEST");
        });
    }
}
