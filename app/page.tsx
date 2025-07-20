import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Index Page</h2><br/>
      <Link href="/users">Users</Link>
    </div>
  );
}
