import { connect } from "react-redux";
import Layout from "../../hocs/layouts/Layout";
import { Link, useParams } from "react-router-dom";
import {useEffect, useState} from 'react'
import { get_blog } from "../../redux/actions/blog/blog";
import moment from "moment";
import DOMPurify from 'dompurify'
import posts from "../../utils/posts";

const PostDetail = () => {
    const params = useParams()
    const slug = params.slug

    const [post, setPost] = useState(null);
    
    useEffect(()=>{
        window.scrollTo(0,0)
        const post = posts.find(blog => blog.slug === slug);
        setPost(post);
    },[])

    return(
        <Layout>
            {
            post && post.slug === slug ?
            <div className="pt-24">
                <div className="relative bg-gray-100">
                    <div className="absolute inset-0">
                        <img className="h-full w-full object-cover opacity-70" src={post.thumbnail} alt=""/>
                        <div className="absolute inset-0 bg-gray-200 mix-blend-multiply" aria-hidden="true" />
                    </div>
                    <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
                            {post.title}
                        </h1>
                        <div className="min-w-0 flex-1 p-4 pt-8">
                            <div className="">
                                <span className=" hover:text-orange-500  mx-1 font-bold text-gray-900 text-sm ">
                                    <Link to={`/category/${post.category.slug}`}>
                                        {post.category.name}
                                    </Link>
                                </span>
                                <span className="text-gray-300">&middot;</span> 
                                <span className="mt-2 ml-2 mr-1 font-bold text-gray-900 text-sm">
                                    {moment(post.published).format('LL')}
                                </span>
                                <span className="text-gray-300">&middot;</span>
                                <span className="mt-2 mx-2 font-bold text-gray-900 text-sm">{post.time_read} min read</span> 
                                <p className="mt-4 text-lg font-semibold text-gray-900 leading-8">{post.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative overflow-hidden bg-white py-16">
                    <div className="relative px-4 sm:px-6 lg:px-8">
                        <div className="prose prose-lg max-w-6xl prose-indigo mx-auto mt-6 text-gray-500">
                            <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content)}} />
                        </div>
                    </div>
                </div>
            </div>
            :
            <>No disponible por el momento</>
            }
        </Layout>
    )
}

const mapStateToProps=state=>({
    post: state.blog.post
})

export default connect(mapStateToProps, {
    get_blog
})(PostDetail)