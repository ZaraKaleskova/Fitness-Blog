import eatingImage from './eatingImage.jpg';

const EatingInfo = () => {
  return (
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Nutrition Coaching</h2>
          <p>Want to eat well and feel better? Your journey starts here!</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <section>
            <h3 className="major">All about nutrition</h3>
            <p>
              <b>
                Learn how to find freedom and balance via nutrition, exercise,
                and a healthy lifestyle through one-on-one customized
                nonrestrictive macro-based nutrition coaching.
              </b>
            </p>
            <blockquote>
              “Time and health are two precious assets that we don’t recognize
              and appreciate until they have been depleted.” – Denis Waitley
            </blockquote>
            <p>
            Tired of dieting, cutting out entire food groups, and an endless amount of hours in the gym to not see any results? Maybe you struggle to find your food freedom and balance in your life. Or you want to be able to eat as much food as possible while still feeling and looking amazing. I have totally been there and I am here to help you live your best life!
            </p>
          </section>

          <section>
            <h3 className="major">WHAT TO EXPECT</h3>
            <div className="row">
              <p>
                We spend 12-18+ years in school, yet we’re NEVER taught some of
                the basics. How much to eat, how to exercise appropriately for
                the body we want, to love ourselves and say positive things when
                we look in the mirror, the importance of nutrient-dense diet,
                sleep, proper digestion and a happy gut, blood sugar balance,
                hormone and menstrual health, and balancing stress. So I’m
                changing the game and empowering people to find freedom via
                nutrition, exercise, and a healthy lifestyle.
                <p>Here is how we will work together: </p>
              </p>
              <div className="col-8 col-2-medium">
                <ul className="alt">
                  <li>A holistic approach to food, health, and wellness.</li>
                  <li>
                    A nonrestrictive macro-based eating approach. You’ll be
                    provided customized goals on how much protein, carb, and fat
                    to eat each day.
                  </li>
                  <li>
                    Keeping tabs on food quality, hunger, digestion, energy levels, menstrual health, hormone health,
                    sleep, and stress to make sure your body functioning to its
                    full capacity.
                  </li>
                  <li>
                    Hydration suggestions, supplement suggestions, and
                    suggestions on how to time your food (in relation to
                    workouts) to ensure you feel great in the gym.
                  </li>
                  <li>
                    Access to me via phone, email, and text along with bi-weekly
                    phone check-ins.
                  </li>
                </ul>
              </div>
            </div>

          </section>

          

          
          <section>
            <h3 className="major">Better you</h3>
            <p>
              <span className="image left">
                <img src={eatingImage} alt="" />
              </span>
              Nutrition coaching will be a macro-based food approach. As we work
              together, we will make adjustments to your calories and macros
              based on body composition, hunger cues, activity levels, and any
              feedback given by you to find your ideal amount of food to live
              your best life. After working with me, you will never diet again,
              have to cut out any food groups, and be a slave to the gym to see
              results. You will learn what food works best to fuel your body and
              find balance in your life, each and every day.
            </p>
            <p>
              <span className="image right">
                <img src="images/pic02.jpg" alt="" />
              </span>I want you to
              learn the ‘ins and outs’ of the process and continue living your best life and feel amazing!
              It’s time to start now!
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default EatingInfo;
