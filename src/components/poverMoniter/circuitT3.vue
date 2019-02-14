<!-- 电力监控-高压配电室 -->
<template>
<div class="left dianlu1 newDL1" style="width:1650px;min-height:1810px;;">
    <div class="left dianlu1 newDL1" style="height:985px; padding-top:90px;">
        <!-- 标题 -->
        <div style="width:1776px;">                
            <ul class="clearfix lin5Tits lin6Tits" style="margin-top:60px">
                <li style="width:80px; margin-right:120px;">10kv 进线柜</li>
                <li style="width:149px; margin-right:50px;">计量柜</li>
                <li style="width:81px; margin-right:180px;">PT柜</li>
                <li style="width:81px; margin-right:220px;">1# 出线柜</li>
                <li style="width:81px; margin-right:160px;">2# 出线柜</li>
                <li>3# 出线柜</li>                    
            </ul>
        </div>
        <!-- 进线柜(kV) -->
        <div title="进线柜 电压曲线" class="left dataColumn1 newDianLu1 line5 analysis_total_line cursor_pointer monitorItim">
            <img src="../../../static/images/T3/line7OneRow1.png" alt="">
            <span class="OC7 newDianLu1C line7OC1"></span>
            <ul class="P1Data data_left analysis">
                <li>进线柜(kV)</li>
                <li>
                    <label class="data_title">Uab:</label>
                    <label id="a1_b13_uab">10.3</label>
                </li>
                <li>
                    <label class="data_title">Ubc:</label>
                    <label id="a1_b13_ubc">10.3</label>
                </li>
                <li>
                    <label class="data_title">Uca:</label>
                    <label id="a1_b13_uca">10.4</label>
                </li>
                <li>
                    <label class="data_title">Ia:</label>
                    <label id="a1_b13_ia">37.9</label>
                    </li>
                <li>
                    <label class="data_title">Ib:</label>
                    <label id="a1_b13_ib">36.4</label>
                </li>
                <li>
                    <label class="data_title">Ic:</label>
                    <label id="a1_b13_ic">35.7</label>
                </li>
                <li>
                    <label class="data_title">P:</label>
                    <label id="a1_b13_p">6432.0</label>
                </li>
                <li>
                    <label class="data_title">Q:</label>
                    <label id="a1_b13_q">1172.0</label>
                </li>
                <li>
                    <label class="data_title">S:</label>
                    <label id="a1_b13_s">6540.0</label>
                </li>
                <li>
                    <label class="data_title">F:</label>
                    <label id="a1_b13_f">50.0</label>
                </li>
                <li>
                    <label class="data_title">Ep:</label>
                    <label id="a1_b13_ep">4785702.4</label>
                </li>
                <li>
                    <label class="data_title">Eq:</label>
                    <label id="a1_b13_eq">1322742.6</label>
                </li>
                <li>
                    <label class="data_title">cosφ:</label>
                    <label id="a1_b13_cosq">1.0</label>
                </li>                    
            </ul>
        </div>
        <!-- PT柜(kV) -->
        <div class="left dataColumn1 newDianLu2 line5">
            <img src="../../../static/images/T3/line7OneRow2.png" alt="">           
        </div>
        <div title="计量柜 电压曲线" class="left dataColumn1 newDianLu2 line5 analysis_total_line cursor_pointer monitorItim">
            <img src="../../../static/images/T3/line7OneRow3.png" alt="">
            <ul class="P1Data data_left analysis">
                    <li>PT柜(kV)</li>
                    <li>
                        <label class="data_title">Uab:</label>
                        <label id="a1_b14_uab">10.3</label>
                    </li>
                    <li>
                        <label class="data_title">Ubc:</label>
                        <label id="a1_b14_ubc">10.3</label>
                    </li>
                    <li>
                        <label class="data_title">Uca:</label>
                        <label id="a1_b14_uca">10.4</label>
                    </li>
                    <li>
                        <label class="data_title">Ia:</label>
                        <label id="a1_b14_ia">0.0</label>
                    </li>
                    <li>
                        <label class="data_title">Ib:</label>
                        <label id="a1_b14_ib">0.0</label>
                    </li>
                    <li>
                        <label class="data_title">Ic:</label>
                        <label id="a1_b14_ic">0.0</label>
                    </li>                      
                    <li>
                        <label class="data_title">P:</label>
                        <label id="a1_b14_p">0.0</label>
                    </li>
                    <li>
                        <label class="data_title">Q:</label>
                        <label id="a1_b14_q">0.0</label>
                    </li>
                    <li>
                        <label class="data_title">S:</label>
                        <label id="a1_b14_s">0.0</label>
                    </li>
                    <li>
                        <label class="data_title">F:</label>
                        <label id="a1_b14_f">50.0</label>
                    </li>
                    <li>
                        <label class="data_title">Ep:</label>
                        <label id="a1_b14_ep">0.0</label>
                    </li>
                    <li>
                        <label class="data_title">Eq:</label>
                        <label id="a1_b14_eq">0.0</label>
                    </li>
                    <li>
                        <label class="data_title">cosφ:</label>
                        <label id="a1_b14_cosq">0.0</label>
                    </li>                    
                </ul>
        </div>
        <!-- 1#出线柜(kV) -->
        <div title="PT柜 电压曲线" class="left dataColumn1 newDianLu2 line5 analysis_total_line cursor_pointer monitorItim">
            <img src="../../../static/images/T3/line7OneRow4.png" alt="">
            <span class="OC7 newDianLu1C line7OC2"></span>
            <ul class="P1Data data_left analysis">
                    <li>1#出线柜(kV)</li>
                    <li>
                        <label class="data_title">Uab:</label>
                        <label id="a1_b15_uab">10.3</label>
                    </li>
                    <li>
                        <label class="data_title">Ubc:</label>
                        <label id="a1_b15_ubc">10.3</label>
                    </li>
                    <li>
                        <label class="data_title">Uca:</label>
                        <label id="a1_b15_uca">10.4</label>
                    </li>
                    <li>
                        <label class="data_title">Ia:</label>
                        <label id="a1_b15_ia">37.8</label>
                    </li>
                    <li>
                        <label class="data_title">Ib:</label>
                        <label id="a1_b15_ib">36.4</label>
                    </li>
                    <li>
                        <label class="data_title">Ic:</label>
                        <label id="a1_b15_ic">35.7</label>
                    </li>
                    <li>
                        <label class="data_title">P:</label>
                        <label id="a1_b15_p">6452.0</label>
                    </li>
                    <li>
                        <label class="data_title">Q:</label>
                        <label id="a1_b15_q">1132.0</label>
                    </li>
                    <li>
                        <label class="data_title">S:</label>
                        <label id="a1_b15_s">6552.0</label>
                    </li>
                    <li>
                        <label class="data_title">F:</label>
                        <label id="a1_b15_f">50.0</label>
                    </li>
                    <li>
                        <label class="data_title">Ep:</label>
                        <label id="a1_b15_ep">4680000.2</label>
                    </li>
                    <li>
                        <label class="data_title">Eq:</label>
                        <label id="a1_b15_eq">1243755.4</label>
                    </li>
                    <li>
                        <label class="data_title">cosφ:</label>
                        <label id="a1_b15_cosq">1.0</label>
                    </li>                    
                </ul>
        </div>
        <!-- 2#出线柜(kV) -->
        <div title="1#出线柜 电压曲线" class="left dataColumn1 newDianLu2 line5 analysis_total_line cursor_pointer monitorItim">
            <img src="../../../static/images/T3/line7OneRow4.png" alt="">
            <span class="OC7 newDianLu1O line7OC2"></span>
            <ul class="P1Data data_left analysis">
                    <li>2#出线柜(kV)</li>
                    <li>
                        <label class="data_title">Uab:</label>
                        <label id="a1_b16_uab">10.3</label>
                    </li>
                    <li>
                        <label class="data_title">Ubc:</label>
                        <label id="a1_b16_ubc">10.3</label>
                    </li>
                    <li>
                        <label class="data_title">Uca:</label>
                        <label id="a1_b16_uca">10.4</label>
                    </li>
                    <li>
                        <label class="data_title">Ia:</label>
                        <label id="a1_b16_ia">0.0</label>
                    </li>
                    <li>
                        <label class="data_title">Ib:</label>
                        <label id="a1_b16_ib">0.0</label>
                    </li>
                    <li>
                        <label class="data_title">Ic:</label>
                        <label id="a1_b16_ic">0.0</label>
                    </li>
                    <li>
                        <label class="data_title">P:</label>
                        <label id="a1_b16_p">0.0</label>
                    </li>
                    <li>
                        <label class="data_title">Q:</label>
                        <label id="a1_b16_q">0.0</label>
                    </li>
                    <li>
                        <label class="data_title">S:</label>
                        <label id="a1_b16_s">0.0</label>
                    </li>
                    <li>
                        <label class="data_title">F:</label>
                        <label id="a1_b16_f">50.0</label>
                    </li>
                    <li>
                        <label class="data_title">Ep:</label>
                        <label id="a1_b16_ep">129137.6</label>
                    </li>
                    <li>
                        <label class="data_title">Eq:</label>
                        <label id="a1_b16_eq">91818.8</label>
                    </li>
                    <li>
                        <label class="data_title">cosφ:</label>
                        <label id="a1_b16_cosq">0.0</label>
                    </li>                    
                </ul>
        </div> 
        <!-- 3#出线柜(kV) -->
        <div title="2#出线柜 电压曲线" class="left dataColumn1 newDianLu2 line5 analysis_total_line cursor_pointer monitorItim">
            <img src="../../../static/images/T3/line7OneRow5.png" alt="">
            <span class="OC7 newDianLu1O line7OC3"></span>
            <ul class="P1Data data_left analysis">
                    <li>3#出线柜(kV)</li>
                    <li>
                        <label class="data_title">Uab:</label>
                        <label id="a1_b17_uab">0.0</label>
                    </li>
                    <li>
                        <label class="data_title">Ubc:</label>
                        <label id="a1_b17_ubc">0.0</label>
                    </li>
                    <li>
                        <label class="data_title">Uca:</label>
                        <label id="a1_b17_uca">0.0</label>
                    </li>
                    <li>
                        <label class="data_title">Ia:</label>
                        <label id="a1_b17_ia">0.0</label>
                    </li>
                    <li>
                        <label class="data_title">Ib:</label>
                        <label id="a1_b17_ib">0.0</label>
                    </li>
                    <li>
                        <label class="data_title">Ic:</label>
                        <label id="a1_b17_ic">0.0</label>
                    </li>
                    <li>
                        <label class="data_title">P:</label>
                        <label id="a1_b17_p">0.0</label>
                    </li>
                    <li>
                        <label class="data_title">Q:</label>
                        <label id="a1_b17_q">0.0</label>
                    </li>
                    <li>
                        <label class="data_title">S:</label>
                        <label id="a1_b17_s">0.0</label>
                    </li>
                    <li>
                        <label class="data_title">F:</label>
                        <label id="a1_b17_f">0.0</label>
                    </li>
                    <li>
                        <label class="data_title">Ep:</label>
                        <label id="a1_b17_ep">0.0</label>
                    </li>
                    <li>
                        <label class="data_title">Eq:</label>
                        <label id="a1_b17_eq">0.0</label>
                    </li>
                    <li>
                        <label class="data_title">cosφ:</label>
                        <label id="a1_b17_cosq">0.0</label>
                    </li>                    
                </ul>
        </div>        
    </div>
</div>
</template>

<script>
import circuitT3 from "@/assets/css/circuitT3.css";

export default {
   
}
</script>

<style scoped>

</style>
