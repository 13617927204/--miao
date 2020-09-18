<template>
  <div class="perorder">
    <div class="title">
      <div class="return" @click="$router.go(-1)">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz
            ///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
          alt
        />
      </div>
      <span>确认订单</span>
    </div>
    <div class="decorate"></div>
    <div class="bg-item">
        <i class="iconfont icon-icon-"></i>
        <div>
            <div>133 3333 3333</div>
            <div>温馨提醒：购票信息请查看订单详情，不再发送短信</div>
        </div>
    </div>
    <div class="perorder-item">
        <div class="perorder-item-1">
            <img src="https://pic.maizuo.com/usr/movie/c44ea8d1ae6d86184a9ed602cd98c3d2.jpg" alt="">
        </div>
        <div class="perorder-item-2">
            <div class="perorder-item-2-1">八佰(2D订座票)</div>
            <div>橙天国际（梦立方店）</div>
            <div>2020-09-19 14:25</div>
            <div>4号激光厅（+2元得果汁一杯... <span> 4排8座</span></div>
            <div class="perorder-item-2-5"><span>￥37.00</span><span>x1</span></div>
        </div>
    </div>
    <div class="perorder-price">
        <div>商品金额</div>
        <div>￥37.00</div>
    </div>
    <div class="card-items">
        <div class="card-item-1">
            <i class="iconfont icon-hongbao"></i>
            <span>卖座券</span>
        </div>
        <div class="card-item-2">
            <span>0张券可用</span>
            <i class="iconfont icon-changyongicon"></i>
        </div>
    </div>
    <div class="card-items">
        <div class="card-item-1" style="flex:1">
            <i class="iconfont icon-yue-fuben"></i>
                <span>余额（剩余<span>11</span>）</span>
        </div>
    </div>
    <div class="card-items">
        <div class="card-item-1">
            <span>发票</span>
        </div>
        <div class="card-item-2">
            <span>不开发票</span>
            <i class="iconfont icon-changyongicon"></i>
        </div>
    </div>
    <div class="help-content">
        <ul>
            <li>注意事项：</li>
            <li>
                <div>
                    *
                </div>
                <div>
                    即日起购票成功后，订座信息不再发送短信，改为公众号通知或App站内通知
                </div>
            </li>
            <li>
                <div>
                    *
                </div>
                <div>
                    该影城不支持订座票退换，请您确认后再进行购买
                </div>
            </li>
            <li>
                <div>
                    *
                </div>
                <div>
                    请确定号码无误，支付成功后将无法修改
                </div>
            </li>
            <li>
                <div>
                    *
                </div>
                <div>
                    更多信息请查看影院详情
                </div>
            </li>
        </ul>
    </div>
    <div class="pay">
        <div>
            提交订单
        </div>
        <div>
            <span>实付</span>
            <span>￥37.00</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$store.commit('isTabbrshow', false)
  }
}
</script>

<style lang='scss' scoped>
.perorder{
    background:#F4F4F4;
    height:100vh;
}
.title {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 43.999px;
  text-align: center;
  line-height: 43.999px;
  z-index: 999;
  background: white;
  span{
      color: #191a1b;
      font-size: 4.722vw;
  }
}
.return {
  position: absolute;
  z-index: 999;
  width: 29.999px;
  height: 29.999px;
  left: 5px;
  top: 5px;
  img {
    width: 29.999px;
    height: 29.999px;
  }
}
.decorate{
    margin-top:43.999px;
    height:3px;
    background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAADCAMAAACJf2XKAAAB4FBMVEX76eLs8/v/8/P/7On/9/f/+/v76eX////i7ff7+//w8/v78PD3+//l8Pf76en/8PD/8Ozp8Pfl8Pvi8Pfz9//s8/v77Onz9/v77OztjXt2rN3////+//94rd7ujnzukoDvloXukH7u9fv++Pf1+f18sN/xpJV7r9/++fj4+/763dj5+/6Ou+PP4vP749/woJHyp5r+8/HZ6Pb85uP//Py71u96r972wbfukH+fxeepy+r51c7O4fO20+3yp5ng7fj85+SYwebf7Pex0Ozr8/r///7q8vqFteG41O763tn97+z4zsb1vLH86+jc6vf3ysH3y8LJ3/La6fbD2/H9/v/yq57V5vWKueL+9vX98vD1v7WPu+T2wLfx9/zyraCAsuCDtOHz+Pzp8vqSveSszev//v3/+vnvmIj2xbzI3vLwnIyGtuGgxuj6/P6kyOnulIPujn37/f786OXzsaX8/v+Zwubxo5T0taruj32UvuV5rt7+9fTzsqbwn5D7497m8PmJuOLH3fF3rd7vmYnl7/n87On52dPuk4L4z8jy9/zT5fX1u7D//PvC2vClyen0t6udxOf62tTwnY3//f398O351M2Bs+C81++CtOB/suCqzOqvz+z/+/qNuuP2xLvyqZtfPoWxAAAAGXRSTlNHRUNGQkFHQEdBRERCRkZERUZGR0NERkNFYI5yfQAAAVNJREFUOMuFjmVPQ0EUBR9QSnG30lLH3d3d3d3d3d3dnb9KuLskPZs03I/zZvY8SQn3GRdAd3vnD6ctvye+vYi++t1IvKViBYPGSuIN9d0Y7JyxgdJo9I+rL4gXpQoDb6fEDR06DGJyiKtGXzAYj2QDW0voa0Y+iOun0Fde6YkPfWkwCIpiD2UUo99TqyIen4V+SnII8c60PQwmCn6xZI6edtkbc9/4hq7NQLx3QI1v3PQRT6iZxmAzjP1kUzP6r5cLxA+70J85XyduzF/DIPeA+OCJFoOxIzZQF4G+6XmWeNk8+oHXscRDM5MwWM0mXvg4jMF+OhvI60c/uCSceOtyIAYbD8QnE00YtFexhySF2dmxk8klOLmMf1AI58C5G/qSD+deYmDPuK0wIP0NeAi+N+d+gu/Cua+lAcGXrHngLPhWnLsKvg3nToLv+d+Au4UBxx+SMnPoXCPpFAAAAABJRU5ErkJggg==) repeat-x;
}
  .bg-item{
      display: flex;
      padding:4.722vw 0;
      height:11.389vw;
      align-items: center;
      margin-bottom: 2.778vw;
      background:#fff;
      i{
          font-size: 6.944vw;
          margin:0 1.111vw 0 3.056vw;
      }
      div:nth-child(1){
          color: #2c3e50;
          font-size: 5vw;
      }
      div:nth-child(2){
          font-size: 3.056vw;
          color: #ff510b;
      }
  }
.perorder-item{
    display: flex;
    padding-left: 4.167vw;
    background: #fff;
    height: 40.833vw;
    align-items:center;
    .perorder-item-1{
        margin-right:2.778vw;
        img{
            width:23.611vw;
            height: 32.5vw;
        }
    }
    .perorder-item-2{
        font-size: 3.611vw;
        padding: 4.167vw 4.167vw 4.167vw 0;
        height: 32.5vw;
        line-height: 5.556vw;
        position: relative;
        .perorder-item-2-1{
            font-size: 4.167vw;
            color: #191a1b;
            line-height: 6.389vw;
        }
        .perorder-item-2-5{
            position: absolute;
            bottom: 4.167vw;
            display: flex;
            justify-content: space-between;
            width:100%;
            span:nth-child(1){
                            color: #ff5f16;
            font-size: 4.167vw;
            }
        }
    }
}
.perorder-price{
    display: flex;
    justify-content: space-between;
    width:100%;
    height: 14.167vw;
    padding: 3.333vw 4.167vw;
    box-sizing: border-box;
    background: #fff;
    font-size: 3.611vw;
    align-items: center;
    div:nth-child(2){
        color: #ff5f16;
    }
    margin-bottom: 2.778vw;
}
.card-items{
    width:100%;
    display: flex;
    padding: 0 4.167vw;
    box-sizing: border-box;
    height:13.889vw;
    justify-content: space-between;
    background: #fff;
    align-items: center;
    .card-item-1{
        i{
            color:#ff5f16;
            margin-right: 15px;
            font-size: 20px;
        }
    }
}
.help-content{
    margin: 2.778vw auto 19.444vw;
    width:calc(100% - 7.222vw);
    height: 55.556vw;
    box-sizing: border-box;
    padding: 3.333vw 4.167vw;
    background: #fff;
    border-radius: 2.778vw;
    ul{
        li{
            width:100%;
            display: flex;
            font-size: 3.889vw;
            line-height: 6.944vw;
            list-style: none;
            color: #a06b43;
            div:nth-child(1){
                margin-right: 1.389vw;
            }
        }
    }
}
.pay{
    position: fixed;
    bottom: 0;
    left: 0;
    height:13.889vw;
    width:100%;
    background: #fff;
    display: flex;
    flex-direction: row-reverse;
    div:nth-child(1){
        width: 26.389vw;
        height:13.889vw;
        line-height: 13.889vw;
        text-align: center;
        background: #ff5f16;
        color: #fff;
        margin-left: 4.167vw;
    }
    div:nth-child(2){
        span:nth-child(1){
            color: #191a1b;
            font-size: 4.167vw;
            line-height: 13.889vw;
            height: 13.889vw;
        }
        span:nth-child(2){
            color: #ff5f16;
        }
    }
}
</style>
