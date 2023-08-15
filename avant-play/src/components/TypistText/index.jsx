import Typed from "typed.js";
import { useEffect, useRef } from "react";
import style from './TypistText.module.scss'

function TypistText({texts}) {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: texts, 
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
