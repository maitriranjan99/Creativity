import { useEffect, useState } from "react";
import { Container, PostCard } from "../components/index.js";
import service from "../appwrite/dbConfig";
const AllPost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard
                $id={post.$id}
                title={post.title}
                featuredimage={post.featuredimage}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPost;
