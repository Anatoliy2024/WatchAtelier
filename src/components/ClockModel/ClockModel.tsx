import style from "./ClockModel.module.scss"
import clockImage1 from "../../assets/Rectangle79.png"
import clockImage2 from "../../assets/Rectangle80.png"
import clockImage3 from "../../assets/Rectangle81.png"
import clockImage4 from "../../assets/clock_1.png"
import { ArrowLeft } from "../../assets/svg/arrowLeft"
import { ArrowRight } from "../../assets/svg/arrowRight"

export function ClockModel() {
  return (
    <div className={style.container}>
      <div className={style.clockModel}>
        <div className={style.clockModelImageBlock}>
          <div className={style.clockModelImageBlockInfo}>
            <h2>
              <div>Модели</div>
              <div>Часов</div>
            </h2>
            <div className={style.back}>&lt; Назад</div>
            <div className={style.imageWrapper}>
              <div>
                <img src={clockImage1} alt="image" />
              </div>
              <div>
                <img src={clockImage2} alt="image" />
              </div>
              <div>
                <img src={clockImage3} alt="image" />
              </div>
            </div>
          </div>
          <div className={style.clockModelImageBlockMain}>
            <div className={style.ImageBlockMainTitle}>
              <div className={style.arrow}>
                <ArrowLeft />
              </div>
              <div>S.01</div>
              <div className={style.arrow}>
                <ArrowRight />
              </div>
            </div>
            <div>
              <img src={clockImage4} alt="image" />
            </div>
          </div>
        </div>
        <ul
        //  className={style.clockModelInfo}
        >
          <li>
            Корпус редкой и сложной формы (бочка) из нержавеющей стали марки
            AISI 304.
          </li>
          <li>Ремонтопригодный механический калибр. </li>
          <li>Сапфировое стекло. </li>
          <li>
            Солидные полновесные стрелки из нержавеющей стали со сферическим
            профилем.
          </li>
          <li>Гильоширование задней крышки твердосплавным резцом. </li>
          <li>
            Гравированный высокохудожественный циферблат, заводная головка из
            нержавеющей стали.
          </li>
        </ul>
      </div>
      <div className={style.dimensions}>
        <h3>Габариты</h3>
        <ul>
          <li>Ширина с головкой 44 мм, высота 12.6 мм, длина 50 мм. </li>
          <li>Механизм калибра 2409а. 17 камней. </li>
          <li>Энергетическая автономность не менее 38 часов. </li>
          <li>Гарантия 3 года. </li>
          <li>Средний суточный ход: -20…+60 сек. </li>
          <li>Частота: 19800 полуколебаний/час. </li>
          <li>Водонепронимаемость: 3 атм. </li>
        </ul>
      </div>
    </div>
  )
}
