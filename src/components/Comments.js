import React, { Component } from 'react'

class Comments extends Component {
  render() {
    return (
      <div className="post-commentary">
        <div className="author-avatar">
          <img src={this.props.comment.author.avatar} />
        </div>
        <div className="user-commentary">
          <p><b>{this.props.comment.author.name}</b>
          {this.props.comment.content}</p>
        </div>
      </div>
    )
  }
}

export default Comments