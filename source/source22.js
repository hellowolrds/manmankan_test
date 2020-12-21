
var source22 = { 
  comicSourceName: '米推漫画',
  comicSourceUrl: 'https://m.imitui.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","https://h5.manhua.163.com")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'https://m.imitui.com/manhua/%s/',
  ruleComicTitle: '@css:#comicName@text',
  ruleComicAuthor: '@css:.txtItme:first-child@text',
  ruleComicCover:
  '@css:#Cover img@src',
  ruleComicInstro: '@css:.Introduct .txtDesc@text',
  ruleComicStatus: false,
  ruleComicLianZai: "",
  ruleComicUpdate: '@css:.date@text',
  ruleChapterList: '-@css:#chapter-list-1 li',
  ruleChapterName: 'text',
  ruleChapterUrl: '@css:a@href',

  // 图片详情
  ruleContentUrl:
  '@js:"param2".replace("//m","//www");',
  ruleComicContent:
  'importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);importClass(Packages.com.reader.comic.utils.StringUtils);function parseImages(){var list=new ArrayList();var str=StringUtils.match("chapterImages = \\\\[(.*?)\\\\]",content,1);var base_url="https://res0818.imitui.com";if(str!=null){var array=str.split(",");var urlPrev=StringUtils.match(\'chapterPath = \\"(.*?)\\"\',content,1);for(var i=0;i!=array.length;++i){var s=array[i].substring(1,array[i].length()-1);s=s.replace("\\\\","").replace("\\\\","");list.add(new ImageUrl(i+1,base_url+s,false))}}return list};',

  // 推荐

  ruleFindAuthor: '@css:.info@text@js:result.replace("作者:","");',
  ruleFindCid: '@css:.ImgA@href@js:java.splitHref(result, -1)',
  ruleFindCoverUrl:
  '@css:.ImgA img@src',
  ruleFindList: '@css:#comic-items > .list-comic',
  ruleFindTitle: '@css:.txtA@text',
  ruleFindUpdate: '',
  ruleFindUrl:
  `全部::https://m.imitui.com/list/?page=searchPage&&热血::https://m.imitui.com/list/rexue/?page=searchPage&&玄幻::https://m.imitui.com/list/xuanhuan/?page=searchPage&&修真::https://m.imitui.com/list/xiuzhen/?page=searchPage&&古风::https://m.imitui.com/list/gufeng/?page=searchPage&&恋爱::https://m.imitui.com/list/lianai/?page=searchPage&&穿越::https://m.imitui.com/list/chuanyue/?page=searchPage&&都市::https://m.imitui.com/list/dushi/?page=searchPage&&霸总::https://m.imitui.com/list/bazong/?page=searchPage&&悬疑::https://m.imitui.com/list/xuanyi/?page=searchPage&&搞笑::https://m.imitui.com/list/gaoxiao/?page=searchPage&&奇幻::https://m.imitui.com/list/qihuan/?page=searchPage&&总裁::https://m.imitui.com/list/zongcai/?page=searchPage&&日常::https://m.imitui.com/list/richang/?page=searchPage&&冒险::https://m.imitui.com/list/maoxian/?page=searchPage&&科幻::https://m.imitui.com/list/kehuan/?page=searchPage&&纯爱::https://m.imitui.com/list/chunai/?page=searchPage&&魔幻::https://m.imitui.com/list/mohuan/?page=searchPage&&战争::https://m.imitui.com/list/zhanzheng/?page=searchPage&&蔷薇::https://m.imitui.com/list/qiangwei/?page=searchPage&&武侠::https://m.imitui.com/list/wuxia/?page=searchPage&&生活::https://m.imitui.com/list/shenghuo/?page=searchPage&&动作::https://m.imitui.com/list/dongzuo/?page=searchPage&&后宫::https://m.imitui.com/list/hougong/?page=searchPage&&游戏::https://m.imitui.com/list/youxi/?page=searchPage&&恐怖::https://m.imitui.com/list/kongbu/?page=searchPage&&漫改::https://m.imitui.com/list/mangai/?page=searchPage&&真人::https://m.imitui.com/list/zhenren/?page=searchPage&&校园::https://m.imitui.com/list/xiaoyuan/?page=searchPage&&剧情::https://m.imitui.com/list/juqing/?page=searchPage&&灵异::https://m.imitui.com/list/lingyi/?page=searchPage&&少年::https://m.imitui.com/list/shaonian/?page=searchPage&&推理::https://m.imitui.com/list/tuili/?page=searchPage&&怀旧::https://m.imitui.com/list/huaijiu/?page=searchPage&&情感::https://m.imitui.com/list/qinggan/?page=searchPage&&偶像::https://m.imitui.com/list/ouxiang/?page=searchPage&&少女::https://m.imitui.com/list/shaonv/?page=searchPage&&独家::https://m.imitui.com/list/dujia/?page=searchPage&&虐心::https://m.imitui.com/list/nuexin/?page=searchPage&&爆笑::https://m.imitui.com/list/baoxiao/?page=searchPage&&励志::https://m.imitui.com/list/lizhi/?page=searchPage&&美食::https://m.imitui.com/list/meishi/?page=searchPage&&复仇::https://m.imitui.com/list/fuchou/?page=searchPage&&彩虹::https://m.imitui.com/list/caihong/?page=searchPage&&唯美::https://m.imitui.com/list/weimei/?page=searchPage&&治愈::https://m.imitui.com/list/zhiyu/?page=searchPage&&明星::https://m.imitui.com/list/mingxing/?page=searchPage&&脑洞::https://m.imitui.com/list/naodong/?page=searchPage&&魔法::https://m.imitui.com/list/mofa/?page=searchPage&&修仙::https://m.imitui.com/list/xiuxian/?page=searchPage&&重生::https://m.imitui.com/list/zhongsheng/?page=searchPage&&仙侠::https://m.imitui.com/list/xianxia/?page=searchPage&&末世::https://m.imitui.com/list/moshi/?page=searchPage&&异能::https://m.imitui.com/list/yineng/?page=searchPage&&女尊::https://m.imitui.com/list/nvzun/?page=searchPage&&其它::https://m.imitui.com/list/qita/?page=searchPage&&言情::https://m.imitui.com/list/yanqing/?page=searchPage&&耽美::https://m.imitui.com/list/danmei/?page=searchPage&&运动::https://m.imitui.com/list/yundong/?page=searchPage&&宫斗::https://m.imitui.com/list/gongdou/?page=searchPage&&古装::https://m.imitui.com/list/guzhuang/?page=searchPage&&美少女::https://m.imitui.com/list/meishaonv/?page=searchPage&&神魔::https://m.imitui.com/list/shenmo/?page=searchPage&&历史::https://m.imitui.com/list/lishi/?page=searchPage&&惊险::https://m.imitui.com/list/jingxian/?page=searchPage&&竞技::https://m.imitui.com/list/jingji/?page=searchPage&&萌系::https://m.imitui.com/list/mengxi/?page=searchPage&&体育::https://m.imitui.com/list/tiyu/?page=searchPage&&格斗::https://m.imitui.com/list/gedou/?page=searchPage&&机甲::https://m.imitui.com/list/jijia/?page=searchPage&&虐恋::https://m.imitui.com/list/nuelian/?page=searchPage&&爽::https://m.imitui.com/list/shuang/?page=searchPage&&福利::https://m.imitui.com/list/fuli/?page=searchPage&&其他::https://m.imitui.com/list/qita2/?page=searchPage&&小僵尸::https://m.imitui.com/list/xiaojiangshi/?page=searchPage&&僵尸::https://m.imitui.com/list/jiangshi/?page=searchPage&&浪漫::https://m.imitui.com/list/langman/?page=searchPage&&金手指::https://m.imitui.com/list/jinshouzhi/?page=searchPage&&御姐::https://m.imitui.com/list/yujie/?page=searchPage&&战斗::https://m.imitui.com/list/zhandou/?page=searchPage&&恶搞::https://m.imitui.com/list/egao/?page=searchPage&&社会::https://m.imitui.com/list/shehui/?page=searchPage&&权谋::https://m.imitui.com/list/quanmou/?page=searchPage&&青春::https://m.imitui.com/list/qingchun/?page=searchPage&&萝莉::https://m.imitui.com/list/luoli/?page=searchPage&&同人::https://m.imitui.com/list/tongren/?page=searchPage&&震撼::https://m.imitui.com/list/zhenhan/?page=searchPage&&日漫::https://m.imitui.com/list/riman/?page=searchPage&&军阀::https://m.imitui.com/list/junfa/?page=searchPage&&民国::https://m.imitui.com/list/minguo/?page=searchPage&&特工::https://m.imitui.com/list/tegong/?page=searchPage&&美女::https://m.imitui.com/list/meinv/?page=searchPage&&间谍::https://m.imitui.com/list/jiandie/?page=searchPage&&暗黑::https://m.imitui.com/list/anhei/?page=searchPage&&节操::https://m.imitui.com/list/jiecao/?page=searchPage&&经典::https://m.imitui.com/list/jingdian/?page=searchPage&&幽默::https://m.imitui.com/list/youmo/?page=searchPage&&甜宠::https://m.imitui.com/list/tianchong/?page=searchPage&&神话::https://m.imitui.com/list/shenhua/?page=searchPage&&日本::https://m.imitui.com/list/riben/?page=searchPage&&翼纪元::https://m.imitui.com/list/yijiyuan/?page=searchPage&&条漫::https://m.imitui.com/list/tiaoman/?page=searchPage&&LOL::https://m.imitui.com/list/LOL/?page=searchPage&&种田::https://m.imitui.com/list/zhongtian/?page=searchPage&&短篇::https://m.imitui.com/list/duanpian/?page=searchPage&&惊悚::https://m.imitui.com/list/jingsong/?page=searchPage&&四格::https://m.imitui.com/list/sige/?page=searchPage&&国漫::https://m.imitui.com/list/guoman/?page=searchPage&&有趣岛::https://m.imitui.com/list/youqudao/?page=searchPage&&萌宠::https://m.imitui.com/list/mengchong/?page=searchPage&&人性::https://m.imitui.com/list/renxing/?page=searchPage&&宠婚::https://m.imitui.com/list/chonghun/?page=searchPage&&新妻::https://m.imitui.com/list/xinqi/?page=searchPage&&吸血鬼::https://m.imitui.com/list/xixiegui/?page=searchPage&&神界漫画::https://m.imitui.com/list/shenjiemanhua/?page=searchPage&&雪月花::https://m.imitui.com/list/xueyuehua/?page=searchPage&&梦骑士::https://m.imitui.com/list/mengqishi/?page=searchPage&&兽耳::https://m.imitui.com/list/shouer/?page=searchPage&&少儿::https://m.imitui.com/list/shaoer/?page=searchPage&&百合::https://m.imitui.com/list/baihe/?page=searchPage&&吃鸡::https://m.imitui.com/list/chiji/?page=searchPage&&枪战::https://m.imitui.com/list/qiangzhan/?page=searchPage&&特种兵::https://m.imitui.com/list/tezhongbing/?page=searchPage&&兄弟::https://m.imitui.com/list/xiongdi/?page=searchPage&&异世::https://m.imitui.com/list/yishi/?page=searchPage&&兄妹::https://m.imitui.com/list/xiongmei/?page=searchPage&&三次元::https://m.imitui.com/list/sanciyuan/?page=searchPage`,

  // 搜索

  ruleSearchAuthor: '@css:div.itemTxt > p:eq(1)@text',
  ruleSearchCid: '@css:div.itemTxt > a@href@js:java.splitHref(result, -1)',
  ruleSearchCoverUrl: '@css:div.itemImg > a > img@src',
  ruleSearchList: '@css:div.UpdateList > div.itemBox',
  ruleSearchTitle: '@css:div.itemTxt > a@text',
  ruleSearchUpdate: '@css:div.itemTxt > p:eq(3) > span.date@text',
  ruleSearchUrl:
  'https://m.imitui.com/search/?keywords=searchKey&page=searchPage',


  sort: '22',
  type: 22
};



module.exports = source22;