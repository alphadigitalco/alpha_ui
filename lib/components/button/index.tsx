import { ComponentProps, ReactNode } from "react";
import { ButtonContainer } from "./styles";

type Props = ComponentProps<"button"> & {
    children: ReactNode;
};

export function Button({ children, ...props }: Props) {
    return (
        <ButtonContainer type="button" {...props}>
            {children}
        </ButtonContainer>
    );
}
