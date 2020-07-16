import {HTMLAttributes} from "react";

export type Props = Omit<HTMLAttributes<HTMLDivElement>, 'background'> & {
    mini?: boolean;
    background?: string;
};