// miniprogram/pages/deliver/deliver.js
const db=wx.cloud.database()
const com=db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {
   order_list:[
     {

     }
   ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var d = new Date();
    var t = d.getTime();
    t -= 3600000;//一个小时的毫秒数
    var d_limit = new Date(t);
    db.collection('order').where(
      {
        delivertime:com.lte(d_limit)
      }
    ).orderBy('delivertime', 'asc')
      .get()
      .then(e => {
        console.log(e.data)
        this.setData(
          {
            array: e.data
          }
        )
      })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})