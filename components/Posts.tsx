import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { savePost, unsavePost } from '../redux/slices/savedItemsSlice';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsProps {
  posts: Post[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
  const dispatch = useDispatch();
  const savedPosts = useSelector((state: RootState) => state.savedItems.posts);

  const handleSavePost = (id: number) => {
    dispatch(savePost(id));
  };

  const handleUnsavePost = (id: number) => {
    dispatch(unsavePost(id));
  };

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          {savedPosts && savedPosts.includes(post.id) ? (
            <button onClick={() => handleUnsavePost(post.id)}>Unsave</button>
          ) : (
            <button onClick={() => handleSavePost(post.id)}>Save</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Posts;
