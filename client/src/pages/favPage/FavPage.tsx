import './favPage.css';
import Logo from '../../assets/images/app-logo.png';
import { useAuth0 } from '@auth0/auth0-react';
import { Filter } from '../../components/filter/Filter';
import { listsFilterCategories } from '../../assets/globalVariables';
import { useEffect, useState } from 'react';
import { Item } from '../../components/topTrend/item/Item';

import { useFilterContext } from '../../utils/hooks/useFilterProvider';
import { getUserByEmail } from '../../api/fetchApi';

type Movie = {
    id: number,
    title: string,
    year: number,
    score: number,
    genre: string,
    imageUrl: string
}


export const FavPage = () => {

    const { user, getAccessTokenSilently } = useAuth0();

    const [userMovies, setUserMovies] = useState<Movie[] | null>(null)
    const [filteredMovies, setFilteredMovies] = useState<Movie[] | null>(null)

    const { currentFilter } = useFilterContext();



    if (userMovies === null) {

        const fetchedMovies: Movie[] = []
        //BUG when first chargin page, sometimes render all items, sometimes no-.

        const getFetch = async () => {
            if (user?.email === undefined) return
            const userData = await getUserByEmail(user?.email, getAccessTokenSilently)
            const fetchedMovies = userData.movies as Movie[]
        }
        getFetch()
    }


    useEffect(() => {

        if (currentFilter === "all") {
            if (userMovies === null) return
            setFilteredMovies(userMovies)

        } else {
            if (userMovies === null) return
            const newFilteredMovies = userMovies?.filter((movie: Movie) => movie.genre.includes(currentFilter))
            setFilteredMovies(newFilteredMovies)
        }

    }, [currentFilter, userMovies]);


    return (
        <section className='library-page-container'>
            <div className='add-movie-heading'>

                <img className="add-movie-logo" src={Logo} alt="app logo" />

            </div>
            <Filter filters={listsFilterCategories} />
            <div className='library-list-items-wrapper'>
                <div className='library-items-container'>
                    {filteredMovies?.map((movie) => {

                        return (

                            <Item
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                year={movie.year}
                                genre={movie.genre}
                                score={movie.score}
                                imageUrl={movie.imageUrl}
                            />
                        )
                    })}
                </div>

                <div className="white-space"></div>
            </div>
        </section>

    )
}