<template>
  <div>
    <div id="lineDraw" :style="{width: '100%', height: '400px'}"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 折线数据
      LineDataX: "",
      LineDataY1: "",
      LineDataY2: ""
    };
  },
  created() {
    //  用于绘制的数据 等于lineData
    let getLineDataX = [];
    let getLineDataY1 = [];
    let getLineDataY2 = [];
    // 假接收数据
    let resLineData = [
      {
        time: "00 时",
        today: 140.6,
        yesterday: 151.3
      },
      {
        time: "01 时",
        today: 143.6,
        yesterday: 152.4
      },
      {
        time: "02 时",
        today: 153.4,
        yesterday: 155.5
      },
      {
        time: "03 时",
        today: 133.2,
        yesterday: 136.8
      },
      {
        time: "04 时",
        today: 132.5,
        yesterday: 117.8
      },
      {
        time: "05 时",
        today: 130.9,
        yesterday: 133.2
      },
      {
        time: "06 时",
        today: 102.8,
        yesterday: 100.4
      },
      {
        time: "07 时",
        today: 297.7,
        yesterday: 68.9
      },
      {
        time: "08 时",
        today: 458.7,
        yesterday: 954.9
      },
      {
        time: "09 时",
        today: 588.5,
        yesterday: 855.9
      },
      {
        time: "10 时",
        today: 552.2,
        yesterday: 472.9
      },
      {
        time: "11 时",
        today: 535.7,
        yesterday: 514.5
      },
      {
        time: "12 时",
        today: 287.6,
        yesterday: 311.7
      },
      {
        time: "13 时",
        today: 390.3,
        yesterday: 342.7
      },
      {
        time: "14 时",
        today: 503.5,
        yesterday: 496.4
      },
      {
        time: "15 时",
        today: 512.5,
        yesterday: 540.4
      },
      {
        time: "16 时",
        today: 420.5,
        yesterday: 431.9
      },
      {
        time: "17 时",
        today: 322.6,
        yesterday: 273.4
      },
      {
        time: "18 时",
        today: 289.6,
        yesterday: 315.7
      },
      {
        time: "19 时",
        today: 293.5,
        yesterday: 313.1
      },
      {
        time: "20 时",
        today: 253.7,
        yesterday: 277.7
      },
      {
        time: "21 时",
        today: 222.9,
        yesterday: 194.9
      },
      {
        time: "22 时",
        today: 189.6,
        yesterday: 178.5
      },
      {
        time: "23 时",
        today: 149.8,
        yesterday: 156.0
      }
    ];
    resLineData.forEach(item => {
      let middle = {};
      middle.value1 = item.today;
      middle.value2 = item.yesterday;
      middle.name = item.time;
      getLineDataX.push(middle.name);
      getLineDataY1.push(middle.value1);
      getLineDataY2.push(middle.value2);
    });
    this.LineDataX = getLineDataX;
    this.LineDataY1 = getLineDataY1;
    this.LineDataY2 = getLineDataY2;
  },
  mounted() {
    this.drawChartLine();
  },
  methods: {
    //  折线绘制
    drawChartLine() {
      let chartLine = this.$echarts.init(document.getElementById("lineDraw"));
      chartLine.setOption({
        title: {
          text: "标题部分",
          x: "left",
          backgroundColor: "#24292F",
          textStyle: {
            color: "#ddd"
          }
        },
        // 图例标记
        legend: {
          data: this.LineDataX
        },
        // 悬浮框
        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            type: "none"
          }
        },
        xAxis: {
          type: "category",
          data: this.LineDataX,
          axisLabel: {
            textStyle: {
              color: "#ddd" //坐标值的颜色
            }
          },
          // 轴线
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#ddd",
              width: "1"
            }
          }
        },
        yAxis: {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "#ddd" //坐标值的颜色
            }
          },
          // 轴线
          axisLine: {
            lineStyle: {
              color: "#303740",
              width: "0"
            }
          },
          // 分隔线
          splitLine: {
            show: true,
            lineStyle: {
              color: "#303740"
            }
          }
        },
        series: [
          {
            data: this.LineDataY1,
            type: "line",
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#B33B6D" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#222" // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            }
          },
          {
            data: this.LineDataY2,
            type: "line",
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#4A77C3" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#222" // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            }
          }
        ],
        // 折线图颜色
        color: ["#B33B6D", "#4A77C3"]
      });
    }
  }
};
</script>
<style lang="less" scoped>
</style>
