"use client"

import Card from "@/app/components/Card";
import Carr from "@/app/components/Carr";
import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Foo from "@/app/components/Foo"
import Cont from "@/app/components/Cont"
import Mod from "@/app/components/Mod"


export default function Home() {
  return (
    <div>
      
      <div className="flex flex-col h-screen">
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
        <Foo />
      </div>
    </div>
  );
}
