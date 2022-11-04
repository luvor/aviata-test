import results from './results.json'
const res = results as any

export const promisify = (data: any, type?: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (type)
        resolve({ status: 200, data: data[type] })
      else
        resolve({ status: 200, data })
    }, 500)
  })
}

class DataService {
  getAirlines() {
    return promisify(res, 'airlines')
  }

  getFlights() {
    return promisify(res, 'flights')
  }
}

export default new DataService()
