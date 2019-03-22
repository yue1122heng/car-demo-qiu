Component({
  // 组件的属性列表
  properties: {},
  // 组件的初始数据
  data: {},
  // 组件的方法列表
  methods: {
    makePhone() {
      wx.makePhoneCall({
        phoneNumber: '0371-65663366'
      })
    }
  }
})
