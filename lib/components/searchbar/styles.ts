import { styled } from "styled-components";

export const SearchBarContainer = styled.div`
    width: 100%;
    height: 48px;

    > .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--color-foreground);
        border-radius: var(--radius-sm);
        padding: 0 var(--padding-sm);
    }

    > .wrapper--focused {
        border: 1px solid var(--color-primary);
    }

    > .wrapper > .icon {
        width: 20px;
        height: 20px;
        fill: var(--color-foreground);
    }

    > .wrapper > .simple-input-container > input {
        border: none;
    }
`;
