
import Prisma from '../../prisma/prisma';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body;

    try {

      const result = await prisma.customer.create({
        data: formData
      })
      
      console.log('display data', result);
  
      if(result) {
  
        res.status(200).send({ 
          customer: result,
          message: 'Form Successfully Submitted!',
          submitted: true
        });
      }
    } catch (err) {
      res.status(500).json({ error: 'failed to load data' })
    }


  }
  
};