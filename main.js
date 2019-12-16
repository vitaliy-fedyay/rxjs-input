const { fromEvent } = rxjs
const { map, debounceTime, delay, filter } = rxjs.operators

const firstInput = document.getElementById("first-input")
const secondInput = document.getElementById("second-input")
const thirdInput = document.getElementById("third-input")

const result = document.getElementById("result")
const buttonShowResult = document.getElementById("button")

const resultFirstInput = fromEvent(firstInput, "input")
const resultSecondInput = fromEvent(secondInput, "input")
const resultThirdInput = fromEvent(thirdInput, "input")

let data = {
  first: 0,
  second: 0,
  third: 0
}

resultFirstInput.pipe(
  map(event => event.target.value),
  debounceTime(500),
  filter(value => value.trim()),
  delay(2000))
  .subscribe(value => data.first = value)

resultSecondInput.pipe(
  debounceTime(500),
  map(event => event.target.value * 2))
  .subscribe(value => data.second = value)

resultThirdInput.pipe(
  debounceTime(500),
  map(event => event.target.value),
  filter(value => value % 2 == 0))
  .subscribe(value => data.third = value)

fromEvent(buttonShowResult, 'click').subscribe(
  function (event) {
    let array = []
    for (let item in data) {
      array.push(data[item])
    }
    result.innerHTML = array
  })


