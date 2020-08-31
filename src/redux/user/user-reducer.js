//the file is js since it won't contain any jsx. 
//function that takes two properties
//state and action 

//the state 
const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //if the action type is set current user 
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }

        //if none of the cases fit then return the state. 
        default:
            return state;
    }
}

export default userReducer;