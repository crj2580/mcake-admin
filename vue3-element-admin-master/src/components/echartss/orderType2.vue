<template>
    <div id="orderType2" style="width: 100%; height: 280px"></div>
</template>

<script>
import * as echarts from 'echarts'
import { onMounted, onUnmounted } from 'vue';

export default {
    setup() {
        let myChart;
        onMounted(() => {
            myChart = echarts.init(document.getElementById('orderType2'));
            let readyBin1Option = {
                title: {
                    text: '用户投资区域',
                    subtext: '纯属虚构',
                    x: 'center',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: [
                        '华东区',
                        '华南区',
                        '华中区',
                        '华北区',
                        '西南区',
                        '东北区',
                        '台港澳',
                    ],
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '50%',
                        center: ['50%', '60%'],
                        data: [
                            { value: 335, name: '华东区' },
                            { value: 310, name: '华南区' },
                            { value: 234, name: '华中区' },
                            { value: 835, name: '华北区' },
                            { value: 1548, name: '西南区' },
                            { value: 335, name: '东北区' },
                            { value: 454, name: '台港澳' },
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)',
                            },
                        },
                    },
                ],
            }
            myChart.setOption(readyBin1Option);
            window.onresize = myChart.resize;
        });

        onUnmounted(() => {
            if (!myChart) {
                return;
            }
            myChart.dispose();
            myChart = null;
        })
    }
}
</script>


