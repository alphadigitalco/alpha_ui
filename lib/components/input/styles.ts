import { styled } from "styled-components";

export const InputContainer = styled.input`
    height: 40px;
    min-width: 200px;
    border: 1px solid var(--color-gray0);
    border-radius: var(--radius-sm);
    padding: 0 var(--padding-sm);

    &:focus {
        outline: 1px solid var(--color0);
    }
`;
