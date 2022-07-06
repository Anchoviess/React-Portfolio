import React from 'react';
import ProfilePic from '../../assets/large/me.JPG'
import Image from 'react-bootstrap/Image'

function About() {
  return (
    <section className="my-5" class="hero ">
      <h1 id="about" class="about"></h1> 
     
      <div style={{ display: 'flex', flexWrap: 'wrap-reverse', justifyContent: 'center', alignItems: 'center', }}>
        
        <div class="card2 is-align-content-center mt-3">
          <div class="card-content" style={{ display: 'flex', flexWrap: 'wrap-reverse', justifyContent: 'center', alignItems: 'center', }}>
            
          <figure class="image is-128x128 ">
            <Image class="profilepic " src={ProfilePic} alt="profile picture" roundedCircle></Image>
          </figure>
            <div class="content" style={{ display: 'flex',  justifyContent: 'center', alignItems: 'right', }}>
              Greetings. <br></br>
              Ive been video engineering in Los Angeles for about 10 years now, worked with many celebrities, and brands, all over LA and Hollywood. Ive been fortunate to work with many people in the entertainment industry, ranging from television, theater, film to music. 
              Ive done lower-thirds for NBA, video broadcasting for FOX, BET, Grammy's, and now ive decided to change paths and apply my skills in coding and software development. 
              My video blending came out in Vogue magazine last year where i blended five 22k projectors to form a single image
              inside goya studios transforming it into an immersive Savoir-Faire experience showcasing a selection of extraordinary pieces from the Louis Vuitton's most exclusive métiers. With a wide variety of computer languages, plus the careful attention to detail; 
            im able to provide optimal solutions for my clients. Web development, UI/UX design, 
            Software application and development are services i am able to offer to create a 
            seamless experience for all your coding/video needs.
            </div>
          </div>
        </div>
      </div>



    </section>


  );
}

export default About;