import { styled } from "styled-components";

export const TableContainer = styled.table`
    width: 100%;
    height: 100%;

    > thead {
        width: 100%;
        height: 40px;
        background-color: var(--color-foreground);
    }

    > thead > tr {
        width: 100%;
        height: 100%;
        display: flex;
    }

    > thead > tr > th {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 var(--padding-sm);
        font-weight: bold;
        font-size: var(--font-sm);
        color: var(--color-background);
    }

    > tbody {
        min-height: 300px;
        height: 100%;
    }

    > tbody > tr {
        height: 48px;
        display: flex;

        &:hover {
            background-color: var(--color-extinct);
            color: var(--color-background);
        }
    }

    > tbody > tr > td {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
