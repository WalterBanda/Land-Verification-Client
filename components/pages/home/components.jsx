import { stats } from "../../../styles";

export function Stat({ name, data }) {
  return (
    <div className={stats.root}>
        <div>
        
        </div>
      <h3>Stat: {name}</h3>
      <h2>Data {data}</h2>
    </div>
  );
}
