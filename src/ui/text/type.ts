import React, {type ElementType} from "react";

export interface TextProp {
    children?: React.ReactNode;
    tag: ElementType;
    size: 'Standard' | 'Title' | 'Big' | 'Large' | 'Small';
    weight?: 'Light' | 'Regular' | 'Medium' | 'Semibold' | 'Bold';
    color?: 'Main' | 'Secondary' | 'Invert';
}