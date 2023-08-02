import * as dotenv from 'dotenv'
import app from './server'
dotenv.config()

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Server is running in: ${port}`)
})