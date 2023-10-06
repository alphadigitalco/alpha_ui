import { ComponentProps, useRef, useState } from "react";
import { SelectContainer } from "./styles";
import { BiChevronDown } from "react-icons/bi";
import { PiWarningCircleLight } from "react-icons/pi";

type ItemSelectedProps = {
    label: string 
};

function ItemSelected(props: ItemSelectedProps) {
    return <p className="item--selected">{props.label}</p>;
}

type Option = {
    label: string;
    value: string;
};

type Props = ComponentProps<"select"> & {
    stateManager: (state: string[]) => void;
    options: Option[];
    label?: string;
    // Used when +1 item are selected on select multiple
    oversizeText?: string;
};

export function Select({ label, oversizeText, options, stateManager, ...props }: Props) {
    const ref1 = useRef<HTMLLIElement>(null);
    const ref2 = useRef<HTMLUListElement>(null);
    const [items, setItems] = useState<Set<any>>(new Set());

    function select__handleClick() {
        if (props.disabled) {
            return;
        }

        ref2.current?.classList.toggle("wrapper--enabled");
    }

    function option__handleClick(item: Option) {
        if (props.disabled) {
            return;
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
                            <ItemSelected label={Array.from(items.values())[0].label} />
                        ) : (
                            <ItemSelected label={items.size + (oversizeText ?? "")} />
                        ))}

                    {items.size === 0 && props.value && (
                        <ItemSelected label={options.find((item) => item.value === props.value)?.label ?? ""} />
                    )}

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
