<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <!-- <h1>{{ this.$store.state.home.castList }}</h1> -->
    <!-- <h2>{{ home.castList }}</h2> -->
    <!-- <h3>{{ catelistll }}</h3> -->
    <div class="container">
      <div @mouseleave="hiddenStyle" @mouseenter="showNavStyle" class="quantop">
        <h2 class="all">全部书籍分类</h2>
        <!-- 过渡动画 -->
        <transition name="sort">
          <div class="sort" v-show="navShow">
            <div class="all-sort-list2" @click="goSearch($event)">
              <div class="item" v-for="(c1, index) in navdata" :key="index" :class="index == currentIndex ? 'cur' : ''">
                <h3 @mouseenter="showStyle(index)">
                  <a :data-categoryName="c1.navdataName" :data-category1Id="c1.index">{{ c1.name }}</a>
                </h3>
                
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// 引如lodash中节流
import { throttle } from 'lodash'
export default {
  name: 'TypeNav',
  data() {
    return {
      currentIndex: -1,
      navShow: true,
      navdata:[
        {
          name:'经典著作.哲学类'
        },
        {
          name:'社会科学.政治法律'
        },
        {
          name:'军事科学.财经管理'
        },
        {
          name:'历史地理.文化教育'
        }
        ,
        {
          name:'小学文教.初中文教'
        }
        ,
        {
          name:'高中文教.语言文学'
        }
        ,
        {
          name:'中国文学.外国文学'
        }
        ,
        {
          name:'音乐.美术雕塑'
        }
        ,
        {
          name:'摄影影视.舞蹈戏剧'
        }
        ,
        {
          name:'书法篆刻.自然科学'
        }
        ,
        {
          name:'数理化学.医药卫生'
        }
        ,
        {
          name:'农业科学.工业技术'
        }
        ,
        {
          name:'计算机技术.建筑工程'
        }
        ,
        {
          name:'生活休闲.少儿读物'
        }
      ]
    }
  },
  mounted() {
    if (this.$route.path !== '/home') {
      this.navShow = false
    }
  },
  computed: {
    // ...mapState(['home'])
    ...mapState({
      catelistll(state) {
        return state.home.castList.slice(0, 16)
        // state.home.castList.splice(16, 1)
        // return state.home.castList
      }
    })
  },
  methods: {
    // 读取鼠标经过的哪一个一级分类
    showStyle: throttle(function (index) {
      this.currentIndex = index
      // console.log(index)
    }, 45),

    // 鼠标离开移除样式 商品分类列表进行隐藏
    hiddenStyle() {
      this.currentIndex = -1
      if (this.$route.path !== '/home') {
        this.navShow = false
      }
    },
    // 鼠标进入导航栏显示其子导航栏
    showNavStyle() {
      this.navShow = true
    },
    // 点击导航栏菜单路由传参
    goSearch(event) {
      
        // this.$router.push({ name: 'search', query: query })
        // 合并参数进行跳转
    
          this.$router.push('search')
        
      }
      // console.log(categoryname)

      // this.$router.push({name:"search", query: {}})
    
    // methods结尾
  }
}
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #c5e9fa;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 47px;
      background-color: #c5e9fa;
      line-height: 45px;
      text-align: center;
      color: black;
      font-size: 14px;
      font-weight: bold;
    }

      

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .cur {
          background-color: #007acc;
        }
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            // margin: -1px 0 0 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
      }
    }
    .sort-enter {
      height: 0;
    }
    .sort-enter-to {
      height: 461px;
      overflow: hidden;
    }
    .sort-enter-active {
      transition: all 0.2s linear;
    }
  }
}
</style>
