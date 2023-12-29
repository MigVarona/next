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
import Bu from "@/app/components/Bu"
import Buv from "@/app/components/Buv"
import Pr from "@/app/components/Pr"
import Pag from "@/app/components/pag"
import Ima from "@/app/components/Ima"
import Inp from "@/app/components/Inp"
import Form from "@/app/components/Form"
import Prod from "@/app/components/Prod"
import Po from "@/app/components/Po"
import Ca from "@/app/components/Ca"
import Nava from "@/app/components/Nava"





export default function Home() {
  return (
    <div className="mt-5">
      <Na />
      <div className="flex flex-col h-screen">
        <div className="">
      
      </div>
      <Nava />
        <Nav />
        <Hero />
     

        <div className="flex-grow flex items-center justify-center flex-wrap gap-8 mt-9 mb-9">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          
        </div>


        <div className="flex items-center justify-center gap-9 flex-wrap">
          <Carr />
          <Carr />
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
      <Bu />
      <Pr />
      <Pag />
      <Buv />
     <Ima />
     <Form />
     <Prod />
     <Po />
     <Ca />
   
        <Foo />
      </div>
    </div>
  );
}
