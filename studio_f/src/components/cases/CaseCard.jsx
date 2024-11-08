import { Link } from "react-router-dom"

const CaseCard = ({data,index}) => {

    return(
        <Link 
        to={data.href} 
        onMouseEnter={()=>{
            const title_element = document.getElementById(index+100)
            title_element.classList.add('text-orange-500')
            const img = document.getElementById(data.id)
            img.classList.add('scale-95')
        }} 
        onMouseLeave={()=>{
            const title_element = document.getElementById(index+100)
            title_element.classList.remove('text-orange-500')
            const img = document.getElementById(data.id)
            img.classList.remove('scale-95')
        }} 
        
        className="flex flex-col overflow-hidden  rounded-lg shadow-lg">
            <div className="flex-shrink-0">
                <img id={data.id} className="h-96 w-full transition duration-400 ease-in-out object-cover" src={data.imageUrl} alt="" />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                    <p className="text-xl font-medium text-gray-800">
                        {/* problemas */}
                        <span href={data.category.href} className="hover:underline">
                        {data.category.name}
                        </span>
                    </p>
                    {/* problemas */}
                    <span href={data.href} className="mt-2 block">
                        <p id={index+100} className="lg:text-4xl pt-4 pb-6 text-2xl font-semibold transition duration-400 ease-in-out text-gray-900">{data.title}</p>
                        <p className="mt-3 text-2xl space-y-2 leading-9 text-gray-500">{data.description}</p>
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default CaseCard