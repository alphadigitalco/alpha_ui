import { ComponentProps, useRef } from "react";
import { Button } from "../button";
import { NavbarContainer } from "./styles";
import { FiMenu } from "react-icons/fi";

type NavItem = {
    label: string;
    href: string;
};

type Props = ComponentProps<"header"> & {
    logo: {
        alt: string;
        name: string;
        source: string;
    };
    items: NavItem[];
};

export function Navbar({ logo, items, ...props }: Props) {
    const ref = useRef<HTMLElement>(null);

    function handleMenuClick() {
        ref.current?.classList.toggle("nav--enabled");

        if (ref.current?.classList.contains("nav--enabled")) {
            document.body.style.position = "fixed";
        } else {
            document.body.style.position = "relative";
        }
    }

    return (
        <NavbarContainer {...props}>
            <div className="logo-container">
                <img src={logo.source} alt={logo.alt} className="logo" />

                <span>{logo.name}</span>
            </div>

            <nav ref={ref} className="nav-container">
                {items.map((item) => (
                    <a className="item" href={item.href}>{item.label}</a>
                ))}
            </nav>

            <Button className="menu-btn" onClick={handleMenuClick}><FiMenu /></Button>
        </NavbarContainer>
    );
}
