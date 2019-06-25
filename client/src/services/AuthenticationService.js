import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  },
  pay (source) {
    return Api().post('pay', source)
  },
  asset_list (source) {
    return Api().post('asset_list', source)
  }
}
