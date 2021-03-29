import TrainingArticle from './TrainingArticle/TrainingArticle';
import NutritionArticle from './NutritionArticle/NutritionArticle';
import PsychologyArticle from './PsychologyArticle/PsychologyArticle';
import OtherArticle from './OtherArticle/OtherArticle';

const Articles = () =>
{
    return(        
        <div class="inner">
        <h2 class="major">Knowledge is power</h2>
        <p>I firmly believe in giving back to the community as much as possible, while promoting a healthy and active way of living. You can find different articles that cover a variety of subjects. New articles await you every Monday and Thursday.</p>
        <section class="features">
                <TrainingArticle />
                <NutritionArticle />
                <PsychologyArticle />
                <OtherArticle />
        </section>
        <ul class="actions">
            {/* <Link component={About}>
                <button type="button">
                    Click Me!     </button>
            </Link> */}

            {/* <Button path="/about" component={About}> Click Me</Button> */}

        </ul>
    </div>
    );
   
}

export default Articles;