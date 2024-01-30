import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const temp = localStorage.getItem('access_token')
    console.log(temp)
    if (temp !== null) {
      navigate('/main')
    }
  }, [localStorage]);
  return (
    <div className="App">
    </div>
  );
}

