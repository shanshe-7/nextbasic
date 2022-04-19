import Link from "next/link";

export default function Home() {
  console.log(process.env.SECRET_KEY);
  return (
    <>
      <h1>Hello</h1>
      <Link href="/notes">
        <a>Notes</a>
      </Link>
    </>
  );
}
