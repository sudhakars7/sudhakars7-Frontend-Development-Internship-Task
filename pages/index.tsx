import { GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
import Pictures from '../components/Pictures';
import Posts from '../components/Posts';
import SearchBar from '../components/SearchBar';
import { fetchPhotos, fetchPosts } from '../util/api';

interface Photo {
  id: number;
  title: string;
  url: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}

interface HomeProps {
  photos?: Photo[];
  posts: Post[];
}

const Home: NextPage<HomeProps> = ({ photos = [], posts }) => {
  const [filteredPhotos, setFilteredPhotos] = useState<Photo[]>(photos);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  const handlePhotoSearch = (term: string) => {
    const filtered = photos.filter((photo) =>
      photo.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredPhotos(filtered);
  };

  const handlePostSearch = (term: string) => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handlePhotoSearch} />
      <Pictures photos={filteredPhotos} />
      <SearchBar onSearch={handlePostSearch} />
      <Posts posts={filteredPosts} /> 
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const photos = await fetchPhotos();
  const posts = await fetchPosts();

  return {
    props: {
      photos,
      posts,
    },
  };
};

export default Home;
