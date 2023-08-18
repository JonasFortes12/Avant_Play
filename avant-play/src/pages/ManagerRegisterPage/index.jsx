import style from "./ManagerRegisterPage.module.scss";
import logo from "../../assets/logo-gamificacao.png";
import TypistText from "../../components/TypistText";
import ManagerRegisterForm from "../../components/ManagerRegisterForm";

function ManagerRegisterPage() {

  const typedTexts= [
    "Faça seu cadastro como gestor(a) e conduza sua equipe para o sucesso na proteção de dados.",
    "No Avant Play, você como gestor(a) assume o controle do desenvolvimento em LGPD de seus colaboradores. Cadastre-se agora e conduza-os rumo ao sucesso."
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
        <ManagerRegisterForm/>
      </div>
    </section>
  );
}

export default ManagerRegisterPage;