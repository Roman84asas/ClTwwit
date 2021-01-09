import {model, Schema, Document} from "mongoose";

export interface UserModelInterface {
    email: string,
    fullname: string,
    username: string,
    password: string,
    confirmed?: boolean,
    confirmHash: string,
    location?: string,
    about?: string,
    website?: string
}

type UserModelDocumentInterface = UserModelInterface & Document;

const UserSchema = new Schema<UserModelDocumentInterface>({
    email: {
        unique:true,
        required:true,
        type: String,
    },
    fullname: {
        required:true,
        type: String,
    },
    username: {
        unique:true,
        required:true,
        type: String,
    },
    password: {
        required:true,
        type: String,
    },
    confirmed: {
        type: Boolean,
        default: false,
    },
    confirmHash: {
        required:true,
        type: String,
    },
    location: {
        type: String,
    },
    about: {
        type: String,
    },
    website: {
        type: String,
    }
});

export const UserModel = model<UserModelDocumentInterface>('User', UserSchema);