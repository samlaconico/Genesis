type BlogCardParams = {
  title: string;
  description: string;
  images: string[];
  body: string;
};

export default function BlogCard({
  title,
  description,
  images,
  body,
}: BlogCardParams) {
  return (
    <div className="">
      <img></img>
    </div>
  );
}
