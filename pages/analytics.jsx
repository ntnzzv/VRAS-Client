import AnalyticsPage from "../components/analytics/AnalyticsPage";
import getSVMmodel from "../SVMtrained/SVM";
export default function analytics({ data }) {
  return (
    <div>
      <AnalyticsPage data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const SVM = await require("libsvm-js");

  let res = await fetch("http://localhost:3000/api/simulationsData", {
    method: "GET",
    withCredentials: true,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${process.env.MY_API}`,
    },
  });
  const unformattedData = await res.json();
  const svm = SVM.load(getSVMmodel());

  const data = unformattedData.map((item) => {
    let avgIpsBefore = (Number(item["ipsAfrom"]) + Number(item["ipsAtowards"])) / 2;
    let avgIpsAfter = (Number(item["ipsBfrom"]) + Number(item["ipsBtowards"])) / 2;
    item["avg-ips-A"] = Math.round(avgIpsBefore);
    item["avg-ips-B"] = Math.round(avgIpsAfter);
    item["average-ips"] = Math.round((avgIpsAfter + avgIpsBefore) / 2);
    item["delta-ips"] = Math.round(avgIpsBefore - avgIpsAfter);
    item.classification =
      svm.predictOne([avgIpsBefore, avgIpsAfter, avgIpsBefore - avgIpsAfter, Number(item.AQ)]) === 1
        ? "ASD"
        : "TD";
    return item;
  });
  return {
    props: { data }, // will be passed to the page component as props
  };
}
