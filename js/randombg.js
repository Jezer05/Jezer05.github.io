//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
    "url(https://pic.imgdb.cn/item/61c6c9ca2ab3f51d9196226c.jpg)",
    "url(https://pic.imgdb.cn/item/61c682cf2ab3f51d9173e049.png)",
    "url(https://pic.imgdb.cn/item/61c67f2a2ab3f51d917218d2.jpg)",
    "url(https://pic.imgdb.cn/item/61c6826c2ab3f51d9173b27c.png)",
    "url(https://pic.imgdb.cn/item/61e561632ab3f51d91462442.png)",
    "url(https://pic.imgdb.cn/item/61cc7a302ab3f51d9119b16a.png)",
    "url(https://pic.imgdb.cn/item/61cd44692ab3f51d918bc766.jpg)",
    "url(https://pic.imgdb.cn/item/61cc79db2ab3f51d911975ed.png)",
    "url(https://pic.imgdb.cn/item/61cc79f82ab3f51d91198b5d.png)",
    "url(https://pic.imgdb.cn/item/61cd44692ab3f51d918bc766.jpg)"
  ];
  //获取背景图片总数，生成随机数
var bgindex =Math.floor(Math.random() * backimg.length);
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
//随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var bannerimg =[
  "url(https://pic.imgdb.cn/item/61c6c9ca2ab3f51d9196226c.jpg)",
  "url(https://pic.imgdb.cn/item/61c682cf2ab3f51d9173e049.png)",
  "url(https://pic.imgdb.cn/item/61c67f2a2ab3f51d917218d2.jpg)",
  "url(https://pic.imgdb.cn/item/61c6826c2ab3f51d9173b27c.png)",
  "url(https://pic.imgdb.cn/item/61e561632ab3f51d91462442.png)",
  "url(https://pic.imgdb.cn/item/61cc7a302ab3f51d9119b16a.png)",
  "url(https://pic.imgdb.cn/item/61cd44692ab3f51d918bc766.jpg)",
  "url(https://pic.imgdb.cn/item/61cc79db2ab3f51d911975ed.png)",
  "url(https://pic.imgdb.cn/item/61cc79f82ab3f51d91198b5d.png)",
  "url(https://pic.imgdb.cn/item/61cd44692ab3f51d918bc766.jpg)"
];
//获取banner图片总数，生成随机数
var bannerindex =Math.floor(Math.random() * bannerimg.length);
//重设banner图片
document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];
