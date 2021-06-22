
import React ,{useState , useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const UserShowPost = (props) => {
    const [userPost , setUserPost] = useState({})
    const [userName , setUserName] = useState([])
    const [comments , setComments] = useState([])
    
    const {id} = props.match.params

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            const result = response.data
            setUserPost(result)
        })
        .catch((err) => {
            alert(err.message)
        })

    },[userPost])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            const result = response.data
            setUserName(result)
        })
        .catch((err) => {
            alert(err.message)
        })
    },[userName])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response) => {
            const result = response.data
            setComments(result)
        })
        .catch((err) => {
            alert(err.message)
        })
    },[comments])
    

   
    return(
        <div>
            <ol>
                     <div class="card bg-dark text-white">
                    <img src="/splash.jpg" class="img-fluid"  height= "100vh"  alt="Responsive image"/>
                    <div class="card-img-overlay">
                        <h5 class="card-title"><strong>UserName : </strong>  {userName.name}</h5><br/>
                        <h6 class="card-text"><strong>Title : </strong>{userPost.title}</h6>
                        <h6 class="card-text"><strong>Body : </strong>{userPost.body}</h6><br/><hr/>
                        <h6 class="card-text"><strong>Comments</strong></h6>
            {
                comments.map((postId) => {
                    return<li key={postId.id}>{postId.body}</li>
                })
            }
            <hr/>
            <Link to ={`/users/${id}`}>{`More posts of author : ${userName.name}`}</Link>
            </div>
            </div>
            </ol>
        </div>
    )
}
export default UserShowPost