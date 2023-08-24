import { ToastContainer } from "./styles";
import { PiWarningCircle, PiCheckCircle } from "react-icons/pi";
import { BiErrorCircle, BiInfoCircle } from "react-icons/bi";

type ToastType = "warn" | "error" | "success";

type IconProps = {
    type: ToastType;
};

function IconSwitch({ type }: IconProps) {
    switch(type) {
        case "warn":
            return <PiWarningCircle />;
        case "error":
            return <BiErrorCircle />;
        case "success":
            return <PiCheckCircle />;
        default:
            return <BiInfoCircle />
    }
}

type Props = {
    type: ToastType;
    message: string;
};

export function Toast({ type, message }: Props) {
    return (
        <ToastContainer>
            <IconSwitch type={type} />

            {message}
        </ToastContainer>
    );
}
