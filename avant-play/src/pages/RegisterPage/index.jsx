import RegisterForm from "../../components/RegisterForm";
import style from "./RegisterPage.module.scss";
import logo from "../../assets/logo-gamificacao.png";
import TypistText from "../../components/TypistText";
import { useState } from "react";

function RegisterPage() {

  const typedTexts= [
    "Junte-se à comunidade Avant Play e embarque em uma jornada divertida de aprendizagem sobre LGPD",
    "A Avant Play traz a combinação perfeita entre aprendizado e diversão. Cadastre-se agora e comece a jogar enquanto adquire conhecimentos sobre LGPD."
  ]

  return (
    <section className={style.main}>
      <div className={style.main__bgImage}>
        <div>
          <img src={logo} alt="" />
        </div>
        <TypistText
        texts={typedTexts}
        />
      </div>

      <div className={style.main__sectionForm}>
        <RegisterForm />
      </div>
    </section>
  );
}

export default RegisterPage;
