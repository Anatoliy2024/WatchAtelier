import style from "./Footer.module.scss"
import image from "../../assets/icons/Group39.png"
import image2 from "../../assets/icons/Group38.png"
import image3 from "../../assets/icons/Group41.png"
import icon from "../../assets/Vector2.png"
export function Footer() {
  return (
    <div className={style.container}>
      <div className={style.contentFooter}>
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
      <div className={style.socialMedia}>
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
