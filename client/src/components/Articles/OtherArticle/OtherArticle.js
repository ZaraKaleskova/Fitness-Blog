import everythingElse from './everythingElse.png';

const OtherArticle = () =>
{
    return(        
        <article>
        <a href="#" class="image"><img src={everythingElse} alt="" /></a>
        <h3 class="major">Other Topics</h3>
        <p>Everything else - motivation, transformation, interveis and all in-between.</p>
        <a href="#" class="special">Learn more</a>
    </article>
    );
   
}

export default OtherArticle;