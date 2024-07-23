import React from 'react';
import personalPic from '../assets/me.jpg'; // Adjust the path to your image

export default function About() {
  return (
    <div style={{ overflowY: "auto", maxHeight: "calc(100vh - 200px)", position: 'relative' }}>
      <br />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={personalPic} alt="personal pic" style={{ width: '150px', borderRadius: '50%', marginRight: '20px' }} /> {/* Adjust the styling as needed */}
        <div style={{ flexGrow: 1 }}>
          <h1 style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)' }}>Who Am I Exactly?</h1>
        </div>
      </div>
      
      <p> {/* Add margin-top to make space for the absolute positioned h1 */}
        Simply said, A man who is ready to get into the nitty gritty of it all.
        <br /><br />
        Based in Philadelphia, I have a bit of an unconventional approach to where I find myself today. 
        Having originally studied Sport Management, I had my eyes set on game day experiences and being as close to the glass banging action as possible. 
        After all, I am a life long hockey player. After obtaining a bachelors degree from Temple University I embarked on a journey through several sales jobs. 
        From enterprise software solutions to merchant processing in the healthcare space, I felt that I had reached my whit's end in the 24 hour sales cycle.
        Picture Jack Lemmon's character in the classic film "Glenngarry Glen Ross". So what does a man like me do when faced with the opportunity change things for the better?
        Learn to code of course!
        <br /><br />
        In March of 2024 I decided to take on one of my biggest challenges yet, a full stack web development bootcamp that will instill in me a 2 year education in 3 months time.
        After many late nights I can say without a doubt that it was the best decision I have ever made. It has always been a goal of mine to turn passion into paper. To love my occupation.
        To showcase talent in a professional space. Coding has opened that door for me.
        <br /><br />
        "But Stephen, tell me more about the hockey!"
        <br />
        Of course. Since the age of five I have been in the crease, stopping pucks and crushing dreams. I have been very fortunate to still be playing at the level I do.
        Aside from the weeknight rec leagues, I spend my summers traveling across the country playing in cash-prize tournaments with players from the NHL, AHL, and around the world.
      </p>
    </div>
  );
}
