import Database from "../database";
import { v4 as uuidv4 } from 'uuid';
import firebase from "firebase";
import logger from "../config/logger";

export default class Users {
    protected db: Database;

    constructor(db: Database) {
        this.db = db;
    }

    public listAllUsers() {
        this.db.client.ref('users/')
    }

    // TODO how to handle resume url saving?
    public saveUserData(firstName: string, lastName: string, resumeURL: string) {
        const userID: string = uuidv4();
        this.db.client.ref('users/' + userID).set({
            firstName: firstName,
            lastName: lastName,
            resumeURL: resumeURL
        })
    }

    public async getSingleUserDataSnapshot(userId: string): Promise<firebase.database.DataSnapshot> {
            try {
                const snapshot = await this.db.client.ref('/users/' + userId).get();
                return snapshot
            } catch (e) {
                logger.error("somethign went wrong with getting a single user datasnapshot")
                throw new Error('somethign went wrong with getting a single user datasnapshot');
            }
    }

}
