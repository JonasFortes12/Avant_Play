import { useState } from 'react';
import style from './Button.module.scss';


function Button({value, width, bgcolor}) {

    return( 
        <>
            <input 
             type="button" 
             value={value} 
             className={style}
             style={{
                width: width,
                backgroundColor: bgcolor
            }}
             />
        
        </>
    )

}


export default Button;