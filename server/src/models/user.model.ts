import { Document, Schema, model } from "mongoose";

export interface IUserDocument extends Document {
    name: string,
    email: string,
    password: string,
    movies?: string[],
    createdAt: Date,
    updatedAt: Date
}

const UserSchema = new Schema<IUserDocument>({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    movies: {
        type: [{ type: Schema.Types.ObjectId, ref: "Movies" }]
    }
}, { timestamps: true, versionKey: false })


export const UserModel = model<IUserDocument>("Users", UserSchema)