<!-- 电力监控主页面 -->
<template>
    <div class="warp_btn">
        <input class="buttonT1" :class="{'active':activeBtn == 'circuitT1'}" type="button" value="T1" @click="toggleTabs('circuitT1');">
        <input class="buttonT2" :class="{'active':activeBtn == 'circuitT2'}" type="button" value="T2" @click="toggleTabs('circuitT2');">
        <input class="buttonT3" :class="{'active':activeBtn == 'circuitT3'}" type="button" value="高压配电室" @click="toggleTabs('circuitT3');">
        <input class="buttonT4" :class="{'active':activeBtn == 'circuitT4'}" type="button" value="lpanel" @click="toggleTabs('circuitT4');">
        <input class="buttonT5" :class="{'active':activeBtn == 'circuitT5'}" type="button" value="lpanel2" @click="toggleTabs('circuitT5');">
        <input class="buttonT6" :class="{'active':activeBtn == 'circuitT6'}" type="button" value="T6" @click="toggleTabs('circuitT6');">
　　　　 <circuitT1 :is="activeBtn" keep-alive></circuitT1>
　　    </div>
</template>

<script>
//引入子组件
import circuitT1 from './circuitT1.vue';
import circuitT2 from './circuitT2.vue';
import circuitT3 from './circuitT3.vue';
import circuitT4 from './circuitT4.vue';
import circuitT5 from './circuitT5.vue';
import circuitT6 from './circuitT6.vue';

export default {
        data () {
             return {  
                activeBtn: 'circuitT1'   
             };
         },
        components: { 
             circuitT1,
             circuitT2,
             circuitT3,
             circuitT4,
             circuitT5,
             circuitT6,
         },
        methods: {
             toggleTabs (tabText) {
                 this.activeBtn = tabText;
             }
         }
    }
</script>

<style scoped>
.buttonT1 {
    width:80px;
    /* background:#212429; */
    background:#efea3a;
    border:none;
    cursor:pointer;
    padding:6px 6px;
    border-radius:5px;
    -webkit-border-radius:4px;
    -moz-border-radius:4px;
}
.warp_btn>.active {
    background-color: red;
}
.buttonT3 {
    position:relative;
    width:80px;
    background:#efea3a;
    border:none;
    cursor:pointer;
    padding:5px 5px;
    border-radius:4px;
    -webkit-border-radius:4px;
    -moz-border-radius:4px;
    font-size: 13px !important;
}
.buttonT2,.buttonT4,.buttonT5,.buttonT6{
    position:relative;
    width:80px;
    background:#efea3a;
    border:none;
    cursor:pointer;
    padding:6px 6px;
    border-radius:4px;
    -webkit-border-radius:4px;
    -moz-border-radius:4px;
}
</style>
