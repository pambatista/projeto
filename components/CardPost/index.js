import { useState } from 'react';
import Link from 'next/link'
import { isMobile } from 'react-device-detect';
import Image from 'next/image'

import styles from './styles.module.scss';

function CardPost({post}) {
  const [isOpenPost, setIsOpenPost] = useState(false)

  if (isMobile) {
    return (
      <div className={styles.container}>
        <header>
          <h2>{post.title}</h2>
          {
            !isOpenPost ? (
              <Image src="/icons/arrow-down.svg" onClick={() => setIsOpenPost(true)} alt="imagem" />
            ) : (
              <Image src="/icons/arrow-up.svg" onClick={() => setIsOpenPost(false)} alt="imagem"  />
            )
          }
        </header>
        {
          isOpenPost && (
            <main>
              <p>
                Tempus a semper quam nunc at tempor nunc id etiam. Cursus lectus amet viverra imperdiet. Nisl amet iaculis a nulla ut nibh cursus ultricies ac. Commodo nisi, elementum interdum eget dignissim donec a. Feugiat orci dictum pretium et potenti.
              </p>
              <footer>
                <Link href={`/posts/${post.slug}`}>
                  <a>
                    <span>Ler mais</span>
                    <imImageg src="/icons/arrow-right.svg"  alt="imagem" />
                  </a>
                </Link>
              </footer>
            </main>
          )
        }
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <header>
          <h2>{post.title}</h2>
        </header>

        <main>
          <p>
            {post.exerpt}
          </p>
          <footer>
            <Link href={`/posts/${post.slug}`}>
              <a>
                <span>Ler mais</span>
                <Image src="/icons/arrow-right.svg"  alt="imagem"/>
              </a>
            </Link>
          </footer>
        </main>
      </div>
    )
  }
}

export default CardPost;
