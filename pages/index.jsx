import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import SimulationsGrid from "../components/dashboard/SimulationsGrid";
import ClassificationsAmount from "../components/dashboard/ClassificationsAmount";
import SimulationsAmount from "../components/dashboard/SimulationsAmount";
import DashboardPage from "../components/dashboard/DashboardPage";
export default function Home({ data }) {
  return (
    <div>
      <DashboardPage data={data} />
    </div>
  );
}

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

  const data = unformattedData.map((item) => {
    let formattedDate = new Date(item.date.seconds * 1000).toLocaleDateString();
    delete item.date;
    item.date = formattedDate;
    return item;
  });
  return {
    props: { data }, // will be passed to the page component as props
  };
}
