import React from "react";


class PostSummary extends React.Component {
  render() {
    return (
      <div
        className={this.props.isOwnPost ? "card teal lighten-3" : "card teal lighten-4"}
        style={{ padding: "20px" }}
      >
        {this.props.isOwnPost ? <p className="right">You posted this</p> : ""}
        <div className="card-title">{this.props.post.data().title}</div>
        <div className="card-content">{this.props.post.data().content}</div>
      </div>
    );
  }
}

export default PostSummary;
