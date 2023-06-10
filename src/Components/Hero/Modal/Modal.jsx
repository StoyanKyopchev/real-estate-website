import "./modal.css"

export default function Modal({ isOpen, onClose }) {
    if(!isOpen) return null;
    return (
        <>
            <div 
                className="overlay"
                onClick={onClose}
            >
                <form 
                    className="form" 
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div 
                        className="closeBtn"
                        onClick={onClose}
                    >
                        &times;
                    </div>
                    <h3>Login</h3>
                    <div className="fieldWrapper">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="Enter your username" 
                            required
                        />
                        <span className="inputStyle"></span>
                    </div>
                    <div className="fieldWrapper">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Enter your password" 
                            required
                        />
                        <span className="inputStyle"></span>
                    </div>
                    <a href="#" className="forgotPassword">Forgot password?</a>
                    <div className="loginBtnWrapper">
                        <button className="loginBtn">login</button>
                    </div>
                    <p>Or sign in using:</p>
                    <div className="socialMediaWrapper">
                        <img src={require("../../../images/heroSectionImages/modalImages/fbIcon.png")} />
                        <img src={require("../../../images/heroSectionImages/modalImages/twIcon.png")} />
                        <img src={require("../../../images/heroSectionImages/modalImages/googleIcon.png")} />
                    </div>
                </form>
            </div>
        </>
    )
}