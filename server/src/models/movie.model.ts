import { Document, Schema, model } from "mongoose";

export interface IMovieDocument extends Document {
    name: string,
    year: string,
    cover_img: string,
    score: number,
    genres: string[],
    createdAt: Date,
    updatedAt: Date
}

// enum Genres {
//     HORROR = "Horror",
//     ACTION = "Action"
// }

const MovieSchema = new Schema<IMovieDocument>({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    year: {
        type: String,
        required: [true, "Year is required"]
    },
    cover_img: String,
    score: {
        type: Number,
        required: [true, "Score is required"]
    },
    genres: {
        type: [String],
        required: true
    }
}, { timestamps: true, versionKey: false })


export const MovieModel = model<IMovieDocument>("Movies", MovieSchema)