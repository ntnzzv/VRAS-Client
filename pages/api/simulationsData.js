import { collection, addDoc, getDocs, updateDoc, doc, increment, getDoc } from "firebase/firestore";
import db from "../../firebase/firebase";
export default async function handler(req, res) {
  if (!req.headers.authorization || req.headers.authorization !== process.env.MY_API) {
    return res.status(401).json({ error: "Incorrect API key" });
  }
  const databaseRef = collection(db, "simulations");
  const countRefDoc = doc(db, "simulationsCount", "lastId");
  if (req.method === "POST") {
    await updateDoc(countRefDoc, { id: increment(1) });
    const lastid = await getDoc(countRefDoc);
    req.body.id = lastid.data().id;
    addDoc(databaseRef, req.body).catch((err) => {
      console.error(err);
      updateDoc(countRefDoc, { id: increment(-1) });
      return res.status(500).json({ error: `${err}` });
    });
    return res.status(200).json(lastid.data().id);
  }
  if (req.method === "GET") {
    const simulationsSnapShot = await getDocs(databaseRef).catch((err) => {
      console.error(err);
      return res.status(500).json({ error: `${err}` });
    });
    const simulationsDataList = simulationsSnapShot.docs.map((doc) => doc.data());
    return res.status(200).json(simulationsDataList);
  }
  return res.status(400);
}
