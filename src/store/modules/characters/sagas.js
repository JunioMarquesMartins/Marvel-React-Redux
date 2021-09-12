import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as Services from '../../../services/api';
import { loadingCharacterSuccess } from './actions';

function* loadingCharacter({ characterValue }) {
    if (!characterValue) {
        yield put(loadingCharacterSuccess([]));
        return;
    }
    const response = yield call(
        Services.api.get,
        `characters?limit=1&nameStartsWith=${characterValue}&apikey=${Services.apikey}`
    );

    const { results } = response.data.data;

    if (results.length && characterValue.localeCompare(results[0].name) === 0) {
        yield put(loadingCharacterSuccess(results));
    } else {
        yield put(loadingCharacterSuccess([]));
    }
}

let dataCharacters = [];

function* getCharacters(offsetNumber) {

    const {offset} = offsetNumber;



    const response = yield call(
        Services.api.get,`characters?apikey=${Services.apikey}&offset=${offset}&limit=6`
    );

    const { results, total } = response.data.data;

    dataCharacters.push(...results);

    yield put(loadingCharacterSuccess(dataCharacters, total))
}

export default all([
    takeLatest('LOADING_CHARACTER_REQUEST', loadingCharacter),
    takeLatest('GET_CHARACTERS_REQUEST', getCharacters),
]);
