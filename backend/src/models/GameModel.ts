import { Schema, model } from "mongoose";


export interface Game {
    address: string;
    name: string;
    phoneNumber: number;
    numOfPeople: number;
    date: Date;
    time:string;
    fieldNumer:number;
}
/* "date": "2023-10-17T00:00:00.000Z"*/

const GameSchema = new Schema<Game>({
    address: {type:String, required: true},
    name: {type:String, required: true},
    phoneNumber: {type: Number, required: true},
    numOfPeople: {type:Number, required: true},
    date: {type:Date, required: true},
    time: {type:String},
    fieldNumer: {type:Number, required: true}
})

export default  model<Game>('Game', GameSchema);