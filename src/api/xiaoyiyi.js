import request from '@/utils/request'
// 我是小祎祎
export function select() {
  return request({
    url: '/api/systemconfig/select',
    method: 'get'
  })
}

// 我是小祎祎
export function adds(query) {
  return request({
    url: '/api/systemconfig/save',
    method: 'post',
    data: query
  })
}
// 我是小祎祎
  export function laoyus() {
    return request({
      url: '/hotelrest',
      method: 'get',
    })
  }
