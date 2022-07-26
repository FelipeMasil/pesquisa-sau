

import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";


const prisma = new PrismaClient();

export default async function createAnswer(req:NextApiRequest, res:NextApiResponse) {
  
  const { answer } = req.body

  if(answer === ""){
    console.log('Gambiarra para analisar e arrumar')
  }else{
    await prisma.survey.create({
      data:{
        answer
      }
    })
  }

  res.status(200).json({message: "Created"})
}