import { styled } from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--padding-sm);
    background-color: var(--color3);

    > .wrapper {
        width: 100%;
        height: 100%;
    }

    > .signature {
        width: 100%;
        height: 20px;
    }

    > .signature > .text {
        text-align: center;
        font-family: var(--font-roboto);
        font-size: var(--font-sm);
        color: var(--color-white);
    }

    > .signature > .text > .alpha {
        font-family: var(--font-amaranth);
        font-size: var(--font-sm);
        color: var(--color-white);
    }
`;
