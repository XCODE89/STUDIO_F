import {connect} from "react-redux"
import { motion } from "framer-motion"

const Layout = ({children}) => {
    return (
        <motion.div
            initial={{opacity: 0, transition: {duration :0.2}}}
            animate={{opacity: 1, transition: {duration :0.2}}}
            exit={{opacity: 0, transition: {duration :0.2}}}
        >
            {children}
        </motion.div>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

}) (Layout)