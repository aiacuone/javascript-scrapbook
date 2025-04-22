const fetchData1 = () => {
  return new Promise((resolve) => {
    let data
    setTimeout(() => {
      data = JSON.stringify({ test: 'test1' })
      resolve(data) // Resolve the Promise with the data
    }, 0)
  })
}

const fetchData2 = () => {
  return new Promise((resolve) => {
    let data
    setTimeout(() => {
      data = JSON.stringify({ test: 'test2' })
      resolve(data) // Resolve the Promise with the data
    }, 1000)
  })
}

// promises
const processData2 = () =>
  Promise.all([fetchData1(), fetchData2()]).then((data) =>
    data.map((data) => JSON.parse(data))
  )

// async/await
const processData1 = async () => {
  try {
    const response = await Promise.all([fetchData1(), fetchData2()])

    // if(!response.ok)throw new Error(`HTTP Error: ${response.status}`) // this would be for if it was an actual HTTP request

    return response.map((data) => JSON.parse(data))
  } catch (error) {
    console.error(`There was an issue getting data:`, error)
  }
}

const data1 = await processData1()
const data2 = await processData2()

console.log(data1)
console.log(data2)
