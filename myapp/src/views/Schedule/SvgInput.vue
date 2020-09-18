<template>
    <div class="input-wrap">
        <div class="realname-box">
            <div class="left">
                请进行实名登记
            </div>
            <div class="right">
                <span>还需1个座位实名信息</span>
                <i class="iconfont icon-changyongicon"></i>
            </div>
        </div>
        <div class="phone-input">
            <div>
                <span>手机号：</span>
                <span>13617927204</span>
            </div>
            <i class="iconfont icon-changyongicon"></i>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.input-wrap{
    width:calc(100% - 8.333vw);
    height:27.778vw;
    padding: 0 2.778vw;
    margin: 22.222vw 4.167vw;
    box-sizing: border-box;
    background:#fff;
    .realname-box{
        height: 13.889vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 3.611vw;
        .left{
            margin-left: 1.111vw;
            color: #ff5f16;
            font-size: 3.333vw;
        }
        .right{
            color: #bdc0c5;
            margin-right: 1.111vw;
        }
    }
    .phone-input{
        height:13.889vw;
        display: flex;
        justify-content:space-between;
        align-items: center;
    }
}
</style>
