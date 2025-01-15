import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from './img.jpg'

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000); // Redirect after 5 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

    return (
      <div style={{
        position: 'relative', 
        width: '100vw', 
        height: '100vh',
        overflow: 'hidden',
      }}>
        <img 
          src={Image} 
          alt="404 Not Found" 
          style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw', 
            height: '100vh', 
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
          }} 
        />
      </div>
    );
  };
  
export default NotFound;
