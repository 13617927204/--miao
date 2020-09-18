<template>
    <div>
        <div class="top" ref="myheader">
            <div class="left">
                <img @click="handleReturn"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz
                    ///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
                    alt
                />
            </div>
            <div class="title">
                <span>{{headName}}</span>
            </div>
            <div class="right">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['headName'],
  methods: {
    handleReturn () {
      if (this.headName === '设置') {
        this.$store.commit('isSetting', true)
      }
      this.$store.commit('isTabbrshow', true)
      this.$router.push('/center')
    }
  }
}
</script>
<style lang="scss" scoped>
.top{
    padding: 0 4.167vw;
    width:100%;
    height:12.222vw;
    display: flex;
    box-sizing: border-box;
    background: white;
    margin-bottom: 2.778vw;
}
.left{
    width:13.333vw;
    flex:1;
    img{
        width:8.333vw;
        height:8.333vw;
        display: inline-block;
        position: relative;
        top:1.944vw;
        left: -2.778vw;
    }
}
.title{
    flex:4;
    text-align: center;
    span{
        line-height: 12.222vw;
        color: #191a1b;
        font-size: 4.722vw;
    }
}
.right{
    flex:1;
    text-align: right;
    i{
        line-height: 12.222vw;
        font-size: 5vw;
    }
}
</style>
