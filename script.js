const img = document.querySelector('img')
const btn = document.querySelector('button')
const form = document.querySelector('form')

const getSearchBarValue = () => {
  const input = document.querySelector('input')
  return input.value
}

const myInit = {
  mode: 'cors'
}

const getGiff = (userChoice = 'cat') => {
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=jbAy49ozGN0Qs3mgXOJmbvFVf9eOvZRm&s=${userChoice}`, myInit)
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

// SAME FUNCTION WITH ASYNC AWAIT
const getGiffWithAsync = async (userChoice = 'cat') => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=jbAy49ozGN0Qs3mgXOJmbvFVf9eOvZRm&s=${userChoice}`, myInit);
  response.json().then((response) => {
    img.src = response.data.images.original.url
  })
}


form.addEventListener('submit', () => {
  getGiffWithAsync(getSearchBarValue())
  form.reset()
})

btn.addEventListener('click', () => getGiff())





window.onload = getGiffWithAsync()
