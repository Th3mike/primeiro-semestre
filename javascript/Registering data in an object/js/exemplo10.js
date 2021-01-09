const name = document.getElementById('name')
const email = document.getElementById('email')
const opinion = document.getElementById('opinion')
const form = document.getElementById('form')
const view = document.getElementById('view')
const result = document.getElementById('result')

const registros = [
  {
    nomeCompleto: 'Erick Petrucelli',
    email: 'erickpetru@gmail.com',
    opinião: 'Que fera!'
  },
  { nomeCompleto: 'Ana e o Mar', email: 'mar@ana.com', opinião: 'Mágico...' }
]

name.focus()

form.onsubmit = function (event) {
  event.preventDefault()

  registros.push({
    nomeCompleto: name.value,
    email: email.value,
    opinião: opinion.value
  })

  name.value = email.value = opinion.value = ''
  name.focus()
}

view.onclick = function () {
  result.innerHTML = ''

  for (const banana of registros) {
    result.innerHTML += `
      <tr>
        <td>${banana.nomeCompleto}</td>
        <td>${banana.email}</td>
        <td>${banana.opinião}</td>
      </tr>
    `
  }
}
