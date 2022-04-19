import { useRouter } from "next/router";

export default function Note() {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);

  return <h1>Hello notes</h1>;
}
