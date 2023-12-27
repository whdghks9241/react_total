import React, {useEffect, useState} from "react";
import axios from "axios";

const PostComment = () => {

    const [userData, setUserDate] = useState([]);
    const [postComments, setPostComment] = useState([]);
    const [postPosts, setPostPosts] = useState([]);

    // API를 두 개 이상 가져올 경우
    useEffect(() => {
        axios.all([
            axios.get('https://jsonplaceholder.typicode.com/users'),
            axios.get('https://jsonplaceholder.typicode.com/comments'),
            axios.get('https://jsonplaceholder.typicode.com/posts')
        ])
        // 데이터를 성공적으로 가져왔을 때
        // azios.spread 여러가지 응답을 개별 응답으로 나눠서 제공된 set함수에 전달하는 역할
        .then(axios.spread((usersResponse, commentsResponse, postsResponse) => {
            setUserDate(usersResponse.data);
            setPostComment(commentsResponse.data);
            setPostPosts(postsResponse.data);
        }))
        .catch(error => {console.error(error) });
    }, []);

    return (
        <div>
            <h2>User 정보</h2>
                {userData.map(userdatas => (
                    <p key={userdatas.id}>name : {userdatas.name}</p>
                ))}
            <h2>게시물 정보</h2>
                {postComments.map(comments => (
                    <p key={comments.id}>email : {comments.email}</p>
            ))}
            <h2>내용 정보</h2>
                {postPosts.map(posts => (
                    <p key={posts.id}>title : {posts.title}</p>
            ))}
        </div>
    )


}

export default PostComment;
