import Head from "next/head";

export default function Index() {
  return <>Index</>;
}

Index.getLayout = function getLayout(page) {
  return (
    <>
      <main>{page}</main>
    </>
  );
};
