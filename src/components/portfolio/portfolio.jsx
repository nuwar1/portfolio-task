import style from "./Portfolio.module.css"
import img1 from "./../../assets/images/cabin.png"
import img2 from "./../../assets/images/cake.png"
import img3 from "./../../assets/images/circus.png"
import img4 from "./../../assets/images/game.png"
import img5 from "./../../assets/images/safe.png"
import img6 from "./../../assets/images/submarine.png"
function Portfolio() {

    return (
        <section className="py-5">
            <h2 className={`text-center text-uppercase fw-semibold ${style.heading}`}>Portfolio</h2>
            <div className="container">
                <div className="row py-4">
                    <div className="col-md-4 col-sm-6">
                        <img className={`img-fluid mb-4 ${style.image}`} src={img1} alt="" />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <img className={`img-fluid mb-4 ${style.image}`} src={img2} alt="" />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <img className={`img-fluid mb-4 ${style.image}`} src={img3} alt="" />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <img className={`img-fluid mb-4 ${style.image}`} src={img4} alt="" />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <img className={`img-fluid mb-4 ${style.image}`} src={img5} alt="" />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <img className={`img-fluid mb-4 ${style.image}`} src={img6} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Portfolio;