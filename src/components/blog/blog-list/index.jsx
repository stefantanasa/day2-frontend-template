import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
// import posts from "../../../data/posts.json";
export default class BlogList extends Component {
  state = {
    posts:[],
    blog: {},
    loading: true,
  }


  componentDidMount= async() =>{

    
    const response = await fetch("http://localhost:3001/blogs")
      if(response.ok) {
        const posts = await response.json()
          this.setState({ posts:posts, loading: false });
        // console.log(posts)
        // const { id } = this.props.match.params;
        // console.log(id);
        // const blog = posts.find((post) => post._id.toString() === id);
        // if (blog) {
        //   this.setState({ blog, loading: false });
        // } else {
        //   this.props.history.push("/404");
        // }
        
      } else {
        console.log('error while fetching')
      }
    
  }

  
  render() {
    const {posts} = this.state
    return (
      <Row>
        {posts.map((post) => (
          <Col md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={post.title} {...post} />
          </Col>
        ))}
      </Row>
    );
  }
}
