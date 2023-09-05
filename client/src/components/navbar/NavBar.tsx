import './navBar.css';
import { BiHomeAlt2, BiSearch, BiSolidHeart } from 'react-icons/bi';
import { MdLibraryAdd } from 'react-icons/md';
import { Icon } from '@iconify/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export const NavBar = () => {


    const navigate = useNavigate();
    const location = useLocation().pathname.slice(1)

    console.log(location);




    useEffect(() => {

        const button = document.querySelector(`#${location}`) as HTMLInputElement;
        button.checked = true;

    }, [])




    const handleIconsClicked = (path: string) => {

        switch (path) {
            case 'home': navigate('/home');
                break
            case 'search': navigate('search');
                break
            case 'form': navigate('form')
                break
            case 'library': navigate('library')
                break
            case 'user': navigate('user')
                break
        }
    }

    const iconsNavbar = [
        {
            id: "home",
            path: "home"
        },
        {
            id: "search",
            path: "search"
        },
        {
            id: "form",
            path: "form"
        },
        {
            id: "library",
            path: "library"
        },
        {
            id: "user",
            path: "user"
        }
    ]

    return (
        <nav className="navBar-bottom-container">
            {iconsNavbar.map((icon, index) => (
                //BUG ERROR EN LA KEY
                <div className="icon-navbar-container" key={index}>
                    <input id={icon.id} name="icon-navbar-bottom" type="radio" className="input-navbar-bottom" />
                    <label htmlFor={icon.id} className="label-navbar-bottom">
                        {index === 0 && <BiHomeAlt2 className="icons-navbar" onClick={() => handleIconsClicked(icon.path)} />}
                        {index === 1 && <BiSearch className="icons-navbar" onClick={() => handleIconsClicked(icon.path)} />}
                        {index === 2 && <MdLibraryAdd className="icons-navbar" onClick={() => handleIconsClicked(icon.path)} />}
                        {index === 3 && <BiSolidHeart className="icons-navbar" onClick={() => handleIconsClicked(icon.path)} />}
                        {index === 4 && <Icon icon="fluent-emoji-high-contrast:alien-monster" className="icons-navbar" onClick={() => handleIconsClicked(icon.path)} />}

                    </label>
                </div>
            ))}
        </nav>
    )
}
