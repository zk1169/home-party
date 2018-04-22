<template>
    <div class="hp-footer">
        <div class="text-center">
            <div class="contact-us inline-block">
                <span>联系我们</span><br>
                <span>GET IN TOUCH WITH US INSTANTLY</span>
            </div>
        </div>
        <div class="form-container" layout="row" layout-wrap>
            <div class="form" flex="60" flex-xs="100">
                <div class="form-inner">
                    <span>留下您的联系方式，我们将联系你</span>
                    <input type="text" placeholder="名字"/>
                    <input type="text" placeholder="电话"/>
                    <input type="text" placeholder="所在城市"/>
                    <textarea type="text" rows="3" placeholder="留言"/>
                    <a class="btn btn-grey">提交</a>
                </div>
            </div>
            <div class="form-right" flex>
                <span>或者，您也可以联系我们</span>
                <br><br>
                <div>
                    <span class="inline-block cirle-grey"></span>
                    <span class="inline-block">武汉光谷CBD<br>2栋9楼1203</span>
                </div><br>
                <div>
                    <span class="inline-block cirle-grey"></span>
                    <span class="inline-block">+44 123-456-4895<br>321-568-4562</span>
                </div>
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
    export default {
        name: 'hp-footer',
        data() {
            return {};
        },
        mounted() {
            // // 百度地图API功能
	        // var map = new BMap.Map("baidu_map");    // 创建Map实例
	        // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
	        // //添加地图类型控件
	        // map.addControl(new BMap.MapTypeControl({
	        // 	mapTypes:[
            //         BMAP_NORMAL_MAP,
            //         BMAP_HYBRID_MAP
            //     ]}));	  
	        // map.setCurrentCity("武汉");          // 设置地图显示的城市 此项是必须设置的
	        // map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        },
        methods: {

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
                margin: 10px 0px;
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
