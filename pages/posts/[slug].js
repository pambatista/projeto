
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import { getPrismicClient } from "../../services/prismic";

export default function Posts({post}) {
  return (
    <div>
      <header className="page-header">
      <div className="page-header_posts">
        <h1>{post.header_title}</h1>
        <p>{post.header_subtitle}</p>
        </div>
      </header>
      <article className="conteudo">
        <time className="data">{post.updateAt}</time>
        <h2>{post.title}</h2>
        <div className="text-post" dangerouslySetInnerHTML={{__html: post.content}}/>
      </article>
    </div>
  )
}


export const getServerSideProps = async ({req, params}) => {

  const { slug } = params

  const prismic = getPrismicClient(req)

  const response = await prismic.getByUID('post', String(slug), {})

  const post = {
    slug,
    header_title: RichText.asText(response.data.header_title),
    header_subtitle: RichText.asText(response.data.header_subtitle),
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updateAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return { props: {
    post
  }}
}
