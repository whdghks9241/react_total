import React from "react";

const About = () => <div>소개페이지</div>

const Blog = () => {

    const posts = [
        {id:1, title:'나의 첫 블로그', content:'블로그 입니다.'},
        {id:2, title:'2번게시물인디', content:'내용은 없슈'}
    ];

    return (
        <div>
            {posts.map (post =>(
                <div> key={post.id}
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    )
}

export default Blog;