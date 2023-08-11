import Button from "../Button";
import style from "./LoginForm.module.scss";
import logo from "../../assets/logo-gamificacao.png";

function LoginForm() {
  return (
    <div className={style.form}>
      <div className={style.form__img}>
        <img src={logo} alt="" />
      </div>

      <p>
        Bem-vindo(a)! <br/>Faça login para desvendar a LGPD e aprender
        <br/> <span>a proteger seus dados.</span>
      </p>

      <Button value="Login" width="272px" bgcolor="#4C4CE8" />
    </div>
  );
}

export default LoginForm;
