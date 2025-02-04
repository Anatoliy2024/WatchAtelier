import style from "./ProductionStage.module.scss"
import image1 from "../../assets/MaskGroup.png"
import image2 from "../../assets/Rectangle40.png"
import image3 from "../../assets/Rectangle50.png"
import image4 from "../../assets/Rectangle42.png"
export function ProductionStage() {
  return (
    <div className={style.container}>
      <div className={style.titleBlock}>
        <div className={style.title}>
          <div>Этапы</div>

          <div>Производства</div>
        </div>
      </div>

      <div className={style.content}>
        <div className={style.blockContent}>
          <div className={style.blockImage}>
            <img src={image1} alt="image" />
            <div>01</div>
          </div>
          <div className={style.blockContentText}>
            <div className={style.blockContentNumber}>01</div>
            <div className={style.blockContentTextMain}>
              Часовое ателье Дмитрия Котова работает в Москве с 2011 года. Мы
              производим стальные часы под маркой D.Kotov. Производственная база
              расположена на территории технопарка «Иткол» по ул.1-я Фрезерная.
            </div>
          </div>
        </div>

        <div className={style.blockContent}>
          <div className={style.blockImage}>
            <img src={image2} alt="image" />
            <div>02</div>
          </div>
          <div className={style.blockContentText}>
            <div className={style.blockContentNumber}>02</div>
            <div className={style.blockContentTextMain}>
              Часовое ателье Дмитрия Котова работает в Москве с 2011 года. Мы
              производим стальные часы под маркой D.Kotov. Производственная база
              расположена на территории технопарка «Иткол» по ул.1-я Фрезерная.
            </div>
          </div>
        </div>

        <div className={style.blockContent}>
          <div className={style.blockImage}>
            <img src={image3} alt="image" />
            <div>03</div>
          </div>
          <div className={style.blockContentText}>
            <div className={style.blockContentNumber}>03</div>
            <div className={style.blockContentTextMain}>
              Часовое ателье Дмитрия Котова работает в Москве с 2011 года. Мы
              производим стальные часы под маркой D.Kotov. Производственная база
              расположена на территории технопарка «Иткол» по ул.1-я Фрезерная.
            </div>
          </div>
        </div>

        <div className={style.blockContent}>
          <div className={style.blockImage}>
            <img src={image4} alt="image" />
            <div>04</div>
          </div>
          <div className={style.blockContentText}>
            <div className={style.blockContentNumber}>04</div>
            <div className={style.blockContentTextMain}>
              Часовое ателье Дмитрия Котова работает в Москве с 2011 года. Мы
              производим стальные часы под маркой D.Kotov. Производственная база
              расположена на территории технопарка «Иткол» по ул.1-я Фрезерная.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
