import Header from '../components/Header'

import styles from '../styles/pages/portfolio.module.css'

import logoprojeto from '../assets/logoprojeto.svg'

import { Brain } from 'phosphor-react'

import { UsersThree } from 'phosphor-react'

import { CarSimple } from 'phosphor-react'

import { ArticleMedium } from 'phosphor-react'


const Portfolio = () => {
  return (
    <>
      <div className={styles.conteinerLogo}>
        <img src={logoprojeto} alt="mulher-dirigindo" className={styles.logoProjeto} />
      </div>
      <Header title="LUGAR DE MULHER, TAMBÉM É NA ESTRADA!" />
      <h2 className={styles.subtitleDirija}> 80% da mulheres tem medo de dirigir <a href="https://revistacapitaleconomico.com.br/medo-de-dirigir-acomete-90-das-mulheres-diz-pesquisa/"> (ABRAMET)</a> </h2>
      <h2 className={styles.subtitleDirija}> E somente 35% das CNH válidas pertencem a mulheres <a href="https://www.gov.br/dnit/pt-br/assuntos/noticias/no-mes-dedicado-as-mulheres-dnit-revela-estudos-com-numero-de-habilitadas-no-pais">(DNIT) </a> </h2>
      <h2 className={styles.subtitleDirija}> </h2>

      <section className={styles.conteinerDirija}>

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
            as mulheres que desejam dirigir, mas ainda sim, sofrem com esse medo e também com o desânimo devido essas circunstâncias.

          </p>
        </div>
      </section>

      <div>
        <h1 className={styles.subtitleDirija}> Iniciativas, projetos, conhecimento e apoio "Ei,mulher! Dirija!": </h1>
      </div>

      <section className={styles.conteinerPropostas}>
        <div className={styles.cardConteinerProp}>
          <Brain size={150} color="#FF7C00" weight="thin" />
          <h3 className={styles.tituloConteinerProp}> Psicólogos Especializados </h3>
          <a href='http://www.andebem.com.br/noticias/135/medo-de-dirigir'> <button className={styles.buttonProp}> Contatos | Clinicas </button> </a>
        </div>

        <div className={styles.cardConteinerProp}>
          <CarSimple size={150} color="#FF7C00" weight="thin" />
          <h3 className={styles.tituloConteinerProp}> Programa Vencendo o Medo de Dirigir | MS </h3>
          <a href='https://www.detran.ms.gov.br/educacao-2/acoes-educativas/acoes-educativas-10/'> <button className={styles.buttonProp}> Site DIEDU </button> </a>
        </div>

        <div className={styles.cardConteinerProp}>
          <ArticleMedium size={150} color="#FF7C00" weight="thin" />
          <h3 className={styles.tituloConteinerProp}> Artigo | Mulheres com medo de dirigir: Um olhar além das aparências. PT </h3>
          <a href='https://periodicos.unoesc.edu.br/siepe/article/view/5685'><button className={styles.buttonProp} > Artigo </button></a>
        </div>

        <div className={styles.cardConteinerProp}>
          <UsersThree size={150} color="#FF7C00" weight="thin" className={styles.logoPhosphor} />
          <h3 className={styles.tituloConteinerProp}> Rede de conexão do "Ei, mulher! Dirija!" </h3>
          <a href='http://www.andebem.com.br/noticias/135/medo-de-dirigir'> <button className={styles.buttonProp}> Fórum </button> </a>
        </div>

      </section>
    </>
  )

}

export default Portfolio
