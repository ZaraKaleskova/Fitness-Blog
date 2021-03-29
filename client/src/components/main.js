import style from './assets/css/main.css';
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';
// import About from './About/About';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Header from './Header/Header';
import Menu from './Menu/menu';
import Banner from './Banner/Banner';
import Training from './Training/Training';
import Eating from './Eating/Eating';
import Competing from './Competing/Competing';
import Articles from './Articles/Articles';

function Main() {
    return (
        <body class={styleMedia.Main}>
            <div id="page-wrapper">
               <Header />                
               <Menu />
                <Banner />
                <section id="wrapper">

                    <Training />
                    <Eating />
                    <Competing />

                    <section id="four" class="wrapper alt style1">
                    <Articles />
                    </section>

                </section>


                <section id="footer">
                    <div class="inner">
                        <h2 class="major">Get in touch</h2>
                        <p>Send a quick message about training plans, nutritional programs or any other inquiry. You can also give a call the number below for more information or potential partnerships.</p>
                        <form method="post" action="#">
                            <div class="fields">
                                <div class="field">
                                    <label for="name">Name</label>
                                    <input type="text" name="name" id="name" />
                                </div>
                                <div class="field">
                                    <label for="email">Email</label>
                                    <input type="email" name="email" id="email" />
                                </div>
                                <div class="field">
                                    <label for="message">Message</label>
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

            </div>



        </body>
    );
}

export default Main;
