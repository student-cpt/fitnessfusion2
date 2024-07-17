import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Choose from hundreds of workouts, healthy recipes, relaxing meditations, 
        and expert articles, for a whole body and mind approach to feeling great.
        </p>
        <img src="img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Personalization: Use algorithms to recommend bootcamps based on
         user preferences and fitness levels.
        </p>
        <div className="bootcamps">
          <div>
            <h4> Class Schedule and Booking System</h4>
            <p>
            Interactive Calendar: Display upcoming bootcamp sessions with date, time, and instructor details.
            Online Booking: Allow users to reserve their spot in advance.
            Reminders: Send email or SMS reminders for booked sessions.
            </p>
          </div>
          <div>
            <h4>Bootcamp Types and Descriptions.</h4>
            <p>
            Class Descriptions: Detailed information about different bootcamp styles (e.g., HIIT, strength training, cardio-focused, flexibility and mobility).
            Difficulty Levels: Indicate the intensity level (beginner, intermediate, advanced).
           Special Programs: Highlight special bootcamps (e.g., weight loss, muscle gain, sports-specific).
            </p>
          </div>
          <div>
            <h4>Success Stories and Testimonials</h4>
            <p>
            Before and After Photos: Showcase transformations from participants.
            Video Testimonials: Short clips of participants sharing their experiences and results.
           Written Testimonials: Detailed stories from bootcamp members.
            </p>
          </div>
          <div>
            <h4>Resources and Articles</h4>
            <p>
            Blog: Regular posts on fitness tips, success stories, and bootcamp updates.
            Video Library: Exercise demonstrations, full workout videos, and motivational content.
           E-books: Downloadable guides on fitness, nutrition, and wellness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
