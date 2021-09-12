import React from 'react';
import { useSelector } from 'react-redux';

import { MainCharacters } from './styles';

// Components
import Card from '../../components/Card';
import Search from '../../components/Search';
import Loading from '../../components/Loading';

export default function Character() {
    const loading = useSelector((state) => state.character.loading);

    return (
        <MainCharacters>
            <Loading loading={loading} />
            <Search />
            <Card pageCharacter />
        </MainCharacters>
    );
}
