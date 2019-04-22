<!-- 报警配置 -->
<template>
  <div class="alermConfig">
    <h3 class="headline">报警配置列表</h3>
    <div class="alermConfig-con-box">
      <div class="alermConfig-con-top">
        <!-- select下拉框 -->
        <el-row>
          <el-select
            class="alermConfig-el-select"
            v-model="value"
            placeholder="新工厂配电室"
            @change="onSelected"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select
            class="alermConfig-el-select"
            v-model="value2"
            placeholder="电压"
            @change="onSelected1"
          >
            <el-option
              v-for="item in optiones"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-button @click="buttonAdd" type="info" plain>添加</el-button>
          <el-button @click="buttonBatch" type="info" plain>批量修改</el-button>
        </el-row>
      </div>
    </div>

    <!-- table表格 -->
    <div class="alermConfig-table">
      <el-table
        ref="multipleTable"
        :data="tableData3.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        tooltip-effect="dark"
        stripe
        size="mini"
        style="width: 100%"
        :default-sort="{prop: 'date', order: 'descending'}"
      >
        <el-table-column align="center" type="selection" width="55"></el-table-column>
        <el-table-column align="center" prop="switchhouse" label="通讯管理机" width="120"></el-table-column>
        <el-table-column align="center" prop="tnm" label="tag标签" width="130"></el-table-column>
        <el-table-column align="center" prop="tds" label="描述" width="450" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" prop="vt" label="类型" width="100" :formatter="formatName"></el-table-column>
        <el-table-column align="center" prop="highlimit" label="高限" width="100"></el-table-column>
        <el-table-column align="center" prop="higherlimit" label="高高限" width="100"></el-table-column>
        <el-table-column align="center" prop="lowlimit" label="低限" width="100"></el-table-column>
        <el-table-column align="center" prop="lowerlimit" label="低低限" width="100"></el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.$index)" type="text" size="small">修改</el-button>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData3)"
              type="text"
              size="small"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="block">
      <el-pagination
        :current-page.sync="currentPage"
        layout="prev, pager, next"
        :total="1000"
        background
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { getAlarmConfingInfo } from "@/api/alarmConfig";
export default {
  name: "alermConfig",
  data() {
    return {
      optionValue: {
        "4": "电压",
        "5": "电流",
        "6": "开关量"
      },
      // 下拉框
      options: [
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
      optiones: [
        {
          value: "4",
          label: "电压"
        },
        {
          value: "5",
          label: "电流"
        },
        {
          value: "6",
          label: "开关量"
        }
      ],
      value: "新工厂配电室",
      value2: "4",
      // table表格
      tableData3: [
        {
          switchhouse: "", //通讯管理机
          tnm: "", //测点名称
          tds: "", //测点描述
          vt: "", //数据类型
          highlimit: "", //高限
          higherlimit: "", //高高限
          lowlimit: "", //低限
          lowerlimit: "" //低低限
        }
      ],
      //multipleSelection: [],
      // 分页
      total: 1000, //默认数据总数
      pagesize: 20, //每页的数据条数
      currentPage: 1 //默认开始页面
    };
  },
  mounted() {
    this.onSelected();
  },
  methods: {
    formatName(row) {
      return this.optionValue[row.vt];
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 0) {
        return "th";
      }
      return "";
    },
    onSelected(val) {
      if (null != val && undefined != val) {
        this.value = val;
      }
      return new Promise((resolve, reject) => {
        getAlarmConfingInfo(this.value, this.value2)
          .then(response => {
            this.tableData3 = response.data;
            resolve();
          })
          .catch(error => {
            reject("设备加载出错" + error);
          });
      });
    },
    onSelected1(val) {
      if (null != val && undefined != val) {
        this.value2 = val;
      }

      return new Promise((resolve, reject) => {
        getAlarmConfingInfo(this.value, this.value2)
          .then(response => {
            this.tableData3 = response.data;
            resolve();
          })
          .catch(error => {
            reject("设备加载出错" + error);
          });
      });
    },
    created: function() {
      this.total = this.tableData.length;
    },
    current_change: function(currentPage) {
      this.currentPage = currentPage;
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
    // 修改
    handleClick(row) {
      this.$router.push({ path: "/alermAmend" });
      console.log(row);
    },
    // 批量修改
    buttonBatch() {
      this.$router.push({ path: "/alermBatch" });
    },
    // 删除
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    // 添加
    buttonAdd() {
      this.$router.push({ path: "/alermAdd" });
    }
  }
};
</script>

<style>
/* 表格---滚动条 */
.el-table--scrollable-x .el-table__body-wrapper {
  overflow-x: hidden;
}

/* ---标题--- */
.alermConfig .headline {
  width: 100%;
  text-align: center;
  color: white;
  font-size: 24px;
  line-height: 66px;
}
.alermConfig .alermConfig-con-box {
  width: 99%;
  /* margin: 0 auto; */
  border-top: 3px solid #25292e;
  padding-top: 12px;
}
/* ---搜索栏背景大小--- */
.alermConfig .alermConfig-con-box .alermConfig-con-top {
  width: 100%;
  height: 60px;
  background: #303740;
}
.alermConfig .alermConfig-con-box .alermConfig-con-top .alermConfig-el-select {
  width: 255px;
}
/* ---select选择器--- */
.alermConfig
  .alermConfig-con-box
  .alermConfig-con-top
  .alermConfig-el-select
  .el-input {
  margin: 17px 7px;
}
.alermConfig
  .alermConfig-con-box
  .alermConfig-con-top
  .alermConfig-el-select
  .el-input
  .el-input__inner {
  height: 30px;
  font-size: 12px;
  width: 240px;
  border: 1px solid #535960;
  background: #212429;
  border-radius: 3px;
  color: #ffffff;
}
/* 选择物品后边框颜色 */
.alermConfig
  .alermConfig-con-box
  .alermConfig-con-top
  .alermConfig-el-select
  .el-input
  .el-select
  .el-input__inner:focus {
  border-color: #535960;
}
/* input中小箭头 */
.alermConfig
  .alermConfig-con-box
  .alermConfig-con-top
  .alermConfig-el-select
  .el-input
  .el-input__icon {
  line-height: 25%;
  width: 42px;
}
/* ---按钮--添加--- */
.alermConfig .alermConfig-con-box .alermConfig-con-top .el-button {
  padding: 3px 14px;
  font-size: 14px;
  border-radius: 3px;
  /* float: right; */
  /* margin: 19px 155px; */
  margin-right: -510px;
  margin-left: 550px;
}
.alermConfig
  .alermConfig-con-box
  .alermConfig-con-top
  .el-button--info.is-plain {
  color: #ffffff;
  background: transparent;
  border-color: #909399;
}
/* ---表格--- */
.alermConfig .alermConfig-table {
  padding-top: 25px;
  width: 99%;
}
.alermConfig .alermConfig-table .el-table {
  padding: 3px 64;
  background-color: #212429;
}
.alermConfig .alermConfig-table .el-table thead tr th {
  color: #fff;
  font-weight: 400;
  background-color: #303740;
  border-bottom: none;
}
.alermConfig .alermConfig-table .el-table tbody tr {
  background-color: #303740;
}
.alermConfig .alermConfig-table .el-table tbody tr .el-input__inner {
  border: 1px solid #666;
  height: 35px;
  border-radius: 0px;
  background-color: #212429;
}
.alermConfig
  .alermConfig-table
  .el-table--striped
  .el-table__body
  tr.el-table__row--striped
  td {
  background: #303740;
}
.alermConfig .alermConfig-table .el-table tbody tr td {
  color: #a0a8b4;
  border-top: 12px solid #212429;
  border-bottom: none;
}
/* 表格下的白线 */
.el-table::before {
  background-color: #212429;
}
.alermConfig
  .alermConfig-table
  .el-table--enable-row-hover
  .el-table__body
  tr:hover
  > td {
  background-color: #2a84f6;
  color: #fff;
}

/* ---勾选框--- */
.alermConfig
  .alermConfig-table
  .el-table
  thead
  tr
  th
  .el-table-column--selection
  .cell {
  padding-left: 23px;
  padding-right: 16px;
}
.alermConfig .alermConfig-table .el-table thead tr th .el-table .cell {
  line-height: 13px;
}
/* ---分页--- */
.el-pagination button:disabled {
  color: #c0c4cc;
  /* background-color: #fff; */
  cursor: not-allowed;
}
.el-pagination {
  padding-right: 14px;
  padding-top: 25px;
  float: right;
}
/* 分页--每页显示条数 */
.alermConfig .block .el-pagination .el-input__inner {
  border: 1px solid #666;
  border-radius: 0px;
  background-color: #212429;
  width: 100%;
}
/* 分页--箭头背景色 */
.alermConfig .block .el-pagination .btn-next,
.el-pagination .btn-prev {
  background: center center no-repeat #212429;
  color: #ffffff;
}
.alermConfig .block .el-pagination .btn-prev,
.el-pagination button:disabled {
  background-color: #212429;
  color: #ffffff;
}
/* .alermConfig .block .el-pagination .el-dialog, .el-pager li {
    background: #212429;
} */
.alermConfig .block .el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  background: #212429;
}
/* 分页--文字颜色 */
.alermConfig .block .el-pagination {
  color: #ffffff;
}
</style>
