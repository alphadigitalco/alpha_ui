import { ComponentProps } from "react";
import { InputContainer } from "./styles";

type Props = ComponentProps<"input">;

export function Input(props: Props) {
    return (
        <InputContainer {...props} />
    );
}
