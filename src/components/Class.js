import React, { Component } from 'react'
import Axios from 'axios'

export default class Test extends Component {
  state = {
    posts: []
  }

  getData = async () => {
    const response = await Axios.get('https://jsonplaceholder.typicode.com/posts')
    this.setState({
      posts: response.data
    })
  }

  componentDidMount() {
    this.getData()    
  }

  render() {
    const { posts } = this.state
    return (
      <div>
        {posts ? (
          posts.map((post) => (
            <article key={post.id}>
              <h2> title:{post.title}</h2>
              <p>post:{post.body}</p>
            </article>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )
  }
}
