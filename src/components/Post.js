import React, { Component } from "react";
import axios from "axios";

export default class Post extends Component {
  state = {
    post: ""
  };

  componentDidMount() {
    let id = this.props.match.params.postId;
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}?_limit=9`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          post: res.data
        });
      });
  }

  render() {
    const post = this.state.post ? (
      <div>
        <h1 style={{ textAlignLast: "center" }}>
          Post{console.log(this.state.post.title)}
        </h1>

        <div
          className="card bg-secondary mb-3"
          style={{
            width: "20rem",
            height: "25rem",
            display: "inline-block",
            margin: "20px"
          }}
        >
          <div className="card-header">{this.state.post.id}</div>
          <div className="card-body">
            <h5 className="card-title">{this.state.post.title}</h5>
            <p className="card-text">{this.state.post.body}</p>
          </div>
        </div>
      </div>
    ) : (
      <div>No posts</div>
    );

    return <div>{post}</div>;
  }
}
