import request from '@/utils/request';

export const UploadImage = data=> {
    console.log('111111111111');
    return request({
        url:'/api1/upload/upImg',
        method:'post',
        data:data
    })
}