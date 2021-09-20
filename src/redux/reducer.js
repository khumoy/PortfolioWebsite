import initalState from "./initalState";
import { SET_STUDENTS } from "./types";


const reducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_STUDENTS: return { ...state, students: action.payload };

        default: return state;
    }
}

export default reducer;