import Link from "next/link";

const Paths = [
  {
    Label: "Users",
    Path: "/users"
  },
  {
    Label: "Products",
    Path: "/product"
  },
]

export default function Home() {
  return (
    <div>
      <h2 className="p-4">Index Page:</h2>
      <hr/>
      <div className="flex flex-col gap-2 p-4 md:p-8">
        {Paths.map((item, index) => (
          <Link key={index} href={item.Path} className="p-4 border-1 rounded-md transition duration-300 over:cursor-pointer hover:scale-105 text-center">
            {item.Label}
          </Link>
        ))}
      </div>
    </div>
  );
}
