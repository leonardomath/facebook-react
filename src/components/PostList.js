import React, { Component } from 'react'
import Post from './Post'

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Liam Gallagher",
          avatar: "https://www.hypeness.com.br/wp-content/uploads/2017/06/Liam3.jpg"
        },
        date: "12 Jun 2020",
        content: "Big love to Tim and Bone and most of all you lovely people you are the STARS without you were NOTHING as you were LG x",
        comments: [
          {
            id: 1,
            author: {
              name: "Bonohead",
              avatar: "https://thumborcdn.acast.com/vxBx5f8dBM8qkFUVf07-wCuRp90=/3000x3000/https://mediacdn.acast.com/assets/f664db1c-64d6-4bd0-a9ae-e07d34ce7812/cover-image-jofseduc-webp-net-resizeimage_2_.jpg"
            },
            content: "You too Brother, see you next week"
          },
          {
            id: 2,
            author: {
              name: "Tim Burges",
              avatar: "https://pbs.twimg.com/profile_images/1263179802732830720/ilZChYeS_400x400.jpg"
            },
            content: "It was awesome"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Liam Gallagher",
          avatar: "https://www.hypeness.com.br/wp-content/uploads/2017/06/Liam3.jpg"
        },
        date: "12 Jun 2019",
        content: "I fucking love you with all my heart bonehead your a real RnR  star see you soon spice bone LG x",
        comments: [
          {
            id: 1,
            author: {
              name: "Bonohead",
              avatar: "https://thumborcdn.acast.com/vxBx5f8dBM8qkFUVf07-wCuRp90=/3000x3000/https://mediacdn.acast.com/assets/f664db1c-64d6-4bd0-a9ae-e07d34ce7812/cover-image-jofseduc-webp-net-resizeimage_2_.jpg"
            },
            content: "Fuck yeah!"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <>
        {this.state.posts.map((post, key) => 
          <Post key={key} post={post}/>
        )}
      </>
    )
  }
}

export default PostList