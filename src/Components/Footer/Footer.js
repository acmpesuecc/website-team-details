import "./Footer.css"
import React from "react"

function Footer() {
    return (
        <div className="footer" id="Footer">
        <footer className="page-footer font-small mdb-color lighten-3 pt-4">

            <div className="container text-center text-md-left">

                <div className="row">

                    <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">

                        <br />
                        <img id="acm" src="acmpesuecc2_coloured.png" alt="acmlogo" />

                    </div>


                    <hr className="clearfix w-100 d-md-none" />

                    <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">

                        <h5 className="font-weight-bold text-uppercase mb-4">Address</h5>

                        <ul className="list-unstyled">
                            <li>
                                <p>
                                    <i className="fas fa-home mr-3"></i>
                                    <a href="https://goo.gl/maps/y77ZCWSxWFko2uj89">PES University Electronic City</a>
                            </p>
                                    </li>
                            <li>
                                <p>
                                    <i className="fas fa-envelope mr-3"></i>
                                    <a href="mailto:acmpesucc@gmail.com" className="mail">acmpesuecc@gmail.com</a>
                                    </p></li>
                            <li>
                                <p>
                                    <i className="fas fa-phone mr-3"></i>+91 89716 17538
                                    </p>
                            </li>
                        </ul>

                    </div>
                    <hr className="clearfix w-100 d-md-none" />

                    <div className="col-md-2 col-lg-2 text-center mx-auto my-4">

                        <h5 className="font-weight-bold text-uppercase mb-4">Follow Us</h5>

                        <a type="button" className="btn-floating btn-fb" href="https://www.facebook.com/acmpesuec">
                            <i className="fab fa-facebook fa-2x"></i>
                        </a>
                        <br />
                        <br />
                        <a type="button" className="btn-floating btn-tw" href="https://twitter.com/acmpesu?lang=en">
                            <i className="fab fa-twitter fa-2x"></i>
                        </a>
                        <br />
                        <br />
                        <a type="button" className="btn-floating btn-insta" href="https://www.instagram.com/acmpesuecc/">
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    )
}

export default Footer;