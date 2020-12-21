
var source28 = { 
  comicSourceName: '7E漫画',
  comicSourceUrl: 'http://www.7edm.com/',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","http://m.517manhua.com/")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'http://www.7edm.com/%s/',
  ruleComicTitle: '@css:.mh-date-info .mh-date-info-name h4@text',
  ruleComicAuthor: '@css:.mh-pdt30 .one em@text',
  ruleComicCover:
  '@css:.mh-date-bgpic img@src',
  ruleComicInstro: '@css:#workint@text',
  ruleComicStatus: false,
  ruleComicLianZai: "",
  ruleComicUpdate: '@css:.cy_zhangjie_top a@text',
  ruleChapterList: '@css:#mh-chapter-list-ol-0 li',
  ruleChapterName: '@css:a@text',
  ruleChapterUrl: '@css:a@href',

  // 图片详情
  ruleContentUrl:
  'http://www.7edm.comparam2',
  ruleComicContent:
  `
  importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);importClass(Packages.com.reader.comic.soup.Node);importClass(Packages.com.reader.comic.utils.StringUtils);importClass(Packages.com.reader.comic.utils.DecryptionUtils);function parseImages(){var list=new ArrayList();var data=StringUtils.match('qTcms_S_m_murl_e=\\\\\\"(.+)\\\\\\";',content,1);var image_urls=DecryptionUtils.base64Decrypt(data);var arr=image_urls.split("\\\\$qingtiandy\\\\$");for(var i=0;i<arr.length;i++){var url=arr[i];list.add(new ImageUrl(i+1,url,false));i++}return list};
  `,

  // 推荐

  ruleFindAuthor: '@css:.mh-works-tags@text',
  ruleFindCid: '@css:.mh-nlook-w > a@href@js:result=result.substring(1,result.length-1);result=result.replace("/","_");',
  ruleFindCoverUrl:
  '@css:.mh-nlook-w img@src',
  ruleFindList: '@css:.mh-search-list li',
  ruleFindTitle: '@css:.mh-works-title@text',
  ruleFindUpdate: '@css:.cover-list-updata@text',
  ruleFindUrl:
  `全部::http://www.7edm.com/all/searchPage.html&&热血::http://www.7edm.com/rexue/searchPage.html&&格斗::http://www.7edm.com/gedou/searchPage.html&&科幻::http://www.7edm.com/kehuan/searchPage.html&&竞技::http://www.7edm.com/jingji/searchPage.html&&搞笑::http://www.7edm.com/gaoxiao/searchPage.html&&推理::http://www.7edm.com/tuili/searchPage.html&&恐怖::http://www.7edm.com/kongbu/searchPage.html&&耽美::http://www.7edm.com/danmei/searchPage.html&&少女::http://www.7edm.com/shaonv/searchPage.html&&恋爱::http://www.7edm.com/lianai/searchPage.html&&生活::http://www.7edm.com/shenghuo/searchPage.html&&战争::http://www.7edm.com/zhanzheng/searchPage.html&&故事::http://www.7edm.com/gushi/searchPage.html&&冒险::http://www.7edm.com/maoxian/searchPage.html&&魔幻::http://www.7edm.com/mohuan/searchPage.html&&玄幻::http://www.7edm.com/xuanhuan/searchPage.html&&校园::http://www.7edm.com/xiaoyuan/searchPage.html&&悬疑::http://www.7edm.com/xuanyi/searchPage.html&&萌系::http://www.7edm.com/mengxi/searchPage.html&&穿越::http://www.7edm.com/chuanyue/searchPage.html&&后宫::http://www.7edm.com/hougong/searchPage.html&&都市::http://www.7edm.com/dushi/searchPage.html&&武侠::http://www.7edm.com/wuxia/searchPage.html&&历史::http://www.7edm.com/lishi/searchPage.html&&同人::http://www.7edm.com/tongren/searchPage.html&&励志::http://www.7edm.com/lizhi/searchPage.html&&百合::http://www.7edm.com/baihe/searchPage.html&&治愈::http://www.7edm.com/zhiyu/searchPage.html&&纯爱::http://www.7edm.com/chunai/searchPage.html&&美食::http://www.7edm.com/meishi/searchPage.html&&血腥::http://www.7edm.com/xuexing/searchPage.html&&僵尸::http://www.7edm.com/jiangshi/searchPage.html&&恶搞::http://www.7edm.com/egao/searchPage.html&&虐心::http://www.7edm.com/nuexin/searchPage.html&&动作::http://www.7edm.com/dongzuo/searchPage.html&&惊险::http://www.7edm.com/jingxian/searchPage.html&&唯美::http://www.7edm.com/weimei/searchPage.html&&震撼::http://www.7edm.com/zhenhan/searchPage.html&&复仇::http://www.7edm.com/fuchou/searchPage.html&&侦探::http://www.7edm.com/zhentan/searchPage.html&&脑洞::http://www.7edm.com/naodong/searchPage.html&&奇幻::http://www.7edm.com/qihuan/searchPage.html&&宫斗::http://www.7edm.com/gongdou/searchPage.html&&爆笑::http://www.7edm.com/baoxiao/searchPage.html&&运动::http://www.7edm.com/yundong/searchPage.html&&青春::http://www.7edm.com/qingchun/searchPage.html&&灵异::http://www.7edm.com/lingyi/searchPage.html&&古风::http://www.7edm.com/gufeng/searchPage.html&&权谋::http://www.7edm.com/quanmou/searchPage.html&&节操::http://www.7edm.com/jiecao/searchPage.html&&明星::http://www.7edm.com/mingxing/searchPage.html&&暗黑::http://www.7edm.com/anhei/searchPage.html&&社会::http://www.7edm.com/shehui/searchPage.html&&浪漫::http://www.7edm.com/langman/searchPage.html&&栏目::http://www.7edm.com/lanmu/searchPage.html&&仙侠::http://www.7edm.com/xianxia/searchPage.html&&神魔::http://www.7edm.com/shenmo/searchPage.html&&宠物::http://www.7edm.com/chongwu/searchPage.html&&吸血::http://www.7edm.com/xixue/searchPage.html&&萝莉::http://www.7edm.com/luoli/searchPage.html&&御姐::http://www.7edm.com/yujie/searchPage.html&&霸总::http://www.7edm.com/bazong/searchPage.html&&漫改::http://www.7edm.com/mangai/searchPage.html&&游戏::http://www.7edm.com/youxi/searchPage.html&&真人::http://www.7edm.com/zhenren/searchPage.html&&修真::http://www.7edm.com/xiuzhen/searchPage.html&&机甲::http://www.7edm.com/jijia/searchPage.html&&机战::http://www.7edm.com/jizhan/searchPage.html`,

  // 搜索

  ruleSearchAuthor: '@css:.mh-works-decs@text',
  ruleSearchCid: '@css:.mh-works-title h4>a@href@js:result=result.substring(1,result.length-1);result=result.replace("/","_");',
  ruleSearchCoverUrl: '@css:.mh-nlook-w img@src',
  ruleSearchList: '@css:.mh-search-list > li',
  ruleSearchTitle: '@css:.mh-works-title h4@text',
  ruleSearchUpdate: '@css:.mh-up-time@text',
  ruleSearchUrl:
  'http://www.7edm.com/statics/search.aspx?key=searchKey&page=searchPage',


  sort: '28',
  type: 28
};



module.exports = source28;