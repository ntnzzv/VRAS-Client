import { collection, addDoc, getDocs } from "firebase/firestore";
import firebase from "../../firebase/firebase";
export default async function handler(req, res) {
  const databaseRef = collection(firebase, "simulations");
  if (!req.query.key || req.query.key !== process.env.MY_API) {
    return res.status(401).json({ error: "Incorrect API key" });
  }
  delete req.query.key;

  if (req.method === "POST") {
    addDoc(databaseRef, req.query).catch((err) => {
      console.error(err);
      return res.status(500).json({ error: `${err}` });
    });
    return res.status(200).json(req.query);
  }
  if (req.method === "GET") {
    const simulations = collection(firebase, "simulations");
    const simulationsSnapShot = await getDocs(simulations).catch((err) => {
      console.error(err);
      return res.status(500).json({ error: `${err}` });
    });
    const simulationsDataList = simulationsSnapShot.docs.map((doc) => doc.data());
    return res.status(200).json(simulationsDataList);
  }
  return res.status(400);
}
