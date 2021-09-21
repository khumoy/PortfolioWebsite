import initalState from "./initalState";
import { TOGGLE_MENU } from "./types";


const reducer = (state = initalState, action) => {
    switch (action.type) {
        case TOGGLE_MENU:
            return { ...state, isSidebarShow: !state.isSidebarShow }
        default: return state;
    }
}

export default reducer;