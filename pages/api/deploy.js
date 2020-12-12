import { execFile } from 'child_process'
import { readFileSync } from 'fs'

export default async (req, res) => {
  if (req.method === 'POST') {
    const now = new Date().getTime()
    execFile('./deploy.sh', (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`)
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`)
      }
      console.log(`stdout: ${stdout}`)

      res.statusCode = 200
      res.json({ duration: new Date().getTime() - now })
    })
  } else if (req.method === 'GET') {
    res.send(await readFileSync('./pages/api/deploy.log', 'utf-8'))
  } else {
    res.statusCode = 400
    res.json({ duration: new Date().getTime() - now })
  }
}
