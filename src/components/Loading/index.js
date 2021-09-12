import React from 'react';
import { FaCircleNotch } from 'react-icons/fa';

import { Spinner } from './styles';

function Loading(loading) {
    return (
        <Spinner loading={loading}>
            <FaCircleNotch />
        </Spinner>
    );
}

export default Loading;
