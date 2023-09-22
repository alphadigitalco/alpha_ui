import { ComponentProps, ReactNode } from "react";
import { FooterContainer } from "./styles";

type Props = ComponentProps<"footer"> & {
    signature: string;
    children: ReactNode;
};

export function Footer({ signature, children, ...props }: Props) {
    return (
        <FooterContainer {...props}>
            <div className="wrapper">{children}</div>

            <div className="signature">
                <p className="text">
                    {signature} <span className="alpha">@Alpha.Digital</span>
                </p>
            </div>
        </FooterContainer>
    );
}
