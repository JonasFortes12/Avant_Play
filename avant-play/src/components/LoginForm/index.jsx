import Button from "../Button";
import style from "./LoginForm.module.scss";
import logo from "../../assets/logo-gamificacao.png";
import Field from "../Field";

function LoginForm() {
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

      <Field placeholder={"E-mail"} />
      <Field placeholder={"Senha"} />

      <Button value="Entrar" width="272px" bgcolor="#4C4CE8" />

      <div className={style.form__keepConected}>
        <input type="checkbox" name="newsletter" value="subscribe"></input>
        <p>Manter Conectado</p>
      </div>

      <div className={style.form__belowButtons}>
        <Button value="Registrar-se" width="111px" bgcolor="#4C4CE8" />
        <Button value="Esqueci a Senha" width="141px" bgcolor="#FF691A" />
      </div>

      <div className={style.form__areYouManager}>
        <label>Você é um gestor?</label>
        <Button value="Entrar como gestor" width="272px" bgcolor="#4C4CE8" />
      </div>


    </div>
  );
}

export default LoginForm;
