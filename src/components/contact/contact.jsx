import style from "./Contact.module.css"
function Contact() {

    return (
        <section className="py-5 vh-100">
            <h2 className={`text-center text-uppercase fw-semibold  ${style.heading}`}>Contact me</h2>
            <div className="container py-4">
                <div className="form-floating mb-3">
                    <input
                        id="name"
                        type="text"
                        placeholder=" "
                        className="form-control border-0 border-bottom rounded-0 bg-transparent shadow-none"
                    />
                    <label htmlFor="name">Full name</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        id="email"
                        type="email"
                        placeholder=" "
                        className="form-control border-0 border-bottom rounded-0 bg-transparent shadow-none"
                    />
                    <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        id="phone"
                        type="tel"
                        placeholder=" "
                        className="form-control border-0 border-bottom rounded-0 bg-transparent shadow-none"
                    />
                    <label htmlFor="phone">Phone number</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea
                        id="message"
                        placeholder=" "
                        className="form-control border-0 border-bottom rounded-0 bg-transparent shadow-none"
                        style={{ height: '120px' }} 
                    />
                    <label htmlFor="message">Message</label>
                </div>
                <button className={`btn ${style.send}`} type="submit">Send</button>
            </div>
            
        </section>
    )
}
export default Contact;