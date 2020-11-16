import React from 'react';
import './styles.css'

function PostAuthor({ author, date}) {
  return (
    <div className="post-author">
      <img className="avatar" src={author.avatar} alt="pfl"/>
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PostComments({ comments }) {
    return (
      <div className="post-comments">
        <div className="divider" />
        {comments.map(comment => (
         <div key={comment.id} className="comment">
             <img className="avatar" src={comment.author.avatar} alt="avatar"/>
             <p>
                 <span>{comment.author.name}</span>
                 {comment.content}
             </p>
        </div>
        ))}
      </div>
    );
  }

  function PostItem({ author, date, content, comments }) {
    return (
      <div className="post">
        <PostAuthor author={author} date={date}/>
        <p className="post-content">{content}</p>
        <PostComments comments={comments}/>
      </div>
    );
  }
  
  export default PostItem;