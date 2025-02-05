import style from "./AboutCompany.module.scss"
import clock2 from "../../assets/Clock-2.png"
import clock3 from "../../assets/Clock-3.png"
import "animate.css"
import { useInView } from "react-intersection-observer"
export function AboutCompany() {
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
      <div className={style.warapper}>
        <div className={style.imgContainer}>
          <div
            ref={ref2}
            className={`${style.imgBlock1} animate__animated ${
              inView2 ? " animate__fadeInDown" : " "
            }`}
            style={{ opacity: inView2 ? 1 : 0 }}
          >
            <img src={clock2} alt="img" />
          </div>
          <div
            ref={ref3}
            className={`${style.imgBlock2} animate__animated ${
              inView3 ? " animate__fadeInLeft" : " "
            }`}
            style={{ opacity: inView3 ? 1 : 0 }}
          >
            <img src={clock3} alt="img" />
          </div>
          <div
            ref={ref4}
            className={`${style.imgBlock3} animate__animated ${
              inView4 ? " animate__fadeInUp" : " "
            }`}
            style={{ opacity: inView4 ? 1 : 0 }}
          ></div>
        </div>
        <div
          ref={ref1}
          className={`${style.textContainer} animate__animated ${
            inView1 ? " animate__zoomIn" : " "
          }`}
          style={{ opacity: inView1 ? 1 : 0 }}
        >
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
