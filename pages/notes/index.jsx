import Link from "next/link";

export default function Notes() {
  return (
    <>
      <h1>Hello, notes</h1>
      <Link href="/notes/[id]" as="/notes/1">
        <a> note 1</a>
      </Link>
    </>
  );
}

export async function getStaticProps(context) {
  console.log(context);
  return {
    props: {},
  };
}
