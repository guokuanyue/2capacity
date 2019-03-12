<template>
  <div class="report">
    <!-- 累积量标题 -->
    <p class="report-title">累积量报表</p>
    <!-- 累积量报表四部分 -->
    <div class="report-wrap clearfix">
      <!-- 日累积量报表 -->
      <!-- 累积量报表通用盒子 -->
      <div class="report-con-box fl">
        <!-- 日累积量标题 -->
        <p class="report-con-title day-titlebg">日累积量报表</p>
        <!-- 标题以下的版心 -->
        <div class="repot-con-con">
          <!-- 下拉选择 -->
          <select v-model="dayCurrentSelected" class="select-factory">
            <option
              :key="item.value"
              :value="item.value"
              v-for="item in reportOptionData"
            >{{item.label}}</option>
          </select>
          <!-- 起止时间 -->
          <div class="report-dateRange">
            <el-date-picker
              v-model="daySelectTimeData"
              type="daterange"
              :clearable="false"
              format="yyyy年MM月dd日"
              value-format="yyyy-MM-dd"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </div>
          <!-- 三个按钮 -->
          <div class="report-con-btn">
            <button class="report-btn" @click="dayReportView">查看</button>
            <!-- 查看弹窗 -->
            <el-dialog :title="dialogTitle" :visible.sync="dialogTableVisible1">
              <el-table border :data="dialogDayDate">
                <el-table-column align="center" property="tnm" label="名称"></el-table-column>
                <el-table-column align="center" property="tds" label="描述"></el-table-column>
                <el-table-column align="center" property="eds" label="设备描述"></el-table-column>
              </el-table>
            </el-dialog>
            <button class="report-btn" @click="dayReportDownload">下载</button>
            <button class="report-btn" @click="dayReportPrint">在线打印</button>
          </div>
        </div>
      </div>
      <!-- 月累积量报表 -->
      <!-- 累积量报表通用盒子 -->
      <div class="report-con-box fl">
        <!-- 月累积量标题 -->
        <p class="report-con-title month-titlebg">月累积量报表</p>
        <!-- 标题以下的版心 -->
        <div class="repot-con-con">
          <!-- 下拉选择 -->
          <select v-model="monthCurrentSelected" class="select-factory">
            <option
              :key="item.value"
              :value="item.value"
              v-for="item in reportOptionData"
            >{{item.label}}</option>
          </select>
          <!-- 起止时间 -->
          <div class="report-dateRange">
            <el-date-picker
              v-model="monthSelectTimeData"
              type="daterange"
              format="yyyy年MM月"
              value-format="yyyy-MM"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </div>
          <!-- 三个按钮 -->
          <div class="report-con-btn">
            <button class="report-btn" @click="monthReportView">查看</button>
            <!-- 查看弹窗 -->
            <el-dialog :title="dialogTitle" :visible.sync="dialogTableVisible2">
              <el-table border :data="dialogMonthDate">
                <el-table-column align="center" property="tnm" label="名称"></el-table-column>
                <el-table-column align="center" property="tds" label="描述"></el-table-column>
                <el-table-column align="center" property="eds" label="设备描述"></el-table-column>
              </el-table>
            </el-dialog>
            <button class="report-btn" @click="monthReportDownload">下载</button>
            <button class="report-btn" @click="monthReportPrint">在线打印</button>
          </div>
        </div>
      </div>
      <!-- 年日累积量报表 -->
      <!-- 累积量报表通用盒子 -->
      <div class="report-con-box fl">
        <!-- 年累积量标题 -->
        <p class="report-con-title year-titlebg">年累积量报表</p>
        <!-- 标题以下的版心 -->
        <div class="repot-con-con">
          <!-- 下拉选择 -->
          <select v-model="yearCurrentSelected" class="select-factory">
            <option
              :key="item.value"
              :value="item.value"
              v-for="item in reportOptionData"
            >{{item.label}}</option>
          </select>
          <!-- 起止时间 -->
          <div class="report-dateRange">
            <el-date-picker
              v-model="yearSelectTimeData"
              type="daterange"
              format="yyyy年"
              value-format="yyyy"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </div>
          <!-- 三个按钮 -->
          <div class="report-con-btn">
            <button class="report-btn" @click="yearReportView">查看</button>
            <!-- 查看弹窗 -->
            <el-dialog :title="dialogTitle" :visible.sync="dialogTableVisible3">
              <el-table border :data="dialogYearDate">
                <el-table-column align="center" property="tnm" label="名称"></el-table-column>
                <el-table-column align="center" property="tds" label="描述"></el-table-column>
                <el-table-column align="center" property="eds" label="设备描述"></el-table-column>
              </el-table>
            </el-dialog>
            <button class="report-btn" @click="yearReportDownload">下载</button>
            <button class="report-btn" @click="yearReportPrint">在线打印</button>
          </div>
        </div>
      </div>
      <!-- 实时报表 -->
      <div class="report-con-box fl">
        <!-- 实时标题 -->
        <p class="report-con-title now-titlebg">实时报表</p>
        <!-- 标题以下的版心 -->
        <div class="repot-con-con">
          <!-- 下拉选择 -->
          <select v-model="nowCurrentSelected" class="select-factory">
            <option
              :key="item.value"
              :value="item.value"
              v-for="item in reportOptionData"
            >{{item.label}}</option>
          </select>
          <!-- 三个按钮 -->
          <div class="report-con-btn">
            <button class="report-btn" @click="nowReportView">查看</button>
            <!-- 查看弹窗 -->
            <el-dialog :title="dialogNowTitle" :visible.sync="dialogTableVisible0">
              <el-table border :data="dialogNowDate">
                <el-table-column align="center" property="tnm" label="名称"></el-table-column>
                <el-table-column align="center" property="tds" label="描述"></el-table-column>
                <el-table-column align="center" property="eds" label="设备描述"></el-table-column>
              </el-table>
            </el-dialog>
            <button class="report-btn" @click="nowReportDownload">下载</button>
            <button class="report-btn" @click="nowReportPrint">在线打印</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 分时标题 -->
    <p class="report-title">分时报表</p>
    <!-- 分时报表三部分 -->
    <div class="report-wrap clearfix">
      <!-- 日报表 -->
      <!-- 通用盒子 -->
      <div class="report-con-box fl">
        <!-- 日报表标题 -->
        <p class="report-con-title day-titlebg">日报表</p>
        <!-- 标题以下的版心 -->
        <div class="repot-con-con">
          <!-- 日期选择 -->
          <div class="report-date">
            <el-date-picker
              :picker-options="pickerOptions"
              v-model="dayTime"
              type="date"
              placeholder="选择日期"
              format="yyyy年MM月dd日"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </div>
          <!-- 下拉选择 -->
          <select v-model="dayCurrentSelected2" class="select-factory">
            <option
              :key="item.value"
              :value="item.value"
              v-for="item in reportOptionData"
            >{{item.label}}</option>
          </select>
          <!-- 一级分类/详细电路： -->
          <p class="repot-con-first-title">一级分类 / 详细电路：</p>
          <div class="report-el-cascader">
            <el-cascader @change="handleChange" :options="optionsWithDisabled"></el-cascader>
          </div>
          <!-- 三个按钮 -->
          <div class="report-con-btn report-con-btn2">
            <button class="report-btn" @click="dayReportView2">查看</button>
            <!-- 查看弹窗 -->
            <el-dialog :title="dialogNowTitle" :visible.sync="dialogTableVisible4">
              <el-table border :data="dialogDayDate2">
                <el-table-column align="center" property="tnm" label="名称"></el-table-column>
                <el-table-column align="center" property="tds" label="描述"></el-table-column>
                <el-table-column align="center" property="eds" label="设备描述"></el-table-column>
              </el-table>
            </el-dialog>
            <button class="report-btn" @click="dayReportDownload2">下载</button>
            <button class="report-btn" @click="dayReportPrint2">在线打印</button>
          </div>
        </div>
      </div>
      <!-- 月报表 -->
      <!-- 通用盒子 -->
      <div class="report-con-box fl">
        <!-- 月报表标题 -->
        <p class="report-con-title month-titlebg">月报表</p>
        <!-- 标题以下的版心 -->
        <div class="repot-con-con">
          <!-- 日期选择 -->
          <div class="report-date">
            <el-date-picker
              :picker-options="pickerOptions"
              v-model="monthTime"
              type="month"
              placeholder="选择日期"
              format="yyyy年MM月"
              value-format="yyyy-MM"
            ></el-date-picker>
          </div>
          <!-- 下拉选择 -->
          <select v-model="monthCurrentSelected2" class="select-factory">
            <option
              :key="item.value"
              :value="item.value"
              v-for="item in reportOptionData"
            >{{item.label}}</option>
          </select>
          <!-- catetory二级选择 -->
          <select v-model="categoryCurrentSelected" class="select-factory">
            <option
              :key="item.value"
              :value="item.value"
              v-for="item in categoryData"
            >{{item.label}}</option>
          </select>
          <!-- 三个按钮 -->
          <div class="report-con-btn">
            <button class="report-btn" @click="monthReportView2">查看</button>
            <!-- 查看弹窗 -->
            <el-dialog :title="dialogNowTitle" :visible.sync="dialogTableVisible5">
              <el-table border :data="dialogMonthDate2">
                <el-table-column align="center" property="tnm" label="名称"></el-table-column>
                <el-table-column align="center" property="tds" label="描述"></el-table-column>
                <el-table-column align="center" property="eds" label="设备描述"></el-table-column>
              </el-table>
            </el-dialog>
            <button class="report-btn" @click="monthReportDownload2">下载</button>
            <button class="report-btn" @click="monthReportPrint2">在线打印</button>
          </div>
        </div>
      </div>
      <!-- 年报表 -->
      <!-- 通用盒子 -->
      <div class="report-con-box fl">
        <!-- 年报表标题 -->
        <p class="report-con-title year-titlebg">年报表</p>
        <!-- 标题以下的版心 -->
        <div class="repot-con-con">
          <!-- 日期选择 -->
          <div class="report-date">
            <el-date-picker
              :picker-options="pickerOptions"
              v-model="yearTime"
              type="year"
              placeholder="选择日期"
              format="yyyy年"
              value-format="yyyy"
            ></el-date-picker>
          </div>
          <!-- 下拉选择 -->
          <select v-model="yearCurrentSelected2" class="select-factory">
            <option
              :key="item.value"
              :value="item.value"
              v-for="item in reportOptionData"
            >{{item.label}}</option>
          </select>
          <!-- catetory二级选择 -->
          <select v-model="categoryCurrentSelected" class="select-factory">
            <option
              :key="item.value"
              :value="item.value"
              v-for="item in categoryData"
            >{{item.label}}</option>
          </select>
          <!-- 三个按钮 -->
          <div class="report-con-btn">
            <button class="report-btn" @click="yearReportView2">查看</button>
            <!-- 查看弹窗 -->
            <el-dialog :title="dialogNowTitle" :visible.sync="dialogTableVisible6">
              <el-table border :data="dialogYearDate2">
                <el-table-column align="center" property="tnm" label="名称"></el-table-column>
                <el-table-column align="center" property="tds" label="描述"></el-table-column>
                <el-table-column align="center" property="eds" label="设备描述"></el-table-column>
              </el-table>
            </el-dialog>
            <button class="report-btn" @click="yearReportDownload2">下载</button>
            <button class="report-btn" @click="yearReportPrint2">在线打印</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reportOptionData: [
        {
          value: "新工厂配电室",
          label: "新工厂配电室"
        },
        {
          value: "工厂ipanel柜",
          label: "工厂ipanel柜"
        },
        {
          value: "实验柜",
          label: "实验柜"
        }
      ],
      categoryData: [
        {
          value: "全部",
          label: "全部"
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
      // 层联选择
      optionsWithDisabled: [
        {
          value: "全部",
          label: "全部",
          children: [
            {
              value: "全部",
              label: "全部"
            },
            {
              value: "1#进线",
              label: "1#进线"
            },
            {
              value: "2#进线",
              label: "2#进线"
            },
            {
              value: "高压侧1AH1进线柜",
              label: "高压侧1AH1进线柜"
            },
            {
              value: "高压侧1AH4 1#进线柜",
              label: "高压侧1AH4 1#进线柜"
            },
            {
              value: "高压侧1AH5 2#进线柜",
              label: "高压侧1AH5 2#进线柜"
            },
            {
              value: "高压侧1AH6 3#进线柜",
              label: "高压侧1AH6 3#进线柜"
            }
          ]
        },
        {
          value: "工厂用电",
          label: "工厂用电",
          children: [
            {
              value: "全部",
              label: "全部"
            },
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
          ]
        },
        {
          value: "实验柜",
          label: "实验柜",
          children: [
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
          ]
        }
      ],
      // 下拉选择结果
      // 日累积选中
      dayCurrentSelected: "",
      // 日分时选中
      dayCurrentSelected2: "",
      // 月累积选中
      monthCurrentSelected: "",
      // 月分时选中
      monthCurrentSelected2: "",
      // 年累积选中
      yearCurrentSelected: "",
      // 年分时选中
      yearCurrentSelected2: "",
      // 实时选中
      nowCurrentSelected: "",
      // 日选中时间
      daySelectTimeData: "",
      // 月选中时间
      monthSelectTimeData: "",
      // 年选中时间
      yearSelectTimeData: "",
      // 分时报表
      dayTime: "",
      monthTime: "",
      yearTime: "",
      // 今天以后的日期不可选
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now() - 8.64e6;
        }
      },
      // 查看弹窗
      // 日月年累积是否查看
      dialogTableVisible0: false,
      dialogTableVisible1: false,
      dialogTableVisible2: false,
      dialogTableVisible3: false,
      dialogTableVisible4: false,
      dialogTableVisible5: false,
      dialogTableVisible6: false,
      dialogTitle: "",
      // 累积列表弹窗列表
      dialogNowDate: [],
      dialogDayDate: [],
      dialogMonthDate: [],
      dialogYearDate: [],
      // 累积列表弹窗标题
      dialogNowTitle: "",
      // 分时报表弹窗查看
      dialogDayDate2: [],
      dialogMonthDate2: [],
      dialogYearDate2: []
    };
  },
  created() {
    // 默认选中
    this.dayCurrentSelected = this.reportOptionData[0].label;
    this.monthCurrentSelected = this.reportOptionData[0].label;
    this.yearCurrentSelected = this.reportOptionData[0].label;
    this.dayCurrentSelected2 = this.reportOptionData[0].label;
    this.monthCurrentSelected2 = this.reportOptionData[0].label;
    this.yearCurrentSelected2 = this.reportOptionData[0].label;
    this.nowCurrentSelected = this.reportOptionData[0].label;
    this.categoryCurrentSelected = this.categoryData[0].label;
  },
  methods: {
    // 1.实时报表查看
    nowReportView() {
      let nowSendData = {};
      nowSendData.cycle = 0;
      nowSendData.switchhouse = this.nowCurrentSelected;
      console.log("nowSendData", nowSendData);

      // 发送查看请求
      this.$http
        .post("report/amountReports", nowSendData)
        .then(res => {
          console.log("res", res);
          // 弹窗标题
          this.dialogNowTitle = this.nowCurrentSelected + "--" + "实时报表";
          this.dialogTableVisible0 = true;
          this.dialogNowDate = res.data.data;
        })
        .catch(err => {
          console.log("err", err);
          this.$alert("请求失败", "列表获取失败", {
            confirmButtonText: "确定"
          });
        });
    },
    // 2.实时导出下载
    nowReportDownload() {
      let nowSendData = {};
      nowSendData.cycle = 0;
      nowSendData.switchhouse = this.nowCurrentSelected;
      console.log("nowSendData", nowSendData);

      this.$http.post("report/exportCumulant", nowSendData).then(res => {
        console.log("res", res);
      });
    },
    // 3.实时打印
    nowReportPrint() {
      this.$http
        .get("report/printCumulant")
        .then(res => {
          console.log("res", res);
          window.print();
        })
        .catch(err => {
          console.log("err", err);
          this.$alert("请求失败", "列表获取失败", {
            confirmButtonText: "确定"
          });
        });
    },
    // 选中的日期
    selectTime(val) {
      this.daySelectTimeData = val;
      this.monthSelectTimeData = val;
      this.yearSelectTimeData = val;
      this.dayTime = val;
      this.monthTime = val;
      this.yearTime = val;
    },
    // 1.日报表累积量查看
    dayReportView() {
      if (!this.daySelectTimeData) {
        this.$alert("请先选择日期", "您没有选择日期", {
          confirmButtonText: "确定"
        });
        return false;
      } else {
        let daySendData = {};
        daySendData.cycle = 1;
        daySendData.startDate = this.daySelectTimeData[0];
        daySendData.endDate = this.daySelectTimeData[1];
        daySendData.switchhouse = this.dayCurrentSelected;
        console.log("daySendData", daySendData);

        // 发送查看请求
        this.$http
          .post("report/amountReports", daySendData)
          .then(res => {
            console.log("res", res);
            this.dialogDayDate = res.data.data;
            this.dialogTableVisible1 = true;
            // 标题
            this.dialogTitle =
              this.dayCurrentSelected +
              " " +
              this.daySelectTimeData[0] +
              "至" +
              this.daySelectTimeData[1] +
              " " +
              "日累积量报表";
          })
          .catch(err => {
            console.log("err", err);
            this.$alert("请求失败", "列表获取失败", {
              confirmButtonText: "确定"
            });
          });
      }
    },
    // 2.日报表累积量下载
    dayReportDownload() {
      if (!this.daySelectTimeData) {
        this.$alert("请先选择日期", "您没有选择日期", {
          confirmButtonText: "确定"
        });
        return false;
      }
      let daySendData = {};
      daySendData.cycle = 1;
      daySendData.startDate = this.daySelectTimeData[0];
      daySendData.endDate = this.daySelectTimeData[1];
      daySendData.switchhouse = this.dayCurrentSelected;
      console.log("daySendData", daySendData);
      // 发送下载请求
      this.$http
        .post("report/exportCumulant", daySendData)
        .then(res => {
          console.log("res", res);
        })
        .catch(err => {
          console.log("err", err);
          this.$alert("请求失败", "列表获取失败", {
            confirmButtonText: "确定"
          });
        });
    },
    // 3.日累积量报表打印
    dayReportPrint() {
      if (!this.daySelectTimeData) {
        this.$alert("请先选择日期", "您没有选择日期", {
          confirmButtonText: "确定"
        });
        return false;
      }
      this.$http
        .get("report/printCumulant")
        .then(res => {
          console.log("res", res);
          if (res.data.code == 0) {
            window.print();
          }
        })
        .catch(err => {
          console.log("err", err);
          this.$alert("请求失败", "列表获取失败", {
            confirmButtonText: "确定"
          });
        });
    },

    // 1.月报表累积量查看
    monthReportView() {
      if (!this.monthSelectTimeData) {
        this.$alert("请先选择日期", "您没有选择日期", {
          confirmButtonText: "确定"
        });
        return false;
      } else {
        let monthSendData = {};
        monthSendData.cycle = 2;
        monthSendData.startDate = this.monthSelectTimeData[0] + "-01";
        // 获取选中日期
        let sdate = new Date(this.monthSelectTimeData[1]);
        // 月份加一以便获得减一天
        let sdatemth = sdate.setMonth(sdate.getMonth() + 1);
        // 加一的月份转换时间格式
        let sdateday = new Date(sdatemth);
        // 日期减一天 以便获得上个月的月底日期
        let sdatelast = sdateday.setDate(sdateday.getDate() - 1);
        // 获取月底日期
        let qq = new Date(sdatelast);

        // 月份从0开始需要加一
        let qqlastMth = qq.getMonth() + 1;
        console.log("qq.getMonth()", qq.getMonth() + 1);
        console.log("qq.getDate()", qq.getDate());
        // 拼接成发送数据所需格式
        let sendEndDate =
          qq.getFullYear() + "-" + qqlastMth + "-" + qq.getDate();
        console.log("sendEndDate", sendEndDate);

        monthSendData.endDate = sendEndDate;
        monthSendData.switchhouse = this.monthCurrentSelected;
        console.log("monthSendData", monthSendData);

        // 发送查看请求
        this.$http
          .post("report/amountReports", monthSendData)
          .then(res => {
            console.log("res", res);
            // 月累积量标题
            qqlastMth > 9
              ? (qqlastMth = qqlastMth)
              : (qqlastMth = "0" + qqlastMth);
            this.dialogTitle =
              this.monthCurrentSelected +
              " " +
              this.monthSelectTimeData[0] +
              "至" +
              qq.getFullYear() +
              "-" +
              qqlastMth +
              " " +
              "月累积量报表";
            this.dialogMonthDate = res.data.data;
            this.dialogTableVisible2 = true;
          })
          .catch(err => {
            console.log("err", err);
            this.$alert("请求失败", "列表获取失败", {
              confirmButtonText: "确定"
            });
          });
      }
    },
    // 2.月报表累积量下载
    monthReportDownload() {
      if (!this.monthSelectTimeData) {
        this.$alert("您没有选择日期", "您没有选择日期", {
          confirmButtonText: "确定"
        });
        return false;
      }
      let monthSendData = {};
      monthSendData.cycle = 2;
      monthSendData.startDate = this.monthSelectTimeData[0] + "-01";
      // 获取选中日期
      let sdate = new Date(this.monthSelectTimeData[1]);
      // 月份加一以便获得减一天
      let sdatemth = sdate.setMonth(sdate.getMonth() + 1);
      // 加一的月份转换时间格式
      let sdateday = new Date(sdatemth);
      // 日期减一天 以便获得上个月的月底日期
      let sdatelast = sdateday.setDate(sdateday.getDate() - 1);
      // 获取月底日期
      let qq = new Date(sdatelast);

      // 月份从0开始需要加一
      let qqlastMth = qq.getMonth() + 1;
      console.log("qq.getMonth()", qq.getMonth() + 1);
      console.log("qq.getDate()", qq.getDate());
      // 拼接成发送数据所需格式
      let sendEndDate = qq.getFullYear() + "-" + qqlastMth + "-" + qq.getDate();
      console.log("sendEndDate", sendEndDate);

      monthSendData.endDate = sendEndDate;
      monthSendData.switchhouse = this.monthCurrentSelected;
      console.log("monthSendData", monthSendData);
      // 发送查看请求
      this.$http
        .post("report/amountReports", monthSendData)
        .then(res => {
          console.log("res", res);
        })
        .catch(err => {
          console.log("err", err);
          this.$alert("请求失败", "列表获取失败", {
            confirmButtonText: "确定"
          });
        });
    },
    // 3.月累积量报表打印
    monthReportPrint() {
      if (!this.monthSelectTimeData) {
        this.$alert("您没有选择日期", "您没有选择日期", {
          confirmButtonText: "确定"
        });
        return false;
      }
      this.$http
        .get("report/printCumulant")
        .then(res => {
          console.log("res", res);
          if (res.data.code == 0) {
            window.print();
          }
        })
        .catch(err => {
          console.log("err", err);
          this.$alert("请求失败", "列表获取失败", {
            confirmButtonText: "确定"
          });
        });
    },
    // 1.年报表累积量查看
    yearReportView() {
      if (!this.yearSelectTimeData) {
        this.$alert("您没有选择日期", "您没有选择日期", {
          confirmButtonText: "确定"
        });
        return false;
      }
      let yearSendData = {};
      yearSendData.cycle = 3;
      yearSendData.startDate = this.yearSelectTimeData[0] + "-01-01";
      yearSendData.endDate = this.yearSelectTimeData[1] + "-12-31";
      yearSendData.switchhouse = this.yearCurrentSelected;
      console.log("yearSendData", yearSendData);

      // 发送查看请求
      this.$http
        .post("report/amountReports", yearSendData)
        .then(res => {
          console.log("res", res);
          // 年累积量标题
          this.dialogTitle =
            this.yearCurrentSelected +
            " " +
            this.yearSelectTimeData[0] +
            "至" +
            this.yearSelectTimeData[1] +
            " " +
            "年累积量报表";
          this.dialogYearDate = res.data.data;
          this.dialogTableVisible3 = true;
        })
        .catch(err => {
          console.log("err", err);
          this.$alert("请求失败", "列表获取失败", {
            confirmButtonText: "确定"
          });
        });
    },
    // 2.年报表累积量下载
    yearReportDownload() {
      if (!this.yearSelectTimeData) {
        this.$alert("您没有选择日期", "您没有选择日期", {
          confirmButtonText: "确定"
        });
        return false;
      }
      let yearSendData = {};
      yearSendData.cycle = 3;
      yearSendData.startDate = this.yearSelectTimeData[0] + "-01-01";
      yearSendData.endDate = this.yearSelectTimeData[1] + "-12-31";
      yearSendData.switchhouse = this.yearCurrentSelected;
      console.log("yearSendData", yearSendData);
      // 发送下载请求
      this.$http
        .post("report/exportCumulant", yearSendData)
        .then(res => {
          console.log("res", res);
        })
        .catch(err => {
          console.log("err", err);
          this.$alert("请求失败", "列表获取失败", {
            confirmButtonText: "确定"
          });
        });
    },
    // 3.年累积量报表打印
    yearReportPrint() {
      if (!this.yearSelectTimeData) {
        this.$alert("您没有选择日期", "您没有选择日期", {
          confirmButtonText: "确定"
        });
        return false;
      }
      this.$http
        .get("report/printCumulant")
        .then(res => {
          console.log("res", res);
          if (res.data.code == 0) {
            window.print();
          }
        })
        .catch(err => {
          console.log("err", err);
          this.$alert("请求失败", "列表获取失败", {
            confirmButtonText: "确定"
          });
        });
    },
    // 分时报表
    // 日报表
    // 级联选择器change事件
    handleChange(value) {
      console.log(value);
      //把分类赋值checkedSelect
      this.checkedSelect = value;
    },
    //  1.日报表查看
    dayReportView2() {
      if (!this.dayTime) {
        this.$alert("您没有选择日期", "您没有选择日期", {
          confirmButtonText: "确定"
        });
        return false;
      } else {
        let daySendData2 = {};
        daySendData2.cycle = 1;
        daySendData2.date = this.dayTime;
        daySendData2.switchhouse = this.dayCurrentSelected2;
        console.log("daySendData2", daySendData2);
        // 发送查看请求
        this.$http
          .post("report/yearlyReport", daySendData2)
          .then(res => {
            console.log("res", res);
            // 弹窗标题
            this.dialogNowTitle =
              this.dayCurrentSelected2 + " " + this.dayTime + "报表";
            this.dialogTableVisible4 = true;
            this.dialogDayDate2 = res.data.data;
          })
          .catch(err => {
            console.log("err", err);
            this.$alert("请求失败", "列表获取失败", {
              confirmButtonText: "确定"
            });
          });
      }
    },
    // 2.日报表下载
    dayReportDownload2() {
      if (!this.dayTime) {
        this.$alert("您没有选择日期", "您没有选择日期", {
          confirmButtonText: "确定"
        });
        return false;
      }
      let daySendData2 = {};
      daySendData2.cycle = 2;
      daySendData2.date = this.dayTime;
      daySendData2.switchhouse = this.dayCurrentSelected2;
      console.log("daySendData2", daySendData2);
      // 发送查看请求
      this.$http
        .post("report/exportCumulant", daySendData2)
        .then(res => {
          console.log("res", res);
        })
        .catch(err => {
          console.log("err", err);
          this.$alert("请求失败", "列表获取失败", {
            confirmButtonText: "确定"
          });
        });
    },
    // 3.日报表打印
    dayReportPrint2() {
      if (!this.dayTime) {
        this.$alert("您没有选择日期", "您没有选择日期", {
          confirmButtonText: "确定"
        });
        return false;
      }
      this.$http
        .get("report/printCumulant")
        .then(res => {
          console.log("res", res);
          if (res.data.code == 0) {
            window.print();
          }
        })
        .catch(err => {
          console.log("err", err);
          this.$alert("请求失败", "列表获取失败", {
            confirmButtonText: "确定"
          });
        });
    },
    //  1.月报表查看
    monthReportView2() {
      if (!this.monthTime) {
        this.$alert("您没有选择日期", "您没有选择日期", {
          confirmButtonText: "确定"
        });
        return false;
      } else {
        let monthSendData2 = {};
        monthSendData2.cycle = 2;
        monthSendData2.date = this.monthTime;
        monthSendData2.switchhouse = this.monthCurrentSelected2;
        console.log("monthSendData2", monthSendData2);
        // 发送查看请求
        this.$http
          .post("report/yearlyReport", monthSendData2)
          .then(res => {
            console.log("res", res);
            // 弹窗标题
            this.dialogNowTitle =
              this.monthCurrentSelected2 + " " + this.monthTime + "报表";
            this.dialogTableVisible5 = true;
            this.dialogMonthDate2 = res.data.data;
          })
          .catch(err => {
            console.log("err", err);
            this.$alert("请求失败", "列表获取失败", {
              confirmButtonText: "确定"
            });
          });
      }
    },
    // 2.月报表下载
    monthReportDownload2() {
      if (!this.monthTime) {
        this.$alert("您没有选择日期", "您没有选择日期", {
          confirmButtonText: "确定"
        });
        return false;
      }
      let monthSendData2 = {};
      monthSendData2.cycle = 2;
      monthSendData2.date = this.monthTime;
      monthSendData2.switchhouse = this.monthCurrentSelected2;
      console.log("monthSendData2", monthSendData2);
      // 发送查看请求
      this.$http
        .post("report/exportCumulant", monthSendData2)
        .then(res => {
          console.log("res", res);
        })
        .catch(err => {
          console.log("err", err);
          this.$alert("请求失败", "列表获取失败", {
            confirmButtonText: "确定"
          });
        });
    },
    // 3.月报表打印
    monthReportPrint2() {
      if (!this.monthTime) {
        this.$alert("您没有选择日期", "您没有选择日期", {
          confirmButtonText: "确定"
        });
        return false;
      }
      this.$http
        .get("report/printCumulant")
        .then(res => {
          console.log("res", res);
          if (res.data.code == 0) {
            window.print();
          }
        })
        .catch(err => {
          console.log("err", err);
          this.$alert("请求失败", "列表获取失败", {
            confirmButtonText: "确定"
          });
        });
    },
    // 1.年报表查看
    yearReportView2() {
      if (!this.yearTime) {
        this.$alert("您没有选择日期", "您没有选择日期", {
          confirmButtonText: "确定"
        });
        return false;
      } else {
        let yearSendData2 = {};
        yearSendData2.cycle = 3;
        yearSendData2.date = this.yearTime;
        yearSendData2.switchhouse = this.yearCurrentSelected2;
        console.log("yearSendData2", yearSendData2);
        // 发送查看请求
        this.$http
          .post("report/yearlyReport", yearSendData2)
          .then(res => {
            console.log("res", res);
            // 弹窗标题
            this.dialogNowTitle =
              this.yearCurrentSelected2 + " " + this.yearTime + "报表";
            this.dialogTableVisible6 = true;
            this.dialogYearDate2 = res.data.data;
          })
          .catch(err => {
            console.log("err", err);
            this.$alert("请求失败", "列表获取失败", {
              confirmButtonText: "确定"
            });
          });
      }
    },
    // 2.年报表下载
    yearReportDownload2() {
      if (!this.yearTime) {
        this.$alert("您没有选择日期", "您没有选择日期", {
          confirmButtonText: "确定"
        });
        return false;
      }
      let yearSendData2 = {};
      yearSendData2.cycle = 3;
      yearSendData2.date = this.yearTime;
      yearSendData2.switchhouse = this.yearCurrentSelected2;
      console.log("yearSendData2", yearSendData2);
      // 发送查看请求
      this.$http
        .post("report/exportCumulant", yearSendData2)
        .then(res => {
          console.log("res", res);
        })
        .catch(err => {
          console.log("err", err);
          this.$alert("请求失败", "列表获取失败", {
            confirmButtonText: "确定"
          });
        });
    },
    // 3.年报表打印
    yearReportPrint2() {
      if (!this.yearTime) {
        this.$alert("您没有选择日期", "您没有选择日期", {
          confirmButtonText: "确定"
        });
        return false;
      }
      this.$http
        .get("report/printCumulant")
        .then(res => {
          console.log("res", res);
          if (res.data.code == 0) {
            window.print();
          }
        })
        .catch(err => {
          console.log("err", err);
          this.$alert("请求失败", "列表获取失败", {
            confirmButtonText: "确定"
          });
        });
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/css/report";
</style>
<style lang="css">
/* 时间选择器样式 */
.report .report-dateRange .el-range-input {
  background-color: #25292e;
  color: #fff;
}
/* 日期范围选择 */
.report .report-dateRange .el-date-editor .el-range-separator {
  color: #adb6c2;
}
/* 分时报表日期选择 */
.report .report-date .el-input--prefix .el-input__inner {
  background: #25292e;
  border: 1px solid #535960;
  color: #adb6c2;
}
/* 层联输入框 */
.report .el-cascader .el-input__inner {
  background: #25292e;
  border: 1px solid #535960;
  color: #adb6c2;
}
/* 层联选中 */
.report .el-cascader .el-cascader__label {
  color: #adb6c2;
}

/* 弹窗样式 */
.report .el-dialog__headerbtn .el-dialog__close {
  width: 20px;
  height: 20px;
  line-height: 20px;
  color: #fff;
  background-color: #0073ea;
  position: absolute;
  left: -5px;
  top: -15px;
}
.report .el-dialog__header {
  background-color: #dfdfdf;
  padding: 10px;
  position: relative;
}
.report .el-table th {
  color: #2b8adc;
}
</style>
