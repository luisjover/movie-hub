

import "./item.css"
import { FC, useEffect, useState } from "react";

type Movie = {
    id: number,
    title: string,
    year: number,
    score: number,
    genre: string,
    imageUrl: string
}


export const Item: FC<Movie> = ({ ...props }) => {


    return (
        <>
            <div className="trend-item-card">
                <img className="trend-item-card-img" src={props.imageUrl} alt={`Cover Image of ${props.title}`} />

                <div className="trend-item-info">
                    <p className="item-info item-info-title">{props.title}</p>

                    <p className="item-info item-info-year">{props.year}</p>

                    <p className="item-info item-info-genre">{props.genre}</p>

                    <p className="item-info item-info-score">{props.score}</p>
                </div>
            </div>
        </>
    )
}