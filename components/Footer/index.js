import Link from 'next/link'
import styles from './styles.module.scss';
import Navbar from '../Navbar'
import Image from 'next/image'

const menu = [
  { title: 'E-book', path: '/e-book' },
  { title: 'Sobre nós', path: '/sobre-nos' },
  { title: 'Contato', path: '/contato' },
]

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <Navbar menu={menu}/>
        </div>
        <Image src="/images/logo.svg" alt="Scrumind"/>
      </div>
    </div>
  )
}

export default Footer;
