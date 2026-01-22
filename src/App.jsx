import s from './App.module.css'
import ping from '/image01.webp'
import { useState } from 'react'

function App () {
  const [qualAparece, setQualAparece] = useState('')

  return (
    <>
      {/*qualAparece === 'texto' && <h1 className={s.titulo}>Pinguim</h1>}
      {qualAparece === 'imagem' && <img src={ping} alt='Foto pinguim' />}
      {qualAparece === 'outro' && <p>outro</p>*/}
      {qualAparece === 'texto' ? (<h1 className={s.titulo}>Pinguim</h1>) 
      : qualAparece === 'outro' ? (<h1 className={s.titulo}>Outro Texto</h1>)
      : (<img src={ping} alt='Foto pinguim' />)}
      <br />
      <button onClick={() => setQualAparece('texto')}>texto</button>
      <br />
      <button onClick={() => setQualAparece('imagem')}>imagem</button>
      <br />
      <button onClick={() => setQualAparece('outro')}>Outro Texto</button>
    </>
  )
}

export default App
