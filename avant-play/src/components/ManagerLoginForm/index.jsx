import Button from "../Button";
import style from "./ManagerLoginForm.module.scss";
import logo from "../../assets/logo-gamificacao.png";
import Field from "../Field";

import { useState } from "react";

function ManagerLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={style.form}>
      <div className={style.form__img}>
        <img src={logo} alt="" />
      </div>

      <p>
        Bem-vindo(a)! <br />
        Faça login como gestor(a) e acompanhe o progresso dos colaboradores rumo
        à <span>excelência em LGPD.</span>
      </p>

      <Field
        value={email}
        placeholder={"E-mail"}
        onChange={(event) => setEmail(event.target.value)}
      />

      <Field
        type="password"
        value={password}
        placeholder={"Senha"}
        onChange={(event) => setPassword(event.target.value)}
      />

      <Button 
      value="Entrar" 
      width="272px" 
      bgcolor="#090A3E"
      activecolor="#4C4CE8" 
      />

      <div className={style.form__keepConected}>
        <input type="checkbox" name="newsletter" value="subscribe"></input>
        <p>Manter Conectado</p>
      </div>

      <Button 
      value="Registrar Organização" 
      width="272px" 
      bgcolor="#2E318E" 
      activecolor="#4C4CE8"
      />

      <Button 
      value="Esqueci a Senha" 
      width="272px"
      bgcolor="#090A3E" 
      activecolor="#4C4CE8"
      />

    </div>
  );
}

export default ManagerLoginForm;
