import './style.css'

window.onload = () => {
  const createButton = document.getElementById('create-button')

  createButton!.addEventListener('click', () => {
    const attendees = document.getElementById('attendees') as HTMLTextAreaElement
    console.log(attendees.value)
  })
}
