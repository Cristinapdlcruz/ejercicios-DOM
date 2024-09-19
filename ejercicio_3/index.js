// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises. const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const countrieS = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ul = document.createElement('ul')

for (country of countrieS) {
  const liCountry = document.createElement('li')
  liCountry.textContent = country
  ul.appendChild(liCountry)
}
document.body.appendChild(ul)

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const pRemove = document.querySelector('.fn-remove-me')
pRemove.remove()

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere". const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const divCars = document.querySelector('[data-function="printHere"]')
const ulCars = document.createElement('ul')
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
for (car of cars) {
  const liCars = document.createElement('li')
  liCars.textContent = car
  ulCars.appendChild(liCars)
}

divCars.appendChild(ulCars)

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen. const countries = [ {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

const countries1 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

for (country1 of countries1) {
  const divCountry = document.createElement('div')
  const title = document.createElement('h4')
  const img = document.createElement('img')

  title.textContent = country1.title
  img.src = country1.imgUrl

  document.body.appendChild(divCountry)
  divCountry.appendChild(title)
  divCountry.appendChild(img)
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
