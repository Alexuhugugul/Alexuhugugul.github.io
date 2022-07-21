import React, { SyntheticEvent } from "react";
import { Button } from "../../component/Button";
import { Input } from "../../component/Input";

import { Form, PageHome } from "./styles";

export const Home: React.FC = () => {
  const onSubmit = (submitEvent: SyntheticEvent) => {
    submitEvent.preventDefault();
  };

  return (
    <PageHome>
      <Form action="" onSubmit={onSubmit}>
        <Input onChange={() => {}} label="Почта" required/>
        <Input onChange={() => {}} label="Пароль" required/>

        <Button text='отправить'/>
      </Form>
    </PageHome>
  );
};
