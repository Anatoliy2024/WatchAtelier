import style from "./Сooperation.module.scss"
import photo2 from "../../assets/photo2.png"
import { PhotoImage } from "../../assets/svg/photImage"
export function Cooperation() {
  return (
    <div className={style.container}>
      <div className={style.imageBlock}>
        <div>
          <img src={photo2} alt="img" />
        </div>
      </div>
      <div className={style.textBlock}>
        <div className={style.title}>
          <div>Сотрудничество</div>
        </div>
        <div className={style.text}>
          <div>По вопросам сотрудничества</div>
          <div>Обращайтесь в WhatsApp: </div>
          <div>
            <PhotoImage />
            <span>+7 (995) 720 86 33</span>
          </div>
        </div>
      </div>
    </div>
  )
}
