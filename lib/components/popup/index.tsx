import { ReactNode, useEffect, useRef } from "react";
import { Button } from "../button";
import { PopupContainer } from "./styles";
import { MdClose } from "react-icons/md";

type Props = {
    children: ReactNode;
    isOpen: boolean;
    handleClose: () => void;
};

export function Popup({ children, isOpen, handleClose }: Props) {
    const ref = useRef(null);

    // Close pop-up when click outside pop-up container
    function handleClickOutside(e: any) {
        if (ref.current && ref.current !== e.target) {
            // handleClose();
        }
    }

    useEffect(() => {
        if (isOpen) {
            document?.addEventListener("click", handleClickOutside, true);
        } else {
            document.removeEventListener("click", handleClickOutside, true);
        }
    }, [isOpen]);

    return (
        <PopupContainer ref={ref} $isOpen={isOpen} className="popup-container">
            <Button className="close-popup-btn" onClick={handleClose}>
                <MdClose className="icon" />
            </Button>

            {children}
        </PopupContainer>
    );
}
