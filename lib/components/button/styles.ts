import { styled } from "styled-components";

export const Container = styled.button`
    height: 40px;
    display: flex;
    justify-content: start;
    align-items: center;
    border-radius: var(--radius-sm);
    border: none;
    padding: var(--padding-md);
    cursor: pointer;
    color: var(--color-white);
    background-color: var(--color-black);

    &:hover {
        opacity: 0.7;
    }
`;
