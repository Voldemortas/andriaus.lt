export default function makeNavigation(text: string) {
  const prefixed = `/${text}`
  return {
    links: [{link: prefixed, text, key: prefixed}],
    selected: prefixed,
  }
}
