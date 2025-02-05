import style from "./ProductionStage.module.scss"
import image1 from "../../assets/MaskGroup.png"
import image2 from "../../assets/Rectangle40.png"
import image3 from "../../assets/Rectangle50.png"
import image4 from "../../assets/Rectangle42.png"
import "animate.css"
import { useInView } from "react-intersection-observer"

export function ProductionStage() {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <div className={style.container}>
      <div className={style.titleBlock}>
        <div className={style.title}>
          <div>Этапы</div>

          <div>Производства</div>
        </div>
      </div>

      <div className={style.content}>
        <div
          ref={ref1}
          className={`${style.blockContent} animate__animated ${
            inView1 ? "animate__backInLeft " : " "
          }`}
          style={{ opacity: inView1 ? 1 : 0 }}
        >
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

        <div
          ref={ref2}
          className={`${style.blockContent} animate__animated ${
            inView2 ? "animate__backInRight " : " "
          }`}
          style={{ opacity: inView2 ? 1 : 0 }}
        >
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

        <div
          ref={ref3}
          className={`${style.blockContent} animate__animated ${
            inView3 ? "animate__backInLeft " : " "
          }`}
          style={{ opacity: inView3 ? 1 : 0 }}
        >
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

        <div
          ref={ref4}
          className={`${style.blockContent} animate__animated ${
            inView4 ? "animate__backInRight " : " "
          }`}
          style={{ opacity: inView4 ? 1 : 0 }}
        >
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
