
import Prisma from '../../prisma/prisma';

export default async function handler(req, res) {
  const formData = req.body;

  const result = await prisma.customer.create({
    data: formData
  })
  
  console.log('display data', result);

  if(result) {

    res.send({ 
      customer: result,
      message: 'Form Successfully Submitted!',
      submitted: true
    });
  }

};