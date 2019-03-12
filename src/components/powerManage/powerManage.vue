<template>
  <div class="powerManage">
    <!-- 头部菜单部分 -->
    <div class="powerManage-header">
      <span>选择查看区域&nbsp;</span>
      <!-- 下拉查看区域 -->
      <select
        @click="CurrentSelectedChange"
        v-model="powerCurrentSelected"
        class="powerManage-header-viewplace"
      >
        <option :key="item.value" :value="item.value" v-for="item in powerOptionData">{{item.label}}</option>
      </select>
      <!-- 选择查看进线 -->
      <span class="powerLeft">选择查看进线&nbsp;</span>
      <!-- 下拉查看进线 -->
      <select
        @click="EnterSelectedChange"
        v-model="powerEnterSelected"
        class="powerManage-header-viewplace"
      >
        <option selected="selected" disabled value>请选择一项</option>
        <option :key="item.value" :value="item.value" v-for="item in enterOptionData">{{item.label}}</option>
      </select>
      <!-- 选择查看周期 -->
      <span class="powerLeft">选择查看周期&nbsp;</span>
      <el-button
        id="daybtn"
        type="primary"
        class="powerDateSelected"
        size="mini"
        plain
        @click="dayhandle"
      >日</el-button>
      <el-button
        id="monthbtn"
        type="primary"
        class="powerDateSelected"
        size="mini"
        plain
        @click="monthhandle"
      >月</el-button>
      <el-button
        id="yearbtn"
        type="primary"
        class="powerDateSelected"
        size="mini"
        plain
        @click="yearhandle"
      >年</el-button>&nbsp;&nbsp;&nbsp;
      <!-- 日期选择 -->
      <el-date-picker
        :picker-options="pickerOptions"
        v-model="cycleTime"
        :type="typeChange"
        placeholder="请选择日期"
        :format="formatChange"
        :value-format="valueChange"
      ></el-date-picker>
    </div>
    <!-- 下半部总体 -->
    <div class="powerManage-wrap">
      <!-- 饼图和数据列表总体 -->
      <div class="powerManage-topCon">
        <!-- 饼图部分 -->
        <div class="topCon-pie">
          <!-- 饼图绑定 -->
          <div id="powerPie" :style="{width: '100%', height: '400px'}"></div>
        </div>
        <!-- 列表部分 -->
        <div class="topCon-table">
          <!-- 表头部分 -->
          <el-table
            sum-text="总能耗"
            show-summary
            :data="powerTableData"
            style="width: 100%"
            size="mini"
            empty-text="数据为空"
          >
            <el-table-column align="center" prop="n" label="类型"></el-table-column>
            <el-table-column align="center" prop="v" label="数值(kWh)"></el-table-column>
            <el-table-column align="center" prop="eds" label="占比(%)"></el-table-column>
            <el-table-column align="center" prop="switchhouse" label="昨日消耗量"></el-table-column>
            <el-table-column align="center" prop="category" label="环比(%)"></el-table-column>
          </el-table>
        </div>
      </div>
      <!-- 条形图和折线图总体 -->
      <div class="powerManage-banner">
        <!-- 条形图部分 -->
        <div class="banner-bar">
          <!-- 条形图绑定 -->
          <div id="bannerBar" :style="{width: '100%', height: '400px'}"></div>
        </div>
        <!-- 折线图部分 -->
        <div class="banner-line">
          <!-- 折线图绑定 -->
          <div id="bannerLine" :style="{width: '100%', height: '400px'}"></div>
        </div>
      </div>
      <!-- 底部全年耗电量 -->
      <div class="powerManage-footer">
        <div class="footer-bar">
          <!-- 全年柱状图绑定 -->
          <div id="footerBar" :style="{width: '100%', height: '400px'}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "powerManage",
  data() {
    return {
      // 查看区域下拉
      powerOptionData: [
        {
          value: "总耗能",
          label: "总耗能"
        },
        {
          value: "工厂用电",
          label: "工厂用电"
        },
        {
          value: "照明用电",
          label: "照明用电"
        },
        {
          value: "其他",
          label: "其他"
        }
      ],

      // 进线下拉
      enterOptionData: [
        {
          value: "铜排工厂拉拔",
          label: "铜排工厂拉拔"
        },
        {
          value: "工厂用电AP1",
          label: "工厂用电AP1"
        },
        {
          value: "工厂用电AP2",
          label: "工厂用电AP2"
        },
        {
          value: "工厂用电AP3",
          label: "工厂用电AP3"
        },
        {
          value: "工厂用电AP4",
          label: "工厂用电AP4"
        },
        {
          value: "工厂用电AP5",
          label: "工厂用电AP5"
        },
        {
          value: "工厂用电AP6",
          label: "工厂用电AP6"
        },
        {
          value: "工厂用电AP7",
          label: "工厂用电AP7"
        },
        {
          value: "工厂用电AP8",
          label: "工厂用电AP8"
        },
        {
          value: "工厂用电AP9",
          label: "工厂用电AP9"
        },
        {
          value: "工厂用电AP10",
          label: "工厂用电AP10"
        },
        {
          value: "工厂用电AP11",
          label: "工厂用电AP11"
        },
        {
          value: "工厂用电AP12",
          label: "工厂用电AP12"
        },
        {
          value: "工厂用电AP13",
          label: "工厂用电AP13"
        },
        {
          value: "工厂用电AP14",
          label: "工厂用电AP14"
        },
        {
          value: "工厂用电AP15",
          label: "工厂用电AP15"
        },
        {
          value: "变压器工厂",
          label: "变压器工厂"
        },
        {
          value: "铜排挤压机",
          label: "铜排挤压机"
        },
        {
          value: "高压侧1AH3 PT柜",
          label: "高压侧1AH3 PT柜"
        },
        {
          value: "1#进线电容柜",
          label: "1#进线电容柜"
        },
        {
          value: "2#进线电容柜",
          label: "2#进线电容柜"
        }
      ],
      // 区域选中
      powerCurrentSelected: "",
      // 进线选中
      powerEnterSelected: "",
      // 日期选择
      cycleTime: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now() - 8.64e6;
        }
      },
      // 日期类型改变
      typeChange: "date",
      // 日期格式改变
      formatChange: "yyyy年MM月dd日",
      //  获取的格式
      valueChange: "yyyy-MM-dd",
      // 饼图数据
      powerPieData: "",
      // 列表数据
      powerTableData: "",
      // 条形图数据
      powerBarDataX: "",
      powerBarDataY: ""
    };
  },
  created() {
    // 查看区域默认选中
    this.powerCurrentSelected = this.powerOptionData[0].label;

    // 饼图数据（用于展示）
    let getPieData = [];
    // 条形图数据以及折线图
    let getpowerBarDataX = [];
    let getpowerBarDataY = [];
    // 假接收到的数据
    let resData = [
      {
        v: 335,
        n: "直接访问"
      },
      {
        v: 310,
        n: "邮件营销"
      },
      {
        v: 234,
        n: "联盟广告"
      },
      {
        v: 135,
        n: "视频广告"
      },
      {
        v: 154,
        n: "搜索引擎"
      }
    ];
    resData.forEach(i => {
      let middle = {};
      middle.value = i.v;
      middle.name = i.n;
      getPieData.push(middle);
      getpowerBarDataX.push(middle.name);
      getpowerBarDataY.push(middle.value);
    });
    console.log("getpowerBarDataX", getpowerBarDataX);
    console.log("getpowerBarDataY", getpowerBarDataY);
    console.log("getPieData", getPieData);

    // 列表数据
    this.powerTableData = resData;
    // 饼图数据
    this.powerPieData = getPieData;

    // 条形图数据
    // x轴
    this.powerBarDataX = getpowerBarDataX;
    this.powerBarDataY = getpowerBarDataY;
    // y轴
  },
  mounted() {
    this.drawPowerPie();
    this.drawPowerBar();
    this.drawPowerLine();
    this.drawPowerFooterBar();
  },
  methods: {
    // 日改变
    dayhandle() {
      document.getElementById("daybtn").style.backgroundColor = "#409eff";
      document.getElementById("monthbtn").style.backgroundColor = "#25292e";
      document.getElementById("yearbtn").style.backgroundColor = "#25292e";
      this.cycleTime = new Date();
      this.formatChange = "yyyy年MM月dd日";
      this.valueChange = "yyyy-MM-dd";
    },
    // 月改变
    monthhandle() {
      document.getElementById("daybtn").style.backgroundColor = "#25292e";
      document.getElementById("monthbtn").style.backgroundColor = "#409eff";
      document.getElementById("yearbtn").style.backgroundColor = "#25292e";
      this.cycleTime = new Date();
      // this.typeChange = "month";
      this.formatChange = "yyyy年MM月";
      this.valueChange = "yyyy-MM";
    },
    // 年改变
    yearhandle() {
      document.getElementById("daybtn").style.backgroundColor = "#25292e";
      document.getElementById("monthbtn").style.backgroundColor = "#25292e";
      document.getElementById("yearbtn").style.backgroundColor = "#409eff";
      this.cycleTime = new Date();
      // this.typeChange = "year";
      this.formatChange = "yyyy年";
      this.valueChange = "yyyy";
    },
    // 进线选中
    EnterSelectedChange() {
      this.powerCurrentSelected = this.powerOptionData[0].label;
    },
    // 查看区域选中
    CurrentSelectedChange() {
      // 点击区域进线清空
      this.powerEnterSelected = "";
    },
    // 饼图绘制
    drawPowerPie() {
      let PowerPie = this.$echarts.init(document.getElementById("powerPie"));
      PowerPie.setOption({
        title: {
          text: "标题部分",
          x: "left",
          backgroundColor: "#24292F",
          textStyle: {
            color: "#ddd"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{b} : {d}%"
        },
        series: [
          {
            type: "pie",
            radius: "90%",
            center: ["50%", "50%"],
            data: this.powerPieData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            labelLine: {
              length: 5, // 改变标示线的长度
              lineStyle: {
                color: "#fff" // 改变标示线的颜色
              }
            },
            label: {
              textStyle: {
                color: "#fff" // 改变标示文字的颜色
              }
            }
          }
        ],
        // 各个饼颜色
        color: [
          "#95CEFF",
          "#434348",
          "#90ED7D",
          "#F7A35C",
          "#8085E9",
          "#F15C80",
          "#E4D354",
          "#2B908F",
          "#91E8E1"
        ]
      });
    },
    // 条形图绘制
    drawPowerBar() {
      let bannerBar = this.$echarts.init(document.getElementById("bannerBar"));
      bannerBar.setOption({
        // 图例标记
        legend: {
          data: this.powerBarDataX
        },
        // 标题部分
        title: {
          text: "条形图部分",
          textStyle: {
            color: "#ddd"
          }
        },
        // 悬浮框
        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            type: "none"
          }
        },
        // x轴
        xAxis: {
          type: "category",
          data: this.powerBarDataX,
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
        // 轴线

        series: [
          {
            data: this.powerBarDataY,
            type: "bar"
          }
        ],
        // 柱状图颜色
        color: ["#4A77C3", "73558B"]
      });
    },
    // 折线图绘制
    drawPowerLine() {
      let bannerLine = this.$echarts.init(
        document.getElementById("bannerLine")
      );
      bannerLine.setOption({
        // 图例标记
        legend: {
          data: this.powerBarDataX
        },
        // 悬浮框
        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            type: "none"
          }
        },
        // 标题部分
        title: {
          text: "折线图部分",
          textStyle: {
            color: "#ddd"
          }
        },
        xAxis: {
          type: "category",
          data: this.powerBarDataX,
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
            data: this.powerBarDataY,
            type: "line",
            areaStyle: {
              // 线下区域渐变
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
        color: ["#4A77C3", "73558B"]
      });
    },
    // 底部全年柱状图绘制
    drawPowerFooterBar() {
      let footerBar = this.$echarts.init(document.getElementById("footerBar"));
      footerBar.setOption({
        // 图例标记
        legend: {
          data: this.powerBarDataX
        },
        // 标题部分
        title: {
          text: "全年柱状图部分",
          textStyle: {
            color: "#ddd"
          }
        },
        // 悬浮框
        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            type: "none"
          }
        },
        // x轴
        xAxis: {
          type: "category",
          data: this.powerBarDataX,
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
        // 轴线

        series: [
          {
            data: this.powerBarDataY,
            type: "bar"
          }
        ],
        // 柱状图颜色
        color: ["#4A77C3", "73558B"]
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/powerManage";
</style>
<style lang="less">
.powerManage {
  .powerManage-header {
    // 向右偏移
    .powerLeft {
      margin-left: 1%;
    }

    // 日月年选择
    .powerDateSelected {
      border: 1px solid #535960;
      width: 5%;
    }
    .el-button--primary.is-plain {
      background-color: #25292e;
      color: #ddd;
      &:hover {
        background-color: #409eff;
      }
    }

    // 日期选择
    .el-input--prefix .el-input__inner {
      background: #25292e;
      border: 1px solid #535960;
      color: #ddd;
      height: 31px;
    }
  }
  // 列表渲染

  .topCon-table {
    /* 表格样式 */
    height: 400px;
    overflow-y: auto;
    .el-table {
      th {
        color: #409eff;
        background-color: #252a31;
        text-align: center;
        border-bottom: none;
      }
      tr {
        color: #adb6c2;
        background-color: #39414a;
      }

      td {
        border-top: 5px solid #212429;
        border-bottom: none;
      }
      .el-table__footer-wrapper tbody td {
        color: #adb6c2;
        background-color: #252a31;
      }
      tbody tr:hover > td {
        background-color: #39414a;
      }
    }
  }
}
</style>
