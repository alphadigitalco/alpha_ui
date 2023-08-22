import { ReactNode } from "react";
import { Container } from "./styles";

type Props = {
    logo: {
        alt: string;
        name: string;
        source: string;
    };
    children: ReactNode;
};

export function Navbar(props: Props) {
    return (
        <Container>
            <div className="logo-container">
                <img src={props.logo.source} alt={props.logo.alt} className="logo" />

                <span>{props.logo.name}</span>
            </div>

            <nav className="nav-container">
                <a href="">item1</a>
                <a href="">item2</a>
                <a href="">item3</a>
            </nav>
        </Container>
    );
}
