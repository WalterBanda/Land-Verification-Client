import { sections } from "../../styles";
import { Card, Stat } from "../widgets/components";

function TransactionStats() {
  return (
    <div className={sections.root}>
      <p className={sections.header}>Land Transactions Stats</p>
      <div className={sections.stats}>
        <Stat name={"Daily Stats"} data={10} />
        <Stat name={"Land Sold"} data={10} />
        <Stat name={"Amount transacted"} data={10} />
      </div>
    </div>
  );
}

function PopularLand() {
  let stats = [];
  for (let index = 0; index < 20; index++) {
    stats.push(index);
  }

  return (
    <div>
      <p className={home_components.header}>Popular Land </p>
      <div className={home_components.stats}>
        {stats.map((e) => (
          <Card key={e} background={"https://images.unsplash.com/photo-1648668874032-862744573bb1"} alt={e} />
        ))}
      </div>
    </div>
  );
}
function AccountDetails() {
  return (
    <div className={sections.root}>
      <p className={sections.header}>Account Details</p>
      <div className={sections.stats}>
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
      <p className={sections.header}> {title ?? "Recent Transactions"} </p>
      <div className={sections.transactions}>
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

export { TransactionStats, RecentTransaction,PopularLand, AccountDetails };