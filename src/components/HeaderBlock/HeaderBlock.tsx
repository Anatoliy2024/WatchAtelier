import { Icon } from "../../assets/svg/icon"
import style from "./HeaderBlock.module.scss"
import clockImage from "../../assets/clock_1.png"
import playImage from "../../assets/Polygon.png"
import { useEffect, useState } from "react"
import "animate.css"
import { useInView } from "react-intersection-observer"
export function HeaderBlock() {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden" // Отключаем прокрутку
    } else {
      document.body.style.overflow = "" // Восстанавливаем прокрутку
    }
    return () => {
      document.body.style.overflow = "" // Чистим стиль при размонтировании
    }
  }, [showMenu])
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  return (
    <div className={style.containerHeader}>
      <div className={style.headerTop}>
        <div className={style.iconBlock}>
          <div>
            <Icon />
          </div>
          <div>
            Dmitriy <br /> Kotov
          </div>
        </div>
        <div
          className={`${style.board} ${showMenu ? style.active : ""}`}
          onClick={() => {
            // e.preventDefault()
            setShowMenu(false)
          }}
        >
          <ul
            className={`${style.boardContainer} ${
              showMenu ? style.active : ""
            }`}
          >
            <li>
              <a href="#">О часах</a>
            </li>
            <li>
              <a href="#">Преимущества</a>
            </li>
            <li>
              <a href="#">Диллерам</a>
            </li>
            <li>
              <a href="#">Новости</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
        </div>

        <div
          className={`${style.BurgerMenu}  ${showMenu ? style.Active : ""}`}
          onClick={() => {
            setShowMenu((prev) => !prev)
          }}
        >
          <span></span>
        </div>
      </div>
      <div className={style.headerMain}>
        <div
          ref={ref1}
          className={`${style.headerMainContainer} animate__animated ${
            inView1 ? " animate__pulse" : " "
          }`}
          style={{ opacity: inView1 ? 1 : 0 }}
        >
          <div className={style.headerMainText}>
            <div>Часовое ателье</div>
            <div>Дмитрия Котова</div>
          </div>
          <div className={style.playVideo}>
            <div>
              <img src={playImage} alt="img" />
            </div>
            <div>
              Смотреть <br />
              видео презентацию
            </div>
          </div>
        </div>
        <div
          ref={ref2}
          className={`animate__animated ${
            inView2 ? " animate__fadeInRight" : " "
          }`}
          style={{ opacity: inView2 ? 1 : 0 }}
        >
          <img src={clockImage} alt="image" />
        </div>
      </div>
      {/* <div className={style.bgText}>
        Dmitrix <br /> Kotov
      </div> */}
    </div>
  )
}
