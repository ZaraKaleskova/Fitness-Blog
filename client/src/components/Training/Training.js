import {Link} from 'react-router-dom';
import trainingImage from './trainingImage.png';

const Training = () =>
{
    return(
        <section id="one" class="wrapper spotlight style1">
        <div class="inner">
            <a href="#" class="image"><img src={trainingImage} alt="" /></a>
            <div class="content">
                <h2 class="major">Train like a champion</h2>
                <p>Training plans tailored to lifestyle and personal goals. Individual approach, guaranteed to bring results. The training plans are for athletes of all abilities. Find your plan, track progress and get feedback on each step of the way. Click on the button bellow and find your plan today.</p>
                <Link to="/training" class="special">Learn more</Link>
            </div>
        </div>
    </section>

    );
   
}

export default Training;