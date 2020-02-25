import Http from './http'

class Home extends Http {
  private path = 'home'
  public getList(): Promise<Array<number>> {
    return new Promise(resolve => {
      resolve([1, 2, 3])
    })
  }
}

export default Home
