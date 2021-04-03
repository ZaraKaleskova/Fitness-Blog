import {Link} from 'react-router-dom';
import workingout from './workingOut.png';
const TrainingArticle = () =>
{
    return(

        <article>
        <a href="#" className="image"><img src={workingout} alt="" /></a>
        <h3 class="major">Training</h3>
        <p>Articles about strength training and other functional sports.</p>
        <Link to="/blog" class="special">Learn more</Link>
    </article>


    );
   
}

export default TrainingArticle;