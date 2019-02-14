<template>
  <div class="powerManage">
    <!-- 头部菜单部分 -->
    <div class="powerManage-header">
      <el-row type="flex">
        <el-col :span="24">
          <!-- 区域选择部分 -->
          <label for="powerManage-item-ipt" class="powerManage-span">选择查看区域</label>
          <select class="powerManage-item-ipt" name id="powerManage-item-ipt">
            <option value="选项1">总能耗</option>
            <option value="选项1">工厂用电</option>
            <option value="选项1">照明用电</option>
            <option value="选项1">其他</option>
          </select>
          <!-- 进线选择部分 -->
          <label for="powerManage-item-ipt" class="powerManage-span">选择查看进线</label>
          <select class="powerManage-item-ipt" name id="powerManage-item-ipt">
            <option value="选项1">总能耗</option>
            <option value="选项1">工厂用电</option>
            <option value="选项1">照明用电</option>
            <option value="选项1">其他</option>
          </select>
          <!-- 查看周期部分 -->
          <label for="powerManage-item-ipt" class="powerManage-span">选择查看周期</label>
          <el-button class="powerManage-el-button" type="primary" plain>
            <span class="powerManage-el-button-circle"></span>日
          </el-button>
          <el-button class="powerManage-el-button" type="primary" plain>
            <span class="powerManage-el-button-circle"></span>月
          </el-button>
          <el-button class="powerManage-el-button" type="primary" plain>
            <span class="powerManage-el-button-circle"></span>年
          </el-button>
          <!-- 选择数据日期 -->
          <label for="powerManage-item-ipt" class="powerManage-span">选择数据日期</label>
          <select class="powerManage-item-ipt" name id="powerManage-item-ipt">
            <option value="选项1">总能耗</option>
            <option value="选项1">工厂用电</option>
            <option value="选项1">照明用电</option>
            <option value="选项1">其他</option>
          </select>
        </el-col>
      </el-row>
    </div>
    <!-- 饼图和数据table部分 -->
    <div class="powerManage-pie-table">
      <el-row type="flex">
        <el-col :xs="10" :sm="10" :md="10" :lg="12" :xl="12">
          <div class="powerManage-pie">
            <div class="powerManage-pie-header">
              新工厂配电室
              <span class="fr">注：点击饼图，可查看对应的下级分类详情</span>
            </div>
            <ve-pie id="powerManage-ve-pie"></ve-pie>
          </div>
        </el-col>
        <el-col :xs="10" :sm="10" :md="10" :lg="12" :xl="12">
          <div class="powerManage-table">
            <el-table id="powerManage-el-table" :data="tableData">
              <el-table-column header-align="center" prop="type" label="类型" minWidth="1"></el-table-column>
              <el-table-column header-align="center" prop="value" label="数值(kWh)" minWidth="1"></el-table-column>
              <el-table-column header-align="center" prop="proportion" label="占比(%)" minWidth="1"></el-table-column>
              <el-table-column header-align="center" prop="power" label="上月耗电量" minWidth="1"></el-table-column>
              <el-table-column header-align="center" prop="percent" label="环比(%)" minWidth="1"></el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
    <!--能耗同比 条形图和折线图 -->
    <div class="powerManage-bar-line">
      <el-row>
        <el-col :xs="10" :sm="10" :md="12" :lg="12" :xl="12">
          <!-- 柱状图 -->
          <div class="grid-content bg-purple">
            <ve-histogram :extend="veHistogramExtend" :data="veHistogramData"></ve-histogram>
          </div>
        </el-col>
        <el-col :xs="10" :sm="10" :md="12" :lg="12" :xl="12">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
      </el-row>
    </div>
    <!-- 耗电量条形图 -->
    <div class="powerManage-Bigbar"></div>
  </div>
</template>

<script>
export default {
  name: "powerManage",
  data() {
    this.veHistogramExtend = {
      // 柱状图样式
      series: {
        barWidth: 4
      },
      // 标题
      title: {
        text: "新工厂配电室",
        textStyle: {
          color: "#fff",
          fontWeight: 400,
          fontSize: 12,
          verticalAlign: "middle"
        }
      }
    };
    let arr1 = ["月份", "当月", "上月"];
    let arr2 = [
      { 月份: "1", 当月: 1191.7, 上月: 5973.3 },
      { 月份: "2", 当月: 1191.7, 上月: 5973.3 },
      { 月份: "3", 当月: 1191.7, 上月: 5973.3 },
      { 月份: "4", 当月: 1191.7, 上月: 5973.3 },
      { 月份: "5", 当月: 1191.7, 上月: 5973.3 },
      { 月份: "6", 当月: 1191.7, 上月: 5973.3 },
      { 月份: "7", 当月: 1191.7, 上月: 5973.3 },
      { 月份: "8", 当月: 1191.7, 上月: 5973.3 },
      { 月份: "9", 当月: 1191.7, 上月: 5973.3 },
      { 月份: "10", 当月: 1191.7, 上月: 5973.3 },
      { 月份: "11", 当月: 1191.7, 上月: 5973.3 },
      { 月份: "12", 当月: 1191.7, 上月: 5973.3 },
      { 月份: "13", 当月: 2923, 上月: 2623 },
      { 月份: "14", 当月: 1723, 上月: 1423 },
      { 月份: "15", 当月: 3792, 上月: 3492 },
      { 月份: "16", 当月: 4593, 上月: 4293 },
      { 月份: "17", 当月: 4593, 上月: 4293 },
      { 月份: "18", 当月: 4593, 上月: 4293 },
      { 月份: "19", 当月: 4593, 上月: 4293 },
      { 月份: "20", 当月: 4593, 上月: 4293 },
      { 月份: "21", 当月: 4593, 上月: 4293 },
      { 月份: "22", 当月: 4593, 上月: 4293 },
      { 月份: "23", 当月: 4593, 上月: 4293 },
      { 月份: "24", 当月: 4593, 上月: 4293 },
      { 月份: "25", 当月: 4593, 上月: 4293 },
      { 月份: "26", 当月: 4593, 上月: 4293 },
      { 月份: "27", 当月: 4593, 上月: 4293 },
      { 月份: "28", 当月: 4593, 上月: 4293 },
      { 月份: "29", 当月: 4593, 上月: 4293 },
      { 月份: "30", 当月: 4593, 上月: 4293 },
      { 月份: "31", 当月: 4593, 上月: 4293 }
    ];
    return {
      veHistogramData: {
        columns: arr1,
        rows: arr2
      },
      tableData: [
        {
          type: "工厂用电",
          value: "46631.8",
          proportion: "83.2%",
          power: "131546.3",
          percent: "-50"
        },
        {
          type: "工厂用电",
          value: "46631.8",
          proportion: "83.2%",
          power: "131546.3",
          percent: "-50"
        },
        {
          type: "工厂用电",
          value: "46631.8",
          proportion: "83.2%",
          power: "131546.3",
          percent: "-50"
        },
        {
          type: "工厂用电",
          value: "46631.8",
          proportion: "83.2%",
          power: "131546.3",
          percent: "-50"
        }
      ]
    };
  },
  mounted() {
    this.bigPieData();
  },
  methods: {
    bigPieData() {
      let powerManageVePie = this.$echarts.init(
        document.getElementById("powerManage-ve-pie")
      );
      powerManageVePie.setOption({
        // 悬停提示框内容
        tooltip: {
          trigger: "item",
          formatter: "{b}",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderColor: "#7CB5EC",
          borderWidth: 2,
          padding: [5, 10],
          textStyle: {
            color: "#000"
          }
        },
        series: [
          {
            type: "pie",
            radius: "80%",
            hoverAnimation: true,
            center: ["50%", "52%"],
            data: [
              { value: 83.1, name: "工厂用电: 83.2 %" },
              { value: 16.8, name: "照明用电: 16.8 %" }
            ],
            label: {
              color: "#fff"
            },
            labelLine: {
              smooth: 0.5,
              lineStyle: {
                color: "#929BA6"
              }
            }
          }
        ],
        // 饼图颜色
        color: ["#7CB5EC", "#5C5C61"]
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/css/powerManage";
</style>
<style lang="less">
// 文本颜色
@text-color: #929ba6;
// 饼图背景色
@pie-color: #24292f;
// 背景色
@background-color: #212429;
// 图表样式
.powerManage-table {
  padding-left: 10px;
  .el-table:before {
    height: 0px;
  }
  #powerManage-el-table {
    // 表头
    .el-table__header th {
      padding: 0;
      height: 45px;
      color: #2a84f6;
      border-bottom: none;
      background-color: #252a31;
    }
    // 行列
    .el-table__body {
      tr,
      td {
        color: #ddd;
        padding: 0;
        height: 20px;
        border-bottom: none;
        border-top: 2px solid #212429;
      }
    }

    // 隔行变色
    tr:nth-child(even) {
      background-color: #252a31;
    }
    tr:nth-child(odd) {
      background-color: #2c323b;
    }
  }
}
// !--能耗同比 条形图和折线图
.powerManage-bar-line {
  .el-col {
    border-radius: 0;
  }
  // 二层条形图
  .bg-purple {
    height: 480px;
    background-color: @pie-color;
  }
  // 二层折线图
  .bg-purple-light {
    height: 480px;
    margin-left: 10px;
    background-color: @pie-color;
  }
  // 第二层共同样式
  .grid-content {
    border-radius: 0px;
    min-height: 36px;
    margin-top: 10px;
  }
}
</style>





