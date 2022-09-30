
// A mock function to mimic making an async request for data

export function fetchCEP(cep) {


  return new Promise((resolve) =>

    resolve(
      fetch(`https://viacep.com.br/ws/${cep}/json/`, {

        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then( (json) => {
          return (json)
        })
    )
  );
}

// console.log(fetchCEP(88052760));