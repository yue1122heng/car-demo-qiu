Component({
  // 组件的属性列表
  properties: {},
  // 组件的初始数据
  data: {
    listHeight: "400rpx",
    icon: "../../../images/down.png",
    classes: [
      {
        title: "普通班",
        logo: "../../../images/car-type.png",
        subs: ["一个一车，每天可预约1次", "预约练车，不用排队"],
        tips: ["一费到底", "免补考费"],
        price: 2880
      },
      {
        title: "商务班",
        logo: "../../../images/car-type.png",
        subs: ["一个一车，预约练车，每天可预约2次", "预约练车，不用排队"],
        tips: ["一费到底", "免补考费"],
        price: 3880
      },
      {
        title: "至尊VIP班",
        logo: "../../../images/car-type.png",
        subs: ["一个一车，随约随练，不限预约次数", "五次不过，免费重考"],
        tips: ["一费到底", "免补考费", "预约练车", "不用排队"],
        price: 3880
      }
    ]
  },
  lifetimes: {
    attached(){
      var that = this;
      // wx.request({
      //   url: 'http://localhost:3000/classes',
      //   success: function(response){
      //     that.setData({
      //       classes: response.data.classes
      //     })
      //   }
      // })
    }
  },
  // 组件的方法列表
  methods: {
    toggle() {
      this.setData({
        listHeight: this.data.listHeight === "auto" ? "400rpx" : "auto",
        icon: this.data.icon === "../../../images/down.png" ? "../../../images/up.png" : "../../../images/down.png"
      })
    }
  }
})
