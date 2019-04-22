<!-- 报警配置---添加页面 -->
<template>
  <div class="alermAdd" style="height: 521px;">
    <div class="alerm_form">
      <el-form :model="ruleForm2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <!-- 限制量 -->
        <div class="alerm_box">
          <span class="alermTie1">限制量:</span>
          <div class="alerm_radio">
            <el-radio v-model="radio7 " label="5" border size="medium" @change="radioClick">电流设置</el-radio>
            <el-radio v-model="radio7" label="4" border size="medium" @change="radioClick">电压设置</el-radio>
            <el-radio v-model="radio7" label="6" border size="medium" @change="radioClick">开关量设置</el-radio>
          </div>
        </div>
        <!-- 通讯机 -->
        <div class="alerm_box">
          <span class="alermTie1">通讯机:</span>
          <div class="alerm_select">
            <el-row>
              <el-select
                class="alermAdd-el-select"
                v-model="value"
                placeholder="新工厂配电室"
                @change="onSelected"
              >
                <el-option
                  v-for="item in optionsn"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-row>
          </div>
        </div>
        <!-- 限制量 -->
        <div class="alerm_box">
          <span class="alermTie1">限制量:</span>
          <!-- table表格 -->
          <div class="alerm-table">
            <el-table
              ref="multipleTable"
              :data="tableData3"
              tooltip-effect="dark"
              size="mini"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column align="center" type="selection" width="55"></el-table-column>
              <el-table-column
                align="center"
                prop="tds"
                label="描述"
                width="400"
                show-overflow-tooltip
              ></el-table-column>
            </el-table>
          </div>
        </div>
        <!-- 高限、低限 -->
        <div class="alerm_higlow">
          <!-- 高限 -->
          <div class="alerm_hig">
            <el-form-item prop="alt" class="alerm_gaoxian">
              <label class="h_text leftBorderRadius rightBorderNone">{{alt}}</label>
              <label>高限：</label>
              <el-input v-model.number="ruleForm2.alt"></el-input>
            </el-form-item>
            <el-form-item prop="highalt" class="alerm_gaogaoxian">
              <label class="leftBorderRadius">高高限：</label>
              <el-input v-model.number="ruleForm2.highalt"></el-input>
            </el-form-item>
          </div>
          <!-- 低低限 -->
          <div class="alerm_low">
            <el-form-item prop="min" class="alerm_dixian">
              <label class="l_text leftBorderRadius rightBorderNone">{{min}}</label>
              <label>低限：</label>
              <el-input v-model.number="ruleForm2.min"></el-input>
            </el-form-item>
            <el-form-item prop="lowmin" class="alerm_didixian">
              <label class="leftBorderRadius">低低限：</label>
              <el-input v-model.number="ruleForm2.lowmin"></el-input>
            </el-form-item>
            <!-- 提交、重置 -->
            <el-form-item>
              <div class="alerm_btn">
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
              </div>
            </el-form-item>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { addAlarmConfigInfo } from "@/api/alarmConfig";
import { HttpTool } from "@/pulign/htttp";
export default {
  name: "alermAdd",
  data() {
    return {
      value: "新工厂配电室",
      radio7: "1",
      optionsn: [
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
        },
        {
          value: "工厂智能化改造",
          label: "工厂智能化改造"
        }
      ],
      ruleForm2: {
        alt: "",
        highalt: "",
        min: "",
        lowmin: ""
      },
      alt: "",
      min: "",
      table: {
        "5": {
          //这个1代表单选框的radio7，下边以此类推
          高限: "过流设置",
          低限: "欠电流",
          新工厂配电室: [
            //这个新工厂配电室代表的是下拉框的值，数组里面的内容是代表限制量里面的列表，下边以此类推
            {
              tds: ""
            }
          ],
          工厂ipanel柜: [
            {
              address: "上海市普陀区金沙江路 1518 上海市普陀区金沙江路 1518"
            }
          ]
        },
        "4": {
          高限: "过压设置",
          低限: "欠电压",
          新工厂配电室: [
            //这个新工厂配电室代表的是下拉框的值，数组里面的内容是代表限制量里面的列表，下边以此类推
            {
              address: "上海市普陀区金沙江路 1518 上海市普陀区金沙江路 1518"
            }
          ],
          工厂ipanel柜: [
            {
              address: "上海市普陀区金沙江路 1518 上海市普陀区金沙江路 1518"
            }
          ]
        },
        "6": {
          高限: "过压设置",
          低限: "欠电压",
          下拉选项: [
            {
              address: "上海市普陀区金沙江路 1518 上海市普陀区金沙江路 1518"
            }
          ]
        }
      },
      //table表格
      tableData3: [],
      multipleSelection: []
    };
  },

  methods: {
    radioClick(val) {
      this.tableData3 = this.table[val][this.value];
      this.min = this.table[val]["低限"];
      this.alt = this.table[val]["高限"];
    },
    onSelected(val) {
      this.tableData3 = this.table[this.radio7][val];
      this.value = val;
    },
    // 提交
    submitForm(formName) {
      var dataArray = [];
      var dataObject = new Object();
      dataObject.highlimit = formName.alt;
      dataObject.higherlimit = formName.highalt;
      (dataObject.lowlimit = formName.min),
        (dataObject.lowerlimit = formName.lowmin);
      dataObject.switchhouse = this.value;
      dataObject.vt = this.radio7;
      dataArray.push(dataObject);
      this.$http
        .post(
          "http://192.168.0.177:8001/netgate-server/alarmSet/saveAlarmSet",
          dataArray
        )
        .then(res => {
          console.log(res, "res");
          //选中数据、选择分类、返回状态码为0都满足
          if (res.data.code == 0) {
            // 保存后重新请求界面,这块要跳转到列表页面

            alert("保存成功");
          }
        })
        .catch(err => {
          alert("保存失败");
        });
      this.$router.push({ path: "/alermConfig" });
    },
    // 重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // table表格
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>

<style>
/* 表格---滚动条 */
.el-table--scrollable-x .el-table__body-wrapper {
  overflow-x: hidden;
}

.alermAdd {
  border: 2px solid #2c323b;
  width: 65%;
  height: 365px;
  padding: 30px 0;
  padding-left: 35px;
}
/* .alerm_form {
    padding: 0px !important;
} */
/* 限制量 */
.alermAdd .alerm_form .demo-ruleForm .alerm_box {
  margin-bottom: 26px;
}
.alermAdd .alerm_form .demo-ruleForm .alerm_box .alermTie1 {
  color: #9fa2a7;
  border-left: 3px solid #2a84f6;
  display: inline-block;
  height: 18px;
  line-height: 18px;
  padding-left: 10px;
  margin-right: 72px;
  font-size: 14px;
  font-weight: 600;
}
.alermAdd .alerm_form .demo-ruleForm .alerm_box .alerm_radio {
  margin-top: -27px;
  margin-left: 94px;
}
/* 单选框边框*/
.alermAdd
  .alerm_form
  .demo-ruleForm
  .alerm_box
  .alerm_radio
  .el-radio.is-bordered {
  padding: 10px 28px 0 27px;
  border-radius: 4px;
  border: 1px solid #535960;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 35px;
}
.alermAdd
  .alerm_form
  .demo-ruleForm
  .alerm_box
  .alerm_radio
  .el-radio.is-bordered.is-checked {
  border-color: #409eff;
}
/* 单选框内文字 */
.alermAdd .alerm_form .demo-ruleForm .alerm_box .alerm_radio .el-radio {
  color: #a0a9b4;
}
/* 单选框内圆点 */
.alermAdd .alerm_form .demo-ruleForm .alerm_box .alerm_radio .el-radio__inner {
  background-color: #a0a9b4;
}
/* 通讯机 */
.alermAdd .alerm_form .demo-ruleForm .alerm_box .alerm_select {
  display: inline-block;
  margin-left: -41px;
}
/* 通讯机--select */
.alermAdd
  .alerm_form
  .demo-ruleForm
  .alerm_box
  .alerm_select
  .alermAdd-el-select
  .el-input--suffix
  .el-input__inner {
  padding-right: 67px;
  height: 35px;
  width: 240px;
  border: 1px solid #535960;
  background: #212429;
  border-radius: 3px;
  color: #ffffff;
}
/* 通讯机--select选项选中后文字 */
.alermAdd
  .alerm_form
  .demo-ruleForm
  .alerm_box
  .alerm_select
  .alermAdd-el-select
  .el-input--suffix
  .el-input__inner {
  color: #a0a9b4;
}
/* 第二个---限制量 */
/* 表格 */
.alermAdd .alerm_form .demo-ruleForm .alerm_box .alerm-table {
  width: 92%;
  margin-left: 72px;
}
.alermAdd .alerm_form .demo-ruleForm .alerm_box .alerm-table .el-table {
  padding: 4px 0;
  background-color: #212429;
}
.alermAdd .alerm_form .demo-ruleForm .alerm_box .alerm-table thead tr th {
  color: #fff;
  background-color: #212429;
  font-weight: 400;
  border-bottom: none;
}
.alermAdd
  .alerm_form
  .demo-ruleForm
  .alerm_box
  .alerm-table
  .el-table
  tbody
  tr {
  background-color: #212429;
}
.alermAdd
  .alerm_form
  .demo-ruleForm
  .alerm_box
  .alerm-table
  .el-table
  tbody
  tr
  .el-input__inner {
  border: 1px solid #666;
  height: 35px;
  border-radius: 0px;
  background-color: #212429;
}
.alermAdd
  .alerm_form
  .demo-ruleForm
  .alerm_box
  .alerm-table
  .el-table
  tbody
  tr
  td {
  color: #a0a8b4;
  border-top: 12px solid #212429;
  border-bottom: none;
}
/* table选框 */
.alermAdd
  .alerm_form
  .demo-ruleForm
  .alerm_box
  .alerm-table
  .el-table
  .cell
  label {
  width: 30px;
  border: 0px;
}
/* 表格下的白线 */
.el-table::before {
  background-color: #212429;
}
/* table鼠标悬浮 */
.alermAdd
  .alerm_form
  .demo-ruleForm
  .alerm_box
  .el-table--enable-row-hover
  .el-table__body
  tr:hover
  > td {
  background-color: #212429;
  color: #fff;
}

/* .alerm_form {
    float: left;
    width: 1200px;
    padding: 0px 28px;
} */
.alermAdd .alerm_form .demo-ruleForm .alerm_higlow .alerm_hig {
  margin-bottom: 16px;
}
.alermAdd .alerm_form .demo-ruleForm .alerm_higlow .rightBorderNone {
  border-right: none;
}
.alermAdd .alerm_form .demo-ruleForm .alerm_higlow label,
.gaoXian input {
  color: white;
  border: 1px solid #2a84f6;
}
.alermAdd .alerm_form .demo-ruleForm .alerm_higlow label {
  float: left;
  width: 86px;
  height: 30px;
  line-height: 30px;
  /* border: 2px solid #999; */
  text-align: center;
  font-size: 14px;
  /* color: #666; */
  /* border-right: none; */
}
.alermAdd .alerm_form .demo-ruleForm .alerm_higlow .leftBorderRadius {
  -webkit-border-radius: 7px 0 0 7px;
}
/* 高限--- */
.alermAdd .alerm_form .demo-ruleForm .alerm_higlow .alerm_hig .alerm_gaoxian {
  display: inline-block;
}
.alermAdd
  .alerm_form
  .demo-ruleForm
  .alerm_higlow
  .alerm_hig
  .alerm_gaogaoxian {
  display: inline-block;
  float: right;
  padding-right: 35px;
}
.alermAdd .alerm_form .demo-ruleForm .alerm_higlow .alerm_low .alerm_dixian {
  display: inline-block;
}
.alermAdd .alerm_form .demo-ruleForm .alerm_higlow .alerm_low .alerm_didixian {
  display: inline-block;
  float: right;
  padding-right: 35px;
}
.alermAdd
  .alerm_form
  .demo-ruleForm
  .alerm_higlow
  .el-form-item
  .el-form-item__content {
  line-height: 0px;
  margin-left: 0px !important;
}
.alermAdd
  .alerm_form
  .demo-ruleForm
  .alerm_higlow
  .el-form-item
  .el-form-item__content
  .el-input {
  display: inline;
}
/* input输入框 */
.alermAdd
  .alerm_form
  .demo-ruleForm
  .alerm_higlow
  .el-form-item
  .el-form-item__content
  .el-input
  .el-input__inner {
  height: 32px;
  font-size: 12px;
  width: 240px;
  border: 1px solid #2a84f6;
  background: #212429;
  border-radius: 1px 3px 3px 1px;
  color: #ffffff;
}
/* 提交、重置 */
.alermAdd .alerm_form .demo-ruleForm .alerm_higlow .alerm_low .alerm_btn {
  padding-top: 30px;
}
.alermAdd
  .alerm_form
  .demo-ruleForm
  .alerm_higlow
  .alerm_low
  .el-form-item
  .el-form-item__content
  .alerm_btn
  .el-button--primary {
  color: #fff;
  background: transparent;
  border-color: #535960;
}
.alermAdd
  .alerm_form
  .demo-ruleForm
  .alerm_higlow
  .alerm_low
  .el-form-item
  .el-form-item__content
  .alerm_btn
  .el-button--default {
  color: #fff;
  background: transparent;
  border-color: #535960;
}
</style>
