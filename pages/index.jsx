import DashboardPage from "../components/dashboard/DashboardPage";
import getSVMmodel from "../SVMtrained/SVM";
export default function Home({ data }) {
  return (
    <div>
      <DashboardPage data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const SVM = await require("libsvm-js/asm");

  let res = await fetch("https://vras.vercel.app/api/simulationsData", {
    method: "GET",
    withCredentials: true,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${process.env.MY_API}`,
    },
  });
  const svm = SVM.load(getSVMmodel());

  const unformattedData = await res.json();
  const data = unformattedData.map((sim) => {
    const before = (Number(sim.ipsAfrom) + Number(sim.ipsAtowards)) / 2;
    const after = (Number(sim.ipsBfrom) + Number(sim.ipsBtowards)) / 2;
    const delta = before - after;
    const AQ = Number(sim.AQ);
    sim.classification = svm.predictOne([before, after, delta]) === 1 ? "ASD" : "TD";
    return sim;
  });
  return {
    props: { data }, // will be passed to the page component as props
  };
}
