import React from "react";
import { ButtonComponent } from "./styles";

interface IButton {
  text: string;
}

export const Button: React.FC<IButton> = ({ text }) => {
  return (
    <ButtonComponent>
      <span>{text}</span>
      <i></i>
    </ButtonComponent>
  );
};
