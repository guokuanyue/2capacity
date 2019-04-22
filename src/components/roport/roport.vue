<!-- 报表打印页面 -->
<template>
  <div class="report">
    <!-- 头部标题 -->
    <p class="reporting-title">累积量报表</p>
    <!-- 累积量报表四盒子 -->
    <div class="reporting-four-wrap">
      <el-row :gutter="20">
        <el-col :span="6" class="el-col">
          <!-- 日累积量报表 -->
          <div class="reporting-con-box">
            <p class="reporting-con-box-title">日累积量报表</p>
            <div class="reporting-con-box-wrap">
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item v-model="labelPosition" label="活动区域" prop="region">
                  <el-col :span="24">
                    <el-select
                      size="50"
                      label="left"
                      v-model="ruleForm.region"
                      placeholder="请选择活动区域"
                    >
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-col>
                </el-form-item>
                <el-form-item label="起始日期：" required>
                  <el-col :span="24">
                    <el-form-item prop="date1">
                      <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="ruleForm.date1"
                        style="width: 100%;"
                      ></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item label="结束日期：" required>
                  <el-col :span="24">
                    <el-form-item prop="date2">
                      <el-date-picker
                        type="date"
                        placeholder="请选择"
                        v-model="ruleForm.date2"
                        style="width: 100%;"
                      ></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                  <el-button type="primary" @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="reporting-con-box">
            <p class="reporting-con-box-title">日累积量报表</p>
            <div class="reporting-con-box-wrap">
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item v-model="labelPosition" label="活动区域" prop="region">
                  <el-col :span="24">
                    <el-select
                      size="50"
                      label="left"
                      v-model="ruleForm.region"
                      placeholder="请选择活动区域"
                    >
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-col>
                </el-form-item>
                <el-form-item label="起始日期：" required>
                  <el-col :span="24">
                    <el-form-item prop="date1">
                      <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="ruleForm.date1"
                        style="width: 100%;"
                      ></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item label="结束日期：" required>
                  <el-col :span="24">
                    <el-form-item prop="date2">
                      <el-date-picker
                        type="date"
                        placeholder="请选择"
                        v-model="ruleForm.date2"
                        style="width: 100%;"
                      ></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                  <el-button type="primary" @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="reporting-con-box">
            <p class="reporting-con-box-title">日累积量报表</p>
            <div class="reporting-con-box-wrap">
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item v-model="labelPosition" label="活动区域" prop="region">
                  <el-col :span="24">
                    <el-select
                      size="50"
                      label="left"
                      v-model="ruleForm.region"
                      placeholder="请选择活动区域"
                    >
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-col>
                </el-form-item>
                <el-form-item label="起始日期：" required>
                  <el-col :span="24">
                    <el-form-item prop="date1">
                      <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="ruleForm.date1"
                        style="width: 100%;"
                      ></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item label="结束日期：" required>
                  <el-col :span="24">
                    <el-form-item prop="date2">
                      <el-date-picker
                        type="date"
                        placeholder="请选择"
                        v-model="ruleForm.date2"
                        style="width: 100%;"
                      ></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                  <el-button type="primary" @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="reporting-con-box">
            <p class="reporting-con-box-title">日累积量报表</p>
            <div class="reporting-con-box-wrap">
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item v-model="labelPosition" label="活动区域" prop="region">
                  <el-col :span="24">
                    <el-select
                      size="50"
                      label="left"
                      v-model="ruleForm.region"
                      placeholder="请选择活动区域"
                    >
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-col>
                </el-form-item>
                <el-form-item label="起始日期：" required>
                  <el-col :span="24">
                    <el-form-item prop="date1">
                      <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="ruleForm.date1"
                        style="width: 100%;"
                      ></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item label="结束日期：" required>
                  <el-col :span="24">
                    <el-form-item prop="date2">
                      <el-date-picker
                        type="date"
                        placeholder="请选择"
                        v-model="ruleForm.date2"
                        style="width: 100%;"
                      ></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                  <el-button type="primary" @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 头部二标题 -->
    <p class="reporting-second-title">分时报表</p>
    <!-- 累积量报表三盒子 -->
    <div class="reporting-four-wrap">
      <el-row :gutter="20">
        <el-col :span="6" class="el-col">
          <!-- 日累积量报表 -->
          <div class="reporting-con-box">
            <p class="reporting-con-box-title">日累积量报表</p>
            <div class="reporting-con-box-wrap">
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item v-model="labelPosition" label="活动区域" prop="region">
                  <el-col :span="24">
                    <el-select
                      size="50"
                      label="left"
                      v-model="ruleForm.region"
                      placeholder="请选择活动区域"
                    >
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-col>
                </el-form-item>
                <el-form-item label="起始日期：" required>
                  <el-col :span="24">
                    <el-form-item prop="date1">
                      <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="ruleForm.date1"
                        style="width: 100%;"
                      ></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item label="结束日期：" required>
                  <el-col :span="24">
                    <el-form-item prop="date2">
                      <el-date-picker
                        type="date"
                        placeholder="请选择"
                        v-model="ruleForm.date2"
                        style="width: 100%;"
                      ></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                  <el-button type="primary" @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="reporting-con-box">
            <p class="reporting-con-box-title">日累积量报表</p>
            <div class="reporting-con-box-wrap">
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item v-model="labelPosition" label="活动区域" prop="region">
                  <el-col :span="24">
                    <el-select
                      size="50"
                      label="left"
                      v-model="ruleForm.region"
                      placeholder="请选择活动区域"
                    >
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-col>
                </el-form-item>
                <el-form-item label="起始日期：" required>
                  <el-col :span="24">
                    <el-form-item prop="date1">
                      <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="ruleForm.date1"
                        style="width: 100%;"
                      ></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item label="结束日期：" required>
                  <el-col :span="24">
                    <el-form-item prop="date2">
                      <el-date-picker
                        type="date"
                        placeholder="请选择"
                        v-model="ruleForm.date2"
                        style="width: 100%;"
                      ></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                  <el-button type="primary" @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="reporting-con-box">
            <p class="reporting-con-box-title">日累积量报表</p>
            <div class="reporting-con-box-wrap">
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item v-model="labelPosition" label="活动区域" prop="region">
                  <el-col :span="24">
                    <el-select
                      size="50"
                      label="left"
                      v-model="ruleForm.region"
                      placeholder="请选择活动区域"
                    >
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-col>
                </el-form-item>
                <el-form-item label="起始日期：" required>
                  <el-col :span="24">
                    <el-form-item prop="date1">
                      <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="ruleForm.date1"
                        style="width: 100%;"
                      ></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item label="结束日期：" required>
                  <el-col :span="24">
                    <el-form-item prop="date2">
                      <el-date-picker
                        type="date"
                        placeholder="请选择"
                        v-model="ruleForm.date2"
                        style="width: 100%;"
                      ></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                  <el-button type="primary" @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="reporting-con-box">
            <p class="reporting-con-box-title">日累积量报表</p>
            <div class="reporting-con-box-wrap">
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item v-model="labelPosition" label="活动区域" prop="region">
                  <el-col :span="24">
                    <el-select
                      size="50"
                      label="left"
                      v-model="ruleForm.region"
                      placeholder="请选择活动区域"
                    >
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-col>
                </el-form-item>
                <el-form-item label="起始日期：" required>
                  <el-col :span="24">
                    <el-form-item prop="date1">
                      <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="ruleForm.date1"
                        style="width: 100%;"
                      ></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item label="结束日期：" required>
                  <el-col :span="24">
                    <el-form-item prop="date2">
                      <el-date-picker
                        type="date"
                        placeholder="请选择"
                        v-model="ruleForm.date2"
                        style="width: 100%;"
                      ></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                  <el-button type="primary" @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "roport",
  data() {
    return {
      labelPosition:"left",
      options: [],
      value: "",
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        labelPosition: "left"
      },
      rules: {
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ]
      }
    };
  },
  created() {
    this.$http.get("../../../static/c.json").then(res2 => {
      this.options = res2.data.options;
    });
  },
  methods: {
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
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/report";
</style>

<style>
/* 全局样式 */
.el-input__inner {
  border: 1px solid #666;
  height: 35px;
  background-color: #212429;
  width: 100%;
}
.el-input--suffix .el-input__inner {
  padding-right: 100px;
}
.el-form-item__label {
  color: #c0c4cc;
}
</style>

