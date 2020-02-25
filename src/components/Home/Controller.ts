/* eslint-disable  */
import store from '../../store'
import LocalPersist from '../../services/localpersistent/index'
import HomeApis from '../../services/apis/home'

class Controller {
  private homeApis = new HomeApis()
  private localPersist = new LocalPersist()
  private static singleton: Controller
  private constructor() {}

  // 很显然，我们不会需要多个 Controller 实例
  public static getSingleton() {
    if (!Controller.singleton) {
      Controller.singleton = new Controller()
    }
    return Controller.singleton
  }

  add() {
    store.dispatch('add')
  }

  minus() {
    store.dispatch('minus')
  }

  getList(): Promise<Array<number>> {
    return new Promise(async (resolve, reject) => {
      const res = await this.homeApis.getList() // 网络请求
      this.localPersist.store(res) //本地存储
      resolve(res) // 返回数据
    })
  }
}

export default Controller
