import { styled } from "styled-components";

export const ButtonContainer = styled.button`
    height: 48px;
    display: flex;
    justify-content: start;
    align-items: center;
    border-radius: var(--radius-sm);
    border: 1px solid var(--color-border);
    padding: 0 var(--padding-md);
    cursor: pointer;
    color: var(--color-background);
    background-color: var(--color-foreground);
    font-size: var(--font-sm);

    &:hover {
        opacity: 0.7;
    }
`;
