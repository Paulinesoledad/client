
 import React from 'react';
 import postimg from './images/postimg.jpg';
import postimg2 from "./images/postimg2.jpg";
import postimg3 from "./images/postimg3.jpg";

 
export default function Post () {
   return (
    <>
      <div className="post">
    <div className="image">
      <img src={postimg} alt="pics" />
    </div> 
    <div className="text">
      <h2>Benefits And Tips To Eating Well And Healthy </h2>
      <p className="info">
        <a className="author">By Echelon Health</a>
        <time>2023-10-22  16:45</time>
      </p>
      <p className= "summary" >
        We are often told that we need to follow a healthy, balanced diet, but just why is healthy eating important?
        In this blog post, we are going to be looking at the importance of healthy eating and nutrition, including the 
        many benefits that a balanced diet has and the effects of poor nutrition. We’ll also be providing healthy eating 
        tips and advice for creating an "eating healthy" plan to start you on your journey.
        Find out more about the importance of healthy eating below.
      </p>
    </div>
    
      </div>

      <div className="post">
          <div className="image">
            <img src={postimg2} alt="image" />
          </div> 
          <div className="text">
            <h2> Healthy Eating On A Budget</h2>
            <p className="info">
              <a className="author" >By APWU Health Plan</a>  
              <time>2023-03-09  16:45</time>
            
            </p>
            <p className= "summary">
            Eating a healthy diet is essential for your physical health and emotional 
            wellbeing. When you are living on a tight budget, finding nutritious, 
            affordable food can be a challenge. While fast food may be tasty and filling, 
            it also tends to be loaded with calories, saturated fat, and added sugars. 
            And despite what some may think, fast food is rarely cheaper than eating healthy, 
            home-cooked meals. Fortunately, there are easy steps you can take to can enjoy 
            healthy food without breaking the bank.
            </p>
          </div>
      </div>

      <div className="post">
          <div className="image">
            <img src={postimg3} alt="" />
          </div> 
          <div className="text">
            <h2>Short-Term and Long-Term Effects of a Healthy Diet</h2>
            <p className="info">
              <a className="author">By Lau Hanly</a>
              <time>2023-09-18  16:45</time>
            </p>
            <p className= "summary">
            Having a healthy diet will bring benefits -- both in the short 
            term and in the long term. Not only will your body feel better, 
            but you'll experience an improved quality of life, have less 
            risk of disease and can expect to live longer than your counterparts 
            who do not eat a healthy diet.
            </p>
          </div>
      </div>
    </>
   );
 };
 