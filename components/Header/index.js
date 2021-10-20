import Link from 'next/link'
import styles from './styles.module.css'
import { useState } from 'react'

import Navbar from '../Navbar'
import Image from 'next/image'


export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  function handleOpenMenu() {
    setIsOpenMenu(true)
  }

  function handleCloseMenu() {
    setIsOpenMenu(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <a>

            <Image  width={200} src="/images/logo.svg" alt="Scrumind" className={styles.logo} />
          </a>
        </Link>
        <Image  width={24} src="/icons/menu.svg" alt="menu" className={styles.menu_mobile} onClick={handleOpenMenu} />
        <nav className={styles.menu}>
          <Navbar />
        </nav>
        {
          isOpenMenu && (
            <div className={styles.mobile}>
              <div className={styles.mobile__header}>
                <Link href="/">
                  <a>
                    <Image  width={200} src="/images/logo.svg" alt="Scrumind" className={styles.logo} />
                  </a>
                </Link>
                <Image  width={24} src="/icons/close.svg" alt="fechar" onClick={handleCloseMenu} />
              </div>
              <div className={styles.navegacao}>
                <Navbar mobile={true} onClose={handleCloseMenu} />
              </div>
            </div>
          )
        }
      </div>
    </header>
  )
}
