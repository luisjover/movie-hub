import { useState, createContext } from "react";



export enum MoviesFilters {
    ALL = "all",
    HORROR = "horror",
    SCIFI = "scifi",
    FANTASY = "fantasy",
    ANIMATION = "animation",
    THRILLER = "thriller",
    ACTION = "action",
    COMEDY = "comedy",
    MISTERY = "mistery",
    ADVENTURE = "adventure",
    CRIME = "crime"
}


export const currentFilterContext = createContext<{ currentFilter: MoviesFilters, changeFilter: (filterParam: MoviesFilters) => void }>({ currentFilter: MoviesFilters.ALL, changeFilter: () => { } })


export function FilterProvider({ ...props }) {

    const [currentFilter, setCurrentFilter] = useState<any>(MoviesFilters.ALL)

    const changeFilter = (filterParam: MoviesFilters) => {
        setCurrentFilter(filterParam)
    }

    return (
        <currentFilterContext.Provider value={{ currentFilter, changeFilter }}>
            {props.children}
        </currentFilterContext.Provider>
    )
}