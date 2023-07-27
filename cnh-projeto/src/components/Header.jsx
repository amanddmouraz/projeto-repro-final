import sytles from '../styles/components/header.module.css'

const Header = ({title, image}) => {
  return (
    <header className={sytles.headerContainer}>
        <h1 className={sytles.headerTitle}>{title}</h1>
  
    </header>
  )
}

export default Header