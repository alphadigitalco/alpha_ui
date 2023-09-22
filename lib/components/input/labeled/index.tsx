import { ComponentProps } from "react";
import { InputElement, InputContainer } from "./styles";
import { PiWarningCircleLight } from "react-icons/pi";

type Props = ComponentProps<"input"> & {
    label: string;
    description?: string;
};

export function LabeledInput({ label, description, ...props }: Props) {
    return (
        <InputContainer className="labeled-input-container">
            <label className="label" htmlFor="">
                {label}
                {props.required && <PiWarningCircleLight className="icon" title="required" />}
            </label>

            <InputElement {...props} $isDisabled={props.disabled} />

            <span className="description">{description}</span>
        </InputContainer>
    );
}
