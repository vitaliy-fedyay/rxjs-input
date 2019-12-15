const { fromEvent } = rxjs;
const { map, debounceTime } = rxjs.operators;

const firstInput = document.getElementById("first-input");
const secondInput = document.getElementById("second-input");
const thirdInput = document.getElementById("third-input");

const firstResult = document.getElementById("first-p");
const secondResult = document.getElementById("first-p");
const thirdResult = document.getElementById("first-p");

const resfirstInput = fromEvent(firstInput, "input").pipe(
  debounceTime(1000),
  map(event => event.target.value * 2)
)
resfirstInput.subscribe(res => (firstResult.innerHTML = res));
////////////////////////////////////////////////////////////////////////
const resfirstInput = fromEvent(firstInput, "input").pipe(
    debounceTime(1000),
    map(event => event.target.value * 2)
  )
  resfirstInput.subscribe(res => (secondResult.innerHTML = res));
////////////////////////////////////////////////////////////////////////
  const resfirstInput = fromEvent(firstInput, "input").pipe(
    debounceTime(1000),
    map(event => event.target.value * 2)
  )
  resfirstInput.subscribe(res => (thirdResult.innerHTML = res));
