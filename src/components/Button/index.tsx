import { ButtonContainer } from "./styles";
// import { IButtonProps } from "./types";

const Button = ({ title, desativar, onClick }: IButtonProps) => {
  return <ButtonContainer disabled={desativar} onClick={onClick}>{title}</ButtonContainer>;
};

export interface IButtonProps {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  desativar?:boolean
}

export default Button;
