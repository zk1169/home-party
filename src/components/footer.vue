<template>
    <div class="hp-footer fs-16">
        <div class="text-center">
            <div class="contact-us inline-block fs-36">
                <span>联系我们</span><br>
                <!-- <span>GET IN TOUCH WITH US INSTANTLY</span> -->
            </div>
        </div>
        <div class="form-container" layout="row" layout-wrap>
            <div class="form" flex="60" flex-xs="100">
                <div class="form-inner">
                    <span class="color-grey">留下您的联系方式，我们将联系你</span>
                    <input type="text" placeholder="名字" v-model="uname"/>
                    <input type="text" placeholder="电话" v-model="phone"/>
                    <input type="text" placeholder="所在城市" v-model="area"/>
                    <textarea type="text" rows="3" placeholder="留言" v-model="suggestion"/>
                    <a class="btn btn-grey" @click="submitClick">提交</a>
                </div>
            </div>
            <div class="form-right" flex>
                <span class="fs-14 color-grey">或者，您也可以联系我们</span>
                <br><br>
                <div>
                    <!-- <span class="inline-block cirle-grey"></span> -->
                    <svg class="icon location fs-24" aria-hidden="true">
                        <use xlink:href="#icon-location"></use>
                    </svg>
                    <span class="inline-block">&nbsp;&nbsp;武汉市光谷CBC大厦10层</span>
                </div><br>
                <div>
                    <svg class="icon telphone fs-24" aria-hidden="true">
                        <use xlink:href="#icon-telphone"></use>
                    </svg>
                    <a class="inline-block">&nbsp;&nbsp;+027-59277860</a>
                    <a class="call-phone" href="tel:+027-59277860">拨打</a>
                </div>
                <br>
                <img src="../../static/images/erweima.jpg" alt="">
            </div>
        </div>
        <div class="map-container" id="baidu_map"></div>
        <div class="foot-container text-center">
            <div class="line"></div>
            <span class="inline-block" style="font-size: 12px;">© 2014 Baikal UI Kit All rights reserved</span>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    export default {
        name: 'hp-footer',
        data() {
            return {
                suggestion: '',
                phone: '',
                area: '',
                uname: ''
            };
        },
        mounted() {
            // 百度地图API功能
            var map = new BMap.Map("baidu_map");    // 创建Map实例
            var point = new BMap.Point(114.440418,30.435231);
	        map.centerAndZoom(point, 15);  // 初始化地图,设置中心点坐标和地图级别
	        //添加地图类型控件
	        map.addControl(new BMap.MapTypeControl({
	        	mapTypes:[
                    BMAP_NORMAL_MAP,
                    BMAP_HYBRID_MAP
                ]}));	  
	        map.setCurrentCity("武汉");          // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
            var myIcon = new BMap.Icon("./static/images/map-marker2.png", new BMap.Size(88, 87), {    
                // 指定定位位置。   
                // 当标注显示在地图上时，其所指向的地理位置距离图标左上    
                // 角各偏移10像素和25像素。您可以看到在本例中该位置即是   
                // 图标中央下端的尖角位置。    
                anchor: new BMap.Size(26, 60),    
                // 设置图片偏移。   
                // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您   
                // 需要指定大图的偏移位置，此做法与css sprites技术类似。    
                // imageOffset: new BMap.Size(0, 0 - index * 25)   // 设置图片偏移    
            }); 
            var marker = new BMap.Marker(point, {icon: myIcon});
            map.addOverlay(marker); 
        },
        methods: {
            submitClick() {
                if (!this.uname) {
                    this.$eventHub.$emit('ALERT', {type: 'warning', message: '请输入您的名字'});
                    return;
                }
                if (!this.phone) {
                    this.$eventHub.$emit('ALERT', {type: 'warning', message: '请输入您的手机号码'});
                    return;
                }
                if (!this.checkMobile(this.phone)) {
                    this.$eventHub.$emit('ALERT', {type: 'warning', message: '请输入正确的手机号码'});
                    return;
                }
                const url = 'http://mgnpd.com/index.php?s=/Home/Index/add2.html';
                const data = {
                    uname: this.uname,
                    phone: this.phone,
                    area: this.area,
                    liuyan: this.suggestion
                };
                $.ajax({
                    dataType: 'x-www-form-urlencoded',
                    type: "POST",
                    url,
                    data,
                    success: (res) => {
                        // console.log('success');
                        // debugger;
                        this.$eventHub.$emit('ALERT', {type: 'success', message: '提交成功，我们会尽快联系你'});
                    },
                    error: (res) => {
                        this.$eventHub.$emit('ALERT', {type: 'success', message: '提交成功，我们会尽快联系你'});
                        // console.log('error');
                        // debugger;
                    }
                });
            },
            submitNewClick() {
                if (!this.uname) {
                    this.$eventHub.$emit('ALERT', {type: 'warning', message: '请输入您的名字'});
                    return;
                }
                if (!this.phone) {
                    this.$eventHub.$emit('ALERT', {type: 'warning', message: '请输入您的手机号码'});
                    return;
                }
                if (!this.checkMobile(this.phone)) {
                    this.$eventHub.$emit('ALERT', {type: 'warning', message: '请输入正确的手机号码'});
                    return;
                }
                const url = '/api/liuyan';
                const data = {
                    name: this.uname,
                    phone: this.phone,
                    city: this.area,
                    message: this.suggestion
                };
                $.ajax({
                    dataType: 'application/json;charset=utf-8',
                    type: "POST",
                    url,
                    data,
                    success: (res) => {
                        // console.log('success');
                        // debugger;
                        this.$eventHub.$emit('ALERT', {type: 'success', message: '提交成功，我们会尽快联系你'});
                    },
                    error: (res) => {
                        this.$eventHub.$emit('ALERT', {type: 'success', message: '提交成功，我们会尽快联系你'});
                        // console.log('error');
                        // debugger;
                    }
                });
            },
            checkMobile(mobile) {  
                var re = /^1\d{10}$/;
                if (re.test(mobile)) {
                    return true;
                }
                return false;
            }
        },
        computed: {}
    }
</script>

<style lang="scss" scoped>
    @import '../styles/var';
    .hp-footer{
        padding-top: 50px;
        position: relative;
        background-color: #fff;
    }
    .contact-us{
        padding: 0 3rem;
        border-left: solid 4px $primary-color;
        border-right: solid 4px $primary-color;
        display: inline-block;
    }
    .form-container{
        .form,.form-right{
            margin: 50px 0px;
        }
        .form{
            border-right: solid 1px #D2D2D2;
            input,textarea{
                display: block;
                background-color: #F3F3F3;
                margin: 20px 0px;
                width: 100%;
            }
            input{
                height: 40px;
                line-height: 40px;
            }
            textarea{
                resize: none;
            }
            .form-inner{
                width: 60%;
                margin-left: 30%;
                .btn-grey{
                    width: 100%;
                }
            }
        }
        .form-right {
            vertical-align: top;
            padding-left: 50px;
            .cirle-grey{
                border-radius: 50%;
                width: 30px;
                height: 30px;
                background-color: #D2D2D2;
            }
            .call-phone{
                color: #4A90E2;
                font-size: 18px;
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
    .map-container{
        height: 390px;
        width: 100%;
    }
    .foot-container{
        height: 100px;
        background-color: #333;
        position: relative;
        .line{
            width: 96%;
            border-top: solid 1px #979797;
            position: absolute;
            top: 5px;
            left: 2%;
        }
        span{
            height: 100px;
            line-height: 100px;
        }
    }
    .mobile-app{
        .form,.form-right{
            margin: 30px 0px;
            margin-bottom: 0;
        }
        .form-inner{
            width: 100%!important;
            padding: 0 50px!important;
            margin-left: 0!important;
        }
    }
</style>
