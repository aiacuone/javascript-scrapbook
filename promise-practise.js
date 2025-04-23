const getData = () =>
  new Promise((resolve, reject) => {
    const data = { test: 'test data' }
    const boolean = false // change this boolean to resolve or reject
    setTimeout(() => {
      if (boolean) reject(new Error('Error getting data'))
      resolve(data)
    }, 1000)
  })

const fetchData = async () => {
  try {
    const response = await getData()
    console.log({ response })
  } catch (error) {
    console.error('Error fetching data', error)
  }
}

fetchData()
