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





// EN DESSOUS RIEN A VOIR AVEC L'APP
// C'EST JUSTE UN CAS PRATIQUE DE REECRITURE DE FONCTION EN UTILISANT ASYNC AWAIT

// const doubleAfter2Seconds = (x) => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(x * 2)
//     }, 2000);
//   })
// }

// const addPromise = (x) => {
//   return new Promise(resolve => {
//     doubleAfter2Seconds(10).then((a) => {
//       doubleAfter2Seconds(20).then((b) => {
//         doubleAfter2Seconds(30).then((c) => {
//           resolve(x + a + b + c);
//       	})
//       })
//     })
//   });
// }

// const addAsync = async (x) => {
//   const a = await doubleAfter2Seconds(10)
//   const b = await doubleAfter2Seconds(20)
//   const c = await doubleAfter2Seconds(30)
//   return x + a + b + c
// }

// addAsync(10).then(sum => {
//   console.log(sum)
// })