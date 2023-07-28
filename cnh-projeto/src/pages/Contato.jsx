import Header from '../components/Header'

import logo from '../assets/gifPath.gif'

import styles from '../styles/pages/contato.module.css'

import { useState } from 'react'

import database from '../services/firebase'

import { ref, push, set } from 'firebase/database'

const Contato = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleInputNome(e) {
    setNome(e.target.value)
  }

  function handleInputEmail(e) {
    setEmail(e.target.value)
  }

  function handleInputMensagem(e) {
    setMensagem(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    const messageListRef = ref(database, 'mensagens')
    const newMessageRef = push(messageListRef)
    set(newMessageRef, {
      nome: nome,
      email: email,
      texto: mensagem
    })

    setNome('')
    setEmail('')
    setMensagem('')
  }

  return (
    <>
      <Header title="Precisando de algo? Fala Aqui! 📣" />
      <div className={styles.contactImg}>
        <img src={logo} alt="loading..." />
        <p className={styles.contactDescription}>
          <ul>Sugestões,</ul>
          <ul>Dúvidas sobre a documentação,</ul>
          <ul>Melhorias,</ul>
          <ul>Ou o que você precisar!</ul>
        </p>
      </div>

      <main>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.formInput}
            type="text"
            placeholder="Digite seu nome"
            onChange={handleInputNome}
            value={nome}
          />
          <input
            className={styles.formInput}
            type="email"
            placeholder="Digite o seu e-mail"
            onChange={handleInputEmail}
            value={email} />
          <textarea
            className={styles.formInput}
            type="text"
            placeholder="Digite sua mensagem"
            onChange={handleInputMensagem}
            value={mensagem} />
          <button className={styles.buttonSend} type="submit"> Envie a sua mensagem </button>
        </form>
      </main>
    </>
  )
}

export default Contato