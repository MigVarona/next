"use client"

import Card from "@/app/components/Card";
import Carr from "@/app/components/Carr";
import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Foo from "@/app/components/Foo"
import Cont from "@/app/components/Cont"
import Mod from "@/app/components/Mod"
import Im from "@/app/components/Im"
import Na from "@/app/components/Na"




export default function Home() {
  return (
    <div>
      <Na />
      <div className="flex flex-col h-screen">
        <div className="">
      
      </div>
        <Nav />
        <Hero />
     

        <div className="flex-grow flex items-center justify-center flex-wrap gap-8 mt-9 mb-9">
          <Card />
          <Card />
          <Card />
          
        </div>


        <div className="flex items-center justify-center">
          <Carr />
        </div>
        <Cont />
        <Mod />
        <div className="Im flex items-center justify-center gap-6 m-6 flex-wrap">
      <Im />
      <Im />
      <Im />
      <Im />
      </div>
        <Foo />
      </div>
    </div>
  );
}
