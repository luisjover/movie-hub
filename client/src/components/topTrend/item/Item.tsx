

import "./item.css"
import { FC, useState } from "react";
import { Icon } from '@iconify/react';
import Modal from 'react-modal';
import { UpdateMovieForm } from "../../updateMovieForm/UpdateMovieForm";

type Movie = {
    id: number,
    title: string,
    year: number,
    score: number,
    genres: string,
    cover_img: string
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',

    },
};


export const Item: FC<Movie> = ({ ...props }) => {

    // Modal.setAppElement('root.App');

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }



    return (
        <>
            <div className="item-card">
                <img className="item-card-img" src={props.cover_img} alt={`Cover Image of ${props.title}`} />

                <div className="item-info-container">
                    <p className="item-info item-info-title">Title: {props.title}</p>

                    <p className="item-info item-info-year">Year: {props.year}</p>

                    <p className="item-info item-info-genre">Genre: {props.genres}</p>

                    <p className="item-info item-info-score">Score: {props.score}</p>
                </div>
                <div className="edit-icon-container">
                    <Icon className="edit-icon" icon="material-symbols:edit" onClick={openModal} />
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Movie Update Modal"
                    appElement={document.getElementById('root')!}
                >
                    <div className="modal-title-container">
                        <h2 className="modal-title">Update Movie</h2>
                    </div>
                    <UpdateMovieForm
                        movieId={props.id}
                        closeModal={closeModal}
                    />
                </Modal>
            </div>
        </>
    )
}