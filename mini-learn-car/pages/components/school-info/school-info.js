Component({
  // 组件的属性列表
  properties: {},
  // 组件的初始数据
  data: {
    height: "180rpx",
    text: "展开全部",
    icon: "../../../images/down.png"
  },
  // 组件的方法列表
  methods: {
    more() {
      this.setData({
        height: this.data.height === "180rpx" ? 'auto' : "180rpx",
        text: this.data.text === "展开全部" ? "收起" : "展开全部",
        icon: this.data.icon === "../../../images/down.png" ? "../../../images/up.png" : "../../../images/down.png"
      })
    }
  }
})