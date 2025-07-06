import Body from 'front/common/Body'

export default function Index(params: string) {
  return (
    <Body>
      <p>Your random number is <code>{params}</code></p>
    </Body>
  )
}
