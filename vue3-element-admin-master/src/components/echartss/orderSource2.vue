<template>
    <div id="orderSource2" style="width: 100%; height: 280px"></div>
</template>

<script>
import * as echarts from 'echarts'
import { onMounted, onUnmounted } from 'vue';

export default {
    setup() {
        let myChart;
        onMounted(() => {
            myChart = echarts.init(document.getElementById('orderSource2'));
            let redyBin2Option = {
                title: {
                    text: '用户投资职业',
                    subtext: '纯属虚构',
                    x: 'center',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)',
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['金融人员', 'IT人员', '保险人员', '理财师', '律师'],
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        selectedMode: 'single',
                        radius: [0, '30%'],
                        center: ['50%', '60%'],
                        label: {
                            normal: {
                                position: 'inner',
                            },
                        },
                        labelLine: {
                            normal: {
                                show: false,
                            },
                        },
                        data: [
                            { value: 335, name: '金融人员', selected: true },
                            { value: 679, name: 'IT人员' },
                            { value: 1548, name: '保险人员' },
                        ],
                    },
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['40%', '55%'],
                        center: ['50%', '60%'],
                        label: {
                            normal: {
                                backgroundColor: '#eee',
                                borderColor: '#aaa',
                                borderWidth: 1,
                                borderRadius: 4,
                                rich: {
                                    a: {
                                        color: '#999',
                                        lineHeight: 22,
                                        align: 'center',
                                    },
                                    hr: {
                                        borderColor: '#aaa',
                                        width: '100%',
                                        borderWidth: 0.5,
                                        height: 0,
                                    },
                                    b: {
                                        fontSize: 16,
                                        lineHeight: 33,
                                    },
                                    per: {
                                        color: '#eee',
                                        backgroundColor: '#334455',
                                        padding: [2, 4],
                                        borderRadius: 2,
                                    },
                                },
                            },
                        },
                        data: [
                            { value: 310, name: '理财师' },
                            { value: 528, name: '律师' },
                        ],
                    },
                ],
            }
            myChart.setOption(redyBin2Option);
            window.onresize = myChart.resize;
        }
        );
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

