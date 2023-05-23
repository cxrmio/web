<template>
  <div class="detail">

    <!-- 主要内容区域 -->
    <section class="con">
      <!-- 主要内容区域 -->
      <div class="mainCon">
        <!-- 左侧放大镜区域 -->
        <div class="previewWrap">
          <!--放大镜效果-->
          <div class="imgg"></div>
        </div> 
        <!-- 右侧区域布局 -->
        <div class="InfoWrap">
          <div class="goodsDetail">
            <div class="priceArea">
              <div class="priceArea1">
                <div class="bookname">安徒生童话</div>
                <div class="title">价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格:</div>
                <div class="price">
                  <i>¥ 49.99元</i>
                </div>
              </div>
            </div>
          </div>

          <div class="choose">
            <div class="cartWrap">
              <div class="controls">
                <input autocomplete="off" class="itxt" v-model="skuNum" @change="changeSkuNum" />
                <a href="javascript:" class="plus" @click="skuNum++">+</a>
                <a href="javascript:" class="mins" @click="skuNum <= 1 ? (skuNum = 1) : skuNum--">-</a>
              </div>
              <div class="add">
                <!-- <a href="javascript:" @click="addgoodcat"></a> -->
                <router-link to="/AddCartSuccess">加入购物车</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 内容详情页 -->
    <section class="product-detail">
      <div class="detail">
        <div class="fitting">
        </div>
        <div class="intro">
          <ul class="tab-wraped">
            <li class="active">
              <a href="###"> 图书介绍 </a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="one" class="tab-pane active">
              <ul class="goods-intro">
                <li>书名：安徒生童话</li>
                <li>作者：安徒生</li>
                <li>定价：49.99元</li>
                <li>装帧:精装</li>
                <li>出版社：湖南少年儿童出版社</li>
                <li>出版时间：2021.2</li>
                <li>作者简介：安徒生，丹麦19世纪童话作家，被誉为“世界儿童文学的太阳”。他的作品《安徒生童话》已经被译为150多种语言，在全球各地发行和出版。</li>
                <li>主要篇目：《海的女儿》：小人鱼为了能和自己所爱的陆地上的王子在一起．用自己美妙的嗓音和三百年的生命换来了巫婆的药酒，于是，她有了一双美丽的脚，每走一步就像走在碎玻璃上一样疼痛。眼看着王子和别人结婚，她宁可牺牲自己的生命，也要为王子祝福。
                  《丑小鸭》：丑小鸭历经千辛万苦、重重磨难之后变成了白天鹅，那是因为它心中有着梦想。
                  《屎壳郎》：皇宫马厩的一只屎壳郎竟然要求和皇帝的战马享有一样的待遇——钉上金掌。为此，他不惜游历一番，以证明自己和那匹马一样，是个不可小看的人物。在他最为得意，认为梦想成真的那刻．却被皇帝压在马鞍底下。
                  《野天鹅》：这是一场善与恶的斗争。艾丽莎是个柔弱的女子，但她却战胜了比她强大得多、有权有势的王后和主教。救出了被王后的魔法变成天鹅的十一位哥哥。她可以成功靠的是她的勇气、决心和毅力。面对荨麻的刺痛和一年不能说话的痛苦，这需要多大的勇气去面对啊。即使面对主教对她的诬陷和把她烧死的惩罚，她也没有放弃，一直坚持到最后一分钟，终于完成了她的工作。
                  《夜莺》：夜莺那曼妙的嗓音，赢得了全世界博学之士的推崇，也赢得了中国皇帝的眼泪。在皇帝弥留之际，夜莺再次来到皇帝的身边为他歌唱，阎王使者潸然泪下后飘然离去，皇帝的生命得到了延续。
                  《雪人》：一个刚刚诞生想知道爱情是什么的雪人，竟然神魂颠倒地爱上了房子里的炉子。它们彼此相爱，白天深情相对，晚上翩翩起舞，度过了一个美丽的冬天。其间虽有短暂的挫折．却表明了雪人对炉子的真挚爱情。最后雪人融化在爱人的怀抱里。
                  《打火匣》：一个士兵娶到了公主，并成为国王。《拇指姑娘》：有一位老婆婆非常渴望有一个美丽的小孩子，巫婆帮助她实现了这个愿望，让她得到了漂亮、善良的拇指姑娘。可有一天，拇指姑娘被一只癞蛤蟆偷走了，从此，她开始了惊险、梦幻般的旅程。在拇指姑娘的旅程中，癞蛤蟆和鼹鼠都要娶拇指姑娘，但拇指姑娘最后却嫁给了花世界的国王。 [4]
                  《园丁与主人》：拉森是一个忠诚的、有天赋的园丁，他一生都在照顾主人的园子。但是，主人却对他的天才园艺视而不见，只有不停的抱怨。在经历一场暴风雨后。主人终于认识到了拉森的忠实和聪明。
                  《冰雪女皇》：冰雪皇后为了解除下在自己身上的咒语，带走了可伊，小格尔达历经千辛万苦，找到了冰雪皇后的宫殿，救出了自己的朋友，回到了日夜思念他们的奶奶的身边。
                  《小猪倌》：年轻的王子为了赢得邻国的一位公主的芳心．乔装打扮成皇宫里最卑微的猪倌。他发挥才智做了一个能够演奏舞曲的拨浪鼓，并提出只有公主的一百个吻才能交换。为了得到它，公主答应了他的要求。亲吻时却被皇帝撞见了，公主因此被赶出了皇宫，这时候王子也看清楚了公主的真实面目扬长而去。
                  《笨蛋杰克》：一位国王想为女儿挑个好丈夫，然而公主厌倦了身边的王公贵族，因为他们只是一些会阿谀奉承的家伙。于是国王决定从贫民中为女儿选择爱人。来求婚的人不计其数，他们都穿着考究的制服，装出一副有学问的样子。可是当他们走进宫殿时却都丑态百出，公主感到厌恶至极。最终，骑着山羊闯进皇宫的杰克给公主带来了欢笑，也赢得了公主的爱情。
                  《豌豆上的公主》：古时候有个王子，想娶一位真正的公主为妻。一日深夜．一名自称是公主的女子来借宿。为了弄清女子是否是真正的公主，王后在她的床板上放了一粒豌豆，然后垫上二十层床垫和二十层鸭绒被。次日早上，公主说自己被床上不知道有个什么东西硌得浑身发疼一晚上没睡。王子终于找到了他心爱的“真正的公主”，一个真正的公主，才会拥有那么娇嫩的皮肤，因此才会通过豌豆的考验。
                  《坚定的锡兵》：哈迪和其他的玩具锡兵不太一样，他只有一条腿。但是他却有一颗勇敢、坚定、充满爱的心，这弥补了他身体的残缺。哈迪深爱着一位纸做的跳舞娃娃．但是他们要想在一起却很难。经过几次悲惨的遭遇后．哈迪被扔进火炉，虽然四周烈焰熊熊。他仍热切地凝望着心爱的跳舞娃娃。接着刮起一阵风，跳舞娃娃被吹进了火炉，来到锡兵的身边。 [4]
                  《肉肠签子汤》：在厨房地下室里，耗子们正在用发霉的面包、熏咸肉和馊牛奶举办一年一度的宴会。耗子太后给耗子国王下了最后的通牒，必须从7位公主里选择一个做皇后。国王深思熟虑后宣布，谁能给他带回肉肠签子汤的制作方法，谁就能成为他的新娘。最后，出乎意料的是，聪明、机智的耗子厨娘赢得了胜利，当上了皇后。肉肠签子汤是丹麦的一句谚语，寓意为言之无物的谈话或文章。</li>
                
              </ul>
              
            </div>
          </div>
        </div>
      </div> 
    </section>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'DeTail',
  data() {
    return {
      skuNum: 1
    }
  },
  mounted() {
    this.$store.dispatch('getDetailList', this.$route.params.skuId)
  },
  methods: {
    // 点击按钮，改变产品属性值的高亮效果 排他思想 干掉所有人，复活我自己
    changeActive(myself, arr) {
      arr.forEach((item) => {
        item.isChecked = 0
      })
      myself.isChecked = 1
    },
    // 商品数量改变
    changeSkuNum(e) {
      // console.log(e.target.value)
      const value = e.target.value * 1
      // 用户输入非法情况 NaN
      if (isNaN(value) || value < 1) {
        this.skuNum = 1
        // value++
      } else {
        this.skuNum = parseInt(value)
      }
    },
  },
  computed: {
    ...mapGetters(['categoryView', 'skuInfo', 'spuSaleAttrList']),
    skuImageList() {
      return this.skuInfo.skuImageList || [{}]
    }
  }
}
</script>

<style lang="less" scoped>
.imgg {
  float: left;
  height: 538px;
  width: 392px;
  background-image: url(./images/book3.jpg);
}
.bookname {
  font-size: large;
  font-weight: 700;
  padding-bottom: 10px;
}
.detail {
  .con {
    width: 1200px;
    margin: 15px auto 0;

    .conPoin {
      padding: 9px 15px 9px 0;

      & > span + span:before {
        content: '/\00a0';
        padding: 0 5px;
        color: #ccc;
      }
    }

    .mainCon {
      overflow: hidden;
      margin: 5px 0 15px;

      .previewWrap {
        float: left;
        width: 400px;
        position: relative;
      }

      .InfoWrap {
        width: 700px;
        float: right;

        .InfoName {
          font-size: 20px;
          line-height: 21px;
          margin-top: 15px;
        }

        

        .priceArea {
          background: #c5e9fa;
          padding: 7px;
          margin: 13px 0;

          .priceArea1 {
            overflow: hidden;
            line-height: 28px;
            margin-top: 10px;

            

            .title {
              float: left;
              font-size: 900;
              margin-right: 15px;
            }

            .price {
              float: left;
              color: black;

              i {
                font-size: 20px;
              }

              em {
                font-size: 20px;
                font-weight: 700;
              }

              
            }

            
          }

          
        }


        .choose {
          .chooseArea {
            overflow: hidden;
            line-height: 28px;
            margin-top: 10px;

            dl {
              overflow: hidden;
              margin: 13px 0;

              dt {
                margin-right: 15px;
                float: left;
              }

              dd {
                float: left;
                margin-right: 5px;
                color: #666;
                line-height: 24px;
                padding: 2px 14px;
                border-top: 1px solid #eee;
                border-right: 1px solid #bbb;
                border-bottom: 1px solid #bbb;
                border-left: 1px solid #eee;

                &.active {
                  color: green;
                  border: 1px solid green;
                }
              }
            }
          }

          .cartWrap {
            .controls {
              width: 48px;
              position: relative;
              float: left;
              margin-right: 15px;

              .itxt {
                width: 38px;
                height: 37px;
                border: 1px solid #ddd;
                color: #555;
                float: left;
                border-right: 0;
                text-align: center;
              }

              .plus,
              .mins {
                width: 15px;
                text-align: center;
                height: 17px;
                line-height: 17px;
                background: #f1f1f1;
                color: #666;
                position: absolute;
                right: -8px;
                border: 1px solid #ccc;
              }

              .mins {
                right: -8px;
                top: 19px;
                border-top: 0;
              }

              .plus {
                right: -8px;
              }
            }

            .add {
              float: left;

              a {
                background: rgb(98, 136, 192);
                padding: 0 25px;
                font-size: 16px;
                color: #fff;
                height: 36px;
                line-height: 36px;
                display: block;
              }
            }
          }
        }
      }
    }
  }

  .product-detail {
    width: 1200px;
    margin: 30px auto 0;
    overflow: hidden;

    .aside {
      width: 10px;
      float: left;
      border: 1px solid #ccc;

      .tabWraped {
        height: 40px;

        h4 {
          border-top: 3px solid #fff;
          float: left;
          line-height: 37px;
          width: 105px;
          text-align: center;
          border-bottom: 1px solid #ccc;

          &.active {
            border-top: 3px solid #e1251b;
            border-bottom: 0;
            font-weight: normal;
          }
        }
      }

      .tabContent {
        padding: 10px;

        .tab-pane {
          display: none;

          &.active {
            display: block;
          }

          &:nth-child(1) {
            .partList {
              overflow: hidden;

              li {
                width: 50%;
                float: left;
                border-bottom: 1px dashed #ededed;
                line-height: 28px;
              }
            }

            .goodsList {
              & > li {
                margin: 5px 0 15px;
                border-bottom: 1px solid #ededed;
                padding-bottom: 5px;

                .list-wrap {
                  .p-img {
                    text-align: center;

                    img {
                      width: 152px;
                    }
                  }

                  .price {
                    font-size: 16px;
                    color: #c81623;
                  }

                  .operate {
                    text-align: center;
                    margin: 5px 0;

                    a {
                      background-color: transparent;
                      border: 1px solid #8c8c8c;
                      color: #8c8c8c;
                      display: inline-block;
                      padding: 2px 14px;
                      line-height: 18px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .detail {
      width: 1200px;
      float: left;

      .fitting {
        border: 1px solid #ddd;
        margin-bottom: 15px;

        .kt {
          border-bottom: 1px solid #ddd;
          background: #f1f1f1;
          color: #333;
          padding: 5px 0 5px 15px;
        }

        .good-suits {
          height: 170px;
          padding-top: 10px;

          .master {
            width: 127px;
            height: 165px;
            text-align: center;
            position: relative;
            float: left;

            img {
              width: 87px;
            }

            p {
              color: black;
              font-size: 16px;
              font-weight: 700;
            }

            i {
              position: absolute;
              top: 48px;
              right: -25px;
              font-size: 16px;
            }
          }

          .suits {
            width: 668px;
            height: 165px;
            float: left;

            .suitsItem {
              float: left;
              width: 127px;
              padding: 0 20px;
              text-align: center;

              img {
                width: 120px;
                height: 130px;
              }

              p {
                font-size: 12px;
              }

              label {
                display: block;
                position: relative;

                input {
                  vertical-align: middle;
                }

                span {
                  vertical-align: middle;
                }
              }
            }
          }

          .result {
            border-left: 1px solid #ddd;
            width: 153px;
            height: 165px;
            padding-left: 20px;
            float: left;

            .num {
              font-size: 14px;
              margin-bottom: 10px;
              margin-top: 10px;
            }

            .price-tit {
              font-weight: bold;
              margin-bottom: 10px;
            }

            .price {
              color: #b1191a;
              font-size: 16px;
              margin-bottom: 10px;
            }

            .addshopcar {
              background-color: #c5e9fa;
              border: 1px solid #c5e9fa;
              padding: 10px 25px;
              font-size: 16px;
              color: black;
              display: inline-block;
              box-sizing: border-box;
            }
          }
        }
      }

      .intro {
        .tab-wraped {
          background: #ededed;
          // border: 1px solid #ddd;
          overflow: hidden;

          li {
            float: left;

            & + li > a {
              border-left: 1px solid black;
            }

            &.active {
              a {
                // border: 0;
                background: #c5e9fa;
                color: black;
              }
            }

            a {
              display: block;
              height: 40px;
              line-height: 40px;
              padding: 0 11px;
              text-align: center;
              color: #666;
              background: #fcfcfc;
              border-top: 1px solid #ddd;
              border-bottom: 1px solid #ddd;
            }
          }
        }

        .tab-content {
          .tab-pane {
            display: none;

            &.active {
              display: block;
            }

            &:nth-child(1) {
              .goods-intro {
                padding-left: 10px;

                li {
                  margin: 10px 0;
                }
              }

              .intro-detail {
                img {
                  width: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
