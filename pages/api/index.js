import nc from "next-connect";

const handler = nc()
  .get((req, res) => {
    res.json({ message: "get" });
  })
  .post((req, res) => {
    res.json({ message: "post" });
  });

export default handler;
