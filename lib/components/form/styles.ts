import { styled } from "styled-components";

export const FormContainer = styled.div`
    height: 100%;
    width: 100%;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > .header {
        width: 100%;
        margin-bottom: var(--margin-lg);
        border-bottom: 1px solid var(--color-border);
        padding-bottom: var(--padding-md);
    }

    > .header > .title {
        width: 100%;
    }

    > .header > .subtitle {
        width: 100%;
        color: var(--color-extinct);
        font-size: var(--font-sm);
    }
`;
