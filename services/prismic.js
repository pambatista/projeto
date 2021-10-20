import Prismic from '@prismicio/client'

export const  getPrismicClient = (req) => {
  const prismic = Prismic.client(
    'https://scrumind.prismic.io/api/v2' ,
    {
      req,
      accessToken: 'MC5ZVzlmVVJJQUFDa0FSMkR1.Rxvvv73vv73vv70r77-9Iu-_ve-_vT7vv706FO-_ve-_ve-_ve-_ve-_vWNDVwPvv73vv71fbe-_ve-_ve-_vQMg'
  })

  return prismic
}
