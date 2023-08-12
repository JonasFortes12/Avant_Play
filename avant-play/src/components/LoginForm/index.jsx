import Button from "../Button";
import style from "./LoginForm.module.scss";
import logo from "../../assets/logo-gamificacao.png";
import Field from "../Field";

import { useState } from "react";

function LoginForm() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={style.form}>
      <div className={style.form__img}>
        <img src={logo} alt="" />
      </div>

      <p>
        Bem-vindo(a)! <br />
        Faça login para desvendar a LGPD e aprender
        <br /> <span>a proteger seus dados.</span>
      </p>

      <Field 
      value={email} 
      placeholder={"E-mail"} 
      onChange={(event) =>
        setEmail(event.target.value)
      } 
      />

      <Field 
      type="password"
      value={password} 
      placeholder={"Senha"}
      onChange={(event) =>
        setPassword(event.target.value)
      } 
      />

      <Button value="Entrar" width="272px" />

      <div className={style.form__keepConected}>
        <input type="checkbox" name="newsletter" value="subscribe"></input>
        <p>Manter Conectado</p>
      </div>

      <div className={style.form__belowButtons}>
        <Button value="Registrar-se" width="111px" bgcolor="#FF691A" />
        <Button value="Esqueci a Senha" width="141px" />
      </div>

      <div className={style.form__areYouManager}>
        <label>Você é um gestor?</label>
        <Button value="Entrar como gestor" width="272px" bgcolor="#FF691A" />
      </div>
    </div>
  );
}

export default LoginForm;
