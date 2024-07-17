import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Assuming you have a custom CSS file for additional styles

const App = () => {
  return (
    <div className="App">
      <center><h1 id="moving-text">Cardio Training</h1></center>
      <div className="main">
        <Card 
          imgSrc="https://www.verywellfit.com/thmb/eI8sZnthJHZvlLewZXy_GizeTXU=/6000x4002/filters:fill(FFDB5D,1)/lowerbodyshotofmanrunningongravelroadnearcost-2d5df1c1591b4b069244b62d7c13042b.jpg" 
          title="Running" 
          text="Running is a fantastic way to boost your health. It strengthens your heart, burns calories, and improves mood. Start slow, listen to your body, and find a comfortable pace. You'll be surprised by the physical and mental benefits you can experience with regular runs." 
          link="stop2.html" 
        />
        <Card 
          imgSrc="https://global-uploads.webflow.com/5ca5fe687e34be0992df1fbe/5e43c848d6db4f23a3731395_CARDIO2_04_MEN500%20-%204093%20---%20Expires%20on%2017-10-2022-min.jpg" 
          title="Jumping Jacks" 
          text="Jumping jacks are a simple yet effective full-body exercise. They elevate your heart rate for cardiovascular benefits, burning calories and boosting your mood. With just a jump, spread, and clap (optional), you engage legs, core, arms, and shoulders, all without equipment." 
          link="stop2.html" 
        />
        <Card 
          imgSrc="https://media.gq.com/photos/57055d0d244f7cb971462730/16:9/pass/details-plank.jpg" 
          title="Planks" 
          text="Planks are an isometric exercise that hold immense value for core strength and stability. Imagine holding a high push-up position for as long as you can – that's essentially a plank! It engages your entire core." 
          link="stop2.html" 
        />
        <Card 
          imgSrc="https://www.lesdessousdusport.fr/wp-content/uploads/2020/11/Mountain-climber-1068x601.jpg" 
          title="Hill Climbing" 
          text="Hill climbing isn't about scaling mountains, but it can be just as challenging in its own way. It's a bodyweight exercise that strengthens your legs, glutes, and core. Imagine walking uphill - that's the basic idea!you just need to find an incline." 
          link="stop2.html" 
        />
      </div>
    </div>
  );
};

const Card = ({ imgSrc, title, text, link }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={imgSrc} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-primary">{title}</a>
      </div>
    </div>
  );
};

export default App;
