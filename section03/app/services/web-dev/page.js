import Link from "next/link";

export default function webdev() {
  return (
    <div>
      <h3>web dev page</h3>
      <Link href="/">Home</Link>
      <Link href="/services">Services</Link>
      <Link href="/about">About</Link>
    </div>
  );
}
