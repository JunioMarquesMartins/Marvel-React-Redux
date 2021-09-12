import styled from 'styled-components';

export const Spinner = styled.div`
    display: ${(props) => (props.loading.loading ? 'block' : 'none')};
    background: white;
    padding: 15px;
    border-radius: 5px;
    top: 30%;
    z-index: 99;
    left: 50%;
    transform: translate(-50%, 0);
    width: 50px;
    height: 50px;
    position: absolute;

    svg {
        animation-name: LoadingRotate;
        animation-delay: 0;
        animation-duration: 1s;
        animation-fill-mode: both;
    }

    @keyframes LoadingRotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;
