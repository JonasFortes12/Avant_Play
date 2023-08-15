import style from "./ManagerRegisterForm.module.scss";
import Button from "../Button";
import Field from "../Field";

import { useState } from "react";

function ManagerRegisterForm() {
  const [managerName, setManagerName] = useState("");
  const [responsibleManagerName, setResponsibleManagerName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [CNPJ, setCNPJ] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <div className={style.form}>
      <h3>CADASTRE SUA ORGANIZAÇÃO!</h3>

      <div className={style.form__fields}>
        <Field
          value={managerName}
          placeholder={"Nome do Gestor"}
          onChange={(event) => setManagerName(event.target.value)}
          width="372px"
        />

        <Field
          value={responsibleManagerName}
          placeholder={"Nome do Gestor Responsável"}
          onChange={(event) => setResponsibleManagerName(event.target.value)}
          width="372px"
        />

        <Field
          value={organizationName}
          placeholder={"Nome da Organização"}
          onChange={(event) => setOrganizationName(event.target.value)}
          width="372px"
        />

        <Field
          value={CNPJ}
          placeholder={"CNPJ"}
          onChange={(event) => setCNPJ(event.target.value)}
          width="372px"
        />

        <Field
          type="file"
          placeholder={"Logomarca da Organização"}
          width="372px"
        />


        <Field
          value={email}
          placeholder={"E-mail"}
          onChange={(event) => setEmail(event.target.value)}
          width="372px"
        />

        <Field
          type="password"
          value={password}
          placeholder={"Senha"}
          onChange={(event) => setPassword(event.target.value)}
          width="372px"
        />

        <Field
          type="password"
          value={passwordConfirm}
          placeholder={"Confirmação de Senha"}
          onChange={(event) => setPasswordConfirm(event.target.value)}
          width="372px"
        />

      </div>

      <div className={style.form__terms}>
        <input type="checkbox" name="newsletter" value="subscribe"></input>
        <p>
          Concordo com os <a href="">termos e condições</a>
        </p>
      </div>

      <Button value="Registrar Organização" width="272px" bgcolor="#2E318E" />
    </div>
  );
}

export default ManagerRegisterForm;
