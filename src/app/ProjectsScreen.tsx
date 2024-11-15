import './ProjectsScreen.scss';
import Menu from '../components/Menu';
import Card from '../components/Card';
import ParkingGuruImage from './../assets/ParkingGuru.png'; 
import KitchenGuruImage from './../assets/KitchenGuru.png';

function ProjectsScreen() {
  return (
    <div className='body'>
      <Menu />
        <div className='content'>
          <p className='work'>/work.</p>
          <p className='text'>Selected work I've taken on in the past.</p>
        </div>
     <div className='card'>
        <Card name='ParkingGuru' description='Cel mai pizdos proiect facut de o echipa de baieti ahuenii, facut in React Native' bannerImage={ParkingGuruImage}/>
        <Card name='KitchenGuru' description='Cel mai pizdos proiect facut de o echipa de baieti ahuenii, facut in React Native' bannerImage={KitchenGuruImage}/>
      </div>
    </div>
  );
}

export default ProjectsScreen;
