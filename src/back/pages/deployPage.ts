import FourOFour from 'back/common/fourOFour.ts'
import deploy from 'back/utils/deploy.ts'

export default async function deployPage(request: Request, params: string[]) {
  if (request.method !== 'POST') {
    return FourOFour()
  }
  const response = await deploy()
  if (response.stderr) {
    return new Response(response.stderr.toString(), {status: 500})
  }
  return new Response('success!', {status: 200})
}
