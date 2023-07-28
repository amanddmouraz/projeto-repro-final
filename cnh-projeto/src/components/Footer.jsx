import styles from '../styles/components/footer.module.css'

import { InstagramLogo } from 'phosphor-react'

import { FacebookLogo } from 'phosphor-react'

const Footer = ({content}) => {
  return (
   <footer className={styles.footerConteiner}>
    <p className={styles.footerContent}> {content} </p>
    <div className={styles.logos}>
    <InstagramLogo size={32} weight="bold" color= "#FF7C00" />
    <FacebookLogo size={32} weight="bold" color= "#FF7C00" />
    </div>
   </footer>
  )
}

export default Footer