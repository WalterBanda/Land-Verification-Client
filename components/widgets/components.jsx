import { components } from "../../styles";

export function Stat({ name, data }) {
  return (
    <div className={components.stats}>
      <Graph />
      <main>
        <h3>{name}</h3>
        <h2>{data}</h2>
      </main>
    </div>
  );
}

export function Card({ className,children }) {
  return <div className={`${className} ${components.card}`}>{children}</div>;
}

function Graph({ data }) {
  return (
    <svg
      width="46"
      height="43"
      viewBox="0 0 46 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="42.1077"
        width="41.6078"
        height="5.33287"
        rx="2.66644"
        transform="rotate(-90 0 42.1077)"
        fill="#D9DDE8"
      />
      <rect
        y="42.5"
        width="24.6522"
        height="5.33"
        rx="2.665"
        transform="rotate(-90 0 42.5)"
        fill="#1B2559"
      />
      <rect
        x="13.3329"
        y="42.1077"
        width="41.6078"
        height="5.33287"
        rx="2.66644"
        transform="rotate(-90 13.3329 42.1077)"
        fill="#D9DDE8"
      />
      <rect
        x="13.3329"
        y="42.5"
        width="19.1739"
        height="5.33"
        rx="2.665"
        transform="rotate(-90 13.3329 42.5)"
        fill="#1B2559"
      />
      <rect
        x="26.6658"
        y="41.8623"
        width="41.1125"
        height="5.33287"
        rx="2.66644"
        transform="rotate(-90 26.6658 41.8623)"
        fill="#D9DDE8"
      />
      <rect
        x="26.6658"
        y="42.2499"
        width="27.0652"
        height="5.33"
        rx="2.665"
        transform="rotate(-90 26.6658 42.2499)"
        fill="#1B2559"
      />
      <rect
        x="39.9987"
        y="42.1077"
        width="41.6078"
        height="5.33287"
        rx="2.66644"
        transform="rotate(-90 39.9987 42.1077)"
        fill="#D9DDE8"
      />
      <rect
        x="39.9987"
        y="42.5"
        width="19.1739"
        height="5.33"
        rx="2.665"
        transform="rotate(-90 39.9987 42.5)"
        fill="#1B2559"
      />
    </svg>
  );
}
