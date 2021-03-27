import style from './assets/css/main.css';
import {Route, Link, NavLink, Redirect, Switch} from 'react-router-dom';
import About from './About/About';

function Main() {
  return (
    <body class={styleMedia.Main}>

   
        <div id="page-wrapper">

           
                <header id="header" class="alt">
                    <h1><a href="index.html">Solid State</a></h1>
                    <nav>
                        <a href="#menu">Menu</a>
                    </nav>
                </header>

           
                <nav id="menu">
                    <div class="inner">
                        <h2>Menu</h2>
                        <ul class="links">
                            <li><a href="index.html">Home</a></li>
                            
                            <li><a href="#">Log In</a></li>
                            <li><a href="#">Sign Up</a></li>
                        </ul>
                        <a href="#" class="close">Close</a>
                    </div>
                </nav>

            
                <section id="banner">
                    <div class="inner">
                        <div class="logo"><span class="icon fa-gem"></span></div>
                        <h2>This is Solid State</h2>
                      
                    </div>
                </section>

            
                <section id="wrapper">

                  
                        <section id="one" class="wrapper spotlight style1">
                            <div class="inner">
                                <a href="#" class="image"><img src="images/pic01.jpg" alt="" /></a>
                                <div class="content">
                                    <h2 class="major">Magna arcu feugiat</h2>
                                    <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
                                    <a href="#" class="special">Learn more</a>
                                </div>
                            </div>
                        </section>

                 
                        <section id="two" class="wrapper alt spotlight style2">
                            <div class="inner">
                                <a href="#" class="image"><img src="images/pic02.jpg" alt="" /></a>
                                <div class="content">
                                    <h2 class="major">Tempus adipiscing</h2>
                                    <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
                                    <a href="#" class="special">Learn more</a>
                                </div>
                            </div>
                        </section>

                 
                        <section id="three" class="wrapper spotlight style3">
                            <div class="inner">
                                <a href="#" class="image"><img src="images/pic03.jpg" alt="" /></a>
                                <div class="content">
                                    <h2 class="major">Nullam dignissim</h2>
                                    <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
                                    <a href="#" class="special">Learn more</a>
                                </div>
                            </div>
                        </section>

                    
                        <section id="four" class="wrapper alt style1">
                            <div class="inner">
                                <h2 class="major">Vitae phasellus</h2>
                                <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
                                <section class="features">
                                    <article>
                                        <a href="#" class="image"><img src="images/pic04.jpg" alt="" /></a>
                                        <h3 class="major">Sed feugiat lorem</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                                        <a href="#" class="special">Learn more</a>
                                    </article>
                                    <article>
                                        <a href="#" class="image"><img src="images/pic05.jpg" alt="" /></a>
                                        <h3 class="major">Nisl placerat</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                                        <a href="#" class="special">Learn more</a>
                                    </article>
                                    <article>
                                        <a href="#" class="image"><img src="images/pic06.jpg" alt="" /></a>
                                        <h3 class="major">Ante fermentum</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                                        <a href="#" class="special">Learn more</a>
                                    </article>
                                    <article>
                                        <a href="#" class="image"><img src="images/pic07.jpg" alt="" /></a>
                                        <h3 class="major">Fusce consequat</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                                        <a href="#" class="special">Learn more</a>
                                    </article>
                                </section>
                                <ul class="actions">
                                    <li><a href="./About" class="button">Browse All</a>
                                <Route path="/about" component={About} />
                                       
                                    </li>
                                </ul>
                            </div>
                        </section>

                </section>

           
                <section id="footer">
                    <div class="inner">
                        <h2 class="major">Get in touch</h2>
                        <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
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
                                Untitled Inc<br />
                                1234 Somewhere Road Suite #2894<br />
                                Nashville, TN 00000-0000
                            </li>
                            <li class="icon solid fa-phone">(000) 000-0000</li>
                            <li class="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
                            <li class="icon brands fa-twitter"><a href="#">twitter.com/untitled-tld</a></li>
                            <li class="icon brands fa-facebook-f"><a href="#">facebook.com/untitled-tld</a></li>
                            <li class="icon brands fa-instagram"><a href="#">instagram.com/untitled-tld</a></li>
                        </ul>
                        <ul class="copyright">
                            <li>&copy; Untitled Inc. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                        </ul>
                    </div>
                </section>

        </div>

   

</body>
  );
}

export default Main;