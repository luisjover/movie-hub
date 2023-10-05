import { User } from "@auth0/auth0-react";



//GET ALL USERS
export const getAllUsers = async (getToken: any) => {

    const accessToken = await getToken();

    const response = await fetch(`http://localhost:8080/users`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        }
    });

    const allUsers = await response.json();
    return allUsers;
}




//GET  USER BY EMAIL
export const getUserByEmail = async (email: string, getToken: any) => {

    const accessToken = await getToken();

    const response = await fetch(`http://localhost:8080/users/${email}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${accessToken}`,
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    const dataFetched = await response.json();
    return dataFetched;
}


//CREATE USER
export const createNewUser = async (user: User, getToken: any) => {

    const accessToken = await getToken();

    const response = await fetch(`http://localhost:8080/users/`, {
        method: "POST",
        headers: {
            authorization: `Bearer ${accessToken}`,
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            name: user.name,
            email: user.email,
        })
    });
    const dataFetched = await response.json();
    return dataFetched;

}


//CREATE NEW MOVIE 

export const createNewMovie = async (userId: number, data: any, getToken: any) => {


    const accessToken = await getToken();

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("year", data.year);
    formData.append("score", data.score);
    formData.append("genre", data.genre);
    formData.append("image", data.image[0]);


    const response = await fetch(`http://localhost:8080/movies/${userId}`, {
        method: "POST",
        headers: {
            authorization: `Bearer ${accessToken}`,
        },
        body: formData
    })
    const dataFetched = await response.json();
    return dataFetched;
}


//UPDATE EXISTING MOVIE {

export const updateMovieById = async (movieId: number, data: any, getToken: any) => {


    const accessToken = await getToken();

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("year", data.year);
    formData.append("score", data.score);
    formData.append("genre", data.genre);
    formData.append("image", data.image[0]);


    const response = await fetch(`http://localhost:8080/movies/${movieId}`, {
        method: "PUT",
        headers: {
            authorization: `Bearer ${accessToken}`,
        },
        body: formData
    })
    const dataFetched = await response.json();
    return dataFetched;
}


//DELETE EXISTING MOVIE 

export const deleteMovie = async (movieId: number, getToken: any) => {


    const accessToken = await getToken();


    const response = await fetch(`http://localhost:8080/movies/${movieId}`, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${accessToken}`,
        }
    })
    const dataFetched = await response.json();
    return dataFetched;
}