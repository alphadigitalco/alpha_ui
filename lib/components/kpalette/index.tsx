import { SimpleInput } from "../input";
import { KpaletteContainer } from "./styles";

type Props = {
    placeholder: string;
    palette: Palette[];
};

type Palette = {
    title: string;
    commands: Command[];
};

type Command = {
    placeholder: string;
    triggers: string[];
};

// esc clear command entrance
// enter confirm

export function Kpalette(props: Props) {
    return (
        // use KpaletteContext
        <KpaletteContainer>
            <div className="inner">
                <SimpleInput placeholder={props.placeholder} />

                <div className="wrapper">
                    {props.palette.map((item) => (
                        <div key={item.title} className="group">
                            <span className="title">{item.title}</span>

                            <ul className="list">
                                {item.commands.map((item) => (
                                    <li key={item.placeholder} className="item">
                                        <p>{item.placeholder}</p>
                                        <div>
                                            {item.triggers.map((item) => (
                                                <span key={item} className="trigger">{item}</span>
                                            ))}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </KpaletteContainer>
    );
}
