<template>
  <div class="trade-container">
    <div class="content">
      <h5 class="receive">收件人地址：福建省莆田市莆田学院凤达</h5>
      <h5 class="receive">收件人姓名：百草  收件人电话号码：12306</h5>

      <div class="line"></div>
      <h5 class="pay">支付方式</h5>
      <div class="address clearFix">
        <span class="username selected">支付宝</span>
        <span class="username" style="margin-left: 5px">微信支付</span>
      </div>
      <div class="line"></div>
      <h5 class="pay">送货清单</h5>
      <div class="way">
        <h5>配送方式</h5>
        <div class="info clearFix">
          <span class="s1">圆通快递</span>
          <p>配送时间：预计7月17日（周三）09:00-15:00送达</p>
        </div>
      </div>
      <div class="detail">
        <h5>配送服务：快递 免邮 送运费险 付款后五天内发货</h5>
        <ul class="list clearFix" v-for="item in orderInfo.detailArrayList" :key="item.skuId">
          <li>
            <img :src="item.imgUrl" style="width: 100px; height: 100px" />
          </li>
          <li>
            <p>{{ item.skuName }}</p>
            <h4>7天无理由退货</h4>
          </li>
          <li>
            <h3>￥{{ item.orderPrice }}.00</h3>
          </li>
          <li>X{{ item.skuNum }}</li>
          <li>有货</li>
        </ul>
      </div>
      <div class="bbs">
        <h5>订单备注：</h5>
        <textarea placeholder="无备注" v-model="msg" class="remarks-cont"></textarea>
      </div>
      <div class="line"></div>
      <div class="bill">
        <h5>发票信息：</h5>
        <h5>使用优惠/抵用</h5>
      </div>
    </div>
    <div class="money clearFix">
      <ul>
        <li>
          <b
            ><i>{{ orderInfo.totalNum }}</i
            >件商品，总商品金额</b
          >
          <span>¥199.98</span>
        </li>
        <li>
          <b>返现：</b>
          <span>0.00</span>
        </li>
        <li>
          <b>运费：</b>
          <span>0.00</span>
        </li>
      </ul>
    </div>
    <div class="trade">
      <div class="price">
        应付金额: <span>¥199.98</span>
      </div>
      
    </div>
    <div class="sub clearFix">
      <!-- <router-link class="subBtn" to="/pay">提交订单</router-link> -->
      <a class="subBtn" @click="sumitOrder">提交订单</a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MyTrade',
  data() {
    return {
      msg: '', // 买家留言
      orderId: '' // 支付成功的订单号
    }
  },
  mounted() {
    this.$store.dispatch('getUserAdress')
    this.$store.dispatch('getOrderInfo')
  },
  methods: {
    // 默认地址选中项
    adressActive(item, adressInfo) {
      adressInfo.forEach((itema) => {
        itema.isDefault = 0
        item.isDefault = '1'
      })
    },
    // 提交订单
    async sumitOrder() {
      const { tradeNo } = this.orderInfo
      // console.log(tradeNo)
      const data = {
        consignee: this.adressINfo.consignee,
        consigneeTel: this.adressINfo.phoneNum,
        deliveryAddress: this.adressINfo.fullAddress,

        // consignee: 'nan',
        // consigneeTel: '13294263958',
        // deliveryAddress: '天安门',
        paymentWay: 'ONLINE',
        orderComment: this.msg,
        orderDetailList: this.orderInfo.detailArrayList
      }
      // 发起请求
      const res = await this.$API.reqsubmitOrder(tradeNo, data)
      console.log(res)
      if (res.code === 200) {
        this.orderId = res.data
        this.$router.push('/pay?orderId=' + this.orderId)
      } else {
        alert(res.message)
      }
    }
  },
  computed: {
    ...mapState({
      adressInfo: (state) => state.trande.adress,
      orderInfo: (state) => state.trande.orderInfo
    }),
    
  }
}
</script>

<style lang="less" scoped>
.trade-container {
  .title {
    width: 1200px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 21px;
  }

  .content {
    width: 1200px;
    margin: 10px auto 0;
    border: 1px solid #c5e9fa;
    padding: 25px;
    box-sizing: border-box;

    .receive,
    .pay {
      line-height: 36px;
      margin: 18px 0;
    }

    .address {
      padding-left: 20px;
      margin-bottom: 15px;

      .username {
        float: left;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #ddd;
        position: relative;
      }

      .username::after {
        content: '';
        display: none;
        width: 13px;
        height: 13px;
        position: absolute;
        right: 0;
        bottom: 0;
        
      }

      .username.selected {
        border-color: #c5e9fa;
      }

      .username.selected::after {
        display: block;
      }

      p {
        width: 610px;
        float: left;
        line-height: 30px;
        margin-left: 10px;
        padding-left: 5px;
        cursor: pointer;

        .s1 {
          float: left;
        }

        .s2 {
          float: left;
          margin: 0 5px;
        }

        .s3 {
          float: left;
          width: 56px;
          height: 24px;
          line-height: 24px;
          margin-left: 10px;
          background-color: #878787;
          color: #fff;
          margin-top: 3px;
          text-align: center;
        }
      }

      p:hover {
        background-color: #ddd;
      }
    }

    .line {
      height: 1px;
      background-color: #ddd;
    }

    .way {
      width: 1080px;
      height: 110px;
      background: #f4f4f4;
      padding: 15px;
      margin: 0 auto;

      h5 {
        line-height: 50px;
      }

      .info {
        margin-top: 20px;

        .s1 {
          float: left;
          border: 1px solid #ddd;
          width: 120px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          margin-right: 10px;
        }

        p {
          line-height: 30px;
        }
      }
    }

    .detail {
      width: 1080px;

      background: #c5e9fa;
      padding: 15px;
      margin: 2px auto 0;

      h5 {
        line-height: 50px;
      }

      .list {
        display: flex;
        justify-content: space-between;

        li {
          line-height: 30px;

          p {
            margin-bottom: 20px;
          }

          h4 {
            color: #c5e9fa;
            font-weight: 400;
          }

          h3 {
            color: #c5e9fa;
          }
        }
      }
    }

    .bbs {
      margin-bottom: 15px;

      h5 {
        line-height: 50px;
      }

      textarea {
        width: 100%;
        border-color: #e4e2e2;
        line-height: 1.8;
        outline: none;
        resize: none;
      }
    }

    .bill {
      h5 {
        line-height: 50px;
      }

      div {
        padding-left: 15px;
      }
    }
  }

  .money {
    width: 1200px;
    margin: 20px auto;

    ul {
      width: 220px;
      float: right;

      li {
        line-height: 30px;
        display: flex;
        justify-content: space-between;

        i {
          color: red;
        }
      }
    }
  }

  .trade {
    box-sizing: border-box;
    width: 1200px;
    padding: 10px;
    margin: 10px auto;
    text-align: right;
    background-color: #f4f4f4;
    border: 1px solid #ddd;

    div {
      line-height: 30px;
    }

    .price span {
      color: #e12228;
      font-weight: 700;
      font-size: 14px;
    }

    .receiveInfo {
      color: #999;
    }
  }

  .sub {
    width: 1200px;
    margin: 0 auto 10px;

    .subBtn {
      float: right;
      width: 164px;
      height: 56px;
      font: 700 18px '微软雅黑';
      line-height: 56px;
      text-align: center;
      color: black;
      background-color: #c5e9fa;
    }
  }
}
</style>
