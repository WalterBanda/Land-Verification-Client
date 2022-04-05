import { sections } from "../../styles";
import { Stat, Card, Authlet } from "../index";
import { useRouter } from "next/router";

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
      <p className={sections.header}>Popular Land </p>
      <div className={sections.stats}>
        {stats.map((e) => (
          <Card
            key={e}
            background={
              "https://images.unsplash.com/photo-1648668874032-862744573bb1"
            }
            alt={e}
          />
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
function RecentTransaction({ title, data }) {
  return (
    <div>
      <p className={sections.header}> {title ?? "Recent Transactions"} </p>
      <div className={sections.transactions}>
        <Card>Transactions Descriptions</Card>
        <Card>Transactions Descriptions</Card>
        <Card>Transactions Descriptions</Card>
        <Card>Transactions Descriptions</Card>
        <Card>Transactions Descriptions</Card>
        <Card>Transactions Descriptions</Card>
        <Card>Transactions Descriptions</Card>
        <Card>Transactions Descriptions</Card>
        <Card>Transactions Descriptions</Card>
        <Card>Transactions Descriptions</Card>
        <Card>Transactions Descriptions</Card>
        <Card>Transactions Descriptions</Card>
        <Card>Transactions Descriptions</Card>
      </div>
    </div>
  );
}

function Authlets() {
  const router = useRouter();

  const login_nav = () => router.push("/auth/login");

  return (
    <div className={sections.authlets}>
      <Authlet icon="verifier-google" />
      <Authlet icon="verifier-github" />
      <Authlet
        icon="verifier-email"
        className={sections.email}
        callback={login_nav}
      />
    </div>
  );
}

export {
  TransactionStats,
  RecentTransaction,
  PopularLand,
  AccountDetails,
  Authlets,
};
