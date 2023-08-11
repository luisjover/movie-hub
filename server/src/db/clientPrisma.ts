import { PrismaClient as MongoClient } from "../../prisma/generated/mongo_client";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres_client";

const DATA_SOURCE = "postgres"

// process.env.DATA_SOURCE;

type ClientType = {
    [key: string]: MongoClient | PostgresClient
};

export const mongoClient = new MongoClient();
export const postgresClient = new PostgresClient();

const clients: ClientType = {
    mongo: mongoClient,
    postgres: postgresClient,
};

export default clients[DATA_SOURCE as keyof ClientType];