import style from './Button.module.scss';
import { useState } from 'react';


function Button({value, width, bgcolor='#4C4CE8', activecolor='#090A3E'}) {

    const [isActive, setIsActive] = useState(false);

    const buttonStyle = {
        width: width,
        backgroundColor: isActive ? activecolor : bgcolor

    }

    return( 
        <>
            <input className={style.input}
             type="button" 
             value={value} 
             style={buttonStyle}
             onMouseUp={() => setIsActive(true)}
             onMouseLeave={() => setIsActive(false)}
             />
        
        </>
    )

}


export default Button;