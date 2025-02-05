import style from "./Footer.module.scss"
import image from "../../assets/icons/Group39.png"
import image2 from "../../assets/icons/Group38.png"
import image3 from "../../assets/icons/Group41.png"
import icon from "../../assets/Vector2.png"
import "animate.css"
import { useInView } from "react-intersection-observer"
export function Footer() {
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
        className={`${style.contentFooter} animate__animated ${
          inView1 ? " animate__lightSpeedInLeft" : " "
        }`}
        style={{ opacity: inView1 ? 1 : 0 }}
      >
        <div className={style.logo}>
          <div>
            <img src={icon} alt="icon" />
          </div>
          <div>
            Dmitriy <br /> Kotov
          </div>
        </div>
        <ul>
          <li>
            <a href="#">О часах</a>
          </li>
          <li>
            <a href="#">Дорожная карта</a>
          </li>
          <li>
            <a href="#">Доставка</a>
          </li>
          <li>
            <a href="#">Оплата</a>
          </li>
        </ul>
      </div>
      <div
        ref={ref2}
        className={`${style.socialMedia} animate__animated ${
          inView2 ? " animate__fadeInUp" : " "
        }`}
        style={{ opacity: inView2 ? 1 : 0 }}
      >
        <a>
          <img src={image3} alt="image" />
        </a>
        <a>
          <img src={image} alt="image" />
        </a>
        <a>
          <img src={image2} alt="image" />
        </a>
      </div>
    </div>
  )
}
