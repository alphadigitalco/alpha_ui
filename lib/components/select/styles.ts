import { styled } from "styled-components";

export const SelectContainer = styled.div`
    width: 100%;
    min-width: 200px;
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
        min-height: 46px;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--color-foreground);
    }

    > .forehead > .placeholder > .item--selected {
        margin: 0 2px;
        padding: 0 12px;
        border-radius: var(--radius-sm);
        color: var(--color-background);
        background-color: var(--color-primary);
        white-space: nowrap;
    }

    > .forehead > .placeholder > .icon {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 0;
        fill: var(--color-foreground);
    }

    > .wrapper {
        display: none;
        width: 100%;
        max-height: calc(46px * 4);
        position: absolute;
        top: calc(100%);
        left: 0;
        margin-top: 4px;
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
