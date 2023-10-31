
import Prisma from '../../prisma/prisma';

export default async function handler(req, res) {
  const client  = req.body;

  const result = await prisma.client.create({
    data: client
  })
  
  console.log('display data', client);
  res.send({
    data: client
  });

};