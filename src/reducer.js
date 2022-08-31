export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    // token: "BQDK4YelH3Ii0sa2hPSoAOOKSO6M0yP271XhwCES_UwT_-9i6S2_fHafpjYh6OVRFwaucU0wjUmLOpycD4S5KLK6hcMvJqwpHiYbmmqHGGiQN4o9yEp87v1pc0E_SyhJqqS21xjMYa5F4ISQUMz1WrGfH37wGWzXHGa8pbVemhOEJqIlsA4ccQ5egZFLGQ_uALN9IM1QbmE",
    // //change this token back to null after because authentication
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER': 
            return{ //returns initial state
                ...state,
                user: action.user, //except chaning user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        default: 
            return state;
    }
};

export default reducer;