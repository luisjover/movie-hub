
type FilterCategories = {
    name: string
    id: string
    filter: MoviesFilters
}

enum MoviesFilters {
    ALL = "all",
    HORROR = "horror",
    SCIFI = "Sci-fi",
    FANTASY = "fantasy",
    ANIMATION = "animation",
    THRILLER = "thriller",
    ACTION = "action",
    COMEDY = "comedy",
    MISTERY = "mistery",
    ADVENTURE = "adventure",
    CRIME = "crime"
}

export const listsFilterCategories: FilterCategories[] = [
    {
        name: "All",
        id: "1",
        filter: MoviesFilters.ALL
    },
    {
        name: "Horror",
        id: "2",
        filter: MoviesFilters.HORROR
    },
    {
        name: "SciFi",
        id: "3",
        filter: MoviesFilters.SCIFI
    },
    {
        name: "Fantasy",
        id: "4",
        filter: MoviesFilters.FANTASY
    },
    {
        name: "Animation",
        id: "5",
        filter: MoviesFilters.ANIMATION
    },
    {
        name: "Thriller",
        id: "6",
        filter: MoviesFilters.THRILLER
    },
    {
        name: "Action",
        id: "7",
        filter: MoviesFilters.ACTION
    },
    {
        name: "Comedy",
        id: "8",
        filter: MoviesFilters.COMEDY
    },
    {
        name: "Mistery",
        id: "9",
        filter: MoviesFilters.MISTERY
    },
    {
        name: "Adventure",
        id: "10",
        filter: MoviesFilters.ADVENTURE
    },
    {
        name: "Crime",
        id: "11",
        filter: MoviesFilters.CRIME
    },
]