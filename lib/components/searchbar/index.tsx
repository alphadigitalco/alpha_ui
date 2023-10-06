import { ComponentProps, useRef } from "react";
import { SimpleInput } from "../input";
import { SearchBarContainer } from "./styles";
import { BsSearch } from "react-icons/bs";

type Props = ComponentProps<"input"> & {
    description?: string;
};

export function SearchBar(props: Props) {
    const ref = useRef<HTMLDivElement>(null);

    function handleOnFocus() {
        ref.current?.classList.toggle("wrapper--focused");

        return props?.onFocus;
    }

    function handleOnBlur() {
        ref.current?.classList.toggle("wrapper--focused");

        return props?.onBlur;
    }

    return (
        <SearchBarContainer className="searchbar-container">
            <div className="wrapper" ref={ref}>
                <BsSearch className="icon" />

                <SimpleInput {...props} onFocus={handleOnFocus} onBlur={handleOnBlur} />
            </div>
        </SearchBarContainer>
    );
}
