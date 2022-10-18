import request from "../utils/request"

export function deleteAllData(){
    return request({
        url: '/salary/deleteAll',
        method: 'delete'
      })
}