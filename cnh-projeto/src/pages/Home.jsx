import Header from '../components/Header'

import { Scales } from 'phosphor-react'
import { IdentificationCard } from 'phosphor-react'
import { CarSimple } from 'phosphor-react'

import style from '../styles/pages/home.module.css'

const Home = () => {
  return (
    <>
    <Header title = "CNH SOCIAL: QUANDO? COMO? ONDE? Quero a minha!"/>
    <div className={style.homeConteiner}>
  
      <div className={style.cardConteiner}>
      <Scales  size={150} color= "#FF7C00" weight="thin" />
      <h1 className={style.cardTitle}> PL 7966/2014 </h1>
      <p className={style.cardDescription}>
      Aprovado em 2017, o Projeto de Lei 7966/2014 concede a Gratuidade para os inscritos no Cadastro 
      Único para Programas Sociais do Governo Federal obterem a Carteira Nacional de Habilitação.
      </p>
      </div>
      <div className={style.cardConteiner}>
      <IdentificationCard  size={150} color= "#FF7C00" weight="thin" />
      <h1 className={style.cardTitle}> SOBRE A CNH SEM BARREIRAS </h1>
      <p className={style.cardDescription}>
      Por mais que tenha sido aprovado, o Projeto de Lei não é federal, sendo assim todo o processo que libera a 
      a CHN gratuita/social é feito após uma ordem estadual e também é regulamentado pelo estado. A CNH sem barreiras
      é uma proposta para ajudar pessoas de baixa renda no processo de retirada da CNH com informações, direcionamentos conforme a regulamentação do seu Estado e documentação necessária.
    </p>
    </div>
    <div className={style.cardConteiner}>
    <CarSimple  size={150} color= "#FF7C00" weight="thin"/>
    <h1 className={style.cardTitle}> EI, MULHER! DIRIJA!</h1>
    <p className={style.cardDescription}>
      Além de ajudar no processo de conseguir a sua CNH, nós também desenvolvemos o projeto "Ei, mulher! Dirija!", que
      foi pensado como uma rede de apoio/acolhimento para mulheres que possuem medo de dirigir, o qual muitas vezes está relacionado a preconceitos desenvolvidos por estigmas sociais, 
      ou até mesmo possam sofrer com amaxofobia (medo intenso de estar dentro de um veículo em movimento, como condutor ou como passageiro).
    </p>
    </div>
      </div>
  
    </>
  )
}

export default Home

