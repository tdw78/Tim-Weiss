import React, { Component } from 'react';


class About extends Component {

  render () {
    return (
      <div>
        <div className="main">
          <h2>About Me</h2>  
          <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6" id="about-me">
              I am a full stack web developer in San Jose, California.  I have always been
              interested in computers and technology and when I began to learn more about web development,
              I fell in love immediately.  I love the cognitive aspect of imagination and problem solving.
              I am passionate about building applications and continuing to sharpen my development skills.
              I was not always involved in web development.  I grew up around the game of golf.  I played golf in high school and then in
              college at the Univeristy of Arizona.  After graduation from the U of A, I attempted to play
              golf for a living.  When that didn't pan out, I wanted to stay close to the game, so I become
              a PGA professional.  I was a pro for 12 years before switching careers. 
            </div>
            <div class="col-lg-3"></div>
          </div>
        </div>
      </div>
  );
 }
}

export default About;