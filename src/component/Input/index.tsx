import React, { InputHTMLAttributes } from "react";
import { InputBox, InputComponent, InputLabel } from "./styles";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  onChange: () => void;
  label?: string;
}

export const Input: React.FC<IInput> = ({
  type = "text",
  required = false,
  label,
}) => {
  return (
    <InputBox>
      <InputComponent type={type} required={required} />
      <InputLabel>{label}</InputLabel>
    </InputBox>
  );
};
