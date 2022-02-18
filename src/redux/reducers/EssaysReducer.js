const initialState = [{
    essays: [],
}]

export default function Essays(state = initialState, action){
    switch (action.type){
        case "ESSAYS_INDEX": return {...state, essays: action.payload ? action.payload : ""};
        default: return state;
    }
}