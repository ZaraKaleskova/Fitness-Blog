import {Link} from 'react-router-dom';
import winning from './winning.png';
import {Component} from 'react'; 

const Competing = () =>
{
    return(
        <section id="three" className="wrapper spotlight style3">
        <div className="inner">
            <a href="#" className="image"><img src={winning} alt="" /></a>
            <div className="content">
                <h2 className="major">Become a champion</h2>
                <p>Custom tailored plans for true champions. Knowledge and experience put in crafting your program to brind the best version of you. Suited for any federation and className. Find out the blueprint for your victory below.</p>
                <Link to="/competing" className="special">Learn more</Link>
            </div>
        </div>
    </section>


    );
   
};

export default Competing;