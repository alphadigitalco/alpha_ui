import { styled } from "styled-components";

export const ToastContainer = styled.div`
    width: 100%;
    max-width: 358px;
    height: 80px;
    position: absolute;
    top: 0;
    right: 0;
    margin: 2px;
    border-radius: var(--radius-sm);
    padding: var(--padding-sm) var(--padding-md);
    overflow-y: scroll;
    z-index: 16;

    border: 1px solid red;
`;
