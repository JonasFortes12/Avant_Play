import Typed from "typed.js";
import { useEffect, useRef } from "react";
import style from './TypistText.module.scss'

function TypistText() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Junte-se à comunidade Avant Play e embarque em uma jornada divertida de aprendizagem sobre LGPD",
        "A Avant Play traz a combinação perfeita entre aprendizado e diversão. Cadastre-se agora e comece a jogar enquanto adquire conhecimentos sobre LGPD."
      ], 
      startDelay: 500,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 2000,
      smartBackspace: true,
      loop: true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={style.typed}>
      {/* Element to display typing strings */}
      <span ref={el}></span>
    </div>
  );
}

export default TypistText;
