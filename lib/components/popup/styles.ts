import { styled } from "styled-components";

export const PopupContainer = styled.div<{ $isOpen: boolean }>`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    padding: var(--padding-md);
    z-index: 64;
    background-color: rgba(10, 10, 10, 0.8);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    > .close-popup-btn {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 30px;
        right: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        background-color: transparent;
        border: none;

        &:hover {
            border: 1px solid var(--color-white);
        }
    }

    > .close-popup-btn > .icon {
        height: 20px;
        width: 20px;
        color: var(--color-white);
    }
`;
