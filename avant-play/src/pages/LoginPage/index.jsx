import LoginForm from "../../components/LoginForm";
import style from "./LoginPage.module.scss";
import astronaut01 from "../../assets/astronaut01.png"

function LoginPage() {
  return (
      <section className={style.main}>

        <div className={style.main__bgImage}>
          
        </div>

        <div className={style.main__sectionForm}>
          <LoginForm />
        </div>
        
      </section>

  );
}

export default LoginPage;
