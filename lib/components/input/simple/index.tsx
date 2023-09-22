import { ComponentProps } from "react";
import { InputElement, InputContainer } from "./styles";

type Props = ComponentProps<"input"> & {
    description?: string;
};

export function SimpleInput({ description, ...props }: Props) {
    return (
        <InputContainer className="simple-input-container">
            <InputElement {...props} $isDisabled={props.disabled} />

            <span className="description">{description}</span>
        </InputContainer>
    );
}
