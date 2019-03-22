Page({
  // 页面的初始数据
  data: {
    classes: [],
    offset: 0,
    limit: 6
  },

  /*
  // 访问car-api项目中的接口时，把此处放开
  getClasses(offset, limit) { 
    var that = this;
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: `http://localhost:3000/classes/${offset}/${limit}`,
      success: function (response){
        // console.log(response);
        that.setData({
          classes: that.data.classes.concat(response.data.classes),
          offset: that.data.offset + 1,
        })
        wx.hideLoading();
      }
    })
  },*/

  // 使用本地数据时，把此处放开
  getClasses(offset, limit) {
    var data = [
      {
        title: "普通班",
        logo: "../../../images/car-type.png",
        subs: ["一个一车，每天可预约1次", "预约练车，不用排队"],
        tips: ["一费到底", "免补考费"],
        award: 100,
        gift: "学员学费立减100元",
        price: 2880
      },
      {
        title: "商务班",
        logo: "../../../images/car-type.png",
        subs: ["一个一车，预约练车，每天可预约2次", "预约练车，不用排队"],
        tips: ["一费到底", "免补考费"],
        award: 100,
        gift: "学员学费立减100元",
        price: 3880
      },
      {
        title: "至尊VIP班",
        logo: "../../../images/car-type.png",
        subs: ["一个一车，随约随练，不限预约次数", "五次不过，免费重考"],
        tips: ["一费到底", "免补考费", "预约练车", "不用排队"],
        award: 100,
        gift: "学员学费立减100元",
        price: 3880
      },
      {
        title: "普通班",
        logo: "../../../images/car-type.png",
        subs: ["一个一车，每天可预约1次", "预约练车，不用排队"],
        tips: ["一费到底", "免补考费"],
        award: 100,
        gift: "学员学费立减100元",
        price: 2880
      },
      {
        title: "商务班",
        logo: "../../../images/car-type.png",
        subs: ["一个一车，预约练车，每天可预约2次", "预约练车，不用排队"],
        tips: ["一费到底", "免补考费"],
        award: 100,
        gift: "学员学费立减100元",
        price: 3880
      },
      {
        title: "至尊VIP班",
        logo: "../../../images/car-type.png",
        subs: ["一个一车，随约随练，不限预约次数", "五次不过，免费重考"],
        tips: ["一费到底", "免补考费", "预约练车", "不用排队"],
        award: 100,
        gift: "学员学费立减100元",
        price: 3880
      }
    ]
    wx.showLoading({
      title: '加载中',
    })
    this.setData({
      classes: this.data.classes.concat(data),
      offset: this.data.offset + 1,
    })
    setTimeout(function () {
      wx.hideLoading();
    }, 1000)
  },

  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    this.getClasses(this.data.offset, this.data.limit);
  },

  // 页面上拉触底事件的处理函数
  onReachBottom: function () {
    // 访问car-api项目中的接口时，把此处放开
    this.getClasses(this.data.offset, this.data.limit);
  },

  // 跳转到邀请赏页面
  invite() {
    wx.navigateTo({
      url: '../invitation/invitation',
    })
  },

  // 用户点击右上角分享
  onShareAppMessage: function () {
    return {
      title: '邀请您来学车',
      path: 'pages/invite/invite'
    }
  }
})