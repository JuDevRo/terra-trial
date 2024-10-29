import {useState, useEffect} from 'react'
import axios from 'axios';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Material from '../../components/Material/Material';


const Home = () => {
    const apiUrl = 'https://tf-frontend.netlify.app/trial';
        
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(apiUrl);
            setData(response.data);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
        };

        fetchData();
    }, []);
    
    return (
        <div className='home'>
            {
                data.navbar && <Header content={data.navbar} />
                
            }
            {
                data.hero && <Hero content={data.hero} />
            }
            {
                data.body && <Material content={data.body} />
            }
        </div>
  )
}

export default Home