import express from 'express'

const server = express()

server.get('/', (request: express.Request, response: express.Response) => {
	response.send({ message: 'API ok' })
})

server.listen(3001, () => {
	console.log(`Listening on port 3001`)
})
