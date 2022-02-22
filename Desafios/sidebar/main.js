const sidebar = document.querySelector('.sidebar')
const menuButton = document.querySelector('.menu')
const searchIcon = document.querySelector('.search-container')

menuButton.addEventListener('click', () => {
  sidebar.classList.toggle('closed')
})

if (!sidebar.classList.value.includes('closed')) {
  searchIcon.addEventListener('click', () => {
    sidebar.classList.remove('closed')
  })
}
