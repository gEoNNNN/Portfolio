import './HomeScreen.scss';
import Menu from '../components/Menu';
import Button from '@mui/material/Button';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

function HomeScreen() {
  return (
    <div className='body'>
      <Menu />
      <div className='text'>
        <p className='text_iam'>I Am</p>
        <p className='text_fe'>Front-End</p>
        <p className='text_developer'>Developer</p>
        <p className='text_description'>I am a front-end developer, proficient in coding and maintaining websites to ensure functionality and responsiveness.</p>
        <Button className='download' variant='contained' endIcon={<FileDownloadOutlinedIcon sx={{ color:'#F5F5F5' }}style={{width: '3.5vh', height: 'auto' }}/>}
        sx={{
        borderRadius:'2vh',
        mr:'110vh',
        "&.MuiButton-contained":{color: '#F5F5F5'},
        color:'#2C6FFF',
        fontFamily:"Inter",
        fontSize:'2.5vh'
        }}>
        Download My CV
        </Button>
      </div>
    </div>
  );
}

export default HomeScreen;
