import style from "./ManagerRegisterForm.module.scss";
import Button from "../Button";
import Field from "../Field";
import { AiOutlineUpload } from "react-icons/ai";

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
      <h3>REGISTRE SUA ORGANIZAÇÃO!</h3>

      <div className={style.form__fields}>
        <Field
          value={managerName}
          placeholder={"Nome do Gestor"}
          onChange={(event) => setManagerName(event.target.value)}
          width="270px"
        />

        <Field
          value={responsibleManagerName}
          placeholder={"Nome do Gestor Responsável"}
          onChange={(event) => setResponsibleManagerName(event.target.value)}
          width="270px"
        />

        <Field
          value={organizationName}
          placeholder={"Nome da Organização"}
          onChange={(event) => setOrganizationName(event.target.value)}
          width="270px"
        />

        <Field
          value={CNPJ}
          placeholder={"CNPJ"}
          onChange={(event) => setCNPJ(event.target.value)}
          width="270px"
        />

        <div className={style.form__fields__inputFile}>
          <label for="logofile">Logomarca da Organização</label>
          <AiOutlineUpload size={20} />
          <input type="file" name="logofile" id="logofile" />
        </div>

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
      </div>

      <div className={style.form__terms}>
        <input type="checkbox" name="newsletter" value="subscribe"></input>
        <p>
          Concordo com os <a href="a">termos e condições</a>
        </p>
      </div>

      <Button value="Registrar Organização" width="272px" bgcolor="#2E318E" />
    </div>
  );
}

export default ManagerRegisterForm;
