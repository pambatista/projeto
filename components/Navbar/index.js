import Link from 'next/link'
import styles from './styles.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'


const menuDefault = [
  { title: 'Início', path: '/' },
  { title: 'E-book', path: '/e-book' },
  { title: 'Sobre nós', path: '/sobre-nos' },
  { title: 'Contato', path: '/contato' },
]

export default function Header({mobile, onClose, menu }) {
  const router = useRouter()
  function handleClik() {
    if (mobile) {
      onClose()
    }
  }
  return (
        <>
          {(menu || menuDefault ).map((item, index) => {
            return (
              <Link key={index} href={item.path}>
                <a
                  className={`${styles.link} ${router.pathname === item.path && styles.link__active
                  }`}
                  onClick={handleClik}
                >
                  {item.title}
                </a>
              </Link>
            )
          })}
        </>
  )
}
