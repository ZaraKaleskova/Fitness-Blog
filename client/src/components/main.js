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
                        <div class="inner">
                            <h2 class="major">Knowledge is power</h2>
                            <p>I firmly believe in giving back to the community as much as possible, while promoting a healthy and active way of living. You can find different articles that cover a variety of subjects. New articles await you every Monday and Thursday.</p>
                            <section class="features">
                                <article>
                                    <a href="#" class="image"><img src="images/pic04.jpg" alt="" /></a>
                                    <h3 class="major">Training</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                                    <a href="#" class="special">Learn more</a>
                                </article>
                                <article>
                                    <a href="#" class="image"><img src="images/pic05.jpg" alt="" /></a>
                                    <h3 class="major">Nutrition</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                                    <a href="#" class="special">Learn more</a>
                                </article>
                                <article>
                                    <a href="#" class="image"><img src="images/pic06.jpg" alt="" /></a>
                                    <h3 class="major">Psychology of Training</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                                    <a href="#" class="special">Learn more</a>
                                </article>
                                <article>
                                    <a href="#" class="image"><img src="images/pic07.jpg" alt="" /></a>
                                    <h3 class="major">Other Topics</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                                    <a href="#" class="special">Learn more</a>
                                </article>
                            </section>
                            <ul class="actions">
                                {/* <Link component={About}>
                                    <button type="button">
                                        Click Me!     </button>
                                </Link> */}

                                {/* <Button path="/about" component={About}> Click Me</Button> */}

                            </ul>
                        </div>
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
