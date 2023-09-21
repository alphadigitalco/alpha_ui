import { ComponentProps, useRef } from "react";
import { SelectContainer } from "./styles";
import { BiChevronDown } from "react-icons/bi";
import { PiWarningCircleLight } from "react-icons/pi"

type Option = {
    label: string;
    value: string;
};

type Props = ComponentProps<"select"> & {
    stateManager: (state: string[]) => void;
    options: Option[];
    label?: string;
};

export function Select({ label, options, stateManager, ...props }: Props) {
    const ref1 = useRef<HTMLLIElement>(null);
    const ref2 = useRef<HTMLUListElement>(null);
    const items = new Set();

    // select click
    function handleClick() {
        ref2.current?.classList.toggle("wrapper--enabled");
    }

    // option click
    function _handleClick(value: any): any[] {
        if (props.multiple && items.has(value)) {
            items.delete(value);
        } else if (props.multiple) {
            items.add(value);
        } else {
            items.clear();
            items.add(value);
        }

        return Array.from(items.values());
    }

    return (
        <SelectContainer className="select-input-container">
            <label className="label">
                {label}
                {props.required && <PiWarningCircleLight className="icon" title="required" />}
            </label>

            <div className="forehead" onClick={handleClick}>
                <span className="placeholder">
                    {props.placeholder} <BiChevronDown className="icon" />
                </span>
            </div>

            <ul ref={ref2} className="wrapper">
                {options.map((item) => (
                    <li
                        ref={ref1}
                        className="option"
                        key={item.value}
                        value={item.value}
                        onClick={(e: any) => {
                            const values = _handleClick(item.value);

                            if (!props.multiple) {
                                e.target.parentElement.querySelector("li.option--enabled")?.classList.toggle("option--enabled");
                            }

                            e.target.classList.toggle("option--enabled");

                            stateManager(values);
                        }}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
        </SelectContainer>
    );
}
