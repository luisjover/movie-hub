import { createContext, useState } from "react"


type UserType = {
    id: number,
    name: string,
    email: string,
    movies: Movie[]
}

type Movie = {
    id: number,
    title: string,
    year: number,
    coverImg: string,
    genre: string,
    score: number,
    userId: number
}


export const userContext = createContext<{ currentUser: UserType | null, setCurrentLoggedUser: (loggedUser: UserType) => void }>({ currentUser: null, setCurrentLoggedUser: () => { } });

export const UserContextProvider = ({ ...props }) => {
    const [currentUser, setCurrentUser] = useState<UserType | null>(null);
    const setCurrentLoggedUser = (loggedUser: UserType) => {
        setCurrentUser(loggedUser);
    }
    return (
        <userContext.Provider value={{ currentUser, setCurrentLoggedUser }}>
            {props.children}
        </userContext.Provider>
    )
}
