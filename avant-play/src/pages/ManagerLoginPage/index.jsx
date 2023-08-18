import LoginForm from "../../components/LoginForm";
import ManagerLoginForm from "../../components/ManagerLoginForm";
import style from "./ManagerLoginPage.module.scss";

function ManagerLoginPage() {
  return (
      <section className={style.main}>

        <div className={style.main__bgImage}>
          
        </div>

        <div className={style.main__sectionForm}>
          <ManagerLoginForm/>
        </div>
        
      </section>

  );
}

export default ManagerLoginPage;
