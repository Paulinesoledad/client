import PostCard from '../components/PostCard';

const dummyPosts = [
  {
    _id: '1',
    title: 'First Blog Post',
    snippet: 'This is the first post in our blog app...',
  },
  {
    _id: '2',
    title: 'A Day in Pauline’s Life',
    snippet: 'Let me take you through what a day feels like...',
  },
];

function Home() {
  return (
    <div>
      {dummyPosts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}

export default Home;
