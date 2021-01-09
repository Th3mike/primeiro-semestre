const form = document.getElementById('form')
const name = document.getElementById('name')
const age = document.getElementById('age')
const gender = document.getElementById('gender')
const view = document.getElementById('view1')
const view2 = document.getElementById('view2')
const result = document.getElementById('result')

const pink = `<span style='color: pink;'>`
const blue = `<span style='color: blue;'>`
const green = `<span style='color: green;'>`

name.focus()

const canVote = []
const mustVote = []

form.onsubmit = function (event) {
  event.preventDefault()

  /* Nome */
  if (!name.value | !isNaN(name.value)) {
    result.innerText = 'Você precisa informar seu NOME!'
    result.className = 'error'
    name.value = ''
    name.focus()
    return
  }

  
  /* Idade */
  const number = parseInt(age.value, 10)
  if (isNaN(number)) {
    result.innerText = 'Apenas números são permitidos na IDADE!'
    result.className = 'error'
    age.value = ''
    age.focus()
    return
  }

  if (age.value <= 16) { //Podem Votar
    age.focus()
    const value = gender.options[gender.selectedIndex].value
    //if normal
   /*if (value == 'f') {
      canVote.push(blue+name.value+`</span>`)
    } else {
      canVote.push(pink+name.value+`</span>`)
    }*/
    //if concatenado
    canVote.push(value == 'f' ? blue+name.value+`</span>` : pink+name.value+`</span>`)
  } else if (age.value >= 18 && age.value <= 70) { //Devem Votar
    age.focus()
    const value = gender.options[gender.selectedIndex].value
    //if normal
    /*if (value == 'f') {
      mustVote.push(blue+name.value+`</span>`)
    } else {
      mustVote.push(pink+name.value+`</span>`)
    }*/
    //if concatenado
    mustVote.push(value == 'f' ? blue+name.value+`</span>` : pink+name.value+`</span>`)
  }

  /* Sexo */ 
  if (!gender.value) {
    result.innerText = 'Você precisa informar seu SEXO!'
    result.className = 'error'
    gender.value = ''
    gender.focus()
    return
  }

  result.innerHTML = green+`Você adicionou uma pessoa!</span>`
  result.className = ''
  name.value = ''
  age.value = ''
  gender.value = ''
  name.focus()
}

view.onclick = function () {
    if (canVote.length <= 0) {
    result.innerText = 'Não há pessoas cadastradas que podem voluntariamente votar.'
    result.className = 'error'  
    } else {
    result.classList.remove('error')
    canVote.sort()
    result.innerHTML = `Pessoas que podem votar: <br>${canVote.join(', ')}`
    }
}

view2.onclick = function () {
    if (mustVote.length <= 0) {
    result.innerText = 'Não há pessoas cadastradas que podem voluntariamente votar.'
    result.className = 'error' 
    } else {
    result.classList.remove('error')
    mustVote.sort()
    result.innerHTML = `Pessoas que devem votar: <br>${mustVote.join(', ')}`
  }
}