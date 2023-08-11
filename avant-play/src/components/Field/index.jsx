import style from "./Field.module.scss";

const Field = ({type = 'text', value, onChange, required, placeholder}) => {
  return (
    <div className={style.field}>

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