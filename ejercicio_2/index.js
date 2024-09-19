//1.1 Inserta dinamicamente en un html un div vacio con javascript.
const divEmpty = document.createElement('div')
document.body.appendChild(divEmpty)

//1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divP = document.createElement('div')
const p = document.createElement('p')

document.body.appendChild(divP)
divP.appendChild(p)

//1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const divPsix = document.createElement('div')

for (let i = 0; i < 6; i++) {
  const p = document.createElement('p')
  divPsix.appendChild(p)
}
document.body.appendChild(divPsix)

//1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const pDinamic = document.createElement('p')

pDinamic.textContent = 'Soy dinámico!'

document.body.appendChild(pDinamic)

//1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector('.fn-insert-here')

h2.textContent = 'Wubba Lubba dub dub'

//1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ulApp = document.createElement('ul')

for (const app of apps) {
  const li = document.createElement('li')
  li.textContent = app
  ulApp.appendChild(li)
}

document.body.appendChild(ulApp)

//1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const pRemoves = document.querySelectorAll('.fn-remove-me')

for (pRemove of pRemoves) {
  pRemove.remove()
}

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.  Recuerda que no solo puedes insertar elementos con .appendChild.

const allDiv = document.querySelectorAll('div')
const pMiddle = document.createElement('p')

pMiddle.textContent = 'Voy en medio!'

document.body.insertBefore(pMiddle, allDiv[1])

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const divsInserts = document.querySelectorAll('.fn-insert-here')

for (const divInsert of divsInserts) {
  const pDentro = document.createElement('p')
  pDentro.textContent = 'Voy dentro!'
  divInsert.appendChild(pDentro)
}
