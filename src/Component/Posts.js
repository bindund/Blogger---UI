import React ,{useState , useEffect} from 'react' 
import axios from 'axios'
import {Link} from 'react-router-dom'

const Posts = (props) => {
    const [totalPost , setTotalPost] = useState([])
    

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            const result = response.data
            setTotalPost(result)
        })
        .catch((err) => {
            alert(err.message)
        })
    },[])

    return(
        <div>
            <ul>
            <h3>Total Posts : {totalPost.length}</h3>
            {
                totalPost.map((ele) => {
                    return<li key={ele.id}><Link to={`/posts/${ele.id}`}>{ele.title}</Link></li>
                })
            }
            </ul>
        </div>
    )
}
export default Posts