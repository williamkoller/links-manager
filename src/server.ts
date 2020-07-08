import express from 'express'
import authController from './controllers/auth'
import dotenv from 'dotenv'

dotenv.config()
const server = express()

server.use('/auth', authController)

server.listen(process.env.PORT, () => {
	console.log(`Listening on port ${process.env.PORT}`)
})
