import { styled } from "styled-components";

export const InputContainer = styled.div`
    width: 100%;

    > .label {
        display: block;
        font-size: var(--font-sm);
        color: var(--color-foreground);
        margin-bottom: var(--margin-sm);
    }

    > .label > .icon {
        width: 13px;
        height: 13px;
        fill: var(--color-foreground);
        margin-left: 5px;
    }

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
    padding: 0 var(--padding-sm);
    background-color: transparent;
    color: var(--color-foreground);

    &::placeholder {
        color: var(--color-foreground);
    }

    &:focus {
        outline: none;
        border: 1px solid var(--color-focus);
    }
`;
