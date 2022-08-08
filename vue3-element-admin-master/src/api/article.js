import request from '../utils/request';

export function fetchArticleList(query){
    return request({
        url:'/api/article/list',
        method:'GET',
        params:query
    });
}

export function deleteArticle(id){
    return request({
        url:'/api/article/delete',
        method:'GET',
        params:{id}
    });
}

export function createArticle(data){
    return request({
        url:'/api/article/create',
        method:'POST',
        data
    });
}