export interface ButtonProps {
    size: string;
    type: 'submit' | 'reset' | 'button';
    children?: React.ReactNode;
    classes: string;
    onClick?: () => void;
  }