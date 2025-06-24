import Link from "next/link";

export default function seo() {
  return (
    <div>
      <h3>seo page</h3>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/services/web-dev">Web Dev</Link>
    </div>
  );
}
