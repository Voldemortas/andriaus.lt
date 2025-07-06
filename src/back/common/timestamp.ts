export default function getTimestamp(date = new Date()) {
  const timestamp = date.toISOString().replace('T', ' ').replace(/Z$/, '')
  return `[${timestamp}]`
}
