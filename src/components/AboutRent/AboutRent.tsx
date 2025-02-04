import style from "./AboutRent.module.scss"
import vitrinaImage from "../../assets/vitrini.png"
export function AboutRent() {
  return (
    <div className={style.container}>
      <div className={style.textBlock}>
        <div className={style.title}>
          <div>Аренда</div> <div>Витрин</div>
        </div>
        <div className={style.text}>
          Приглашаем к сотрудничеству торговые организации, готовые сдать нам в
          аренду витрину или место в витрине под наручные часы.
        </div>
      </div>
      <div className={style.imageBlock}>
        <div>
          <img src={vitrinaImage} alt="img" />
        </div>
      </div>
    </div>
  )
}
