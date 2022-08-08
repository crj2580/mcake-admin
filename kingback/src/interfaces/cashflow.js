const express = require("express");
const router = express.Router();

const cashlist = [
    { "id": 1, "createTime": 1171211205701, "incomePayType": "2", "incomePayDes": "就为了封建礼教昆仑决快乐记录空间看了路", "income": 23.23, "pay": 89.23, "accoutCash": 80.23, "remarks": "反而为了解了解了解了解路径路径路径" },
    { "id": 2, "createTime": 1212112057011, "incomePayType": "3", "incomePayDes": "wefjlj 未记录反馈捡垃圾拉开距离就路径l", "income": 343.23, "pay": 2323, "accoutCash": 3434, "remarks": "服务嗯范文芳违法" },
    { "id": 3, "createTime": 1221211205701, "incomePayType": "5", "incomePayDes": "wefwefwef", "income": 23.32323, "pay": 90.23, "accoutCash": 323.2323, "remarks": "wfefwefwef" },
    { "id": 4, "createTime": 1231211205701, "incomePayType": "3", "incomePayDes": "efwwef", "income": 23.232323, "pay": 123, "accoutCash": 434, "remarks": "wefwefwef" },
    { "id": 5, "createTime": 1241211205701, "incomePayType": "1", "incomePayDes": "we分离焦虑了解了解路径了we家里放", "income": 2323, "pay": 123.23, "accoutCash": 12, "remarks": "we街坊邻居了解了解路，捡垃圾路径l" },
    { "id": 6, "createTime": 1251211205701, "incomePayType": "5", "incomePayDes": "我可荆防颗粒捡垃圾路径路", "income": 3989, "pay": 23, "accoutCash": 3489, "remarks": "文件了附件路径离开家路径了" },
    { "id": 7, "createTime": 1261211205701, "incomePayType": "3", "incomePayDes": "fwefwef", "income": 323, "pay": 23, "accoutCash": 23, "remarks": "wefwef" }
]

router.get('/api/cashflow/list',(req,res)=>{
        //获取类型  当前页面  当前总数  排序选项
    let { incomePayType, current = 1, size = 20, sort } = req.query;
    let mockList = cashlist.filter(item => {
        if (incomePayType && item.incomePayType !== +incomePayType) return false
        return true
    });
    if(sort){
        sort = JSON.parse(sort);
    }
    if (sort && sort.prop == 'id') {
        mockList = sort.order == "ascending" ? mockList : mockList.reverse();
    }
    else if (sort && sort.prop == 'income') {
        if (sort.order == "ascending") {
            mockList = mockList.sort((item1, item2) => {
                return item1.income - item2.income
            });
        }
        else {
            mockList = mockList.sort((item1, item2) => {
                return -item1.income + item2.income
            });
        }
    }
    const pageList = mockList.filter((item, index) => index < size * current && index >= size * (current - 1));
    res.json({
        code:0,
        data:pageList,
        total:mockList.length
    });
});

router.get("/api/cashflow/list/:id",(req,res)=>{
    const id = req.params.id;
    const current = cashlist.find(item=>{
        return item.id ==id;
    });
    res.json({
        code:0,
        data:current
    });
});

router.post('/api/cashflow/update',(req,res)=>{
    const data = req.body;
    var idx = cashlist.findIndex(item=>{
        if(item.id ==data.id){
            return true;
        }
    });
    cashlist[idx]=data;
    res.json({
        code:0,
        data:'success'
    });
});

router.get('/api/cashflow/delete',(req,res)=>{
    const {id} = req.query;
    var idx = cashlist.findIndex(item=>{
        if(item.id ==id){
            return true;
        }
    }); 
    cashlist.splice(idx,1);
    res.json({
        code:0,
        data:'success'
    });
});

module.exports = router; 