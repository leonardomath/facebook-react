import React, { Component } from 'react'
import Comments from './Comments'

class Post extends Component {
  render() {
    return (
      <div className="container">
        <div className="box-post">
          <div className="author-post">
            <div className="user-info">
              <div className="author-avatar">
                <img src={this.props.post.author.avatar} />
              </div>
              <div className="author-description">
                <p className="username">{this.props.post.author.name}</p>
                <p className="date">{this.props.post.date}</p>
              </div>
            </div>
            <div className="author-comentary">
              <p>{this.props.post.content}</p>
            </div>
          </div>
          {this.props.post.comments.map(comment => <Comments key={comment.id} comment={comment} />)}
        </div>
      </div>
    )
  }
}

export default Post