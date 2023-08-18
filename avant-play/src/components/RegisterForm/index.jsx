import style from "./RegisterForm.module.scss";
import Button from "../Button";
import Field from "../Field";

import { useState } from "react";

function RegisterForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [organizationCode, setOrganizationCode] = useState("");

  return (
    <div className={style.form}>
      <h3>REGISTRE-SE!</h3>

      <div className={style.form__fields}>
        <Field
          value={name}
          placeholder={"Nome Completo"}
          onChange={(event) => setName(event.target.value)}
          width="270px"
        />

        <Field
          value={email}
          placeholder={"E-mail"}
          onChange={(event) => setEmail(event.target.value)}
          width="270px"
          
        />

        <Field
          type="password"
          value={password}
          placeholder={"Senha"}
          onChange={(event) => setPassword(event.target.value)}
          width="270px"
        />

        <Field
          type="password"
          value={passwordConfirm}
          placeholder={"Confirmação de Senha"}
          onChange={(event) => setPasswordConfirm(event.target.value)}
          width="270px"
        />

        <Field
          value={organizationCode}
          placeholder={"Código da Organização"}
          onChange={(event) => setOrganizationCode(event.target.value)}
          width="270px"
        />

      </div>

      <div className={style.form__terms}>
        <input type="checkbox" name="newsletter" value="subscribe"></input>
        <p>Concordo com os <a href="a">termos e condições</a></p>
      </div>

      <Button value="Registrar-se" width="272px" bgcolor="#FF691A" />
    </div>
  );
}

export default RegisterForm;
