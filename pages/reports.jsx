import React from "react";
import ReportsPage from "../components/report/ReportPage";
const reports = ({ data }) => {
  return (
    <div>
      <ReportsPage data={data} />
    </div>
  );
};

export async function getServerSideProps(context) {
  let res = await fetch("http://localhost:3000/api/simulationsData", {
    method: "GET",
    withCredentials: true,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      key: `${process.env.MY_API}`,
    },
  });
  const unformattedData = await res.json();

  const data = unformattedData.map((item, index) => {
    let formattedDate = new Date(item.date.seconds * 1000).toLocaleDateString();
    delete item.date;
    item.date = formattedDate;
    let avgIpsBefore = (Number(item["ips-A-from"]) + Number(item["ips-A-towards"])) / 2;
    let avgIpsAfter = (Number(item["ips-B-from"]) + Number(item["ips-B-towards"])) / 2;
    item["avg-ips-A"] = avgIpsBefore;
    item["avg-ips-B"] = avgIpsAfter;
    item["average-ips"] = (avgIpsAfter + avgIpsBefore) / 2;
    item["delta-ips"] = avgIpsBefore - avgIpsAfter;
    item["id"] = index;
    return item;
  });
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default reports;
