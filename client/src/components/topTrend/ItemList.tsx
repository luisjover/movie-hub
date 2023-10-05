
import "./itemList.css";
import { Item } from "./item/Item";
import { useUserContext } from "../../utils/hooks/useUserContext";







export const ItemList = () => {

    const { currentUser } = useUserContext();




    return (
        <>
            <div className="trendlist-wrapper">
                {currentUser?.movies && currentUser?.movies.map(movie => (
                    <Item
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        year={movie.year}
                        genres={movie.genresName}
                        score={movie.score}
                        cover_img={movie.cover_img}
                    />
                ))}



            </div>
            <div className="item-list-white-space">

            </div>
        </>
    )
}