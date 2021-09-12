export function loadingCharacterRequest(characterValue) {
    return {
        type: 'LOADING_CHARACTER_REQUEST',
        characterValue,
    };
}
export function loadingCharacterSuccess(characterList, total) {
    return {
        type: 'LOADING_CHARACTER_SUCCESS',
        characterList,
        total
    };
}

export function getCharactersRequest(offset, limitPage) {
    return {
        type: 'GET_CHARACTERS_REQUEST',
        offset,
        limitPage
    }
}
