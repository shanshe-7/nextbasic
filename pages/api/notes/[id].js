import nc from "next-connect";
import notes from "../../../src/data/data";

export default nc()
  .post((req, res) => {
    const note = {
      ...req.body,
      id: Date.now().toString(),
    };
    notes.push(note);
    res.json({ data: notes });
  })
  .get((req, res) => {
    res.json({ data: notes });
  });
