const initialState = [{
    essays: [],
    curr_essay: {}
}]

export default function Essays(state = initialState, action){
    const {type, payload} = action
    switch (type){
        case "ESSAYS_INDEX": return {...state, essays: payload, curr_essay: payload[0]};
        default: return state;
    }
}