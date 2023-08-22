import { ComponentProps, ReactNode } from "react";
import { Container } from "./styles";

type Props = ComponentProps<"button"> & {
    children: ReactNode;
};

export function Button({ children, ...props }: Props) {
    return (
        <Container type="button" {...props}>
            {children}
        </Container>
    );
}
