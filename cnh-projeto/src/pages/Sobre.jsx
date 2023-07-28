import Header from '../components/Header'
import mapa from '../assets/mapa.svg'
import styles from '../styles/pages/sobre.module.css'
import Modal from '../components/Modal'


const Sobre = () => {
  return (
    <>
      <Header title="O que eu preciso para tirar a minha CNH?" />
      <div className={styles.sobreContainer}>
      <img className={styles.mapBrasil} src={mapa}/>
      <button className={styles.EstRn}>RN</button>
      <button>CE</button>
      <button>PE</button>
      <button>PB</button>
      <button>MG</button>
      <button>RO</button>
      <button>AC</button>
      <button>PA</button>
      <button>MA</button>
      <button>DF</button>
      <button>GO</button>
      <button>AM</button>
      <button>RS</button>
      <button>BA</button>

      </div>

    </>

  )
}

export default Sobre