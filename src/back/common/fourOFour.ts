export default async function FourOFour(request?: string) {
  return new Response('404', {status: 404, statusText: 'Not found'})
}
