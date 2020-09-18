<template>
    <nav>
        <ul>
            <!-- 声明式导航 -->
            <router-link to="/fitle" tag="li" activeClass="active">
                <p><i class="iconfont icon-dianying"></i></p>
                <p>电影</p>
            </router-link>
            <router-link to="/cinema" tag="li" activeClass="active">
                <p><i class="iconfont icon-dianying"></i></p>
                <p>电影院</p>
            </router-link>
            <router-link to="/information" tag="li" activeClass="active">
                <p><i class="iconfont icon-zixun"></i></p>
                <p>资讯</p>
            </router-link>
            <router-link to="/center" tag="li" activeClass="active">
                <p><i class="iconfont icon-Icon_wode"></i></p>
                <p>我的</p>
            </router-link>
        </ul>
    </nav>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
      .active{
    color:red
  }
  nav{
      position: fixed;
      bottom:0;
      height:13.889vw;
      left:0;
      width:100%;
      background: white;
      border-top:0.278vw solid grey;
      overflow: hidden;
      z-index: 99;
        ul{
            display:flex;
            li{
                flex: 1;
                text-align:center;
                p{
                    line-height: 5.556vw;
                    font-size:2.778vw;
                    i{
                        line-height: 8.333vw;
                        font-size: 6.389vw;
                        position: relative;
                        top:1.667vw
                    }
                }
            }
        }
  }
</style>
