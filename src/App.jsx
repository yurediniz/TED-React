import  './App.css'
import React from "react";
import Titulo from './Components/Titulo';
import Texto from './Components/Texto';
import Botao from './Components/Botao';

export default () => (
    <div className='App'>
        <div><Titulo/></div>
        <div><Texto/></div>
        <div>
            <Botao
                imagem1 = "https://www.programacion.com.py/wp-content/uploads/2016/11/react-logo-1024x576.png"
                imagem2 = "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/151403945/original/55a80baf27dead4e1eae695dfad3d6531f20efad/create-your-web-app-in-react.jpg"
            />
        </div>
    </div>
);