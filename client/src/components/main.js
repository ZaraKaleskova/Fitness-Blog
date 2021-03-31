import Header from './Header/Header';
import Menu from './Menu/menu';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Training from './Training/Training';
import Eating from './Eating/Eating';
import Competing from './Competing/Competing';
import Articles from './Articles/Articles';



function Main() {
    return (
        <body className={styleMedia.Main}>
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

                <Footer />


            </div>

            <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        
        </body>
    );
}

export default Main;
