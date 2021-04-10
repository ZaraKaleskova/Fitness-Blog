import nutritionImage from './nutritionImage.png';
import {Link} from 'react-router-dom';

const NutritionArticle = () =>
{
    return(

        <article>
        <a href="#" class="image"><img src={nutritionImage} alt="" /></a>
        <h3 class="major">Nutrition</h3>
        <p>Everything you need to know about nutrition and healthy eating.</p>
        <Link to="/allnutritionarticles" class="special">Learn more</Link>
    </article>

    );
   
}

export default NutritionArticle;