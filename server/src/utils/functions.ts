

export const adaptIdToDB = (id: string) => {
    console.log(process.env.DATA_SOURCE)
    if (process.env.DATA_SOURCE === "mongo") return id;
    else return parseInt(id);
}