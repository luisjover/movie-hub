
import { FilterButton } from "./filterButton/FilterButton";
import "./filter.css"

export type FilterCategories = {
    name: string
    id: string
    filter: MoviesFilters
}

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

export const Filter = ({ ...props }) => {


    return (
        <nav className="library-filter" >
            {props.filters.map((category: FilterCategories) => (
                <FilterButton
                    name={category.name}
                    id={category.id}
                    key={category.id}
                    filter={category.filter}
                />
            ))}
        </nav>
    )
}
