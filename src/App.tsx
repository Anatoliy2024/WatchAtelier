import style from "./App.module.scss"
import { AboutCompany } from "./components/AboutCompany/AboutCompany"
import { AboutRent } from "./components/AboutRent/AboutRent"
import { ClockModel } from "./components/ClockModel/ClockModel"
import { ContactUs } from "./components/ContactUs/ContactUs"
import { Cooperation } from "./components/cooperation/Сooperation"
import { Footer } from "./components/Footer/Footer"
import { HeaderBlock } from "./components/HeaderBlock/HeaderBlock"
import { LastNews } from "./components/LastNews/LastNews"
import { ProductionStage } from "./components/ProductionStage/ProductionStage"

function App() {
  return (
    <div className={style.container}>
      <div className={`${style.wrapperBlock} ${style.headerBg}`}>
        <HeaderBlock />
      </div>
      <div className={`${style.wrapperBlock} ${style.blackBg}`}>
        <AboutCompany />
      </div>
      <div className={style.wrapperBlock}>
        <AboutRent />
      </div>
      <div className={`${style.wrapperBlock} ${style.blackBg}`}>
        <ProductionStage />
      </div>
      <div className={style.wrapperBlock}>
        <Cooperation />
      </div>
      <div className={`${style.wrapperBlock} ${style.clockModelBg}`}>
        <ClockModel />
      </div>
      <div className={style.wrapperBlock}>
        <LastNews />
      </div>
      <div className={`${style.wrapperBlock} ${style.contactUsBg}`}>
        <ContactUs />
      </div>
      <div className={`${style.wrapperBlock} ${style.blackBg}`}>
        <Footer />
      </div>
    </div>
  )
}

export default App
