import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import Image from 'next/image'

import { getPrismicClient } from "../services/prismic";

import CardPost from "../components/CardPost";
import Search from "../components/Search";

export default function Home({posts}) {
  return (
    <>
      <header className="page-header">
        <div className="page-header__content">
          <div className="page-header__text">
            <h1>Ipsum diam</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est et mauris ipsum, amet duis.
            </p>
          </div>
          <div className="img">
          <Image layout='intrinsic' width={300} height={300} src="/images/urban.png" alt="imagem" />
          </div>
        </div>
      </header>
      <Search />
      <div className="post-list">
        { posts.map(post => (
          <CardPost post={post} key={post.slug}/>
        ))}

      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ],{
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  })

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      exerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updateAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return { props: {
    posts
  }}
}
