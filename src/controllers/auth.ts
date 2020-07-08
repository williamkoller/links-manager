import express from 'express'

const router = express.Router()

router.get(
	'/sign-in',
	(request: express.Request, response: express.Response) => {
		return response.json({ message: 'Sign In' })
	}
)

router.get(
	'/sign-up',
	(request: express.Request, response: express.Response) => {
		return response.json({ message: 'Sign Up' })
	}
)

export default router
