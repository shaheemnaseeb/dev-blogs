import BlogCard from "@/component/BlogCard";
import { NextPage } from "next";

interface Props {}

const Blogs: NextPage<Props> = () => {
  return (
    <div className="max-w-3xl mx-auto p-5 space-y-5">
      <BlogCard
        title="BlogPost 1"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque praesentium 
        nulla earum voluptates impedit at ut eius aliquid, doloribus necessitatibus explicabo, eaque 
        quas id dolores non assumenda repellat, magnam ratione."
      />
      <BlogCard
        title="BlogPost 2"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque praesentium 
        nulla earum voluptates impedit at ut eius aliquid, doloribus necessitatibus explicabo, eaque 
        quas id dolores non assumenda repellat, magnam ratione."
      />
      <BlogCard
        title="BlogPost 3"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque praesentium 
        nulla earum voluptates impedit at ut eius aliquid, doloribus necessitatibus explicabo, eaque 
        quas id dolores non assumenda repellat, magnam ratione."
      />
    </div>
  );
};

export default Blogs;
