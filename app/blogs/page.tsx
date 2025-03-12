import Banner from "@/components/ui/banner";
import BlogList from "./blog-list";

type Props = {};

export default function page({}: Props) {
  return (
    <main>
      <Banner
        title="Top Blogs"
        className="text-[5vw]"
        img="https://images.unsplash.com/photo-1454496406107-dc34337da8d6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <BlogList />
    </main>
  );
}
