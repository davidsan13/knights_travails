export default function menu() {
  const container = document.createElement('div')
  const header = document.createElement('h1')
  header.classList.add('title')
  header.textContent = ' Knight Travails'

  container.appendChild(header)

  return container
}