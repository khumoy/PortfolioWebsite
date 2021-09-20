// import { getAlbums, getTodos } from "../api";
import { SET_STUDENTS } from "./types";

export const setStudents = async (dispatch) => {

    const data = await getStudents();

    // console.log(data);

    dispatch({
        type: SET_STUDENTS, payload: data,

    })
}

