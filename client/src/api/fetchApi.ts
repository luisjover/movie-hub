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

export const createNewMovie = async (userId: number, formData: FormData, getToken: any) => {

    console.log("entra a create")
    const accessToken = await getToken();

    const response = await fetch(`http://localhost:8080/movies/${userId}`, {
        method: "POST",
        headers: {
            authorization: `Bearer ${accessToken}`,
            "Content-type": "application/json; charset=UTF-8"
        },
        body: formData
    })
    const dataFetched = await response.json();
    return dataFetched;
}