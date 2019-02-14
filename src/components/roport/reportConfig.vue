<template>
  <div class="reportConfig">
    <!-- 顶栏 -->
    <div class="reportConfig-hearder">
      <el-row>
        <el-col :span="12">
          <!-- 页面标题 -->
          <h3>报表配置列表</h3>
        </el-col>
        <!-- 批量修改按钮 -->
        <el-col :span="12">
          <el-cascader
            @change="handleChange"
            class="reportConfig-el-cascader"
            :options="optionsWithDisabled"
          ></el-cascader>
          <el-button class="reportConfig-el-button" size="mini" @click="handleEdit">保存</el-button>

          <!-- <el-button size="mini" type="primary" plain>批量修改</el-button> -->
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
        @select="selects"
      >
        <el-table-column align="center" type="selection" width="55"></el-table-column>
        <el-table-column align="center" prop="bnm" label="网关名称"></el-table-column>
        <el-table-column align="center" prop="bsn" label="网关名称"></el-table-column>
        <el-table-column align="center" prop="code" label="类型子码"></el-table-column>
        <el-table-column align="center" prop="dt" :show-overflow-tooltip="true" label="测点类型"></el-table-column>
        <el-table-column align="center" prop="eds" label="设备描述"></el-table-column>
        <el-table-column align="center" prop="tds" label="测点描述"></el-table-column>
        <el-table-column align="center" prop="tnm" label="名称"></el-table-column>
        <el-table-column align="center" prop="ts" label="时间戳" show-overflow-tooltip></el-table-column><el-table-column align="center" prop="uid" lab" show-overflow-tooltip><el="UID/el-table-column>
        <el-table-column align="center" prop="val" label="实时值" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" prop="vq" label="质量戳" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" prop="vt" label="类型" show-overflow-tooltip></el-table-column>
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
      optionsWithDisabled: [
        {
          value: "新工厂配电室",
          label: "新工厂配电室",
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
        },
        {
          value: "工厂ipanel柜",
          label: "工厂ipanel柜",
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
      multipleSelection: [],
      checkedRow: [], //选中行
      checkedSelect: [], //选中下拉框
      currrentRoleId: "Root"
    };
  },
  watch: {
    multipleSelection: function() {
      let arr = [];
      for (let i in this.multipleSelection) {
        arr.push(this.multipleSelection[i].id);
      }
      // console.log(arr);
    }
  },
  created() {
    this.getTableList();
  },
  methods: {
    getTableList() {
      //请求列表
      this.reportData.splice(0); //this.reportData.length = 0
      let obj = { eid: this.currrentRoleId };
      this.$http
        .get("netgate-server/report/pointList", { params: obj })
        .then(res => {
          if (res.data.code == 0) {
            this.reportData = JSON.parse(JSON.parse(res.data.data[0]).data);
          } else {
            alert("获取列表失败");
          }
        });
    },
    // 级联选择器change事件
    handleChange(value) {
      console.log(value);
      this.checkedSelect = value;
    },

    //点击保存提交
    handleEdit(h) {
      if (this.checkedRow.length == 0) {
        alert("你没有选择数据");
        return false;
      }
      let sendData = [];
      if (this.checkedSelect.length !== 0) {
        let arr = JSON.parse(JSON.stringify(this.checkedRow));
        arr.forEach(item => {
          item.switchhouse = this.checkedSelect[0];
          item.type = this.checkedSelect[1];
          sendData.push(item);
        });
      } else {
        alert("请选择分类");
      }

      console.log(sendData, "sendData");
      this.$http
        .post("netgate-server/report/epPointList", sendData)
        .then(res => {
          console.log(res, "res");
          if (
            res.data.code == 0 &&
            this.checkedSelect.length !== 0 &&
            this.checkedRow.length !== 0
          ) {
            this.getTableList();
            alert("保存成功");
          }
        })
        .catch(err => {
          alert("保存失败");
        });
    },
    // 获取选中数据
    helpFun(arr, attributeArr) {
      var result = [];
      arr.forEach(item => {
        var obj = {};
        attributeArr.forEach(el => {
          obj[el] = item[el];
        });
        result.push(obj);
      });
      return result;
    },

    selects(selection) {
      var resArr = this.helpFun(selection, ["bnm", "bsn", "eds", "tds", "tnm"]);
      console.log(resArr); //得到想要数组传给后台
      this.checkedRow = resArr;
    }
  }
};
</script>

<style lang="less">
@import "../../assets/css/reportConfig";
</style>
