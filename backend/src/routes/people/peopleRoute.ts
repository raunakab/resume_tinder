import ApiRoute from "../apiRoute";
import Database from "../../database";
import Users from "../../model/users";

export default class PeopleRoute extends ApiRoute {
    constructor(db: Database) {
        super(db);
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.exampleRoute();
    }

    private exampleRoute(): void {
        this.router.get("/1", async (req, res) => {
            const users = new Users(this.db);
            const snapshot = await users.getSingleUserDataSnapshot("123");
            res.send( snapshot.toJSON());
        });

        this.router.post("/1", (req, res) => {
            res.send("POST TEST");
        });
    }
}
