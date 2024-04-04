import { auth } from "@clerk/nextjs";
import Navbar from "./custom/compnentdata/Navbar";
import Table from "./custom/compnentdata/Table";
export default function Home() {
  const { userId }: { userId: string | null } = auth()
  return (
    <>
      <Navbar userId={userId} />
      <Table />
    </>
  );
}
