
import { SearchBar } from "../../components/searchBar/SearchBar";
import { useState } from "react";
// import SearchList from "../../components/lists/searchList/SearchList";
import { Icon } from '@iconify/react';
import "./searchPage.css";


export const SearchPage = () => {
    const [focus, setFocus] = useState(false);
    const [searchInput, setSearchInput] = useState('');


    return (
        <section className="search-page-container">
            <SearchBar focus={focus} setFocus={setFocus} searchInput={searchInput} setSearchInput={setSearchInput} />
            {/* {focus ? <SearchList focus={focus} setFocus={setFocus} searchInput={searchInput} setSearchInput={setSearchInput} /> : null} */}
            <div className="construction-container">
                <Icon className="construction-icon-search" icon="ic:outline-construction" />
                <p className="construction-text">IN CONSTRUCTION</p>
            </div>
        </section>
    )
}
