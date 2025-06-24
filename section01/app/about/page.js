import Link from "next/link";

export default function About() {
  return (
    <div>
      <h3>about page</h3>
      <Link href="/">Home</Link>
      <Link href="/services">Services</Link>
    </div>
  );
}
