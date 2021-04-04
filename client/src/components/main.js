import Footer from './Footer/Footer';
import Training from './Training/Training';
import Eating from './Eating/Eating';
import Competing from './Competing/Competing';




function Main() {
    return (
        <body className={styleMedia.Main}>
            <div id="page-wrapper">
               
              

                <section id="wrapper">

                    <Training />
                    <Eating />
                    <Competing />

                    {/* <section id="four" class="wrapper alt style1">
                        <Articles />
                    </section> */}

                </section>

                <Footer />


            </div>

           
        
        </body>
    );
}

export default Main;
