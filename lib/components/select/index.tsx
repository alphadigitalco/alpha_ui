import { ComponentProps, useRef, useState } from "react";
import { SelectContainer } from "./styles";
import { BiChevronDown } from "react-icons/bi";
import { PiWarningCircleLight } from "react-icons/pi";

type Option = {
    label: string;
    value: string;
};

type Props = ComponentProps<"select"> & {
    stateManager: (state: string[]) => void;
    options: Option[];
    label?: string;
    // Used when 1+ items are selected on select multiple
    oversizeText?: string;
};

export function Select({ label, oversizeText, options, stateManager, ...props }: Props) {
    const ref1 = useRef<HTMLLIElement>(null);
    const ref2 = useRef<HTMLUListElement>(null);
    const [items, setItems] = useState<Set<any>>(new Set());

    function select__handleClick() {
        ref2.current?.classList.toggle("wrapper--enabled");
    }

    function option__handleClick(item: Option): void {
        if (props.disabled) {
            return null as any;
        }

        if (props.multiple && items.has(item)) {
            items.delete(item);
        } else if (props.multiple) {
            items.add(item);
        } else {
            items.clear();
            items.add(item);
        }
    }

    return (
        <SelectContainer className="select-input-container">
            <label className="label">
                {label}
                {props.required && <PiWarningCircleLight className="icon" title="required" />}
            </label>

            <div className="forehead" onClick={select__handleClick}>
                <span className="placeholder">
                    {items.size > 0 &&
                        (items.size === 1 ? (
                            <p className="item--selected">{Array.from(items.values())[0].label}</p>
                        ) : (
                            <p className="item--selected">{items.size + (oversizeText ?? "")}</p>
                        ))}
                    {items.size === 0 && props.value && props.value}
                    {items.size === 0 && !props.value && props.placeholder}

                    <BiChevronDown className="icon" />
                </span>
            </div>

            <ul ref={ref2} className="wrapper">
                {options.map((item) => (
                    <li
                        ref={ref1}
                        className={[
                            "option",
                            props.value === item.value || items.has(item) ? "option--enabled" : "",
                        ].join(" ")}
                        key={item.value}
                        value={item.value}
                        onClick={() => {
                            option__handleClick(item);
                            setItems(new Set(items));
                            stateManager(Array.from(items).map((item) => item.value));

                            if (!props.multiple) {
                                select__handleClick();
                            }
                        }}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
        </SelectContainer>
    );
}
