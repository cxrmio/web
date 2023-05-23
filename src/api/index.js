// 当前这个模块对所有api进行统一管理
import axios from './request'
import mockAxios from './mockAxios'

// 接口
export const reqCategoryList = () => {
  return axios.get('/product/getBaseCategoryList')
}

// 轮播图请求数据
export const reqListContainer = () => mockAxios.get('/banner')

// Search搜寻模块
export const reqSearchList = (params) => axios.post('/list', params)

// detail 模块
export const reqDetailList = (skuId) => axios.get('/item/' + skuId)

// 购物车添加商品 /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqGoodCat = (skuId, skuNum) => axios.post(`/cart/addToCart/${skuId}/${skuNum}`)

// 个人购物车详情请求数据 /cart/cartList
export const reqgoodscat = () => axios.get('/cart/cartList')

// 删除购物车里商品信息 /api/cart/deleteCart/{skuId}
export const reqDeleteGoodsCar = (skuId) => axios.delete('/cart/deleteCart/' + skuId)

// 购物车里复选框勾选状态 /api/cart/checkCart/{skuID}/{isChecked}
export const reqUpdateChecked = (skuId, isChecked) => axios.get(`/cart/checkCart/${skuId}/${isChecked}`)

// 注册用户 /api/user/passport/register post password phone code
export const reqRegisterUser = (data) => axios.post('/user/passport/register', data)

// 登录账号 /api/user/passport/login post phone/password
export const reqUserLogin = (data) => axios.post('/user/passport/login', data)

// 获取用户信息 api/user/passport/auth/getUserInfo
export const reqUserInfo = () => axios.get('/user/passport/auth/getUserInfo')

// 退出登录 /api/user/passport/logout
export const reqLoginOut = () => axios.get('/user/passport/logout')

//提交订单信息 接口 /api/order/auth/submitOrder?tradeNo={tradeNo}
 export const reqsubmitOrder = (tradeNo, data) => axios.post(`/order/auth/submitOrder?tradeNo=${tradeNo}`, data)

