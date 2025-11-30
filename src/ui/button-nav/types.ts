export interface ButtonNavProps {
    children?: React.ReactNode;
    active?: boolean;
    text: string;
    onClick?: () => void;
}