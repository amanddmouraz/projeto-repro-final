import Header from '../components/Header'

import styles from '../styles/pages/portfolio.module.css'

import logoprojeto from '../assets/logoprojeto.svg'

import {ArticleMedium} from 'phosphor-react'

import {Balon} from 'phosphor-react'

import {UsersFour} from 'phosphor-react'





const Portfolio = () => {
    return (
      <>
      <div className={styles.conteinerLogo}>
    <img src={logoprojeto} alt="mulher-dirigindo" className={styles.logoProjeto} />
    </div>
    <Header title="LUGAR DE MULHER, TAMBÉM É NA ESTRADA!" />
    <h2 className={styles.subtitleDirija}> No Brasil, as mulheres correspondem a 35% total das CNH válidas (DNIT)</h2>
   
      <div className={styles.conteinerDirija}> 

      <div className={styles.cardConteiner}>
      <p className={styles.cardDescription}>
        Mesmo com esse percentual, e sendo os homens os que mais sofrem acidentes fatais no transito,
        as mulheres são as que mais sofrem com o medo de dirigir. 

        O medo irracional de digir,a amaxofobia, evidencia-se quando o trânsito passa a ser percebido como
        uma ameaça irracional e conduzir gera níveis de ansiedade e estresses anormais, interferindo no dia a dia
       </p>
       </div>
    <div className={styles.cardConteiner}>
     <p className={styles.cardDescription}>
      Dentro de um contexto histórico - cultural envolvendo papéis sociais, as mulheres são estereótipadas como fragéis, ingênuas
      e que seram indevidas para trabalhos manuais como por exemplo ser motorista de um caminhão. Sendo o homem essa figura representativa de quem
      "pode" ou "deve" dirigir, e somado com todo preconceito historicamente elaborado da educação repressora que ocorre com muitas mulhes, 
      ao iniciar o aprendizado para dirigir, tem-se uma cobrança maior da avaliação do outro ou das figuras representativas sobre si. 

      E esse preconceito com mulheres que desejam buscar sua independência no transito é algo tão comum, que ditados como "mulher no trânsito, perigo constante" surgem
      e reforçam ainda mais essa problemática. 
    </p>
      </div>
      <div className={styles.cardConteiner}>
    <p className={styles.cardDescription}>
      O Ei, mulher!Dirija! surgiu não só para trazer dados sobre como as mulheres são exemplos no trânsito, mas como também uma iniciativa de apoio psicológico para todas
      as mulheres que desejam dirigir, mas ainda sim, sofrem com esse medo e também com o desânimo devido essas circunstâncias. Seguem algumas opções que podem te ajudar:
    </p>
    </div>

      <div className={styles}>




      </div>
    </div>

  
    </>
    )
 
}

export default Portfolio
