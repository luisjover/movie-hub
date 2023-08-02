import dotenv from "dotenv"

type TConfig = {
    [key: string]: EnviromentConfig;
}

type EnviromentConfig = {
    app: AppConfig,
    DB: DBConfig;
}

type AppConfig = {
    PORT: string | number;
}

type DBConfig = {
    URI: string,
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
            PORT: process.env.PORT || 8081
        },
        DB: {
            URI: process.env.MONGODB_URI || "mongodb://localhost/movie_hub",
        }
    },
    production: {
        app: {
            PORT: process.env.PORT || 8082
        },
        DB: {
            URI: process.env.MONGODB_URI || "mongodb://localhost:27017/movie_hub",
        }
    }
}

export default CONFIG[ENV]