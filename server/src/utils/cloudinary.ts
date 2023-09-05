import { v2 as cloudinary } from "cloudinary";
import config from "../config/config";

cloudinary.config({
    cloud_name: config.cloudinary.cloudName,
    api_key: config.cloudinary.apiKey,
    api_secret: config.cloudinary.apiSecret,
    secure: true
});


export const uploadImageToCloudinary = async (filePath: string) => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'movies_covers'
    });

}
