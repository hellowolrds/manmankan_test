
var source21 = { 
  comicSourceName: '89漫画',
  comicSourceUrl: 'http://m.89mh.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","https://h5.manhua.163.com")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'http://m.89mh.com/%s/',
  ruleComicTitle: '@css:#Cover img@title',
  ruleComicAuthor: '@css:.Introduct_Sub .txtItme:eq(1)@text',
  ruleComicCover:
  '@css:#Cover img@src',
  ruleComicInstro: '@css:.Introduct .txtDesc@text',
  ruleComicStatus: false,
  ruleComicLianZai: "",
  ruleComicUpdate: '@css:.Introduct_Sub .txtItme .date@text',
  ruleChapterList: '@css:#mh-chapter-list-ol-0 li',
  ruleChapterName: 'text',
  ruleChapterUrl: '@css:a@href',

  // 图片详情
  ruleContentUrl:
  'http://m.89mh.comparam2?Header{"User-Agent":"Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166  Safari/535.19"}',
  ruleComicContent:
  'importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);importClass(Packages.com.reader.comic.utils.StringUtils);importClass(Packages.com.reader.comic.utils.DecryptionUtils);function parseImages(){var list=new ArrayList();var base_url="http://image.xmanhua.com/";var data=StringUtils.match(\'qTcms_S_m_murl_e=\\\\\\"(.+)\\\\\\";\',content,1);var image_urls=DecryptionUtils.base64Decrypt(data);var arr=image_urls.split("\\\\$qingtiandy\\\\$");for(var i=0;i<arr.length;i++){var url=arr[i];list.add(new ImageUrl(i+1,url,false));i++}return list};',

  // 推荐

  ruleFindAuthor: '',
  ruleFindCid: '@css:.mh-item-tip > a@href@js:result=result.substring(1,result.length-1);result=result.replace("/","_");',
  ruleFindCoverUrl:
  '@css:.mh-cover@style@js:result.match(/url(.+)/g)[0]',
  ruleFindList: '@css:#ul_list > li',
  ruleFindTitle: '@css:.mh-item-detali .title@text',
  ruleFindUpdate: '@css:.chapter@text',
  ruleFindUrl:
  `全部::http://www.89mh.com/all/searchPage.html&&热血::http://www.89mh.com/rexue/searchPage.html&&格斗::http://www.89mh.com/gedou/searchPage.html&&科幻::http://www.89mh.com/kehuan/searchPage.html&&竞技::http://www.89mh.com/jingji/searchPage.html&&搞笑::http://www.89mh.com/gaoxiao/searchPage.html&&推理::http://www.89mh.com/tuili/searchPage.html&&恐怖::http://www.89mh.com/kongbu/searchPage.html&&耽美::http://www.89mh.com/danmei/searchPage.html&&少女::http://www.89mh.com/shaonv/searchPage.html&&恋爱::http://www.89mh.com/lianai/searchPage.html&&生活::http://www.89mh.com/shenghuo/searchPage.html&&战争::http://www.89mh.com/zhanzheng/searchPage.html&&故事::http://www.89mh.com/gushi/searchPage.html&&冒险::http://www.89mh.com/maoxian/searchPage.html&&魔幻::http://www.89mh.com/mohuan/searchPage.html&&玄幻::http://www.89mh.com/xuanhuan/searchPage.html&&校园::http://www.89mh.com/xiaoyuan/searchPage.html&&悬疑::http://www.89mh.com/xuanyi/searchPage.html&&萌系::http://www.89mh.com/mengxi/searchPage.html&&穿越::http://www.89mh.com/chuanyue/searchPage.html&&后宫::http://www.89mh.com/hougong/searchPage.html&&都市::http://www.89mh.com/dushi/searchPage.html&&武侠::http://www.89mh.com/wuxia/searchPage.html&&历史::http://www.89mh.com/lishi/searchPage.html&&同人::http://www.89mh.com/tongren/searchPage.html&&励志::http://www.89mh.com/lizhi/searchPage.html&&百合::http://www.89mh.com/baihe/searchPage.html&&治愈::http://www.89mh.com/zhiyu/searchPage.html&&机甲::http://www.89mh.com/jijia/searchPage.html&&纯爱::http://www.89mh.com/chunai/searchPage.html&&美食::http://www.89mh.com/meishi/searchPage.html&&血腥::http://www.89mh.com/xuexing/searchPage.html&&僵尸::http://www.89mh.com/jiangshi/searchPage.html&&恶搞::http://www.89mh.com/egao/searchPage.html&&虐心::http://www.89mh.com/nuexin/searchPage.html&&动作::http://www.89mh.com/dongzuo/searchPage.html&&惊险::http://www.89mh.com/jingxian/searchPage.html&&唯美::http://www.89mh.com/weimei/searchPage.html&&震撼::http://www.89mh.com/zhenhan/searchPage.html&&复仇::http://www.89mh.com/fuchou/searchPage.html&&侦探::http://www.89mh.com/zhentan/searchPage.html&&脑洞::http://www.89mh.com/naodong/searchPage.html&&奇幻::http://www.89mh.com/qihuan/searchPage.html&&宫斗::http://www.89mh.com/gongdou/searchPage.html&&爆笑::http://www.89mh.com/baoxiao/searchPage.html&&运动::http://www.89mh.com/yundong/searchPage.html&&青春::http://www.89mh.com/qingchun/searchPage.html&&灵异::http://www.89mh.com/lingyi/searchPage.html&&古风::http://www.89mh.com/gufeng/searchPage.html&&权谋::http://www.89mh.com/quanmou/searchPage.html&&节操::http://www.89mh.com/jiecao/searchPage.html&&明星::http://www.89mh.com/mingxing/searchPage.html&&暗黑::http://www.89mh.com/anhei/searchPage.html&&社会::http://www.89mh.com/shehui/searchPage.html&&浪漫::http://www.89mh.com/langman/searchPage.html&&栏目::http://www.89mh.com/lanmu/searchPage.html&&仙侠::http://www.89mh.com/xianxia/searchPage.html&&日常::http://www.89mh.com/richang/searchPage.html&&邪恶::http://www.89mh.com/xiee/searchPage.html&&职场::http://www.89mh.com/zhichang/searchPage.html&&宅男::http://www.89mh.com/zhainan/searchPage.html&&爱情::http://www.89mh.com/aiqing/searchPage.html&&四格::http://www.89mh.com/sige/searchPage.html&&剧情::http://www.89mh.com/juqing/searchPage.html&&神魔::http://www.89mh.com/shenmo/searchPage.html&&体育::http://www.89mh.com/tiyu/searchPage.html&&霸总::http://www.89mh.com/bazong/searchPage.html&&总裁::http://www.89mh.com/zongcai/searchPage.html&&修真::http://www.89mh.com/xiuzhen/searchPage.html&&真人::http://www.89mh.com/zhenren/searchPage.html&&萝莉::http://www.89mh.com/luoli/searchPage.html&&御姐::http://www.89mh.com/yujie/searchPage.html&&架空::http://www.89mh.com/jiakong/searchPage.html&&彩虹::http://www.89mh.com/caihong/searchPage.html&&游戏::http://www.89mh.com/youxi/searchPage.html&&魔法::http://www.89mh.com/mofa/searchPage.html&&舰娘::http://www.89mh.com/jianniang/searchPage.html&&神鬼::http://www.89mh.com/shengui/searchPage.html&&伪娘::http://www.89mh.com/weiniang/searchPage.html&&东方::http://www.89mh.com/dongfang/searchPage.html&&颜艺::http://www.89mh.com/yanyi/searchPage.html&&短篇::http://www.89mh.com/duanpian/searchPage.html&&杂志::http://www.89mh.com/zazhi/searchPage.html&&青年::http://www.89mh.com/qingnian/searchPage.html&&单行::http://www.89mh.com/danxing/searchPage.html&&吸血::http://www.89mh.com/xixue/searchPage.html&&音乐::http://www.89mh.com/yinle/searchPage.html&&性转换::http://www.89mh.com/xingzhuanhuan/searchPage.html&&轻小说::http://www.89mh.com/qingxiaoshuo/searchPage.html&&绅士::http://www.89mh.com/shenshi/searchPage.html&&其他::http://www.89mh.com/qita/searchPage.html`,

  // 搜索

  ruleSearchAuthor: '',
  ruleSearchCid: '@css:.ImgA@href@js:result=result.substring(1,result.length-1);result=result.replace("/","_");',
  ruleSearchCoverUrl: '@css:img@src',
  ruleSearchList: '@css:li',
  ruleSearchTitle: '@css:.txtA@text',
  ruleSearchUpdate: '@css:.info@text',
  ruleSearchUrl:
  'http://m.89mh.com/statics/qingtiancms.ashx@pagesize=12&key=searchKey&action=GetWapList&classid1=0&url=/statics/qingtiancms.ashx&page=searchPage',


  sort: '21',
  type: 21
};



module.exports = source21;