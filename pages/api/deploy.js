import { execFile } from 'child_process'

export default async (req, res) => {
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
}
