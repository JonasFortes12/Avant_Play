import style from "./Field.module.scss";

const Field = ({type = 'text', value, onChange, required, placeholder, width='240px'}) => {
  return (
    <div className={style.field} style={{width: width}}>

      <input 
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
      />

    </div>
  );
};

export default Field;