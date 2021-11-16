const img = document.querySelector('img')
const btn = document.querySelector('button')
const form = document.querySelector('form')

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
    .catch(error => {
    console.log('this error', error)
  })
}



btn.addEventListener('click', () => getCatGif())


const getSearchBarValue = () => {
  const input = document.querySelector('input')
  return input.value
}

const getGiff = (userChoice) => {
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=jbAy49ozGN0Qs3mgXOJmbvFVf9eOvZRm&s=${userChoice}`, {
    mode: 'cors'
  })
    .then((res) => {
      return res.json()
    })
    .then(res => {
      img.src = res.data.images.original.url
    })
    .catch(error => {
      alert('Your keyword dont match any gif, please try again')
      console.log(error);
  })
}


form.addEventListener('submit', () => {
  const query = getSearchBarValue()
  getGiff(query)
  form.reset()
})





window.onload = getCatGif()
