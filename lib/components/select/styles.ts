import { styled } from "styled-components";

export const SelectContainer = styled.div`
    height: 40px;
    display: flex;
    flex-direction: column;
    padding: 0 var(--padding-sm);
    position: relative;
    border-radius: var(--radius-sm);
    cursor: pointer;
    background-color: var(--color-gray0);

    > .forehead {
        height: 100%;
    }

    > .forehead > .placeholder {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--color-black);
    }

    > .placeholder > .icon {
        width: 20px;
        height: 20px;
        fill: var(--color-gray1);
    }

    > .wrapper {
        width: 100%;
        max-height: calc(40px * 4);
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        margin-top: var(--margin-sm);
        border-radius: var(--radius-sm);
        overflow-y: scroll;
        background-color: var(--color-gray0);
    }

    > .wrapper > .option {
        height: 40px;
        display: flex;
        align-items: center;
        padding: 0 var(--padding-sm);

        &:hover {
            background-color: var(--color-gray1);
        }
    }

    > .wrapper > .option--enabled {
        background-color: #25bcff;
    }
`;
