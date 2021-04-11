import trainingImage1 from "./trainingImage1.jpg";

const TrainingInfo = () => {
  return (
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Training Coaching</h2>
          <p>Want to eat well and feel better? Your journey starts here!</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <section>
            <h3 className="major">All about training</h3>
            <p>
              <b>
                Online training coaching designed to get you to your health and
                fitness goals with maximum confidence.
              </b>
            </p>
            <h4>Blockquote</h4>
            <blockquote>
              “Time and health are two precious assets that we don’t recognize
              and appreciate until they have been depleted.” – Denis Waitley
            </blockquote>
          </section>

          <section>
            <h3 className="major">Better you</h3>
            <p>
              <span className="image left">
                <img src={trainingImage1} alt="" />
              </span>
              Training will be personally tailored. As we work together, we will
              make adjustments to your workouts based on body composition,
              activity levels and any feedback given by you to find your ideal
              amount training volume.
            </p>
            <p>
              The overall goal is to learn from the experience! I want you to
              learn the ‘ins and outs’ of the process so you’re able to go off
              on your own and continue living your best life and feel amazing!
              Want in? It’s time to start now!
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default TrainingInfo;
