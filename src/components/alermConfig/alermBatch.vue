<!-- 报警配置---批量修改页面 -->
<template>
  <div class="alerm_content" id="conRight" style="height: 213px;">
    <div class="alerm_Submit">
      <el-form :model="ruleForm2" ref="ruleForm2" label-width="100px" class="alerm_form">
        <!-- 配电室 -->
        <div class="alerm_peidianshi">
          <span class="alermTie3">配电室:</span>
          <div class="alerm_select">
            <el-row>
              <el-select class="alermAmend-el-select" v-model="value" placeholder="新工厂配电室">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-row>
          </div>
        </div>
        <!-- 限制量 -->
        <div class="alerm_con">
          <span class="alermTie2">限制量:</span>
          <div class="alerm_radio">
            <el-radio v-model="radio7" label="1" border size="medium">电流</el-radio>
          </div>
        </div>
        <!-- 限制量 -->
        <div class="alerm_tag">
          <span class="alermTie">Tag:</span>
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
                prop="address"
                label="描述"
                width="400"
                show-overflow-tooltip
              ></el-table-column>
            </el-table>
          </div>
        </div>
        <!-- 高限、低限 -->
        <div class="alerm_impose">
          <!-- 高限 -->
          <div class="alerm_hig">
            <el-form-item prop="alt" class="alerm_gaoxian">
              <label class="impose_hig">高限：</label>
              <el-input v-model.number="ruleForm2.alt"></el-input>
            </el-form-item>
            <el-form-item prop="highalt" class="alerm_xian">
              <label class="leftBorderRadius">高高限：</label>
              <el-input v-model.number="ruleForm2.highalt"></el-input>
            </el-form-item>
          </div>
          <!-- 低低限 -->
          <div class="alerm_low">
            <el-form-item prop="min" class="alerm_dixian">
              <label class="impose_hig">低限：</label>
              <el-input v-model.number="ruleForm2.min"></el-input>
            </el-form-item>
            <el-form-item prop="lowmin" class="alerm_xian">
              <label class="leftBorderRadius">低低限：</label>
              <el-input v-model.number="ruleForm2.lowmin"></el-input>
            </el-form-item>
            <!-- 提交、重置 -->
            <el-form-item>
              <div class="alerm_btns">
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
export default {
  name: "alermAmend",
  data() {
    return {
      value: "",
      radio7: "0",
      options: [
        {
          value: "选项1",
          label: "新工厂配电室"
        },
        {
          value: "选项2",
          label: "工厂ipanel柜"
        },
        {
          value: "选项3",
          label: "实验柜"
        },
        {
          value: "选项4",
          label: "工厂智能化改造"
        }
      ],
      value: "",
      //table表格
      tableData3: [
        {
          address: "上海市普陀区金沙江路 1518 上海市普陀区金沙江路 1518"
        },
        {
          address: "上海市普陀区金沙江路 1518 上海市普陀区金沙江路 1518"
        },
        {
          address: "上海市普陀区金沙江路 1518 上海市普陀区金沙江路 1518"
        },
        {
          address: "上海市普陀区金沙江路 1518 上海市普陀区金沙江路 1518"
        },
        {
          address: "上海市普陀区金沙江路 1518 上海市普陀区金沙江路 1518"
        },
        {
          address: "上海市普陀区金沙江路 1518 上海市普陀区金沙江路 1518"
        }
      ],
      //input
      ruleForm2: {
        alt: "",
        highalt: "",
        min: "",
        lowmin: ""
      }
    };
  },
  methods: {
    // 提交
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.alerm_content {
  width: 91.14%;
  background: #212429 !important;
}
.alerm_Submit {
  color: white;
  margin-left: 2px;
  margin-top: 5px;
}
.alerm_content .alerm_Submit .alerm_form {
  border: 2px solid #2c323b;
  width: 65%;
  padding: 15px 0;
  padding-left: 35px;
}
/* select下拉框 */
.alerm_content .alerm_Submit .alerm_form .alerm_peidianshi .alerm_select {
  display: inline-block;
  margin-left: 10px;
}
.alerm_content .alerm_Submit .alerm_form .alerm_peidianshi .alermTie3 {
  font-size: 14px;
  font-weight: 600;
}
.alerm_content
  .alerm_Submit
  .alerm_form
  .alerm_peidianshi
  .alerm_select
  .alermAmend-el-select
  .el-input--suffix
  .el-input__inner {
  padding-right: 67px;
  height: 35px;
  width: 260px;
  border: 1px solid #535960;
  background: #212429;
  border-radius: 3px;
  color: #ffffff;
}
.alerm_content .alerm_Submit .alerm_form > div {
  margin-bottom: 26px;
}
/* 限制量 */
.alerm_content .alerm_Submit .alerm_form .alerm_con .alermTie2 {
  height: 18px;
  line-height: 18px;
  margin-right: 7px;
  font-size: 14px;
  font-weight: 600;
}
.alerm_content .alerm_Submit .alerm_form .alerm_con .alerm_radio {
  display: inline-block;
}
/* 单选框边框 */
.alerm_content .alerm_Submit .alerm_form .alerm_con .alerm_radio .is-bordered {
  padding: 10px 28px 0 27px;
  border-radius: 4px;
  border: 1px solid #535960;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 35px;
}
/* 选中边框颜色 */
.alerm_content
  .alerm_Submit
  .alerm_form
  .alerm_con
  .el-radio.is-bordered.is-checked {
  border-color: #409eff;
}
/* 圆点 */
.alerm_content
  .alerm_Submit
  .alerm_form
  .alerm_con
  .alerm_radio
  .el-radio__inner {
  background-color: #a0a9b4;
}
/* 表格 */
.alerm_content .alerm_Submit .alerm_form .alerm_tag .alerm-table {
  width: 91%;
  margin-left: 35px;
}
.alerm_content .alerm_Submit .alerm_form .alerm_tag .alerm-table .el-table {
  padding: 4px 0;
  background-color: #212429;
}
.alerm_content .alerm_Submit .alerm_form .alerm_tag .alerm-table thead tr th {
  color: #fff;
  background-color: #212429;
  font-weight: 400;
  border-bottom: none;
}
.alerm_content
  .alerm_Submit
  .alerm_form
  .alerm_tag
  .alerm-table
  .el-table
  tbody
  tr {
  background-color: #212429;
}
.alerm_content
  .alerm_Submit
  .alerm_form
  .alerm_tag
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
.alerm_content
  .alerm_Submit
  .alerm_form
  .alerm_tag
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
.alerm_content
  .alerm_Submit
  .alerm_form
  .alerm_tag
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
.alerm_content
  .alerm_Submit
  .alerm_form
  .alerm_tag
  .alerm-table
  .el-table--enable-row-hover
  .el-table__body
  tr:hover
  > td {
  background-color: #212429;
  color: #fff;
}
/* input输入框 */
.alerm_content
  .alerm_Submit
  .alerm_form
  .el-form-item
  .el-form-item__content
  .el-input {
  width: 35%;
}
.alerm_content .alerm_Submit .alerm_form .alerm_impose {
  margin-bottom: 16px;
  display: inline-block;
}
.alerm_content .alerm_Submit .alerm_form .alerm_impose .impose_hig {
  margin-left: -101px;
}
.alerm_content
  .alerm_Submit
  .alerm_form
  .alerm_impose
  .el-form-item
  .el-form-item__content
  .el-input {
  width: 80%;
}
/* 输入框 */
.alerm_content
  .alerm_Submit
  .alerm_form
  .alerm_impose
  .el-form-item
  .el-form-item__content
  .el-input
  .el-input__inner {
  height: 32px;
  font-size: 12px;
  width: 240px;
  border: 1px solid #535960;
  background: #212429;
  border-radius: 1px 3px 3px 1px;
  color: #ffffff;
}
.alerm_content
  .alerm_Submit
  .alerm_form
  .alerm_impose
  .alerm_hig
  .alerm_gaoxian {
  display: inline-block;
}
.alerm_content
  .alerm_Submit
  .alerm_form
  .alerm_impose
  .alerm_low
  .alerm_dixian {
  display: inline-block;
}
.alerm_xian {
  float: right;
}
/* 提交、重置 */
.alerm_btns {
  padding-top: 15px;
  margin-left: -103px;
}
.alerm_content
  .alerm_Submit
  .alerm_form
  .alerm_low
  .el-form-item
  .el-form-item__content
  .alerm_btns
  .el-button--primary {
  color: #fff;
  background: transparent;
  border-color: #535960;
}
.alerm_content
  .alerm_Submit
  .alerm_form
  .alerm_low
  .el-form-item
  .el-form-item__content
  .alerm_btns
  .el-button--default {
  color: #fff;
  background: transparent;
  border-color: #535960;
}
.alerm_content .alerm_Submit .alerm_form .alerm_low .el-form-item {
  margin-bottom: 0px;
}
</style>