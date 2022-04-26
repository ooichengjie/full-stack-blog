import "./singlePost.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2]
  const [post, setPost] = useState({})

  useEffect(() => {
    const getPost = async () => {
  
      const res = await axios.get("/posts/"+ path);
      setPost(res.data)
    };
    getPost()
  },[path]);

  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img className="singlePostImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
            <h1 className="singlePostTitle">
            {post.title}
            <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
            <span>
            Author:
            <Link to={`/?user=${post.username}`} className="link">
            <b className="singlePostAuthor">
              {post.username}
            </b>
            </Link>
          </span>
             <span className="singlePostDate">
                {new Date(post.createdAt).toDateString()}
             </span>
            </div>
            <p className="singlePostDesc">
              {post.desc}
            </p>
        </div>
    </div>
  )
}
