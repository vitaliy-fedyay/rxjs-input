const { fromEvent } = rxjs
const { map, debounceTime, distinct, filter } = rxjs.operators

const firstInput = document.getElementById("first-input")
const secondInput = document.getElementById("second-input")
const thirdInput = document.getElementById("third-input")

const result = document.getElementById("result")

let data = []

const resultFirstInput = fromEvent(firstInput, "input").pipe(
  debounceTime(1000),
  distinct()
)
resultFirstInput.subscribe(value => this.data.push(value))

const resultSecondInput = fromEvent(secondInput, "input").pipe(
  debounceTime(1000),
  map(event => event.target.value * 2)
)
resultSecondInput.subscribe(value => this.data.push(value))

const resultThirdInput = fromEvent(thirdInput, "input").pipe(
  debounceTime(1000),
  filter(value => value.trim())
)
resultThirdInput.subscribe(value => this.data.push(value))

fromEvent( document, 'keypress').subscribe( event => {
  if( event.key === 13) {
    this.result.innerHTML = data
  }
})


