const INITIAL_STATE = {
    loading: false,
    characterData: [],
    total: 1
};

export default function character(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOADING_CHARACTER_REQUEST':
            return {
                ...state,
                loading: true,
            };
        case 'GET_CHARACTERS_REQUEST':
            return {
                ...state,
                loading: true,
            };
        case 'LOADING_CHARACTER_SUCCESS':
            return {
                ...state,
                loading: false,
                characterData: action.characterList,
                total: action.total,
            };
        default:
            return state;
    }
}
