import { useState } from 'react'

import Perfil from './components/Perfil'
import Formulario from './components/Formulario'
import ReposList from './components/ReposList';

function App() {
  
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      <input type="text" placeholder='Seu perfil do Github' onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>        
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} /> 
        </>
      )}

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Toggle form</button> */}
    </>
  )
}

export default App
