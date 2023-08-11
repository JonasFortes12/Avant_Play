import style from './Button.module.scss';


function Button({value, width, bgcolor}) {

    return( 
        <>
            <input className={style.input}
             type="button" 
             value={value} 
             style={{
                width: width,
                backgroundColor: bgcolor
            }}
             />
        
        </>
    )

}


export default Button;