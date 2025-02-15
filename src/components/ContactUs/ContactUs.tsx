import style from "./ContactUs.module.scss"

import icon from "../../assets/icons/Group33.png"

import icon2 from "../../assets/icons/Group2.png"
import icon3 from "../../assets/icons/Group8.png"
import icon4 from "../../assets/icons/Group1.png"
import icon5 from "../../assets/icons/Group.png"
import "animate.css"
import { useInView } from "react-intersection-observer"
export function ContactUs() {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <div className={style.container}>
      <div
        ref={ref1}
        className={`${style.contact} animate__animated ${
          inView1 ? " animate__fadeInTopLeft" : ""
        }`}
        style={{ opacity: inView1 ? 1 : 0 }}
      >
        <div className={style.contactTitle}>Контакты</div>
        <div className={style.contactInfo}>
          <div>
            <div className={style.addressIcon}>
              <img src={icon} alt="icon" />
            </div>

            <div>Россия, Москва, 1-я Фрезерная ул., д.2/1, корп.9</div>
          </div>
          <div>
            <div className={style.addressIcon}>
              <img src={icon2} alt="icon" />
            </div>
            <div>+7 (995) 720 86 33</div>
          </div>
          <div>
            <div className={style.addressIcon}>
              <img src={icon3} alt="icon" />
            </div>
            <div>sales@marsek.ch</div>
          </div>
          <div>
            <div className={style.addressIcon}>
              <img src={icon4} alt="icon" />
            </div>
            <div>marsek17</div>
          </div>
          <div>
            <div className={style.addressIcon}>
              <img src={icon5} alt="icon" />
            </div>
            <div>d.kotov</div>
          </div>
        </div>

        <div className={style.contactButton}>
          <a>Оставить заявку на звонок</a>
        </div>
      </div>
    </div>
  )
}
