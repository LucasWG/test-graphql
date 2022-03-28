import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	tb: boolean
	tn: number
}

const handle = async (req: NextApiRequest, res: NextApiResponse<Data | { error?: string }>) => {
	res.setHeader('Cache-Control', 'public, max-age=10, s-maxage=10, stale-while-revalidate=59')

	try {
		return res.status(200).json({ tb: true, tn: new Date().getTime() })
	} catch (err: any) {
		return res.status(400).json({ error: err.message })
	}
}

export default handle
