import React from "react";
import { fetchPosts } from "../actions";
import {connect} from 'react-redux'
import UserHeader from "./UserHeader";

class PostList extends React.Component {
    
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        const responseHTML = this.props.posts.map(post=>{
            return(
                <div className="item" key={post.id}>
                    <div className="content">
                        <h4 className="header">{post.title}</h4>
                        <div className="description">{post.body}</div>
                    </div>
                    <UserHeader userId={post.userId}/>
                </div>
            ); 
        })
        
       return <div className="ui relaxed divided list">{responseHTML}</div>
    }
}

const mapStateToProps = (state) =>{
    return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostList);