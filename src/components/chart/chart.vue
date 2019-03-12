<template>
  <div class="chart">
    <!-- 上半部分 -->
    <div class="chart-up">
      <!-- 项目概况 -->
      <div class="chart-general">
        <!-- 概况标题部分 -->
        <div class="general-top">
          <p>项目概况</p>
        </div>
        <!-- 概况版心 -->
        <div class="general-banner">
          <!-- 版心标题 -->
          <p class="general-banner-title">
            <span>名称:&nbsp;</span>互联网智能配电系统
          </p>
          <!-- 版心 -->
          <div id="disapper" class="banner-wrap">
            <!-- 上面两部分 -->
            <div class="banner-wrap-box-con">
              <div class="banner-wrap-box">
                <img src="../../../static/images/chart/icon-01.png" alt>
                <p>电压等级</p>
                <p>10KV/400V</p>
              </div>
              <div class="banner-wrap-box">
                <img src="../../../static/images/chart/icon-02.png" alt>
                <p>变电器台数</p>
                <p>2</p>
              </div>
            </div>
            <!-- 上面两部分 -->
            <div class="banner-wrap-box-con">
              <div class="banner-wrap-box">
                <img src="../../../static/images/chart/icon-03.png" alt>
                <p>额定装机容量</p>
                <p>1250kVA</p>
              </div>
              <div class="banner-wrap-box">
                <img src="../../../static/images/chart/icon-04.png" alt>
                <p>负载率</p>
                <p>47%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 运行状态 -->
      <div class="chart-progress">
        <!-- 标题部分 -->
        <div class="general-top">
          <p>运行状态</p>
        </div>
        <!-- 运行版心 -->
        <div class="progress-banner">
          <!-- 第一梯 -->
          <div class="banner-first">
            <div class="circle">
              <p>573.6kW</p>
            </div>
            <div class="circle">
              <p>211.4kVar</p>
            </div>
            <div class="circle">
              <p>14.63℃</p>
            </div>
            <div class="circle">
              <p>34.13%</p>
            </div>
          </div>
          <!-- 第二梯队 -->
          <div class="banner-second">
            <div class="second-p">有功功率</div>
            <div class="second-p">无功功率</div>
            <div class="second-p">环境温度</div>
            <div class="second-p">有功功率</div>
          </div>
          <!-- 第三梯度 -->
          <div class="banner-third">
            <div class="third-img">
              <img src="../../../static/images/chart/elec_meter.png" alt>
            </div>
            <div class="third-img">
              <img src="../../../static/images/chart/camera.png" alt>
            </div>
            <div class="third-img">
              <img src="../../../static/images/chart/fire.png" alt>
            </div>
            <div class="third-img">
              <img src="../../../static/images/chart/wind.png" alt>
            </div>
            <div class="third-img">
              <img src="../../../static/images/chart/light.png" alt>
            </div>
          </div>
          <!-- 第四梯度 -->
          <div class="banner-forth">
            <div class="forth-img">
              <img src="../../../static/images/chart/env.png" alt>
            </div>
            <div class="forth-img">
              <img src="../../../static/images/chart/immerse.png" alt>
            </div>
            <div class="forth-img">
              <img src="../../../static/images/chart/water_meter_gray.png" alt>
            </div>
            <div class="forth-img">
              <img src="../../../static/images/chart/gas_meter_gray.png" alt>
            </div>
            <div class="forth-img">
              <img src="../../../static/images/chart/door_gray.png" alt>
            </div>
          </div>
        </div>
      </div>
      <!-- 事件记录 -->
      <div class="chart-event">
        <!-- 标题部分 -->
        <div class="general-top">
          <p>事件记录</p>
        </div>
        <!-- 日历表 -->
        <div class="event-date">
          <Calendar></Calendar>
        </div>
        <!-- 三部分 -->
        <div class="event-three">
          <!-- 盒子部分 -->
          <div class="event-three-box">
            <img src="../../../static/images/chart/icon-09.png" alt>
            <p>报警次数</p>
            <p>0</p>
          </div>
          <div class="event-three-box">
            <img src="../../../static/images/chart/icon-10.png" alt>
            <p>动作次数</p>
            <p>0</p>
          </div>
          <div class="event-three-box">
            <img src="../../../static/images/chart/icon-11.png" alt>
            <p>失效设备</p>
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 下半部分 -->
    <div class="chart-down">
      <!-- 能耗曲线 -->
      <div class="chart-line">
        <!-- 标题部分 -->
        <div class="general-top">
          <p>能耗曲线</p>
        </div>
        <!-- 曲线绘制 -->
        <div id="lineDraw" :style="{width: '100%', height: '400px'}"></div>
      </div>
      <!-- 用电概况 -->
      <div class="chart-power">
        <!-- 标题部分 -->
        <div class="general-top">
          <p>用电概况</p>
        </div>

        <div class="power-view">
          <!-- 第一梯队 -->
          <div class="view-first">
            <div class="view-first-con1">
              <p>683.1</p>
              <p>当日用电(Ep)</p>
            </div>
            <div class="view-first-con2">
              <p>1926.5</p>
              <p>昨日用电(Ep)</p>
            </div>
          </div>
          <!-- 第二梯度 -->
          <div class="view-second">
            <div class="view-second-con1">
              <p>-21.4%</p>
              <p>环比</p>
            </div>
            <div class="view-second-con2">
              <p>135.4</p>
              <p>昨日单小时用电最大值(Ep)</p>
            </div>
          </div>
          <!-- 第三梯度 -->
          <div class="view-third">
            <div class="view-third-con1">
              <p>376.7</p>
              <p>当日单小时用电最大值(Ep)</p>
            </div>
            <div class="view-third-con2">
              <p>0</p>
              <p>当日单小时用电最小值(Ep)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from "vue-calendar-component";
export default {
  data() {
    return {
      // 折线数据
      LineDataX: "",
      LineDataY1: "",
      LineDataY2: ""
    };
  },
  components: {
    Calendar
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
    console.log("getLineDataX", getLineDataX);
    console.log("getLineDataY1", getLineDataY1);
    console.log("getLineDataY2", getLineDataY2);
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

<style lang="less" scope>
@import "../../assets/css/chart";
</style>
<style>
</style>
