import RegisterForm from "../../components/RegisterForm";
import style from "./RegisterPage.module.scss";
import logo from "../../assets/logo-gamificacao.png";
import TypistText from "../../components/TypistText";

function RegisterPage() {

  return (
    <section className={style.main}>
      <div className={style.main__bgImage}>
        <div>
          <img src={logo} alt="" />
        </div>
        <TypistText/>
      </div>

      <div className={style.main__sectionForm}>
        <RegisterForm />
      </div>
    </section>
  );
}

export default RegisterPage;
