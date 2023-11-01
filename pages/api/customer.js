
import prisma from '../../prisma/prisma';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body;

    try {
      const customer = await prisma.customer.create({
        data: formData
      })
  
      if(customer) {
        res.status(200).send({ 
          customer: customer,
          message: 'Form Successfully Submitted!',
          submitted: true
        });
      }
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }

  if (req.method === 'GET') {

    try {
      const customers = await prisma.customer.findMany()

      res.status(200).send({ customers })

      } catch (err) {
      res.status(500).json({ error: err })
    }
  }
  
};