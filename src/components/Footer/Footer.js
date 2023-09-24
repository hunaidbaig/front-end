import { Link } from "react-router-dom";


const Footer = ()=>{
    return(
        <>
           <footer className="site-footer">
                <div className="container">
                    <div className="site-footer-inner">
                        <div className="brand footer-brand">
                            <Link to="#">
                                <img className="header-logo-image" src={process.env.PUBLIC_URL+"dist/images/logo.svg"} alt="Logo" />
                            </Link>
                        </div>
                        <div className="footer-copyright">&copy; all rights reserved to xloop digitals</div>
                    </div>
                </div>
            </footer>  
        </>
    )
}

export default Footer;