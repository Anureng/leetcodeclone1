import { auth } from "@clerk/nextjs";
import Navbar from "./custom/compnentdata/Navbar";
import Table from "./custom/compnentdata/Table";
export default function Home() {

  return (
    <>
      <Navbar />
      <Table />
    </>
  );
}
