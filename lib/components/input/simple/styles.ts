import { styled } from "styled-components";

export const InputContainer = styled.div`
    width: 100%;

    > .description {
        font-size: var(--font-sm);
        color: var(--color-extinct);
    }
`;

export const InputElement = styled.input`
    width: 100%;
    height: 46px;
    border: 1px solid var(--color-foreground);
    border-radius: var(--radius-sm);
    background-color: transparent;
    padding: 0 var(--padding-sm);

    &::placeholder {
        color: var(--color-foreground);
    }

    &:focus {
        outline: none;
        border: 1px solid var(--color-focus);
    }
`;
