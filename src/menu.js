export default function menu() {
  const container = document.createElement('div')
  const header = document.createElement('h1')
  const btn = document.createElement('btn')
  header.classList.add('title')
  header.textContent = 'Knight Travails'
  btn.classList.add('start')
  btn.textContent = 'Start'
  container.appendChild(header)
  container.appendChild(btn)

  return container
}