import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Assuming you have a custom CSS file for additional styles

const App = () => {
  return (
    <div className="App">
      <center><h1 id="moving-text">Strength Training</h1></center>
      <div className="main">
        <Card 
          imgSrc="https://cdn.mos.cms.futurecdn.net/oYDbf5hQAePHEBNZTQMXRA-1200-80.jpg" 
          title="Push ups" 
          text="Push-ups are a classic bodyweight exercise that strengthens and tones the upper body muscles, particularly the chest, shoulders, and triceps. They are a versatile exercise that can be done anywhere, with no equipment required." 
          link="stop.html" 
        />
        <Card 
          imgSrc="https://tse4.mm.bing.net/th?id=OIP.WGNIQi_rBTn8bAPJqL06pQHaE8&pid=Api&P=0&h=180" 
          title="Pull ups" 
          text="Pull-ups are another fantastic bodyweight exercise that targets your upper body, but with a different emphasis compared to push-ups. They primarily work your back muscles, including the latissimus dorsi (lats), biceps, and shoulders." 
          link="stop.html" 
        />
        <Card 
          imgSrc="https://tse3.mm.bing.net/th?id=OIP.iHeZY6p0wr4UumCF29CvegHaD3&pid=Api&P=0&h=180" 
          title="Crunches" 
          text="Crunches are a popular abdominal exercise that target your rectus abdominis, the 'six-pack' muscle. While crunches can help tone your abs, it's important to perform them correctly to avoid injury and maximize effectiveness." 
          link="stop.html" 
        />
        <Card 
          imgSrc="https://tse1.mm.bing.net/th?id=OIP.pJYgPEojrLvS6C4PGfV7ewHaFk&pid=Api&P=0&h=180" 
          title="Squats" 
          text="Squats are a fundamental bodyweight exercise that strengthens and tones several lower body muscle groups, making them a valuable addition to any workout routine." 
          link="stop.html" 
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
