import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Table from "./custom/compnentdata/Table";
export default function Home() {
  return (
    <>
      {/* <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="">
          <TabsTrigger value="account" >
            <p >
              Test Case 1
            </p>
          </TabsTrigger>
          <TabsTrigger value="password">
            <p >
              Test Case 2
            </p>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className='flex space-y-5 flex-col'>
            <p>Inputs : </p>
            <div className='flex space-x-3 tracking-wide' >
              Data
            </div>
            <div>
              Data
            </div>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className='flex space-y-5 flex-col'>
            <p>Inputs : </p>
            <div className='flex space-x-3 tracking-wide' >
              Data
            </div>
            <div>
              Data
            </div>
          </div>
        </TabsContent>
      </Tabs> */}

      <Table />
    </>
  );
}
