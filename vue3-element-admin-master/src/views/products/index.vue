<template>
    <div>
        商品管理
        <button @click="go">点击发送请求</button>
    </div>
</template>

<script>
import {defineComponent, toRefs} from 'vue'
import { GetRequest } from '@/api/products'
export default defineComponent({
    name:"products",
    setup(){
        const state = {
            go: async()=>{
                let result = await GetRequest('/api/page/load');
                console.log(result,'xxxxxxxxxxxxxxxx');
            }
        }
        return {...toRefs(state)}
    }
    
})
</script>