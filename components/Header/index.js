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

            <Image layout='intrinsic' width={150} height={50} src="/images/logo.svg" alt="Scrumind" style={styles.logo} />
          </a>
        </Link>
        <div className={styles.menu_mobile}>
        <Image layout='intrinsic' width={16} height={16} src="/icons/menu.svg" alt="menu" onClick={handleOpenMenu} />
        </div>
        <nav className={styles.menu}>
          <Navbar />
        </nav>
        {
          isOpenMenu && (
            <div className={styles.mobile}>
              <div className={styles.mobile__header}>
                <Link href="/">
                  <a>
                    <Image layout='intrinsic' width={100} height={30}  src="/images/logo.svg" alt="Scrumind" style={styles.logo} />
                  </a>
                </Link>
                <Image layout='intrinsic' width={24} height={24}  style="icon" src="/icons/close.svg" alt="fechar" onClick={handleCloseMenu} />
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
