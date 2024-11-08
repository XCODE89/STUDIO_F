import { Helmet } from 'react-helmet-async'
import Layout from '../../hocs/layouts/Layout'
import { useEffect } from 'react'
import { get_categories } from '../../redux/actions/categories/categories'
import { connect } from 'react-redux'
import { get_blog_list, get_blog_list_page } from '../../redux/actions/blog/blog'
import CategoriesHeader from '../../components/blog/CategoriesHeader'
import BlogList from '../../components/blog/BlogList'
//! para hardcode
import posts from "../../utils/posts"

const Blog = ({
    get_categories, 
    categories, 
    get_blog_list, 
    // posts, 
    count, 
    next, 
    previous, 
    get_blog_list_page
  }) => {

  useEffect(() => {
    window.scrollTo(0,0)
    get_categories()
    get_blog_list()
  },[])

  console.log("posts", posts, "categories", categories, "get_blog_list_page", get_blog_list_page, "count", count)
  
  return (
    <Layout>
      <Helmet>
        <title>Studio | Blog</title>
        <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de páginas web y desarrollo de aplicaciones." />
        <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
        <meta name="robots" content='all' />
        {/* url de tu pagina */}
        <link rel="canonical" href="https://www.mapache.com/" />
        <meta name="author" content='Mapache' />
        <meta name="publisher" content='Mapache' />

        {/* Social Media Tags */}
        <meta property="og:title" content='Mapache | Software Agency' />
        <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
        <meta property="og:url" content="https://www.mapache.com/" />
        <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

        <meta name="twitter:title" content='Mapache | Software Agency' />
        <meta name="twitter:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'/>
        <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="pt-12">
          <CategoriesHeader categories={categories&&categories}/>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
              <div className="mx-auto max-w-6xl my-10">
              {/* Content goes here */}
                <BlogList posts={posts&&posts} get_blog_list_page={get_blog_list_page} count={count&&count}/>
                {/* <BlogList/> */}
              </div>
          </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  posts : state.blog.blog_list,
  count : state.blog.count,
  next : state.blog.next,
  previous : state.blog.previous,
})

export default connect(mapStateToProps,{
  get_categories,
  get_blog_list,
  get_blog_list_page
})(Blog)