import { Link } from 'react-router-dom'

import styles from '../styles/components/menu.module.css'

import logo from '../assets/logo.svg'

export const Menu = () => {
  return (
    <nav className={styles.menuContainer}>
            <img className={styles.logo} src={logo} className={styles.menuLogo} />
            <div className={styles.menuList}>
            <li>
            <Link className={styles.menuLink} to="/"> Inicie aqui! 🙋🏿‍♀️</Link>
            </li>
            <li>
            <Link className={styles.menuLink} to="/sobre">CNH sem barreiras</Link>
            </li>
            <li>
            <Link className={styles.menuLink} to="/portfolio"> Ei, mulher! Dirija!</Link>
            </li>
            <li>
            <Link className={styles.menuLink} to="/contato">Contato</Link>
            </li>
            </div>
    </nav>
  )
}

export default Menu
