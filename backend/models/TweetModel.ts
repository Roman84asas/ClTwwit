import {model, Schema, Document} from "mongoose";

export interface TweetModelInterface {
    _id?: string,
    text: string,
    user: string | undefined,
}

export type TweetModelDocumentInterface = TweetModelInterface & Document;

const TweetSchema = new Schema<TweetModelDocumentInterface>({
    text: {
        required:true,
        type: String,
        maxlength: 280,
    },
    user: {
        required:true,
        ref: 'User',
        type: Schema.Types.ObjectId,
    },
});

export const TweetModel = model<TweetModelDocumentInterface>('Tweet', TweetSchema);