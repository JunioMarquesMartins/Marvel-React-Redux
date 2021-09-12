import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import { Container, Form } from './styles';

import * as CharactersActions from '../../store/modules/characters/actions';

export default function Search() {
    const [characterValue, setCharacterValueList] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    function handleInputChange(e) {
        setCharacterValueList(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        history.push('/character');
        dispatch(
            CharactersActions.loadingCharacterRequest(characterValue, false)
        );
    }

    return (
        <Container>
            <h1>Search your character</h1>
            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={characterValue}
                    placeholder="Name of character"
                    onChange={handleInputChange}
                />
                <button type="submit">
                    <FaSearch size={16} />
                </button>
            </Form>
        </Container>
    );
}
