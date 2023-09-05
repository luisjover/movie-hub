import dotenv from "dotenv"

type TConfig = {
    [key: string]: EnviromentConfig;
}

type EnviromentConfig = {
    app: AppConfig,
    auth0: Auth0Config,
    cloudinary: CloudinaryConfig
}

type AppConfig = {
    PORT: string | number;
}

type Auth0Config = {
    client_origin: string,
    audience: string,
    issuer: string;
}

type CloudinaryConfig = {
    cloudName: string,
    apiKey: string,
    apiSecret: string
}


if (process.env.NODE_ENV === "production") {
    dotenv.config({ path: ".env.production" })
} else {
    dotenv.config({ path: ".env.development" })
}

const ENV = process.env.NODE_ENV ?? "development";

const CONFIG: TConfig = {
    development: {
        app: {
            PORT: process.env.PORT || 8080
        },
        auth0: {
            client_origin: process.env.APP_ORIGIN || "",
            audience: process.env.AUTH0_AUDIENCE || "",
            issuer: process.env.AUTH0_ISSUER || ""
        },
        cloudinary: {
            cloudName: process.env.CLOUD_NAME || "",
            apiKey: process.env.CLOUD_API_KEY || "",
            apiSecret: process.env.CLOUD_API_SECRET || ""
        }
    },
    production: {
        app: {
            PORT: process.env.PORT || 8080
        },
        auth0: {
            client_origin: process.env.APP_ORIGIN || "",
            audience: process.env.AUTH0_AUDIENCE || "",
            issuer: process.env.AUTH0_ISSUER || ""
        },
        cloudinary: {
            cloudName: process.env.CLOUD_NAME || "",
            apiKey: process.env.CLOUD_API_KEY || "",
            apiSecret: process.env.CLOUD_API_SECRET || ""
        }
    }
}

export default CONFIG[ENV]