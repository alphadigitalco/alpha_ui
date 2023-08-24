import { styled } from "styled-components";

export const NavbarContainer = styled.header`
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 4px var(--padding-md);

    > .logo-container {
        width: 200px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    > .logo-container > .logo {
        width: 60px;
        height: 60px;
        margin-right: var(--margin-sm);
        border-radius: var(--radius-sm);
        border: 1px solid var(--color-gray0);
    }

    > .nav-container {
        width: 80%;
        height: calc(100vh - 64px);
        display: none;
        flex-direction: column;
        position: absolute;
        top: calc(100% + 16px);
        left: 0;
        overflow-y: scroll;

        @media only screen and (min-width: 768px) {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            position: relative;
            top: unset;
            left: unset;
            margin-left: var(--margin-md);
            padding: 0 var(--padding-md);
            overflow-y: unset;
        }
    }

    > .nav--enabled {
        display: flex;
    }

    > .nav-container > .item {
        height: 40px;
        padding: var(--padding-sm) var(--padding-md);
        color: var(--color-black);

        &:hover {
            background-color: var(--color-gray0);
        }

        @media only screen and (min-width: 768px) {
            height: unset;
            margin: 0 var(--margin-sm);
            border-radius: var(--radius-sm);
            color: var(--color-black);
        }
    }

    > .menu-btn {
        height: 32px;
        width: 32px;
        padding: var(--padding-sm);

        @media only screen and (min-width: 768px) {
            display: none;
        }
    }
`;
