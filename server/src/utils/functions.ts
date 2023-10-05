

export const adaptIdToDB = (id: string) => {

    if (process.env.DATA_SOURCE === "mongo") return id;
    else return parseInt(id);
}