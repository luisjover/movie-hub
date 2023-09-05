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
    genresName: string,
    cover_img: string
}


export const FavPage = () => {

    const { user, getAccessTokenSilently } = useAuth0();

    const [userMovies, setUserMovies] = useState<Movie[] | null>(null)
    const [filteredMovies, setFilteredMovies] = useState<Movie[] | null>(null)

    const { currentFilter } = useFilterContext();



    if (userMovies === null) {

        let fetchedMovies: Movie[] = []
        //BUG when first chargin page, sometimes render all items, sometimes no-.

        const getFetch = async () => {
            if (user?.email === undefined) return
            const userData = await getUserByEmail(user?.email, getAccessTokenSilently)
            console.log(userData)
            fetchedMovies = userData.movies as Movie[]
            setUserMovies(fetchedMovies);
        }
        getFetch()
    }


    useEffect(() => {
        console.log(currentFilter);
        if (currentFilter === "all") {
            if (userMovies === null) return
            setFilteredMovies(userMovies)

        } else {
            if (userMovies === null) return
            const newFilteredMovies = userMovies?.filter((movie: Movie) => movie.genresName == currentFilter)
            setFilteredMovies(newFilteredMovies)
        }

    }, [currentFilter, userMovies]);

    console.log("filtered movies" + filteredMovies)

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
                                genres={movie.genresName}
                                score={movie.score}
                                cover_img={movie.cover_img}
                            />
                        )
                    })}
                </div>

                <div className="white-space-fav"></div>
            </div>
        </section>

    )
}