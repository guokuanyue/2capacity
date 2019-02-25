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
      <el-button type="primary" class="powerDateSelected" size="mini" plain @click="dayhandle">日</el-button>
      <el-button type="primary" class="powerDateSelected" size="mini" plain @click="monthhandle">月</el-button>
      <el-button type="primary" class="powerDateSelected" size="mini" plain @click="yearhandle">年</el-button>&nbsp;&nbsp;&nbsp;
      <!-- 日期选择 -->
      <el-date-picker
        :picker-options="pickerOptions"
        v-model="cycleTime"
        :type="typeChange"
        :placeholder="timeDefaultShow"
        :format="formatChange"
        :value-format="valueChange"
      ></el-date-picker>
    </div>
    <!-- 下半部总体 -->
    <div class="powerManage-wrap">
      <!-- 饼图和数据列表总体 -->
      <div class="powerManage-topCon">
        <!-- 饼图部分 -->
        <div class="topCon-pie"></div>
        <!-- 列表部分 -->
        <div class="topCon-table"></div>
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
      // 默认选中日期
      timeDefaultShow: "",
      // 默认选中日期的格式化yyyy-MM
      formatTimeShow: ""
    };
  },
  created() {
    // 查看区域默认选中
    this.powerCurrentSelected = this.powerOptionData[0].label;
    // 日期默认选中
    let nowDate = new Date();
    let nowDateMth = nowDate.getMonth() + 1;
    let showDate = nowDate.getFullYear() + "年" + nowDateMth + "月";
    this.timeDefaultShow = showDate;
    // yyyy-MM
    this.formatTimeShow = nowDate.getFullYear() + "-" + nowDateMth;
  },
  methods: {
    // 日改变
    dayhandle() {
      this.typeChange = "date";
      this.formatChange = "yyyy年MM月dd日";
      this.valueChange = "yyyy-MM-dd";
    },
    // 月改变
    monthhandle() {
      this.typeChange = "month";
      this.formatChange = "yyyy年MM月";
      this.valueChange = "yyyy-MM";
    },
    // 年改变
    yearhandle() {
      this.typeChange = "year";
      this.formatChange = "yyyy年";
      this.valueChange = "yyyy";
    },
    // 选中日期
    selectTime(val) {
      this.dayTime = val;
      this.monthTime = val;
      this.yearTime = val;
    },
    // 进线选中
    EnterSelectedChange() {
      this.powerCurrentSelected = this.powerOptionData[0].label;
    },
    // 查看区域选中
    CurrentSelectedChange() {
      // 点击区域进线清空
      this.powerEnterSelected = "";
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
    // 日期选择
    .el-input--prefix .el-input__inner {
      background: #25292e;
      border: 1px solid #535960;
      color: #ddd;
      height: 31px;
    }
  }
}
</style>





