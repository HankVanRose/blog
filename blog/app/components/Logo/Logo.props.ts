import { ReactNode } from "react";

export interface LogoProps {
    tag: 'h1' | 'h2' | 'h3';
    children?: ReactNode;
}