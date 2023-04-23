import Company from "./Company"
import Features from "./Features"


const MobileMenu = () => {
    return (<>
        <div className="hiddenMenu">
            <Features />
            <Company />
            <div>
            <button className="careers">Careers</button>
            </div>
            <div>
            <button className="about">About</button>
            </div>
            <div className="login-part">
            <button className="login">Login</button>
            </div>
            <div className="register-part">
            <button className="register">Register</button>
            </div>
        </div>
        </>
    )
}

export default MobileMenu