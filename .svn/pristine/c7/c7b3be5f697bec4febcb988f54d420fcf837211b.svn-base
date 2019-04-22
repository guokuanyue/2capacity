<template>
  <div class="reportConfig">
    <!-- 顶栏 -->
    <div class="reportConfig-hearder">
      <el-row>
        <el-col :span="12">
          <!-- 页面标题 -->
          <h3>设备配置列表</h3>
        </el-col>
        <!-- 层联选择 -->
        <el-col :span="12">
          <el-cascader
            @change="handleChange"
            class="reportConfig-el-cascader"
            :options="optionsWithDisabled"
          ></el-cascader>
          <button class="reportConfig-el-button" @click="handleEdit">保存</button>
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
        <el-table-column align="center" prop="bnm" label="通讯管理机"></el-table-column>
        <el-table-column align="center" prop="enm" label="名称"></el-table-column>
        <el-table-column align="center" prop="eds" label="描述"></el-table-column>
        <el-table-column align="center" prop="switchhouse" label="一级分类"></el-table-column>
        <el-table-column align="center" prop="category" label="二级分类"></el-table-column>
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

      checkedRow: [], //选中行
      checkedSelect: [], //选中下拉框
      currrentRoleId: "Root" //用户id
    };
  },
  created() {
    // 列表数据
    this.getTableList();
  },
  methods: {
    //请求列表
    getTableList() {
      this.reportData.splice(0); //this.reportData.length = 0
      let obj = { eid: this.currrentRoleId }; //动态设置请求id
      //  判断接口案例
      this.$http.get("set/getUrl").then(res => {
        console.log("res1", res);

        let url = "";
        if (res.data.data == 0) {
          url = "set/equipmentListByEid";
        } else if (res.data.data == 1) {
          console.log("res.data.data", res.data.data);

          url = "set/equipmentList";
        }
        this.$http
          // 获取列表
          // .get(url, { params: obj })
          .get(url)
          .then(res => {
            if (res.data.code == 0) {
              console.log("res2", res);
              this.reportData = res.data.data;
            } else {
              alert("获取列表失败");
            }
          });
      });
    },

    // 级联选择器change事件
    handleChange(value) {
      console.log(value);
      //把分类赋值checkedSelect
      this.checkedSelect = value;
    },

    //点击保存提交
    handleEdit(h) {
      //判断是否选择了数据
      if (this.checkedRow.length == 0) {
        // alert("你没有选择数据");
        this.$alert("请先勾选数据", {
          confirmButtonText: "确定"
        });
        return false;
      }
      let sendData = []; //要发送的数据
      //判断是否选择了分类
      if (this.checkedSelect.length !== 0) {
        let arr = JSON.parse(JSON.stringify(this.checkedRow));
        arr.forEach(item => {
          //把分类信息追加到要上传的数据中的每个数组对象里面去
          item.switchhouse = this.checkedSelect[0];
          item.category = this.checkedSelect[1];
          sendData.push(item);
        });
      } else {
        alert("请选择分类");
      }

      console.log(sendData, "sendData");
      //上传数据、分类
      this.$http
        .post("set/saveSet", sendData)
        .then(res => {
          console.log(res, "res");
          //选中数据、选择分类、返回状态码为0都满足
          if (
            res.data.code == 0 &&
            this.checkedSelect.length !== 0 &&
            this.checkedRow.length !== 0
          ) {
            // 保存后重新请求界面
            this.getTableList();
            alert("保存成功");
          }
        })
        .catch(err => {
          alert("保存失败");
        });
    },
    // 创建方法用于筛选对象所需要的属性
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
    // 获取选中数据
    selects(selection) {
      var resArr = this.helpFun(selection, [
        "bnm",
        "bsn",
        "eds",
        "enm",
        "tds",
        "tnm",
        "vt"
      ]);
      console.log(resArr); //得到列表选中数据
      this.checkedRow = resArr;
    }
  }
};
</script>

<style lang="less">
@import "../../assets/css/reportConfig";
</style>
