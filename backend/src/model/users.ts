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

    private async getAllSeenPeople(userId: string) {
        return await this.db.client.ref('users/' + userId).once('value')
            .then((snapshot) => snapshot.val().seenPeople)
            .catch((error) => {
                logger.error("somethign went wrong with getting all seen people");
                throw new Error("somethign went wrong with getting all seen people");
            });
    }

    private async getAllLikedPeople(userId: string): Promise<string[]> {
        return await this.db.client.ref('users/' + userId).once('value')
        .then((snapshot) => snapshot.val().likedPeoeple)
        .catch((error) => {
            logger.error('something went wrong with getting all liked people');
            throw new Error('something went wrong with getting all liked people');
        });
    }

    private async getAllPeople(): Promise<string[]> {
        return await this.db.client.ref('users/').once('value')
        .then((snapshot) => {
            const result: string[] = [];
            Object.keys(snapshot.val()).forEach((item: string): void => {
                result.push(item);
            });

            return result;
        });
    }

    private setSubtractionChronological(sList: string[], lList: string[]) {
        let si: number = 0;
        let li: number = 0;
        const sLength: number = sList.length;
        const result: string[] = [];

        let thisS: string;
        let thisL: string;

        for (; si < sLength; si++) {
            thisS = sList[si];
            thisL = lList[li];
            if (thisS === thisL) li++;
            else result.push(thisL);
        }

        return result;
    }

    private setSubtraction(listA: string[], listB: string[]): string[] {
        const notSeen: string[] = [];

        for (let a = 0; a<listA.length; a++) {
            let seen: boolean = false;
            for (let b = 0; b<listB.length; b++) {
                if (listA[a] === listB[b]) {
                    seen = true;
                    break;
                }
            }

            if (!seen) notSeen.push(listA[a]);
        }

        return notSeen;
    }

    public async returnNotSeenPersonList(userId: string) {
        const allSeenPeople: string[] = await this.getAllSeenPeople(userId);
        const allPeople: string[] = await this.getAllPeople();
        
        return this.setSubtraction(allPeople, allSeenPeople);
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
