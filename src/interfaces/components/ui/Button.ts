export interface ButtonProps {
  onClick?: () => void;
  to?: string;
  variant: 'primary' | 'secondary' | 'call-to-action';
  children?: React.ReactNode;
}
