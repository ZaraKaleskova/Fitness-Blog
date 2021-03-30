import {Link} from 'react-router-dom';
import winning from './winning.png';

const Competing = () =>
{
    return(
        <section id="three" class="wrapper spotlight style3">
        <div class="inner">
            <a href="#" class="image"><img src={winning} alt="" /></a>
            <div class="content">
                <h2 class="major">Become a champion</h2>
                <p>LCustom tailored plans for true champions. Knowledge and experience put in crafting your program to brind the best version of you. Suited for any federation and class. Find out the blueprint for your victory below.</p>
                <Link to="/competing" class="special">Learn more</Link>
            </div>
        </div>
    </section>


    );
   
}

export default Competing;