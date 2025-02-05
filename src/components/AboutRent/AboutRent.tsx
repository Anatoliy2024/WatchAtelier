import style from "./AboutRent.module.scss"
import vitrinaImage from "../../assets/vitrini.png"
import "animate.css"
import { useInView } from "react-intersection-observer"
export function AboutRent() {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  return (
    <div className={style.container}>
      <div
        ref={ref1}
        className={`${style.textBlock} animate__animated  ${
          inView1 ? " animate__backInDown" : ""
        }    `}
        style={{ opacity: inView1 ? 1 : 0 }}
      >
        <div className={style.title}>
          <div>Аренда</div> <div>Витрин</div>
        </div>
        <div className={style.text}>
          Приглашаем к сотрудничеству торговые организации, готовые сдать нам в
          аренду витрину или место в витрине под наручные часы.
        </div>
      </div>
      <div
        ref={ref2}
        className={`${style.imageBlock} animate__animated ${
          inView2 ? "  animate__backInUp" : " "
        }`}
        style={{ opacity: inView2 ? 1 : 0 }}
      >
        <div>
          <img src={vitrinaImage} alt="img" />
        </div>
      </div>
    </div>
  )
}
