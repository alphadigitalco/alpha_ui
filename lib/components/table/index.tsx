import { ComponentProps, ReactNode } from "react";
import { TableContainer } from "./styles";

type Props = ComponentProps<"table"> & {
    children: ReactNode;
    headers: string[];
};

export function Table({ children, headers, ...props }: Props) {
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
                {children}
           </tbody>
        </TableContainer>
    );
}
