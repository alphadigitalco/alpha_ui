import { ComponentProps } from "react";
import { TableContainer } from "./styles";

type Props = ComponentProps<"table"> & {
    headers: string[];
    data: Record<string, any>[];
};

export function Table({ headers, data, ...props }: Props) {
    return (
        <TableContainer {...props}>
            <thead>
                <tr>
                    {headers.map((item) => (
                        <th key={item}>{item}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {Object.values(item).map((value: any) => (
                            <td key={value}>{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </TableContainer>
    );
}
