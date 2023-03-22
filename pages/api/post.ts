// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    firsName: string
    lastName: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method } = req

    switch (method) {
        case 'GET':
            return
        default:
            return res.status(404).send('Not Found')
    }
}
