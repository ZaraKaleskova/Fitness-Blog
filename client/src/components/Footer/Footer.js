

const Footer = () =>
{

    const onSubmitHandler = function(e) {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.message.value);
    };

    const onUsernameChange = (e) => {
        console.log(e.target.value);
    };

    return(        
        <section id="footer">
        <div className="inner">
            <h2 className="major">Get in touch</h2>
            <p>Send a quick message about training plans, nutritional programs or any other inquiry. You can also give a call the number below for more information or potential partnerships.</p>
            <form onSubmit={onSubmitHandler}>
                <div className="fields">
                    <div class="field">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" onChange={onUsernameChange} />
                    </div>
                    <div class="field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div class="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="4"></textarea>
                    </div>
                </div>
                <ul class="actions">
                    <li><input type="submit" value="Send Message" /></li>
                </ul>
            </form>
            <ul class="contact">
                <li class="icon solid fa-home">
                    Sports Center Kuntosumppu<br />
                    Karjalankatu 29, 26100 Rauma<br />
                    Finland
                </li>
                <li class="icon solid fa-phone">+35828221639</li>
                <li class="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
                <li class="icon brands fa-twitter"><a href="#">twitter.com/untitled-tld</a></li>
                <li class="icon brands fa-facebook-f"><a href="#">facebook.com/untitled-tld</a></li>
                <li class="icon brands fa-instagram"><a href="#">instagram.com/untitled-tld</a></li>
            </ul>
            <ul class="copyright">
                <li>&copy; Strength And Aesthetics Inc. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
        </div>
    </section>
    );
   
}

export default Footer;