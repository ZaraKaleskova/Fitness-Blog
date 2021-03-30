import {Link} from 'react-router-dom';

const Eating = () =>
{
    return(

        <section id="two" class="wrapper alt spotlight style2">
        <div class="inner">
            <a href="#" class="image"><img src="images/pic02.jpg" alt="" /></a>
            <div class="content">
                <h2 class="major">Eat like a champion</h2>
                <p>Don't leave nutrition to chance. Your body deserves the best fuel to preform at its best rate. Nutrition is of equal, if not bigger importance than training. Find your prefect program today. Explore the different options by clicking the button below.</p>
                <Link to="/nutrition" class="special">Learn more</Link>
            </div>
        </div>
    </section>


    );
   
}

export default Eating;