function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: 'Data fetched!' }
      resolve(data) // Simulate successful data fetching
      // reject('Error fetching data'); // Simulate an error
    }, 1000)
  })
}

fetchData()
  .then((result) => console.log(result.message))
  .catch((error) => console.error('Error:', error))
  .finally(() => console.log('Fetch operation completed.'))
