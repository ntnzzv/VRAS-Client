import { collection, addDoc, getDocs } from "firebase/firestore";
import firebase from "../../firebase/firebase";
export default async function handler(req, res) {
  if (!req.headers.authorization || req.headers.authorization !== process.env.MY_API) {
    return res.status(401).json({ error: "Incorrect API key" });
  }
  const databaseRef = collection(firebase, "simulations");

  if (req.method === "POST") {
    addDoc(databaseRef, req.body).catch((err) => {
      console.error(err);
      return res.status(500).json({ error: `${err}` });
    });
    return res.status(200).json(req.body);
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
