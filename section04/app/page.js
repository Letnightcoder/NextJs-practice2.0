import Link from "next/link";


export default async function Home({searchParams}) {
  // console.log(await searchParams);
  // localhost:3000/?name=anurag&age=15
  return (
    <div>
      <h3>about page</h3>
      <Link href="/">Home</Link>
      <Link href="/services">Services</Link>
      <Link href="/blogs">blogs</Link>
    </div>
  );
}
