import request from "../utils/request"

export function statistic(year) {
  return request({
    url: '/'+year+'/statistic',
    method: 'get'
  })
}

export function uploadExcel(type){
    return request({
        url: '/readExcel/'+type+'/upload',
        method: 'post'
    })
}