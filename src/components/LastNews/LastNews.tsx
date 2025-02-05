import style from "./LastNews.module.scss"
import image1 from "../../assets/MaskGroup.png"
import image2 from "../../assets/Rectangle40.png"
import "animate.css"
import { useInView } from "react-intersection-observer"
export function LastNews() {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  return (
    <div
      ref={ref1}
      className={`${style.container} animate__animated ${
        inView1 ? " animate__rollIn" : " "
      }`}
      style={{ opacity: inView1 ? 1 : 0 }}
    >
      <h2>
        <div>Последние</div>
        <div>Новости</div>
      </h2>
      <div className={style.mainBlock}>
        <div className={style.content}>
          <div className={style.contentBlock}>
            <div className={style.contentBlockImg}>
              <img src={image1} alt="image" />
            </div>
            <div className={style.contentBlockText}>
              <div className={style.data}>
                <div>01</div>
                <div>ЯНВ</div>
              </div>
              <div className={style.news}>
                <div>
                  Часовое ателье Дмитрия Котова работает в Москве с 2011 года.
                  Мы производим стальные часы под маркой D.Kotov.
                  Производственная база расположена на территории технопарка
                  «Иткол» по ул.1-я Фрезерная.
                </div>
                <div>
                  <a href="#">Читать полностью</a>
                </div>
              </div>
            </div>
          </div>
          <div className={style.contentBlock}>
            <div className={style.contentBlockImg}>
              <img src={image2} alt="image" />
            </div>
            <div className={style.contentBlockText}>
              <div className={style.data}>
                <div>02</div>
                <div>ЯНВ</div>
              </div>
              <div className={style.news}>
                <div>
                  Часовое ателье Дмитрия Котова работает в Москве с 2011 года.
                  Мы производим стальные часы под маркой D.Kotov.
                  Производственная база расположена на территории технопарка
                  «Иткол» по ул.1-я Фрезерная.
                </div>
                <div>
                  <a href="#">Читать полностью</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.button}>Показать все новости</div>
      </div>
    </div>
  )
}
