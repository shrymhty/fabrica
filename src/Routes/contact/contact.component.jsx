import "./contact.styles.scss";

const Contact = () => {

    return (
        <div className="contact-container">
            <h2>Rudraneel Dutta</h2>
            <div className="contact-box">
                <div className="contact-item">
                    <strong>Phone:</strong> +91-8617705295
                </div>
                <div className="contact-item">
                    <strong>Email:</strong> its.rudraneel@gmail.com
                </div>
                <div className="contact-item">
                    <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/its-rudraneel" target="_blank" rel="noopener noreferrer">linkedin.com/in/its-rudraneel</a>
                </div>
                <div className="contact-item">
                    <strong>GitHub:</strong> <a href="https://github.com/rudyoactiv" target="_blank" rel="noopener noreferrer">github.com/rudyoactiv</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
