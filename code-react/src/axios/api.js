//所有api请求
import service from './request'
export function _getList(data){
    return service.get('/mock.json', data)
}