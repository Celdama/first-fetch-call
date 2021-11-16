const img = document.querySelector('img')
const btn = document.querySelector('button')

const getCatGif = () => {
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=jbAy49ozGN0Qs3mgXOJmbvFVf9eOvZRm&s=cats', {
    mode: 'cors'
  })
    .then((res) => {
      return res.json()
    })
    .then(res => {
      img.src = res.data.images.original.url
  })
}



btn.addEventListener('click', () => getCatGif())

window.onload(getCatGif())