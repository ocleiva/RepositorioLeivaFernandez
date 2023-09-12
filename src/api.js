import axios from "axios";
const instance = axios.create ({
    baseURL: "https://rickandmortyapi.com/api"
});
export const GetPersonajes = async()=>{
    const URL= "/character"
    const response = await instance.get(URL)
    return response.data.results
}

export const GetPersonajeId = async (id) => {
    const url = `/character/${id}`;
    const response = await instance.get(url);
    console.log(response);
    return response.data;
}