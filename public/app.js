fetch("/api")
  .then(res => res.json())
  .then(json => console.log(json))