import { ComponentProps, useRef, useState } from "react";
import { SelectContainer } from "./styles";
import { BiChevronDown } from "react-icons/bi";

type Option = {
    label: string;
    value: string;
};

type Props = ComponentProps<"select"> & {
    options: Option[];
};

export function Select({ options, ...props }: Props) {
    const ref = useRef<HTMLLIElement>(null);
    const [on, setOn] = useState(false);
    const items = new Set();

    // select click
    function handleClick() {
        setOn(!on);
    }

    // option click
    function _handleClick(value: any) {
        if (props.multiple && items.has(value)) {
            items.delete(value);
        } else if (props.multiple) {
            items.add(value);
        } else {
            items.clear();
            items.add(value);
        }
    }

    return (
        <SelectContainer>
            <div className="forehead" onClick={handleClick}>
                <span className="placeholder">
                    {props.placeholder} <BiChevronDown className="icon" />
                </span>
            </div>

            {on && (
                <ul className="wrapper">
                    {options.map((item) => (
                        <li
                            ref={ref}
                            className="option"
                            key={item.value}
                            value={item.value}
                            onClick={(e: any) => {
                                _handleClick(item.value);

                                if (!props.multiple) {
                                    e.target.parentElement.querySelector("li.option--enabled")?.classList.toggle("option--enabled");
                                }

                                e.target.classList.toggle("option--enabled");
                            }}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            )}
        </SelectContainer>
    );
}
