
import Layout from "../../hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';
import { connect } from "react-redux";
import { search_blog, search_blog_page } from "../../redux/actions/blog/blog";
import { useParams } from "react-router-dom";
import BlogList from "../../components/blog/search/BlogList";
import SeoHelmet from "../../components/seo/SeoHelmet";

const Search = ({
    posts,
    count,
    next,
    previous,
    search_blog,
    search_blog_page
}) => {
    const params = useParams()
    const term = params.term

    useEffect(()=>{
        window.scrollTo(0,0)
        search_blog(term)
    },[])


    return(
        <Layout>
            <SeoHelmet
                title="Studio | Blog"
                description="Agencia de software y marketing digital. Servicios de creacion de páginas web y desarrollo de aplicaciones."
                keywords="agencia de software, agencia de marketing, creacion de pagina web"
                image="https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg"
                url="https://mapache.com"
            />
            <div className="pt-24">
                <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="mx-auto max-w-full my-10">
                    {/* Content goes here */}
                    <BlogList posts={posts&&posts} get_blog_list_page={search_blog_page} term={term} count={count&&count}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

const mapStateToProps=state=>({
    posts: state.blog.filtered_posts,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous,

})

export default connect(mapStateToProps,{
    search_blog,
    search_blog_page
}) (Search)