
import React from 'react'
import {Link , Route} from 'react-router-dom'
import Home from './Component/Home'
import Users from './Component/Users'
import Posts from './Component/Posts'
import UserShow from './Component/UserShow'
import UserShowPost from './Component/UserShowPost'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"



const App = (props) => {
  return(
                  <div>
                    <div class="card">
                <div class="card-header">
                  <ul class="nav card-header">
                    <li class="nav-item">
                      <a class="nav-link active" href="/"><Link to="/">Home</Link></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/users"><Link to="/users">Users</Link></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/posts"><Link to="/posts">Posts</Link></a>
                    </li>
                  </ul>
                </div>
              
      
      

      <Route path="/" component={Home}  exact={true}/> 
      <Route path="/users" component={Users}   exact={true}/>
      <Route path="/posts" component={Posts} exact={true}/>
      <Route path="/users/:id" component={UserShow} exact={true} />
      <Route path="/posts?userId=id" component={UserShow} exact={true}/>
      <Route path="/posts/:id" component={UserShowPost} exact={true}/>
      <Route path="/comments?postId=id" component={UserShowPost} exact={true}/>
      
      </div>
      
    </div>
  )
}
export default App