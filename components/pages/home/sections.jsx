import { home_components } from "../../../styles";
import { Card, Stat } from "../../widgets/components";

function TransactionStats() {
  return (
    <div className={home_components.root}>
      <p className={home_components.header}>Land Transactions Stats</p>
      <div className={home_components.stats}>
        <Stat name={"Daily Stats"} data={10} />
        <Stat name={"Land Sold"} data={10} />
        <Stat name={"Amount transacted"} data={10} />
      </div>
    </div>
  );
}

// function PopularLand() {
//   let stats = [];
//   for (let index = 0; index < 20; index++) {
//     stats.push(index);
//   }

//   return (
//     <div>
//       <p className={home_components.header}>Popular Land </p>
//       <div className={home_components.stats}>
//         {stats.map((e) => (
//           <Card key={e} background={"https://images.unsplash.com/photo-1648668874032-862744573bb1"} alt={e} />
//         ))}
//       </div>
//     </div>
//   );
// }
function AccountDetails() {
  return (
    <div className={home_components.root}>
      <p className={home_components.header}>Account Details</p>
      <div className={home_components.stats}>
        <Stat name={"Land Owned"} data={10} />
        <Stat name={"Land Sold"} data={10} />
        <Stat name={"Amount transacted"} data={10} />
        <Stat name={"Account balance"} data={10} />
      </div>
    </div>
  );
}
function RecentTransaction({title,data}) {
  return (
    <div>
      <p className={home_components.header}> {title ?? "Recent Transactions"} </p>
      <div className={home_components.transactions}>
        <Card description={"Transactions Descriptions"}/>
        <Card description={"Transactions Descriptions"}/>
        <Card description={"Transactions Descriptions"}/>
        <Card description={"Transactions Descriptions"}/>
        <Card description={"Transactions Descriptions"}/>
        <Card description={"Transactions Descriptions"}/>
        <Card description={"Transactions Descriptions"}/>
      </div>
    </div>
  );
}

export { TransactionStats, RecentTransaction, AccountDetails };
