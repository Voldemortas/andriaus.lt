import { exec } from 'child_process'

export default async (req, res) => {
  exec('git pull; yarn; yarn build; pm2 start', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`)
      res.statusCode = 400
      res.json({ success: false })
      return
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`)
      res.statusCode = 400
      res.json({ success: false })
      return
    }
    console.log(`stdout: ${stdout}`)
    res.statusCode = 200
    res.json({ success: true })
  })
}
