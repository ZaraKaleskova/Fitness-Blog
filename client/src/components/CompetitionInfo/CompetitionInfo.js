import competingImage from "./competingImage.jpg";

const CompetitionInfo = () => {
  return (
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Competition Coaching</h2>
          <p>A Different Kind of Contest Prep!</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <section>
            <h3 className="major">All about competition coaching</h3>
            <p>
              <b>
                Whether your goals are competitive or not, the guiding
                principles of bodybuilding can help you. It’s a focus on
                nutrition, training intensity, and consistency. I make no
                illusions, I know that what I ask my clients to do is hard stuff
                – but if you’re focused and determined, it doesn’t really matter
                how hard it is. And with the right coach in your corner it can
                make all the difference in achieving your contest prep or
                lifestyle transformation goals.
              </b>
            </p>

            <blockquote>
              “Compete with yourself until the only one left to compete with is
              yourself.” ― Matshona Dhliwayo
            </blockquote>
          </section>

          <section>
            <h3 className="major">WHAT TO EXPECT</h3>
            <div className="row">
              <p>
                What does a coach do? Planning. Feedback. Accountability.
                Keeping you sharp and focused. Being available for questions.
                The strategy involved in coaching someone for a bodybuilding
                competition or a lifestyle transformation is important but
                there’s so much more involved in the process that other coaches
                simply don’t sufficiently focus on. I take the title of “coach”
                seriously – my job is to teach, to help you achieve your
                short-term goals but also make you better in the long-term.{" "}
              </p>
            </div>
          </section>
          <section>
            <h3 className="major">Better you</h3>
            <p>
              <span className="image left">
                <img src={competingImage} alt="" />
              </span>
            </p>
            <p>
              The overall goal is to learn from the experience! I want you to
              learn the ‘ins and outs’ of the process so you’re able to go off
              on your own and continue living your best life and feel amazing!
              Want in? It’s time to start now! Take you ambition to the next
              level and shoot me an email to get more information on the
              competition specific plans available! No matter if you have a show
              planned or you're aspiring to compete one day.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default CompetitionInfo;
