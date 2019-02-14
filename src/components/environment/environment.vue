<!-- 火灾监控页面 -->
<template>
<div class="environment-con left clear" style="height:882.83px;">   
    <!-- 左侧图片 -->
    <div class="environment-img-wrap left">
        <div class="environment-img-box">
            <img src="../../../static/images/huanjing/environment_1.png" alt="" class="environment-con-img">
        </div>
    </div>
    <!-- 右侧内容 -->
    <div class="environment-item-wrap left">
        <!-- 1.  2#变压侧器温湿度 -->
        <div class="environment-item-con-wrap left">
            <div class="environment-img-box">
                <img src="../../../static/images/huanjing/environment_2.png" alt="" class="environment-con-img">
                <h3 class="environment-title">2#变压侧器温湿度</h3>
                <p class="enviroment-num">1</p>
                <p class="environment-item clear environment-item-temperature">
                    <span class="environment-item-title left">温度：</span>
                    <span id="c2_b1_t" class="environment-item-value environment-item-value-temperature left">16.2</span>℃
                </p>
                <p class="environment-item clear environment-item-humidity">
                    <span class="environment-item-title left">湿度：</span>
                    <span id="c2_b1_s" class="environment-item-value environment-item-value-temperature left" style="color: rgb(255, 255, 0);">35.6</span>%
                </p>
            </div>
        </div>
        <!-- 2.  高压侧温湿度 -->
        <div class="environment-item-con-wrap left">
            <div class="environment-img-box">
                <img src="../../../static/images/huanjing/environment_2.png" alt="" class="environment-con-img">
                <h3 class="environment-title">高压侧温湿度</h3>
                <p class="enviroment-num">2</p>
                <p class="environment-item clear environment-item-temperature">
                    <span class="environment-item-title left">温度：</span>
                    <span id="c2_b2_t" class="environment-item-value environment-item-value-temperature left" style="color: rgb(255, 255, 0);">14.7</span>℃
                </p>
                <p class="environment-item clear environment-item-humidity">
                    <span class="environment-item-title left">湿度：</span>
                    <span id="c2_b2_s" class="environment-item-value environment-item-value-temperature left">39.3</span>%
                </p>
            </div>
        </div>
        <!-- 3.  1#变压器侧温湿度 -->
        <div class="environment-item-con-wrap left" style="margin-right:0;">
            <div class="environment-img-box">
                <img src="../../../static/images/huanjing/environment_2.png" alt="" class="environment-con-img">
                <h3 class="environment-title">1#变压器侧温湿度</h3>
                <p class="enviroment-num">3</p>
                <p class="environment-item clear environment-item-temperature">
                    <span class="environment-item-title left">温度：</span>
                    <span id="c2_b3_t" class="environment-item-value environment-item-value-temperature left" style="color: rgb(255, 255, 0);">18.1</span>℃
                </p>
                <p class="environment-item clear environment-item-humidity">
                    <span class="environment-item-title left">湿度：</span>
                    <span id="c2_b3_s" class="environment-item-value environment-item-value-temperature left">31.6</span>%
                </p>
            </div>
        </div>
        <!-- 4.  1#变压器侧浸水 -->
        <div class="environment-item-con-wrap left">
            <div class="environment-img-box">
                <img src="../../../static/images/huanjing/environment_3.png" alt="" class="environment-con-img">
                <img id="c3_b1_di" src="../../../static/images/huanjing/environment-green.png" alt="" class="environment-status">
                <h3 class="environment-title">1#变压器侧浸水</h3>
                <p class="enviroment-num">4</p>
            </div>
        </div>
        <div class="environment-item-con-wrap left">
            <div class="environment-img-box">
                <img src="../../../static/images/huanjing/environment_3.png" alt="" class="environment-con-img">
                <img id="c3_b2_di" src="../../../static/images/huanjing/environment-green.png" alt="" class="environment-status">
                <h3 class="environment-title">2#变压器侧浸水</h3>
                <p class="enviroment-num">5</p>
            </div>
        </div>
        <div class="environment-item-con-wrap left" style="margin-right:0;">
        </div>
        <!-- 5.  2#空调 -->
        <div class="environment-item-con-wrap left">
            <div class="environment-conditioner-box">
                <img src="../../../static/images/huanjing/environment_4.png" alt="" class="environment-con-img">
                <h3 class="environment-title">2#空调</h3>
                <p class="enviroment-num">6</p>
                <ul class="environment-conditioner-list">
                    <li class="clear">
                        <span class="left environment-conditioner-title">空调状态：</span>
                        <span id="c8_b2_ia_status" class="environment-conditioner-status environment-status-green left"></span>&nbsp;<label>(关)</label>
                    </li>
                    <li class="clear">
                        <span class="left environment-conditioner-title">空调控制：</span>
                        <button class="left environment-conditioner-btn-on" tid="c8_b2_do3">开</button>
                        <button class="left environment-conditioner-btn" tid="c8_b2_do3">关</button>
                    </li>
                    <li class="clear">
                        <span class="left environment-conditioner-title">运行电流：</span>
                        <span id="c8_b2_ia" class="left environment-conditioner-value">0</span>A
                    </li>
                    <li class="clear">
                        <span class="left environment-conditioner-title">送风口温度：</span>
                        <span id="c8_b2_t1" class="left environment-conditioner-value" style="color: rgb(255, 255, 0);">17.65</span>℃
                    </li>
                    <li class="clear">
                        <span class="left environment-conditioner-title">室温温度：</span>
                        <span id="c8_b2_t2" class="left environment-conditioner-value" style="color: rgb(255, 255, 0);">17.45</span>℃
                    </li>
                    <li class="clear environment-model">
                        <span class="left environment-conditioner-title">制冷模式：</span>
                        <input class="left environment-conditioner-input cold-input" tid="c8_b2_do1" value="0">℃
                        <div class="left environment-pencil-wrap">
                            <div class="environment-pencil-box">
                                <img src="../../../static/images/huanjing/environment-pencil.png" alt="" class="environment-pencil">
                            </div>
                        </div>
                    </li>
                    <li class="clear environment-model">
                        <span class="left environment-conditioner-title">制热模式：</span>
                        <input class="left environment-conditioner-input cold-input" tid="c8_b2_do2" value="0">℃
                        <div class="left environment-pencil-wrap">
                            <div class="environment-pencil-box">
                                <img src="../../../static/images/huanjing/environment-pencil.png" alt="" class="environment-pencil">
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
        <!-- 6.  1#空调 -->
        <div class="environment-item-con-wrap left">
            <div class="environment-conditioner-box">
                <img src="../../../static/images/huanjing/environment_4.png" alt="" class="environment-con-img">
                <h3 class="environment-title">1#空调</h3>
                <p class="enviroment-num">7</p>
                <ul class="environment-conditioner-list">
                    <li class="clear">
                        <span class="left environment-conditioner-title">空调状态：</span>
                        <span id="c8_b1_ia_status" class="environment-conditioner-status environment-status-green left"></span>&nbsp;<label>(关)</label>
                    </li>
                    <li class="clear">
                        <span class="left environment-conditioner-title">空调控制：</span>
                        <button class="left environment-conditioner-btn-on" tid="c8_b1_do3">开</button>
                        <button class="left environment-conditioner-btn" tid="c8_b1_do3">关</button>
                    </li>
                    <li class="clear">
                        <span class="left environment-conditioner-title">运行电流：</span>
                        <span id="c8_b1_ia" class="left environment-conditioner-value">0</span>A
                    </li>
                    <li class="clear">
                        <span class="left environment-conditioner-title">送风口温度：</span>
                        <span id="c8_b1_t1" class="left environment-conditioner-value" style="color: rgb(255, 255, 0);">18.22</span>℃
                    </li>
                    <li class="clear">
                        <span class="left environment-conditioner-title">室温温度：</span>
                        <span id="c8_b1_t2" class="left environment-conditioner-value" style="color: rgb(255, 255, 0);">13.36</span>℃
                    </li>
                    <li class="clear environment-model">
                        <span class="left environment-conditioner-title">制冷模式：</span>
                        <input class="left environment-conditioner-input cold-input" tid="c8_b1_do1" value="0">℃
                        <div class="left environment-pencil-wrap">
                            <div class="environment-pencil-box">
                                <img src="../../../static/images/huanjing/environment-pencil.png" alt="" class="environment-pencil">
                            </div>
                        </div>
                    </li>
                    <li class="clear environment-model">
                        <span class="left environment-conditioner-title">制热模式：</span>
                        <input class="left environment-conditioner-input cold-input" tid="c8_b1_do2" value="0">℃
                        <div class="left environment-pencil-wrap">
                            <div class="environment-pencil-box">
                                <img src="../../../static/images/huanjing/environment-pencil.png" alt="" class="environment-pencil">
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
   
}
</script>

<style>

</style>
