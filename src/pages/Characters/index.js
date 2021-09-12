import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MainCharacters, LoadMore } from './styles';

// Components
import Card from '../../components/Card';
import Search from '../../components/Search';
import Loading from '../../components/Loading';

import * as CharactersActions from '../../store/modules/characters/actions';

export default function Characters() {

    const [offset, setOffset] = useState(1);

    const {loading, characterData, total} = useSelector((state) => state.character);
    const dispatch = useDispatch();

    function loadMore() {
        let offsetNumber = offset+6;
        if(offsetNumber >= total) offsetNumber = (total-6);
        setOffset(offsetNumber);
        dispatch(
            CharactersActions.getCharactersRequest(offsetNumber)
        );

    }

    useEffect(() => {

        function loadCharacters() {
            dispatch(
                CharactersActions.getCharactersRequest(offset)
            );
        }
        loadCharacters();

    }, []);

    return (
        <MainCharacters>

            <Loading loading={loading} />
            <Search />
            <Card />

            <LoadMore>
                { characterData.length ? <button onClick={loadMore}>Load more characters</button> : '' }
            </LoadMore>

        </MainCharacters>
    );
}
