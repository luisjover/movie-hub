import { NextFunction, Request, Response } from "express";


export const checkMovieValidity = (req: Request, res: Response, next: NextFunction) => {

    const { name, year, score } = req.body;

    if (name.length < 5) {
        res.status(400).send({ error: "Name must be at least 5 charcters long" });
        return;
    }

    if (year > 2023 || year < 1895) {
        res.status(400).send({ error: "Year used is not valid" });
        return;
    }

    if (score < 0 || score > 10) {
        res.status(400).send({ error: "Score should be a number between 0 and 10" });
        return;
    }

    next();
}