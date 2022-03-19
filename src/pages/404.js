import PageBuilder from "../components";
import Error from "next/error";

export default function E04Page() {
    return (
      <PageBuilder>
        <Error statusCode={404} />
      </PageBuilder>
    );
  }