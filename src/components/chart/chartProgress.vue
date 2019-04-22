<template>
  <div>
    <div class="progress-banner">
      <!-- 第一梯 -->
      <div class="banner-first">
        <div class="circle">
          <p>573.6kW</p>
        </div>
        <div class="circle">
          <p>211.4kVar</p>
        </div>
        <div class="circle">
          <p>14.63℃</p>
        </div>
        <div class="circle">
          <p>34.13%</p>
        </div>
      </div>
      <!-- 第二梯队 -->
      <div class="banner-second">
        <div class="second-p">有功功率</div>
        <div class="second-p">无功功率</div>
        <div class="second-p">环境温度</div>
        <div class="second-p">有功功率</div>
      </div>
      <!-- 第三梯度 -->
      <div class="banner-third">
        <div class="third-img">
          <img src="../../../static/images/chart/elec_meter.png" alt>
        </div>
        <div class="third-img">
          <img src="../../../static/images/chart/camera.png" alt>
        </div>
        <div class="third-img">
          <img src="../../../static/images/chart/fire.png" alt>
        </div>
        <div class="third-img">
          <img src="../../../static/images/chart/wind.png" alt>
        </div>
        <div class="third-img">
          <img src="../../../static/images/chart/light.png" alt>
        </div>
      </div>
      <!-- 第四梯度 -->
      <div class="banner-forth">
        <div class="forth-img">
          <img src="../../../static/images/chart/env.png" alt>
        </div>
        <div class="forth-img">
          <img src="../../../static/images/chart/immerse.png" alt>
        </div>
        <div class="forth-img">
          <img src="../../../static/images/chart/water_meter_gray.png" alt>
        </div>
        <div class="forth-img">
          <img src="../../../static/images/chart/gas_meter_gray.png" alt>
        </div>
        <div class="forth-img">
          <img src="../../../static/images/chart/door_gray.png" alt>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
@import "chartProgress.less";
</style>
