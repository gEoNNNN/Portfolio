import './HomeScreen.scss';
import Menu from '../components/Menu';

function HomeScreen() {
  return (
    <div className='body'>
      <Menu />
      <div className='text'>
        <p className='text_iam'>I Am</p>
        <p className='text_fe'>Front-End</p>
        <p className='text_developer'>Developer</p>
        <p className='text_description_one'>I am a front-end developer, proficient in coding and maintaining websites to ensure functionality and responsiveness.</p>
        {/*<p className='text_description_two'>websites to ensure functionality and responsiveness.</p>
        <a href="/path/to/your/cv.pdf" className='download-button' download>
          <span>Download CV</span>
        </a>*/}
      </div>
    </div>
  );
}

export default HomeScreen;
