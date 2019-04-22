
<template>
  <div class="reportConfig">
    <!-- 页面标题 -->
    <h3>报表配置列表</h3>
    <!-- 顶栏 -->
    <div class="reportConfig-hearder">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <!-- 一级菜单 -->
            <el-select class="reportConfig-el-select" v-model="value" placeholder="新工厂配电室">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>

            <!-- 二级菜单 -->
            <!-- <el-select class="reportConfig-el-select" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>-->
            <!-- 批量修改按钮 -->
            <el-button size="mini" type="primary" plain>批量修改</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 主体列表 -->
    <div class="reportConfig-table">
      <!-- 表头部分 -->
      <el-table
        ref="multipleTable"
        :data="reportData"
        style="width: 100%"
        size="mini"
        empty-text="数据为空"
        @selection-change="handleSelectionChange"
      >
        <el-table-column align="center" type="selection" width="55"></el-table-column>
        <el-table-column align="center" label="通讯管理机">
          <template slot-scope="scope">tag10{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column align="center" prop="tnm" label="tag标签"></el-table-column>
        <el-table-column align="center" prop="tds" label="描述" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" label="类型">
          <template slot-scope="scope">电压{{ scope.row.date }}</template>
        </el-table-column>

        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-select class="reportConfig-el-select" v-model="value" placeholder="新工厂配电室">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          </template>
        </el-table-column>

        
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "reportConfig",
  data() {
    return {
      options: [],
      value: "",
      reportData: [],
      multipleSelection: []
    };
  },
  watch: {
    multipleSelection: function() {
      let arr = [];
      for (let i in this.multipleSelection) {
        arr.push(this.multipleSelection[i].id);
      }
      console.log(arr);
    }
  },
  created() {
    this.$http.get("../../../static/b.json").then(res => {
      this.reportData = res.data.data;
    });
    this.$http.get("../../../static/c.json").then(res2 => {
      this.options = res2.data.options;
    });
  },
  methods: {
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

<style lang="less" scope>
@import "../../assets/css/reportConfig";
</style>
