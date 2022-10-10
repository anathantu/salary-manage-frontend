import request from "../utils/request"

export function statistic(year) {
  return request({
    url: '/salaryStatistics/'+year+'/statistic',
    method: 'get'
  })
}

export function uploadExcel(type){
    return request({
        url: '/readExcel/'+type+'/upload',
        method: 'post'
    })
}