import style from "./AboutCompany.module.scss"
import clock2 from "../../assets/Clock-2.png"
import clock3 from "../../assets/Clock-3.png"
export function AboutCompany() {
  return (
    <div className={style.container}>
      <div className={style.warapper}>
        <div className={style.imgContainer}>
          <div className={style.imgBlock1}>
            <img src={clock2} alt="img" />
          </div>
          <div className={style.imgBlock2}>
            <img src={clock3} alt="img" />
          </div>
          <div className={style.imgBlock3}></div>
        </div>
        <div className={style.textContainer}>
          <div className={style.textTitle}>
            <div>Подробнее о</div>
            <div className={style.textTitleBg}>
              <div>Подробнее о</div>
              <div>Компании</div>
            </div>
            <div>Компании</div>
          </div>
          <div className={style.text}>
            Часовое ателье Дмитрия Котова работает в Москве с 2011 года. Мы
            производим стальные часы под маркой D.Kotov. Производственная база
            расположена на территории технопарка «Иткол» по ул.1-я Фрезерная.
            Цех обрудован современным металлообрабатывающим оборудованием с
            числовым программным управлением, позволяющим производить
            фрезеровку, точение, электроэрозионную и лазерную обработку,
            электролитно-плазменную полировку нержавеющей стали и другие
            технологические операции. В наших часах используются калибры
            российского и японского производства.
          </div>
        </div>
      </div>
    </div>
  )
}
