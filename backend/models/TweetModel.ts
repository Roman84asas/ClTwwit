import {model, Schema, Document} from "mongoose";

export interface TweetModelInterface {
    _id?: string,
    text: string,
    user: string,
}

export type TweetModelDocumentInterface = TweetModelInterface & Document;

const TweetSchema = new Schema<TweetModelDocumentInterface>({
    text: {
        required:true,
        type: String,
    },
    user: {
        required:true,
        type: String,
    },
});

export const TweetModel = model<TweetModelDocumentInterface>('Tweet', TweetSchema);