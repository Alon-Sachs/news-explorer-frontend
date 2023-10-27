import profilePhoto from '../../images/about__author.JPG';
import './About.css';

function About() {
  return (
    <section className='about'>
      <img className='about__img' alt='Author' src={profilePhoto}/>
      <div className='about__info'>
        <h4 className='about__title'>About the author</h4>
        <p className='about__description'>I'm Alon, an aspiring Webdev expert in HTML, CSS, Javascript, React, Express</p>
        <p className='about__description'>In Practicum bootcamp, I've learned how to create and deploy fullstack applications.<br />My job is to create fully custom-tailored applications for businesses</p>
      </div>
    </section>
  );
}

export default About;
