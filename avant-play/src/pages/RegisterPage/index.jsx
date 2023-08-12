import RegisterForm from '../../components/RegisterForm';
import style from './RegisterPage.module.scss';

function RegisterPage() {
    
    return (
        <section className={style.main}>
  
          <div className={style.main__bgImage}>
            
          </div>
  
          <div className={style.main__sectionForm}>
            <RegisterForm/>
          </div>
          
        </section>
  
    );
  }
  
  export default RegisterPage;

