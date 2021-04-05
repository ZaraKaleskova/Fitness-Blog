import TrainingArticle from './TrainingArticle/TrainingArticle';
import NutritionArticle from './NutritionArticle/NutritionArticle';
import PsychologyArticle from './PsychologyArticle/PsychologyArticle';
import OtherArticle from './OtherArticle/OtherArticle';

const Articles = ({    
    username
}) =>
{
    return(        
        <div className="innerArticles">
        <h2 class="major">Knowledge is power</h2>
        <h1> Hello {username} here</h1>
        <p>I firmly believe in giving back to the community as much as possible, while promoting a healthy and active way of living. You can find different articles that cover a variety of subjects. New articles await you every Monday and Thursday.</p>
       
        <section class="features">
                <TrainingArticle />
                <NutritionArticle />
                 <PsychologyArticle />
                <OtherArticle /> 
        </section>
      
    </div>
    );
   
}

export default Articles;