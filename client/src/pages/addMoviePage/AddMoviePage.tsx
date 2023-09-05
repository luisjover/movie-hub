
import { AddMovieForm } from "../../components/addMovieForm/AddMovieForm";
import Logo from '../../assets/images/app-logo.png';
import "./addMoviePage.css";
{/* {user === undefined ? <img src="/src/assets/img/defaultuser.webp" alt="default user image" /> : <img src={user?.picture} alt={`${user?.name}´s profile image`} />} */ }


export const AddMoviePage = () => {


    return (
        <section className="form-section">

            <div className='add-movie-heading'>

                <img className="add-movie-logo" src={Logo} alt="app logo" />

            </div>


            <AddMovieForm />
        </section>
    )
}
