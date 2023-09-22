import { ReactNode } from "react";
import { FormContainer } from "./styles";

type Props = {
    children: ReactNode;
    header: {
        title: string;
        subtitle?: string;
    };
};

export function Form({ children, header }: Props) {
    return (
        <FormContainer>
            <section className="header">
                <h3 className="title">{header.title}</h3>
                {header.subtitle && <p className="subtitle">{header.subtitle}</p>}
            </section>

            {children}
        </FormContainer>
    );
}
