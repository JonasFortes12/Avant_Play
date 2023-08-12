import LoginForm from "../../components/LoginForm";
import style from "./LoginPage.module.scss";

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
