import logger from "./config/logger";
import firebase from "firebase";

export default class Database {
    public client: firebase.database.Database;
    private config = {
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        databaseURL: process.env.databaseURL,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId,
        measurementId: process.env.measurementId
    };

    constructor() {
        logger.info("Connecting to database...");
        firebase.initializeApp(this.config);
        this.client = firebase.database();
    }
}
