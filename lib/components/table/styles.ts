import { styled } from "styled-components";

export const TableContainer = styled.table`
    width: 100%;
    height: 100%;

    > thead {
        width: 100%;
        height: 40px;
        background-color: var(--color-gray0);
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
    }

    > tbody {
        min-height: 300px;
        height: 100%;
    }

    > tbody > tr {
        height: 40px;
        display: flex;
    }

    > tbody > tr > td {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
