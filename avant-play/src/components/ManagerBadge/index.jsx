import style from "./ManagerBadge.module.scss";
import { LuUserCog } from "react-icons/lu";

function ManagerBadge() {
  return (
    <div className={style.main}>
      <div className={style.main__line}></div>
      <div className={style.main__badge}>
        <LuUserCog size={22} />
        <h3>GESTOR</h3>
      </div>
    </div>
  );
}

export default ManagerBadge;
