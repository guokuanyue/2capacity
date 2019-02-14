<!-- 电力监控T2页面 -->
<template>
<div class="left dianlu1 newDL1" style="width:1650px;min-height:1810px;;">
    <div style="padding-left:10px;">
        <!-- 电路图上半部分 -->
        <div class="clearfix whgd1IE7" style="width:1644px;margin-top:80px;">
            <!-- 变压器 -->
            <div class="left hcfs4" style="position:relative; ">
                <div class="left jinxian2Position" style="width:200px;">                        
                    <div class="clearfix">
                        <div class="left hcfsModel1Station">                                
                            <p>
                                <img src="../../../static/images/T2/whgcImg1.png" alt="">
                            </p>
                            <ul class="whswcInfor whgcHeight">
                                <li>变压器</li>
                            </ul>
                            <ul class="lwm2Group whgcW2">
                                <li class="clearfix">
                                    <span class="kdDT-title">Ta</span>
                                    <span id="b2_b1_tag9" class="lwmData">55.0</span>
                                    <span class="kdDT whgcDw1">°C</span>
                                </li>
                                <li class="clearfix">
                                    <span class="kdDT-title">Tb</span>
                                    <span id="b2_b1_tag10" class="lwmData">54.0</span>
                                    <span class="kdDT whgcDw1">°C</span>
                                </li>
                                <li class="clearfix">
                                    <span class="kdDT-title">Tc</span>
                                    <span id="b2_b1_tag11" class="lwmData">54.5</span>
                                    <span class="kdDT whgcDw1">°C</span>
                                </li>
                            </ul>
                            <!-- 进线柜负载率-饼图 -->
                            <div class="echarts_test">
                                <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
                            </div>
                        </div>
                    </div>
                </div>                    
            </div>
            <!-- 进线柜 -->
            <div class="left whswcBlock1" style="width:200px;">
                <div class="whswcBlock1">
                    <p class="minHaiLT2 kdImg1DataTit whgcT1">2AA1</p>
                    <img class="kaidiPin1" src="../../../static/images/T2/whgcImg2.png" alt="">
                    <span class="OC1 cursor_pointer cursor_pointer newDianLu1O whgcOCP1" style="left:43px;"></span>                       
                </div>
                <ul class="whswcInfor whgcHeight">
                    <li>进线柜</li>
                </ul>
                <ul class="lwm2Group whgcW2" style="margin-bottom:63px;">
                    <li class="clearfix">
                        <span class="kdDT-title">Ua</span>
                        <span id="b1_b1_ua" class="lwmData">0.0</span>
                        <span class="kdDT whgcDw1">V</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">Ub</span>
                        <span id="b1_b1_ub" class="lwmData">0.0</span>
                        <span class="kdDT whgcDw1">V</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">Uc</span>
                        <span id="b1_b1_uc" class="lwmData">0.0</span>
                        <span class="kdDT whgcDw1">V</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">Ia</span>
                        <span id="b1_b1_ia" class="lwmData">0.0</span>
                        <span class="kdDT whgcDw1">A</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">Ib</span>
                        <span id="b1_b1_ib" class="lwmData">0.0</span>
                        <span class="kdDT whgcDw1">A</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">Ic</span>
                        <span id="b1_b1_ic" class="lwmData">0.0</span>
                        <span class="kdDT whgcDw1">A</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">P</span>
                        <span id="b1_b1_p" class="lwmData">0.0</span>
                        <span class="kdDT whgcDw1">W</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">Q</span>
                        <span id="b1_b1_q" class="lwmData">0.0</span>
                        <span class="kdDT whgcDw1">var</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">S</span>
                        <span id="b1_b1_s" class="lwmData">0.0</span>
                        <span class="kdDT whgcDw1">VA</span>
                    </li>  
                    <li class="clearfix">
                        <span class="kdDT-title">Ep</span>
                        <span id="b1_b1_ep" class="lwmData">0.0</span>
                        <span class="kdDT whgcDw1">kWh</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">Eq</span>
                        <span id="b1_b1_eq" class="lwmData">0.0</span>
                        <span class="kdDT whgcDw1">kvarh</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">cosφ</span>
                        <span id="b1_b1_cosq" class="lwmData">0.0</span>
                        <span class="kdDT whgcDw1"></span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">F</span>
                        <span id="b1_b1_f" class="lwmData">0.00</span>
                        <span class="kdDT whgcDw1">Hz</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">负载率</span>
                        <span id="b1_b1_fzlz" class="lwmData"></span>
                        <span class="kdDT whgcDw1">%</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">THD-Va</span>
                        <span id="b1_b1_thd-va" class="lwmData">0.0</span>
                        <span class="kdDT whgcDw1">%</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">THD-Vb</span>
                        <span id="b1_b1_thd-vb" class="lwmData">0.0</span>
                        <span class="kdDT whgcDw1">%</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">THD-Vc</span>
                        <span id="b1_b1_thd-vc" class="lwmData">0.0</span>
                        <span class="kdDT whgcDw1">%</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">THD-Ia</span>
                        <span id="b1_b1_thd-ia" class="lwmData">0.0</span>
                        <span class="kdDT whgcDw1">%</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">THD-Ib</span>
                        <span id="b1_b1_thd-ib" class="lwmData">0.0</span>
                        <span class="kdDT whgcDw1">%</span>
                    </li>
                    <li class="clearfix" style="margin-bottom:0;">
                        <span class="kdDT-title">THD-Ic</span>
                        <span id="b1_b1_thd-ic" class="lwmData">0.0</span>
                        <span class="kdDT whgcDw1">%</span>
                    </li>
                </ul>
            </div>
            <!-- 电容柜 -->
            <div class="left whswcBlock1" style="width:200px;">
                <div class="whswcBlock1">
                    <p class="minHaiLT2 kdImg1DataTit whgcT2">2AA2</p>
                    <img class="kaidiPin1" src="../../../static/images/T2/whgcImg3.png" alt="">
                    <span class="OC1 cursor_pointer cursor_pointer newDianLu1C whgcOCP2"></span>                       
                </div>
                <ul class="whswcInfor whgcHeight">
                    <li>电容柜</li>
                </ul>                   
                <ul class="lwm2Group whgcW2">
                    <li class="clearfix">
                        <span class="kdDT-title">Ua</span>
                        <span id="b1_b2_ua" class="lwmData">229.4</span>
                        <span class="kdDT whgcDw1">V</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">Ub</span>
                        <span id="b1_b2_ub" class="lwmData">227.9</span>
                        <span class="kdDT whgcDw1">V</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">Uc</span>
                        <span id="b1_b2_uc" class="lwmData">227.3</span>
                        <span class="kdDT whgcDw1">V</span>
                    </li>                        
                    <li class="clearfix">
                        <span class="kdDT-title">Ia</span>
                        <span id="b1_b2_ia" class="lwmData">323.7</span>
                        <span class="kdDT whgcDw1">A</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">Ib</span>
                        <span id="b1_b2_ib" class="lwmData">322.1</span>
                        <span class="kdDT whgcDw1">A</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">Ic</span>
                        <span id="b1_b2_ic" class="lwmData">320.7</span>
                        <span class="kdDT whgcDw1">A</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">P</span>
                        <span id="b1_b2_p" class="lwmData">0.0</span>
                        <span class="kdDT whgcDw1">W</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">Q</span>
                        <span id="b1_b2_q" class="lwmData">-220860.0</span>
                        <span class="kdDT whgcDw1">var</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">S</span>
                        <span id="b1_b2_s" class="lwmData">220860.0</span>
                        <span class="kdDT whgcDw1">VA</span>
                    </li>
                </ul>
            </div>
            <!-- 有源滤波柜 -->
            <div class="left whswcBlock1" style="width:200px;">
                <div class="whswcBlock1">
                    <p class="minHaiLT2 kdImg1DataTit  whgcT2">2AA3</p>
                    <img class="kaidiPin1" src="../../../static/images/T2/whgcImg4.png" alt="">
                    <span id="b1_b3_di" class="OC1 cursor_pointer cursor_pointer newDianLu1O whgcOCP2"></span>                       
                </div>
                <ul class="whswcInfor whgcHeight">
                    <li>有源滤波柜</li>
                </ul>                    
                <ul class="lwm2Group whgcW2">
                    <li class="clearfix">
                        <span class="kdDT-title">THD-Va</span>
                        <span id="b1_b1_g1_tag1" class="lwmData"></span>
                        <span class="kdDT whgcDw1">%</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">THD-Vb</span>
                        <span id="b1_b1_g1_tag2" class="lwmData"></span>
                        <span class="kdDT whgcDw1">%</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">THD-Vc</span>
                        <span id="b1_b1_g1_tag3" class="lwmData"></span>
                        <span class="kdDT whgcDw1">%</span>
                    </li>                       
                    <li class="clearfix">
                        <span class="kdDT-title">THD-Ia</span>
                        <span id="b1_b1_g1_tag4" class="lwmData"></span>
                        <span class="kdDT whgcDw1">%</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">THD-Ib</span>
                        <span id="b1_b1_g1_tag5" class="lwmData"></span>
                        <span class="kdDT whgcDw1">%</span>
                    </li>
                    <li class="clearfix">
                        <span class="kdDT-title">THD-Ic</span>
                        <span id="b1_b1_g1_tag6" class="lwmData"></span>
                        <span class="kdDT whgcDw1">%</span>
                    </li>
                </ul>
            </div>
            <!-- 2AA4 -->
            <div class="left hcfs4">
                <div>                       
                    <div class="hcfsModel2Station">
                        <p class="minHaiLT2 kdImg1DataTit whgcT3">2AA4</p>
                        <img src="../../../static/images/T2/whgcImg5.png" alt="">
                        <ul class="hcfs4modelAllData hcfs4model3Data">
                            <li class=""></li>
                            <li class="clearfix"></li>
                            <li class="clearfix"></li>
                            <li class="clearfix"></li>
                            <li class="clearfix"></li>
                        </ul>
                    </div>                       
                    <div class="clearfix" style=" margin-left:71px; position:relative;">
                        <ul class="whgc_dataTit">
                            <li class="hcfs4model2DataDT">Ua</li>
                            <li class="hcfs4model2DataDT">Ub</li>
                            <li class="hcfs4model2DataDT">Uc</li>
                            <li class="hcfs4model2DataDT">Ia</li>
                            <li class="hcfs4model2DataDT">Ib</li>
                            <li class="hcfs4model2DataDT">Ic</li>
                            <li class="hcfs4model2DataDT">Ep</li>
                        </ul>
                        <!-- 2AA4-1 -->
                        <div class="left hcfsModel1Station whgcW1">
                            <dl>
                                <dt class="MZBtnPosition whgcH2">
                                    <img src="../../../static/images/T2/whgcImg5_1.png" alt="">
                                    <span class="OC1 cursor_pointer cursor_pointer newDianLu1O whgcOCP3"></span>
                                </dt>
                                <dd class="mt">2AA4-1</dd>
                                <dd class="mb">备用</dd>
                            </dl>
                            <ul class="lwm2Group whswcGroup">
                                <li id="b1_b4_ua" class="lwmData">228.7</li>
                                <li id="b1_b4_ub" class="lwmData">228.0</li>
                                <li id="b1_b4_uc" class="lwmData">228.4</li>
                                <li id="b1_b4_ia" class="lwmData">0.0</li>
                                <li id="b1_b4_ib" class="lwmData">0.0</li>
                                <li id="b1_b4_ic" class="lwmData">0.0</li>
                                <li id="b1_b4_ep" class="lwmData">0.0</li>
                            </ul>
                        </div> 
                        <!-- 2AA4-2 -->
                        <div class="left hcfsModel1Station whgcW1">
                            <dl>
                                <dt class="MZBtnPosition">
                                    <img src="../../../static/images/T2/whgcImg5_2.png" alt="">
                                    <span class="OC1 cursor_pointer cursor_pointer newDianLu1O whgcOCP3"></span>
                                </dt>
                                <dd class="mt">2AA4-2</dd>
                                <dd class="mb">备用</dd>
                            </dl>
                            <ul class="lwm2Group whswcGroup">
                                <li id="b1_b5_ua" class="lwmData">229.7</li>
                                <li id="b1_b5_ub" class="lwmData">228.8</li>
                                <li id="b1_b5_uc" class="lwmData">228.3</li>
                                <li id="b1_b5_ia" class="lwmData">0.0</li>
                                <li id="b1_b5_ib" class="lwmData">0.0</li>
                                <li id="b1_b5_ic" class="lwmData">0.0</li>
                                <li id="b1_b5_ep" class="lwmData">0.0</li>
                            </ul>
                        </div>  
                        <!-- 2AA4-3 -->
                        <div class="left hcfsModel1Station whgcW1">
                            <dl>
                                <dt class="MZBtnPosition">
                                    <img src="../../../static/images/T2/whgcImg5_2.png" alt="">
                                    <span class="OC1 cursor_pointer cursor_pointer newDianLu1O whgcOCP3"></span>
                                </dt>
                                <dd class="mt">2AA4-3</dd>
                                <dd class="mb">备用</dd>
                            </dl>
                            <ul class="lwm2Group whswcGroup">
                                <li id="b1_b6_ua" class="lwmData">229.6</li>
                                <li id="b1_b6_ub" class="lwmData">228.0</li>
                                <li id="b1_b6_uc" class="lwmData">228.4</li>
                                <li id="b1_b6_ia" class="lwmData">0.0</li>
                                <li id="b1_b6_ib" class="lwmData">0.0</li>
                                <li id="b1_b6_ic" class="lwmData">0.0</li>
                                <li id="b1_b6_ep" class="lwmData">0.0</li>
                            </ul>
                        </div>
                        <!-- 2AA4-4 -->
                        <div class="left hcfsModel1Station whgcW1">
                            <dl>
                                <dt class="MZBtnPosition">
                                    <img src="../../../static/images/T2/whgcImg5_2.png" alt="">
                                    <span class="OC1 cursor_pointer newDianLu1C whgcOCP3"></span>
                                </dt>
                                <dd class="mt">2AA4-4</dd>
                                <dd class="mb">风机、行吊</dd>
                            </dl>
                            <ul class="lwm2Group whswcGroup">
                                <li id="b1_b7_ua" class="lwmData">228.6</li>
                                <li id="b1_b7_ub" class="lwmData">228.4</li>
                                <li id="b1_b7_uc" class="lwmData">228.9</li>
                                <li id="b1_b7_ia" class="lwmData">26.9</li>
                                <li id="b1_b7_ib" class="lwmData">33.8</li>
                                <li id="b1_b7_ic" class="lwmData">26.5</li>
                                <li id="b1_b7_ep" class="lwmData">187883.6</li>
                            </ul>
                        </div>
                        <!-- 2AA4-5 -->
                        <div class="left hcfsModel1Station whgcW1">
                            <dl>
                                <dt class="MZBtnPosition">
                                    <img src="../../../static/images/T2/whgcImg5_2.png" alt="">
                                    <span class="OC1 cursor_pointer newDianLu1C whgcOCP3"></span>
                                </dt>
                                <dd class="mt">2AA4-5</dd>
                                <dd class="mb">空压机</dd>
                            </dl>
                            <ul class="lwm2Group whswcGroup">
                                <li id="b1_b8_ua" class="lwmData">229.2</li>
                                <li id="b1_b8_ub" class="lwmData">228.9</li>
                                <li id="b1_b8_uc" class="lwmData">227.4</li>
                                <li id="b1_b8_ia" class="lwmData">114.2</li>
                                <li id="b1_b8_ib" class="lwmData">106.6</li>
                                <li id="b1_b8_ic" class="lwmData">121.8</li>
                                <li id="b1_b8_ep" class="lwmData">365669.4</li>
                            </ul>
                        </div>
                        <!-- 2AA4-6 -->
                        <div class="left hcfsModel1Station whgcW1">
                            <dl>
                                <dt class="MZBtnPosition">
                                    <img src="../../../static/images/T2/whgcImg5_3.png" alt="">
                                    <span class="OC1 cursor_pointer newDianLu1C whgcOCP3"></span>
                                </dt>
                                <dd class="mt">2AA4-6</dd>
                                <dd class="mb">铜排加工区</dd>
                            </dl>
                            <ul class="lwm2Group whswcGroup">
                                <li id="b1_b9_ua" class="lwmData">229.1</li>
                                <li id="b1_b9_ub" class="lwmData">228.6</li>
                                <li id="b1_b9_uc" class="lwmData">229.1</li>
                                <li id="b1_b9_ia" class="lwmData">0.0</li>
                                <li id="b1_b9_ib" class="lwmData">0.0</li>
                                <li id="b1_b9_ic" class="lwmData">5.5</li>
                                <li id="b1_b9_ep" class="lwmData">603485.3</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
            <!-- 2AA4后的图片 -->
            <div class="left hcfs4" style="margin-left: -2px;">
                <img src="../../../static/images/T2/whgcImg7_01.png" alt="">
            </div>                                
        </div> 
        <!-- 电路图下半部分 -->
        <div class="clearfix" style="width:1590px; margin-left:20px;"> 
                <!-- 2AA7 -->
                <div class="left hcfs4">
                    <div class="left">                        
                        <div class="clearfix">                           
                            <div>
                                <div class="hcfsModel2Station">
                                    <p class="minHaiLT2 kdImg1DataTit whgcT4">2AA7</p>
                                    <img src="../../../static/images/T2/whgcImg6.png" alt="">
                                    <ul class="hcfs4modelAllData hcfs4model3Data">
                                        <li class=""></li>
                                        <li class="clearfix"></li>
                                        <li class="clearfix"></li>
                                        <li class="clearfix"></li>
                                        <li class="clearfix"></li>
                                    </ul>
                                </div>                                
                                <div class="clearfix" style="position:relative; margin-left:40px;">
                                    <ul class="whgc_dataTit whgc_dataTitP2">
                                        <li class="hcfs4model2DataDT">Ua</li>
                                        <li class="hcfs4model2DataDT">Ub</li>
                                        <li class="hcfs4model2DataDT">Uc</li>
                                        <li class="hcfs4model2DataDT">Ia</li>
                                        <li class="hcfs4model2DataDT">Ib</li>
                                        <li class="hcfs4model2DataDT">Ic</li>
                                        <li class="hcfs4model2DataDT">Ep</li>
                                        <li class="hcfs4model2DataDT">P</li>
                                        <li class="hcfs4model2DataDT">Q</li>
                                        <li class="hcfs4model2DataDT">Cosφ</li>
                                    </ul>
                                    <!-- 2AA7-1 -->
                                    <div class="left hcfsModel1Station whgcW1">
                                        <dl>
                                            <dt class="MZBtnPosition whgcH2">
                                                <img src="../../../static/images/T2/whgcImg5_1.png" alt="">
                                                <span class="OC1 cursor_pointer newDianLu1C whgcOCP3"></span>
                                            </dt>
                                            <dd class="mt">2AA7-1</dd>
                                            <dd class="mb">母联</dd>
                                        </dl>
                                        <ul class="lwm2Group whswcGroup">
                                            <li id="d1_b13_ua" class="lwmData">226.8</li>
                                            <li id="d1_b13_ub" class="lwmData">223.5</li>
                                            <li id="d1_b13_uc" class="lwmData">222.5</li>
                                            <li id="d1_b13_ia" class="lwmData">264.4</li>
                                            <li id="d1_b13_ib" class="lwmData">270.4</li>
                                            <li id="d1_b13_ic" class="lwmData">301.2</li>
                                            <li id="d1_b13_ep" class="lwmData">2299132.6</li>
                                            <li id="d1_b13_p" class="lwmData">270.4</li>
                                            <li id="d1_b13_q" class="lwmData">301.2</li>
                                            <li id="d1_b13_cosq" class="lwmData">2299132.6</li>
                                        </ul>
                                    </div>  
                                    <!-- 2AA7-2 -->
                                    <div class="left hcfsModel1Station whgcW1">
                                        <dl>
                                            <dt class="MZBtnPosition">
                                                <img src="../../../static/images/T2/whgcImg5_3.png" alt="">
                                                <span class="OC1 cursor_pointer newDianLu1O whgcOCP3"></span>
                                            </dt>
                                            <dd class="mt">2AA7-2</dd>
                                            <dd class="mb">变压器工厂</dd>
                                        </dl>
                                        <ul class="lwm2Group whswcGroup">
                                            <li id="d1_b14_ua" class="lwmData">229.2</li>
                                            <li id="d1_b14_ub" class="lwmData">229.0</li>
                                            <li id="d1_b14_uc" class="lwmData">228.5</li>
                                            <li id="d1_b14_ia" class="lwmData">0.0</li>
                                            <li id="d1_b14_ib" class="lwmData">0.0</li>
                                            <li id="d1_b14_ic" class="lwmData">0.0</li>
                                            <li id="d1_b14_ep" class="lwmData">5605.6</li>
                                            <li id="d1_b14_p" class="lwmData">0.0</li>
                                            <li id="d1_b14_q" class="lwmData">0.0</li>
                                            <li id="d1_b14_cosq" class="lwmData">0.0</li>
                                        </ul>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <!-- 2AA6 -->
                <div class="left hcfs4">
                    <div>
                        <div class="hcfsModel2Station">
                            <p class="minHaiLT2 kdImg1DataTit whgcT5">2AA6</p>
                            <img src="../../../static/images/T2/whgcImg8.png" alt="">                           
                            <ul class="hcfs4modelAllData hcfs4model3Data">
                                <li class=""></li>
                                <li class="clearfix"></li>
                                <li class="clearfix"></li>
                                <li class="clearfix"></li>
                                <li class="clearfix"></li>
                            </ul>
                        </div>                       
                        <div class="clearfix" style=" margin-left:13px; position:relative;">
                            <ul class="whgc_dataTit">
                                <li class="hcfs4model2DataDT">Ua</li>
                                <li class="hcfs4model2DataDT">Ub</li>
                                <li class="hcfs4model2DataDT">Uc</li>
                                <li class="hcfs4model2DataDT">Ia</li>
                                <li class="hcfs4model2DataDT">Ib</li>
                                <li class="hcfs4model2DataDT">Ic</li>
                                <li class="hcfs4model2DataDT">Ep</li>
                            </ul>
                            <!-- 2AA6-1 -->
                            <div class="left hcfsModel1Station whgcW1">
                                <dl>
                                    <dt class="MZBtnPosition whgcH2">
                                        <img src="../../../static/images/T2/whgcImg5_1.png" alt="">
                                        <span style="cursor:pointer;" class="OC1 newDianLu1O whgcOCP3"></span>                                        
                                    </dt>
                                    <dd class="mt">2AA6-1</dd>
                                    <dd class="mb">备用</dd>
                                </dl>
                                <ul class="lwm2Group whswcGroup">
                                    <li id="d1_b7_ua" class="lwmData">228.6</li>
                                    <li id="d1_b7_ub" class="lwmData">227.5</li>
                                    <li id="d1_b7_uc" class="lwmData">228.2</li>
                                    <li id="d1_b7_ia" class="lwmData">0.0</li>
                                    <li id="d1_b7_ib" class="lwmData">0.0</li>
                                    <li id="d1_b7_ic" class="lwmData">0.0</li>
                                    <li id="d1_b7_ep" class="lwmData">0.0</li>
                                </ul>
                            </div>   
                            <!-- 2AA6-2 -->
                            <div class="left hcfsModel1Station whgcW1">
                                <dl>
                                    <dt class="MZBtnPosition">
                                        <img src="../../../static/images/T2/whgcImg5_2.png" alt="">
                                        <span class="OC1 cursor_pointer newDianLu1O whgcOCP3"></span>
                                    </dt>
                                    <dd class="mt">2AA6-2</dd>
                                    <dd class="mb">备用</dd>
                                </dl>
                                <ul class="lwm2Group whswcGroup">
                                    <li id="d1_b8_ua" class="lwmData">229.1</li>
                                    <li id="d1_b8_ub" class="lwmData">227.8</li>
                                    <li id="d1_b8_uc" class="lwmData">227.4</li>
                                    <li id="d1_b8_ia" class="lwmData">0.0</li>
                                    <li id="d1_b8_ib" class="lwmData">0.0</li>
                                    <li id="d1_b8_ic" class="lwmData">0.0</li>
                                    <li id="d1_b8_ep" class="lwmData">0.0</li>
                                </ul>
                            </div>
                            <!-- 2AA6-3 -->
                            <div class="left hcfsModel1Station whgcW1">
                                <dl>
                                    <dt class="MZBtnPosition">
                                        <img src="../../../static/images/T2/whgcImg5_2.png" alt="">
                                        <span class="OC1 cursor_pointer newDianLu1O whgcOCP3"></span>
                                    </dt>
                                    <dd class="mt">2AA6-3</dd>
                                    <dd class="mb">备用</dd>
                                </dl>
                                <ul class="lwm2Group whswcGroup">
                                    <li id="d1_b9_ua" class="lwmData">228.6</li>
                                    <li id="d1_b9_ub" class="lwmData">227.9</li>
                                    <li id="d1_b9_uc" class="lwmData">228.9</li>
                                    <li id="d1_b9_ia" class="lwmData">0.0</li>
                                    <li id="d1_b9_ib" class="lwmData">0.0</li>
                                    <li id="d1_b9_ic" class="lwmData">0.0</li>
                                    <li id="d1_b9_ep" class="lwmData">0.0</li>
                                </ul>
                            </div>
                            <!-- 2AA6-4 -->
                            <div class="left hcfsModel1Station whgcW1">
                                <dl>
                                    <dt class="MZBtnPosition">
                                        <img src="../../../static/images/T2/whgcImg5_2.png" alt="">
                                        <span class="OC1 cursor_pointer newDianLu1O whgcOCP3"></span>
                                    </dt>
                                    <dd class="mt">2AA6-4</dd>
                                    <dd class="mb">工厂用电AP7</dd>
                                </dl>
                                <ul class="lwm2Group whswcGroup">
                                    <li id="d1_b10_ua" class="lwmData">229.3</li>
                                    <li id="d1_b10_ub" class="lwmData">227.2</li>
                                    <li id="d1_b10_uc" class="lwmData">228.7</li>
                                    <li id="d1_b10_ia" class="lwmData">0.0</li>
                                    <li id="d1_b10_ib" class="lwmData">0.0</li>
                                    <li id="d1_b10_ic" class="lwmData">0.0</li>
                                    <li id="d1_b10_ep" class="lwmData">0.0</li>
                                </ul>
                            </div>
                            <!-- 2AA6-5 -->
                            <div class="left hcfsModel1Station whgcW1">
                                <dl>
                                    <dt class="MZBtnPosition">
                                        <img src="../../../static/images/T2/whgcImg5_2.png" alt="">
                                        <span class="OC1 cursor_pointer newDianLu1C whgcOCP3"></span>
                                    </dt>
                                    <dd class="mt">2AA6-5</dd>
                                    <dd class="mb">工厂用电AP8</dd>
                                </dl>
                                <ul class="lwm2Group whswcGroup">
                                    <li id="d1_b11_ua" class="lwmData">228.6</li>
                                    <li id="d1_b11_ub" class="lwmData">228.6</li>
                                    <li id="d1_b11_uc" class="lwmData">228.8</li>
                                    <li id="d1_b11_ia" class="lwmData">0.0</li>
                                    <li id="d1_b11_ib" class="lwmData">0.0</li>
                                    <li id="d1_b11_ic" class="lwmData">0.0</li>
                                    <li id="d1_b11_ep" class="lwmData">28.9</li>
                                </ul>
                            </div>
                            <!-- 2AA6-6 -->
                            <div class="left hcfsModel1Station whgcW1">
                                <dl>
                                    <dt class="MZBtnPosition">
                                        <img src="../../../static/images/T2/whgcImg5_3.png" alt="">
                                        <span class="OC1 cursor_pointer newDianLu1O whgcOCP3"></span>
                                    </dt>
                                    <dd class="mt">2AA6-6</dd>
                                    <dd class="mb">工厂用电AP9</dd>
                                </dl>
                                <ul class="lwm2Group whswcGroup">
                                    <li id="d1_b12_ua" class="lwmData">228.7</li>
                                    <li id="d1_b12_ub" class="lwmData">228.8</li>
                                    <li id="d1_b12_uc" class="lwmData">228.8</li>
                                    <li id="d1_b12_ia" class="lwmData">0.0</li>
                                    <li id="d1_b12_ib" class="lwmData">0.0</li>
                                    <li id="d1_b12_ic" class="lwmData">0.0</li>
                                    <li id="d1_b12_ep" class="lwmData">0.0</li>                             
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> 
            <!-- 2AA5 -->
            <div class="left hcfs4">              
                <div>
                    <div class="hcfsModel2Station">
                        <p class="minHaiLT2 kdImg1DataTit whgcT5">2AA5</p>
                        <img src="../../../static/images/T2/whgcImg8.png" alt="">                       
                        <ul class="hcfs4modelAllData hcfs4model3Data">
                            <li class=""></li>
                            <li class="clearfix"></li>
                            <li class="clearfix"></li>
                            <li class="clearfix"></li>
                            <li class="clearfix"></li>
                        </ul>
                    </div>                  
                    <div class="clearfix" style=" margin-left:23px; position:relative;">
                        <ul class="whgc_dataTit">
                            <li class="hcfs4model2DataDT">Ua</li>
                            <li class="hcfs4model2DataDT">Ub</li>
                            <li class="hcfs4model2DataDT">Uc</li>
                            <li class="hcfs4model2DataDT">Ia</li>
                            <li class="hcfs4model2DataDT">Ib</li>
                            <li class="hcfs4model2DataDT">Ic</li>
                            <li class="hcfs4model2DataDT">Ep</li>
                        </ul>
                        <!-- 2AA5-1 -->
                        <div class="left hcfsModel1Station whgcW1">
                            <dl>
                                <dt class="MZBtnPosition whgcH2">
                                    <img src="../../../static/images/T2/whgcImg5_1.png" alt="">
                                    <span class="OC1 cursor_pointer newDianLu1O whgcOCP3"></span>
                                </dt>
                                <dd class="mt">2AA5-1</dd>
                                <dd class="mb">备用</dd>
                            </dl>
                            <ul class="lwm2Group whswcGroup">
                                <li id="d1_b1_ua" class="lwmData">228.6</li>
                                <li id="d1_b1_ub" class="lwmData">228.7</li>
                                <li id="d1_b1_uc" class="lwmData">228.3</li>
                                <li id="d1_b1_ia" class="lwmData">0.0</li>
                                <li id="d1_b1_ib" class="lwmData">0.0</li>
                                <li id="d1_b1_ic" class="lwmData">0.0</li>
                                <li id="d1_b1_ep" class="lwmData">0.0</li>
                            </ul>
                        </div> 
                        <!-- 2AA5-2 -->
                        <div class="left hcfsModel1Station whgcW1">
                            <dl>
                                <dt class="MZBtnPosition">
                                    <img src="../../../static/images/T2/whgcImg5_2.png" alt="">
                                    <span class="OC1 cursor_pointer newDianLu1O whgcOCP3"></span>
                                </dt>
                                <dd class="mt">2AA5-2</dd>
                                <dd class="mb">开闭所照明</dd>
                            </dl>
                            <ul class="lwm2Group whswcGroup">
                                <li id="d1_b2_ua" class="lwmData">228.2</li>
                                <li id="d1_b2_ub" class="lwmData">227.4</li>
                                <li id="d1_b2_uc" class="lwmData">228.3</li>
                                <li id="d1_b2_ia" class="lwmData">0.0</li>
                                <li id="d1_b2_ib" class="lwmData">0.0</li>
                                <li id="d1_b2_ic" class="lwmData">0.0</li>
                                <li id="d1_b2_ep" class="lwmData">0.0</li>
                            </ul>
                        </div> 
                        <!-- 2AA5-3 -->
                        <div class="left hcfsModel1Station whgcW1">
                            <dl>
                                <dt class="MZBtnPosition">
                                    <img src="../../../static/images/T2/whgcImg5_2.png" alt="">
                                    <span class="OC1 cursor_pointer newDianLu1C whgcOCP3"></span>
                                </dt>
                                <dd class="mt">2AA5-3</dd>
                                <dd class="mb">展厅空调</dd>
                            </dl>
                            <ul class="lwm2Group whswcGroup">
                                <li id="d1_b3_ua" class="lwmData">229.6</li>
                                <li id="d1_b3_ub" class="lwmData">228.8</li>
                                <li id="d1_b3_uc" class="lwmData">228.8</li>
                                <li id="d1_b3_ia" class="lwmData">1.1</li>
                                <li id="d1_b3_ib" class="lwmData">0.0</li>
                                <li id="d1_b3_ic" class="lwmData">0.0</li>
                                <li id="d1_b3_ep" class="lwmData">23278.2</li>
                            </ul>
                        </div>
                        <!-- 2AA5-4 -->
                        <div class="left hcfsModel1Station whgcW1">
                            <dl>
                                <dt class="MZBtnPosition">
                                    <img src="../../../static/images/T2/whgcImg5_2.png" alt="">
                                    <span class="OC1 cursor_pointer newDianLu1C whgcOCP3"></span>
                                </dt>
                                <dd class="mt">2AA5-4</dd>
                                <dd class="mb">结构数控机床</dd>
                            </dl>
                            <ul class="lwm2Group whswcGroup">
                                <li id="d1_b4_ua" class="lwmData">229.3</li>
                                <li id="d1_b4_ub" class="lwmData">226.5</li>
                                <li id="d1_b4_uc" class="lwmData">228.5</li>
                                <li id="d1_b4_ia" class="lwmData">102.2</li>
                                <li id="d1_b4_ib" class="lwmData">96.7</li>
                                <li id="d1_b4_ic" class="lwmData">101.8</li>
                                <li id="d1_b4_ep" class="lwmData">564636.4</li>
                            </ul>
                        </div>
                        <!-- 2AA5-5 -->
                        <div class="left hcfsModel1Station whgcW1">
                            <dl>
                                <dt class="MZBtnPosition">
                                    <img src="../../../static/images/T2/whgcImg5_2.png" alt="">
                                    <span class="OC1 cursor_pointer newDianLu1C whgcOCP3"></span>
                                </dt>
                                <dd class="mt">2AA5-5</dd>
                                <dd class="mb">箱变区照明</dd>
                            </dl>
                            <ul class="lwm2Group whswcGroup">
                                <li id="d1_b5_ua" class="lwmData">228.8</li>
                                <li id="d1_b5_ub" class="lwmData">228.8</li>
                                <li id="d1_b5_uc" class="lwmData">227.3</li>
                                <li id="d1_b5_ia" class="lwmData">3.6</li>
                                <li id="d1_b5_ib" class="lwmData">7.3</li>
                                <li id="d1_b5_ic" class="lwmData">29.1</li>
                                <li id="d1_b5_ep" class="lwmData">245961.7</li>
                            </ul>
                        </div>
                        <!-- 2AA5-6 -->
                        <div class="left hcfsModel1Station whgcW1">
                            <dl>
                                <dt class="MZBtnPosition">
                                    <img src="../../../static/images/T2/whgcImg5_3.png" alt="">
                                    <span class="OC1 cursor_pointer newDianLu1C whgcOCP3"></span>
                                </dt>
                                <dd class="mt">2AA5-6</dd>
                                <dd class="mb">结构厂</dd>
                            </dl>
                            <ul class="lwm2Group whswcGroup">
                                <li id="d1_b6_ua" class="lwmData">228.8</li>
                                <li id="d1_b6_ub" class="lwmData">228.5</li>
                                <li id="d1_b6_uc" class="lwmData">228.4</li>
                                <li id="d1_b6_ia" class="lwmData">76.5</li>
                                <li id="d1_b6_ib" class="lwmData">69.8</li>
                                <li id="d1_b6_ic" class="lwmData">87.9</li>
                                <li id="d1_b6_ep" class="lwmData">371162.9</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>                 
        </div>
    </div>
</div>
</template>

<script>
import circuitT2 from "@/assets/css/circuitT2.css";
export default {
    data() {
        return {
            msg_data: [],
        };
    },
    created() {
        this.initWebSocket();
    },
    destroyed: function() {
        this.websocketclose();
    },
    mounted(){
        var data = [
                    {value:50, name:'实时负载率'},
                    {value:50, name:'剩余可支配容量比'},                
                ]
        this.drawLine(data);
    },
    methods: {
        drawLine(data){
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title : {
                //text: '某站点用户访问来源',
                //subtext: '纯属虚构',
                x:'center'
                },
            tooltip : {//提示框设置
                trigger: 'item',
                formatter: "{b} : {c}%"//提示框文字设置
            },
            color:['#FFFF7B', '#34BD76'],//饼块颜色
            legend: {//图例设置
                icon: "circle",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
                textStyle: {
                  fontSize: '13',		//字体大小
                  fontWeight: 'bolder',		//字体加粗
                  color: '#fff'
                  },
                selectedMode:false,//取消图例上的点击事件
                //orient: 'vertical',
                bottom: 0,
                left: 'center',
                data: ['实时负载率','剩余可支配容量比'],
            },
            series : [//值域设置
                {
                  name: '访问来源',
                  type: 'pie',
                  radius : '42%',// 设置饼状图大小
                  hoverAnimation: false,//饼图鼠标移入，悬停部分不放大突出
                  center: ['50%', '50%'],// 设置饼状图位置
                  data:data,
                  itemStyle: {//设置饼状图扇形区域样式
                    normal:{
                      borderColor: '#FFCCFF',//边框颜色
                      borderWidth: 1,//边框宽度
                      // 设置值域的标签
                      label: {
                        textStyle:{
                            fontSize: '12',		//字体大小
                            fontWeight: 'bolder'		//字体加粗
                        },
                        show:true,                       
                        formatter: '{c}%'//{d}%指这一部分占总数的百分比
                      },
                      labelLine :{show:true} 
                    }
                  },
                  emphasis: {// emphasis：设置鼠标放到哪一块扇形上面的时候，扇形样式、阴影
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                },    
            ]
          });
        },
    initWebSocket: function() {
      this.websock = new WebSocket(
        "ws://192.168.0.215:8001/netgate-server/serverSocket/Root"
        // "ws://39.96.35.45:8001/netgate-server/serverSocket/Root"
      );
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen: function() {
      console.log("WebSocket连接成功");
      console.log("连接开始时间：" + new Date());
    },
    websocketonerror: function(e) {
      console.log("WebSocket连接发生错误");
    },
    websocketonmessage: function(e) {
        //console.log("数据开始接收时间："+(new Date()));
        var da = JSON.parse(e.data);
        var dataMap = new Map();
        for (var i = 0; i < da.length; i++) {
            // var dataArray = new Array();
            // if(dataMap.get(da[i].dt) || dataMap.get(da[i].dt)!=undefined){//取json中的值
            //     dataArray =  dataMap.get(da[i].dt);
            //     dataArray.push(da[i]);
            // }else{
            //     dataArray.push(da[i]);
            // }
            // dataMap.set(da[i].dt, dataArray);
            //console.log(da[i].tnm);
            if (da[i].dt == 0) {
            //console.log(da[i]);
            console.log(i+"==="+da[i].tnm)
                if (document.getElementById(da[i].tnm)) {
                    document.getElementById(da[i].tnm).innerText = da[i].val; //da[i].tnm比如这个就是数据对应的页面上的id为c1_b3_ua
                    if(da[i].tnm == "b1_b1_p"){
                    var fzl = da[i].val/1000/1250;
                    document.getElementById("b1_b1_fzlz").innerText = (fzl*100).toFixed(2);
                    var zpl = 1-fzl;
                    var data = [
                            {value:(fzl*100).toFixed(2), name:'实时负载率'},
                            {value:(zpl*100).toFixed(2), name:'剩余可支配容量比'},                
                        ]
                    this.drawLine(data);
                    
                    }
                }
            }
        }
      //console.log(da);
      //console.log(dataMap);
      //console.log("数据接收结束时间："+(new Date()));
      //this.msg_data.unshift(da);
    },
    websocketclose: function(e) {
      console.log("connection closed (" + e.code + ")");
    }
  }
  
}
</script>

<style scoped>
.echarts_test {
  margin-left: -58px;
}
</style>
