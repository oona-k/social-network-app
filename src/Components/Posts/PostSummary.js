import React from 'react'

class PostSummary extends React.Component {
    render(){
        return (
            <div className="card teal lighten-5" style={{padding: "20px"}}>
                <div className="card-title">{this.props.post.data().title}</div> 
                <div className="card-content">{this.props.post.data().content}</div>
            </div>
        )
    }
} 

export default PostSummary;