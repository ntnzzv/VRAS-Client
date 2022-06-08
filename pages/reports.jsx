import React from "react";
import ReportsPage from "../components/report/ReportPage";
import getSVMmodel from "../SVMtrained/SVM";
const reports = ({ data }) => {
  return (
    <div>
      <ReportsPage data={data} />
    </div>
  );
};

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
  const unformattedData = await res.json();
  const svm = SVM.load(getSVMmodel());

  const data = unformattedData.map((item) => {
    let avgIpsBefore = (Number(item["ipsAfrom"]) + Number(item["ipsAtowards"])) / 2;
    let avgIpsAfter = (Number(item["ipsBfrom"]) + Number(item["ipsBtowards"])) / 2;
    item["avg-ips-A"] = Math.round(avgIpsBefore);
    item["avg-ips-B"] = Math.round(avgIpsAfter);
    item["average-ips"] = Math.round((avgIpsAfter + avgIpsBefore) / 2);
    item["delta-ips"] = Math.round(avgIpsAfter - avgIpsBefore);
    item.classification =
      svm.predictOne([avgIpsBefore, avgIpsAfter, avgIpsAfter - avgIpsBefore]) === 1 ? "ASD" : "TD";
    return item;
  });
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default reports;
