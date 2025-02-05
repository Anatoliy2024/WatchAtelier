import style from "./Сooperation.module.scss"
import photo2 from "../../assets/photo2.png"
import { PhotoImage } from "../../assets/svg/photImage"
import "animate.css"
import { useInView } from "react-intersection-observer"
export function Cooperation() {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <div className={style.container}>
      <div
        ref={ref1}
        className={`${style.imageBlock} animate__animated ${
          inView1 ? " animate__backInRight" : " "
        }`}
        style={{ opacity: inView1 ? 1 : 0 }}
      >
        <div>
          <img src={photo2} alt="img" />
        </div>
      </div>
      <div
        ref={ref2}
        className={`${style.textBlock} animate__animated ${
          inView2 ? "  animate__backInLeft" : " "
        }`}
        style={{ opacity: inView2 ? 1 : 0 }}
      >
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
