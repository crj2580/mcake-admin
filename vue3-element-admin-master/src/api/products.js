import request from '@/utils/request'

export const GetRequest = data => {
    return request({
      url: '/api/goods/load?cityId=110&bid=1&fid=0&page=1&count=31&search=&total=31',
      method: 'GET',
      data,
    })
  }