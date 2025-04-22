const fetchData1 = (callback) => {
  setTimeout(() => {
    const data = JSON.stringify({ test: 'test1' })
    callback(null, data) // First argument for error, second for success
  }, 0)
}

const fetchData2 = (callback) => {
  setTimeout(() => {
    const data = JSON.stringify({ test: 'test2' })
    callback(null, data)
  }, 1000)
}

const fetchData3 = (callback) => {
  setTimeout(() => {
    const data = JSON.stringify({ test: 'test3' })
    callback(null, data)
  }, 1000)
}

fetchData1((err, result1) => {
  if (err) {
    console.error('Error fetching data 1:', err)
    return
  }
  console.log(result1)
  fetchData2((err, result2) => {
    if (err) {
      console.error('Error fetching data 2:', err)
      return
    }
    console.log(result2)
    // Imagine more nested asynchronous operations here...
    fetchData3((err, result3) => {
      if (err) {
        console.error('Error fetching data 3:', err)
        return
      }
      console.log(result3)
      // And on and on it goes...
    })
  })
})

console.log('Synchronous part of the code continues to execute.')
