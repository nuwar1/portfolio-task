import style from "./hero.module.css"
import heroImg from "./../../assets/images/avataaars.svg"
function Hero() {

    return (
        <section className={style.hero}>
            <div className="container">
                <div className="d-flex flex-column py-5 justify-content-center align-items-center gap-4 text-white">
                    <img className={style.userImg} src={heroImg} alt="" />
                    <h1 className="text-uppercase fw-semibold">Start Bootstrap</h1>
                    <h4>Graphic Artist - Web Designer - Illustrator</h4>
                </div>
            </div>
        </section>
    )
}
export default Hero;