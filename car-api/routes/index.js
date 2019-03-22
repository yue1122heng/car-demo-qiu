var express = require('express');
var router = express.Router();

var db = require('../modules/dbose');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add', function (req, res, next) {
  var classes = [
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
  db.classesModel.insertMany(classes).then(function (value) {
    res.json({ code: 200, message: '添加成功' });
  }).catch(function (err) {
    res.json({ code: 201, message: err });
  })
})

router.get("/classes/:offset/:limit", function (req, res, net) {
  var offset = req.params.offset - 0 || 0;
  var limit = req.params.limit - 0 || 3;
  var skip = offset * limit;
  db.classesModel.find().skip(skip).limit(limit).then(function (values) {
    res.json({ code: 200, message: '成功', classes: values });
  }).catch(function (err) {
    res.json({ code: 201, message: err });
  })
})

module.exports = router;
