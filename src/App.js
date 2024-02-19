
import React from 'react';
import './App.css';

import Perfil1 from './components/Perfil1';
import Perfil2 from './components/Perfil2';
import Perfil3 from './components/Perfil3';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Mis desarrolladores favoritos son</h1>
        <Perfil1
          nombre='Brais Moure'
          pais='España'
          imagenUrl='https://i.ytimg.com/vi/Kp4Mvapo5kc/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAsJ5M-eHUlV6op62b-Jjszt5RAKg'
          cargo='Ingeniero de Software'
          empresa='MoureDev'
          perfil='Es un Youtuber español, es el fundador de la empresa de desarrollo de software MoureDev'
          linkedin='https://www.linkedin.com/in/braismoure/'
          youtube='https://www.youtube.com/@mouredev'
          x='https://twitter.com/MoureDev'
        />

        <Perfil2
          nombre='Miguel Ángel Durán García - midudev'
          pais='España'
          imagenUrl='https://media.licdn.com/dms/image/C4D22AQFlGinHa1I4Jw/feedshare-shrink_800/0/1640259046752?e=1710979200&v=beta&t=aNeB1Ph4EutPcRj0iGOyt3KYIHeWdTDFNNgEx_udwR0'
          cargo=' Ingeniero de Software'
          empresa='Consultoría de TI y Consultoría empresarial'
          perfil=' Miguel Ángel Durán es Creador de Contenido sobre Programación y Tecnología, Cuenta con una comunidad de más de 700k de seguidores en sus redes sociales. Su canal de programación en Twitch es uno de los más vistos en el mundo'
          linkedin='https://www.linkedin.com/in/midudev/'
          youtube='https://www.youtube.com/@midudev'
          x='https://twitter.com/midudev'
        />
        <Perfil3
          nombre='Víctor Robles WEB'
          pais='España'
          imagenUrl='https://media.licdn.com/dms/image/C4D22AQFtaVCbPtfsVQ/feedshare-shrink_800/0/1675870783055?e=1710979200&v=beta&t=4iC4U9edcb_TbAhwTxQQvQuvtreMI91gYWtEZR6zHGM'
          cargo='desarrollador we'
          empresa='youtubeempresa'
          perfil='desarrollador web y formador online. En este canal voy a hablar de desarrollo y a enseñarte a crear aplicaciones web'
          linkedin='https://www.linkedin.com/in/braismoure/'
          youtube='https://www.youtube.com/@VictorRoblesWEB'
          x='https://www.linkedin.com/in/victorroblesweb/'
        />
      </div>
    </div>
  );
}

export default App;
