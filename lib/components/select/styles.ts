import { styled } from "styled-components";

export const SelectContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    cursor: pointer;
    background-color: transparent;

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

    > .forehead {
        min-height: 46px;
        display: flex;
        align-items: center;
        padding: 0 var(--padding-sm);
        border-radius: var(--radius-sm);
        border: 1px solid var(--color-border);
    }

    > .forehead > .placeholder {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--color-foreground);
    }

    > .placeholder > .icon {
        width: 25px;
        height: 25px;
        fill: var(--color-foreground);
    }

    > .wrapper {
        display: none;
        width: 100%;
        max-height: calc(46px * 4);
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        margin-top: var(--margin-sm);
        border-radius: var(--radius-sm);
        border: 1px solid var(--color-border);
        overflow-y: scroll;
        background-color: var(--color-background);
    }

    > .wrapper--enabled {
        display: block;
    }

    > .wrapper > .option {
        min-height: 46px;
        display: flex;
        align-items: center;
        padding: 0 var(--padding-sm);

        &:hover {
            color: var(--color-foreground);
            background-color: var(--color-extinct);
        }
    }

    > .wrapper > .option--enabled {
        color: var(--color-background);
        background-color: var(--color-primary);
    }
`;
