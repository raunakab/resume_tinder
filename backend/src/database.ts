import logger from "./config/logger";
import firebase from "firebase";

export default class Database {
    public client: firebase.database.Database;
    private config = {
        apiKey: "apiKey",
        authDomain: "projectId.firebaseapp.com",
        databaseURL: "https://databaseName.firebaseio.com",
        storageBucket: "bucket.appspot.com"
    };

    constructor() {
        logger.info("Connecting to database...");
        firebase.initializeApp(this.config);
        this.client = firebase.database();
    }
}
