import { useEffect, useState } from 'react';
import icon from '../images/icon.jpeg';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export function Sidebar() {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5012/api/sidebar');
                setData(response.data); // Armazena apenas a string "app"
                console.log(response.data)
                setLoading(false);
            } catch (err) {
                console.error('Erro na requisição:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="text-white">Carregando...</div>;
    if (error) return <div className="text-red-500">Erro: {error}</div>;

    return (
      <div className='flex flex-wrap justify-around w-[20rem] h-screen bg-neutral-500'>
        <header className='flex justify-center items-center w-full h-72'>
            <img 
              className='rounded-full outline-2 outline-offset-2 outline-yellow-400' 
              width={250} 
              src={icon} 
              alt="User Icon"
            />
        </header>
        <main className='flex flex-col w-full justify-center items-center gap-8'>
            {/* Mostra apenas o texto "app" recebido do backend */}
            <div className="text-white text-2xl">{data}</div>
            
            <NavLink 
              to="/home"
              className='bg-yellow-400 rounded-2xl w-1/2 p-2 text-center hover:brightness-75'
            >
              Home
            </NavLink>
            <NavLink 
              to="/api1"
              className='bg-yellow-400 rounded-2xl w-1/2 p-2 text-center hover:brightness-75'
            >
              API 1
            </NavLink>
            <NavLink 
              to="/api2"
              className='bg-yellow-400 rounded-2xl w-1/2 p-2 text-center hover:brightness-75'
            >
              API 2
            </NavLink>
        </main>
        <footer className="flex justify-center items-center text-center text-white p-4">
          © {new Date().getFullYear()} Seu App
        </footer>
      </div>
    );
}