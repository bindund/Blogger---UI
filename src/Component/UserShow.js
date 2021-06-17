
import React ,{useState , useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const UserShow = (props) => {
    const [user ,setUser] = useState({})
    const [listingPosts , setListingPosts] = useState([])
    const {id} = props.match.params
    
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            const result = response.data
            setUser(result)
        })
        .catch((err) => {
            alert(err.message)
        })
    },[])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response) => {
            const result = response.data
            setListingPosts(result)
        })
        .catch((err) => {
            alert(err.message)
        })

    },[])

    return(
        <div>
            <h3><strong>UserName</strong> : {user.name}</h3><br/>
            <h3><strong>Posts of the User </strong> </h3>
            <ul>
            {
                listingPosts.map((userId) => {
                    return<li key={userId.id}><Link to={`/posts/${id}`}>{userId.title}</Link></li>
                })
            }
    </ul>
        
        </div>
    )
}
export default UserShow