<!-- 报警管理 -->
<template>
<div class="alermManage">
    <h3 class="headline">消息列表</h3>
    <div class="alermManage-con-box">
      <!-- 选项框 -->
        <div class="alermManage-con-top">
          <!-- 区域 -->
            <span class="con-select-name">区域</span>
            <el-select v-model="value" placeholder="全部">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
          <!-- 类别 -->
            <span class="con-select-name">类别</span>
            <el-select v-model="value2" placeholder="全部">
                <el-option
                    v-for="item in optiones"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <!-- 日期 -->
            <span class="con-select-name">起始日期</span>
            <el-date-picker
              v-model="value6"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>           
        </div>
      <!-- table表格 -->
        <div class="alermManage-table">
          <el-table
            ref="multipleTable"
            :data="tableData3.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            tooltip-effect="dark"
            stripe
            size="mini"
            style="width: 100%"
            :default-sort = "{prop: 'date', order: 'descending'}">
            <el-table-column align="center" type="selection" width="55"></el-table-column>
            <el-table-column align="center" prop="id" label="ID" width="60">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column align="center" prop="grade" label="等级" width="50"></el-table-column>
            <el-table-column align="center" prop="room" label="配电室" width="120" show-overflow-tooltip></el-table-column>
            <el-table-column align="center" prop="location" label="报警位置" width="350"></el-table-column>
            <el-table-column align="center" prop="times" label="报警时间" width="100"></el-table-column>
            <el-table-column align="center" prop="classes" label="类别" width="80"></el-table-column>
            <el-table-column align="center" prop="numvaule" label="数值" width="60"></el-table-column>
            <el-table-column align="center" prop="Threshold" label="阈值" width="60"></el-table-column>
            <el-table-column align="center" prop="affirm" label="确认人" width="80"></el-table-column>
            <el-table-column align="center" prop="affirmtime" label="确认时间" width="100"></el-table-column>
            <el-table-column align="center" prop="news" label="消息状态" width="100"></el-table-column>
            <el-table-column align="center" label="操作">
              <template slot-scope="scope">
              <el-button v-if="istag" @click='switchChange' type="text" size="small">标记</el-button>
              <el-button v-else="!istag" @click.native.prevent="deleteRow(scope.$index, tableData3)" type="text"  size="small">删除</el-button>
            </template>
            </el-table-column>
          </el-table>
        </div>
      <!-- 分页 -->
        <div class="blocks">
          <el-pagination
            :current-page.sync="currentPage"
            layout="prev, pager, next"
            :total="1000"
            background>
          </el-pagination>
        </div>

    </div>
</div>
</template>

<script>
export default {
    name: 'alermManage',
    data() {
      return {
        options: [{
            value: '选项1',
            label: '全部'
          }, {
            value: '选项2',
            label: '新工厂配电室'
          }, {
            value: '选项3',
            label: '工厂ipanel柜'
          }, {
            value: '选项4',
            label: '实验柜'
          }, {
            value: '选项5',
            label: '工厂智能化改造'
          }],
        optiones: [{
            value: '选项1',
            label: '全部'
          }, {
            value: '选项2',
            label: '过流(超过高限)'
          }, {
            value: '选项3',
            label: '过流(超过高高限)'
          }, {
            value: '选项4',
            label: '过流(超过高限)'
          }, {
            value: '选项5',
            label: '过流(超过高高限)'
          }, {
            value: '选项6',
            label: '欠电压(超过低限)'
          }, {
            value: '选项7',
            label: '欠电压(超过低低限)'
          }, {
            value: '选项8',
            label: '分合闸(分闸)'
      }],
        value: '',
        value2: '',
        value6: '',
        istag: true,
        // table表格
        tableData3: [{
              id: '12987122',
              grade: '故障',
              room: '工厂智能化改造',
              location:'1#回路低压仪表前半部分 1-4-3 一楼办公室 B相电流',
              times:'2019-02-25 03:30:55',
              classes:'过流(超过高限)',
              numvaule:'6453.60',
              Threshold:'133',
              affirm:'',
              affirmtime:'',
              news:''
            }],
        // multipleSelection: [],
        // 分页
        total:1000,//默认数据总数
        pagesize:20,//每页的数据条数
        currentPage:1,//默认开始页面
      }
    },
    methods: {
      tableRowClassName({row, rowIndex}) {
            if (rowIndex === 0) {
                return 'th';
            }
                return '';
        },
        // switchChange(){
        //     this.istag = !this.istag ;            
        // },
        created:function(){
            this.total=this.tableData.length;
        },
        current_change:function(currentPage){
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
      // handleSelectionChange(val) {
      //   this.multipleSelection = val;
      // },
      // 标记
      switchChange(){
            this.istag = !this.istag ;            
        },
        // 删除
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      // 分页
      // handleSizeChange(val) {
      //   console.log(`每页 ${val} 条`);
      // },
      // handleCurrentChange(val) {
      //   console.log(`当前页: ${val}`);
      // },
    }
}
</script>

<style>
/* .el-main{
    padding: 0px;
} */
/* 标题 */
.headline{
    width: 100%;
    text-align: center;
    color: white;
    font-size: 24px;   
    line-height: 66px;
    margin-top: -23px;
}
.alermManage-con-box {
    width: 99%;
    margin: 0 auto;
    border-top: 3px solid #25292e;
    padding-top: 12px;
}
/* ---搜索栏背景大小--- */
.alermManage-con-top {
    width: 99%;
    height: 60px;
    background: #303740;
}
.con-select-name {
    margin: 1.3% 0 auto 1.17%;
    color: #a0a9b4;
}
/* ---select选择器--- */
.el-input {
    margin: 19px 5px;
}
.el-input__inner {
    height: 25px;
    font-size: 12px;
    width: 152px;
    border: 1px solid #535960;
    background: #212429;
    border-radius: 3px;
}
/* input中小箭头 */
.el-input__icon {
    line-height: 25%;
    width: 42px;
}
/* 选择物品后边框颜色 */
.el-select .el-input__inner:focus {
    border-color: #535960;
}
/* ---日期--- */
.alermManage .alermManage-con-box .alermManage-con-top .el-date-editor .el-range__icon {
    line-height: 19px;
}
.alermManage .alermManage-con-box .alermManage-con-top .el-date-editor .el-range-input {
  background-color: #212429;
}  
.alermManage .alermManage-con-box .alermManage-con-top .el-date-editor .el-range-separator {
    line-height: 17px;
    color: #fff;
}
.alermManage .alermManage-con-box .alermManage-con-top .el-range-editor.el-input__inner {
  margin-left: 5px;
}
/* ---表格--- */
.alermManage .alermManage-con-box .alermManage-table {
  padding-top: 25px;
  width: 99%;
}
.alermManage .alermManage-con-box .el-table {
  padding: 4px 0;
  background-color: #212429;
}
.alermManage .alermManage-con-box .el-table thead tr th {
  color: #fff;
  font-weight: 400;
  background-color: #303740;
  border-bottom: none;
}
.alermManage .alermManage-con-box .el-table tbody tr {
  background-color: #303740;
}
.alermManage .alermManage-con-box .el-table tbody tr .el-input__inner {
  border: 1px solid #666;
  height: 35px;
  border-radius: 0px;
  background-color: #212429; 
}
.alermManage .alermManage-con-box .el-table tbody tr td {
  color: #a0a8b4;
  border-top: 12px solid #212429;
  border-bottom: none;
}
.alermManage .alermManage-con-box .el-table--striped .el-table__body tr.el-table__row--striped td{
  background: #303740;
}
/* 表格下的白线 */
.el-table::before{
  background-color: #212429;
}
.alermManage .alermManage-con-box .el-table--enable-row-hover .el-table__body tr:hover>td {
    background-color: #2a84f6;
    color: #fff;
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
.alermManage .alermManage-con-box .blocks .el-pagination .el-input__inner{
  border: 1px solid #666;
  border-radius: 0px;
  background-color: #212429;
  width: 100%;
}
/* 分页--箭头背景色 */
.alermManage .alermManage-con-box .blocks .el-pagination .btn-next, .el-pagination .btn-prev {
    background: center center no-repeat #212429;
    color: #ffffff;
}
.alermManage .alermManage-con-box .blocks .el-pagination .btn-prev, .el-pagination button:disabled {
    background-color: #212429;
    color: #ffffff;
}
.alermManage .alermManage-con-box .blocks .el-pagination .el-dialog, .el-pager li {
    background: #212429;
}
.alermManage .alermManage-con-box .blocks .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
  background: #212429; 
}
/* 分页--文字颜色 */
.alermManage .alermManage-con-box .blocks .el-pagination {
    color: #ffffff;
}

</style>
