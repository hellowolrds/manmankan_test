
var source27 = { 
  comicSourceName: '我要去漫画',
  comicSourceUrl: 'http://m.517manhua.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","http://m.517manhua.com/")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'http://m.517manhua.com/%s/',
  ruleComicTitle: '@css:div#Cover > img@title',
  ruleComicAuthor: '@css:.sub_r .txtItme:nth-child(2)@text',
  ruleComicCover:
  '@css:div#Cover > img@src',
  ruleComicInstro: '@css:#comic-description@text',
  ruleComicStatus: false,
  ruleComicLianZai: "",
  ruleComicUpdate: '@css:.sub_r .txtItme:nth-child(1)@text',
  ruleChapterList: '@css:#mh-chapter-list-ol-0 > li',
  ruleChapterName: '@css:a > span@text',
  ruleChapterUrl: '@css:a@href',

  // 图片详情
  ruleContentUrl:
  'http://m.517manhua.comparam2',
  ruleComicContent:
  `
  importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);importClass(Packages.com.reader.comic.soup.Node);importClass(Packages.com.reader.comic.utils.StringUtils);importClass(Packages.com.reader.comic.utils.DecryptionUtils);importPackage(Packages.java.util.regex);function parseImages(){var list=new ArrayList();var pageMatcher=Pattern.compile('qTcms_S_m_murl_e=\\"(.*?)\\"').matcher(content);var mangaid=StringUtils.match('var qTcms_S_m_id=\\"(\\\\w+?)\\";',content,1);if(!pageMatcher.find()){return null}var imgArrStr=DecryptionUtils.base64Decrypt(pageMatcher.group(1));var arr=imgArrStr.split("\\\\$.*?\\\\$");for(var i=0;i<arr.length;i++){var item=arr[i];list.add(new ImageUrl(i+1,item,false))}return list};
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
  `全部::http://www.517manhua.com/all/searchPage.html&&热血::http://www.517manhua.com/rexue/searchPage.html&&格斗::http://www.517manhua.com/gedou/searchPage.html&&科幻::http://www.517manhua.com/kehuan/searchPage.html&&竞技::http://www.517manhua.com/jingji/searchPage.html&&搞笑::http://www.517manhua.com/gaoxiao/searchPage.html&&推理::http://www.517manhua.com/tuili/searchPage.html&&恐怖::http://www.517manhua.com/kongbu/searchPage.html&&耽美::http://www.517manhua.com/danmei/searchPage.html&&少女::http://www.517manhua.com/shaonv/searchPage.html&&恋爱::http://www.517manhua.com/lianai/searchPage.html&&生活::http://www.517manhua.com/shenghuo/searchPage.html&&战争::http://www.517manhua.com/zhanzheng/searchPage.html&&故事::http://www.517manhua.com/gushi/searchPage.html&&冒险::http://www.517manhua.com/maoxian/searchPage.html&&魔幻::http://www.517manhua.com/mohuan/searchPage.html&&玄幻::http://www.517manhua.com/xuanhuan/searchPage.html&&校园::http://www.517manhua.com/xiaoyuan/searchPage.html&&悬疑::http://www.517manhua.com/xuanyi/searchPage.html&&萌系::http://www.517manhua.com/mengxi/searchPage.html&&穿越::http://www.517manhua.com/chuanyue/searchPage.html&&后宫::http://www.517manhua.com/hougong/searchPage.html&&都市::http://www.517manhua.com/dushi/searchPage.html&&武侠::http://www.517manhua.com/wuxia/searchPage.html&&历史::http://www.517manhua.com/lishi/searchPage.html&&同人::http://www.517manhua.com/tongren/searchPage.html&&励志::http://www.517manhua.com/lizhi/searchPage.html&&百合::http://www.517manhua.com/baihe/searchPage.html&&治愈::http://www.517manhua.com/zhiyu/searchPage.html&&机甲::http://www.517manhua.com/jijia/searchPage.html&&纯爱::http://www.517manhua.com/chunai/searchPage.html&&美食::http://www.517manhua.com/meishi/searchPage.html&&血腥::http://www.517manhua.com/xuexing/searchPage.html&&僵尸::http://www.517manhua.com/jiangshi/searchPage.html&&恶搞::http://www.517manhua.com/egao/searchPage.html&&虐心::http://www.517manhua.com/nuexin/searchPage.html&&动作::http://www.517manhua.com/dongzuo/searchPage.html&&惊险::http://www.517manhua.com/jingxian/searchPage.html&&唯美::http://www.517manhua.com/weimei/searchPage.html&&震撼::http://www.517manhua.com/zhenhan/searchPage.html&&复仇::http://www.517manhua.com/fuchou/searchPage.html&&侦探::http://www.517manhua.com/zhentan/searchPage.html&&脑洞::http://www.517manhua.com/naodong/searchPage.html&&奇幻::http://www.517manhua.com/qihuan/searchPage.html&&宫斗::http://www.517manhua.com/gongdou/searchPage.html&&爆笑::http://www.517manhua.com/baoxiao/searchPage.html&&运动::http://www.517manhua.com/yundong/searchPage.html&&青春::http://www.517manhua.com/qingchun/searchPage.html&&灵异::http://www.517manhua.com/lingyi/searchPage.html&&古风::http://www.517manhua.com/gufeng/searchPage.html&&权谋::http://www.517manhua.com/quanmou/searchPage.html&&节操::http://www.517manhua.com/jiecao/searchPage.html&&明星::http://www.517manhua.com/mingxing/searchPage.html&&暗黑::http://www.517manhua.com/anhei/searchPage.html&&社会::http://www.517manhua.com/shehui/searchPage.html&&浪漫::http://www.517manhua.com/langman/searchPage.html&&栏目::http://www.517manhua.com/lanmu/searchPage.html&&仙侠::http://www.517manhua.com/xianxia/searchPage.html&&日常::http://www.517manhua.com/richang/searchPage.html&&邪恶::http://www.517manhua.com/xiee/searchPage.html&&职场::http://www.517manhua.com/zhichang/searchPage.html&&宅男::http://www.517manhua.com/zhainan/searchPage.html&&爱情::http://www.517manhua.com/aiqing/searchPage.html&&四格::http://www.517manhua.com/sige/searchPage.html&&剧情::http://www.517manhua.com/juqing/searchPage.html&&神魔::http://www.517manhua.com/shenmo/searchPage.html&&体育::http://www.517manhua.com/tiyu/searchPage.html&&霸总::http://www.517manhua.com/bazong/searchPage.html&&总裁::http://www.517manhua.com/zongcai/searchPage.html&&修真::http://www.517manhua.com/xiuzhen/searchPage.html&&真人::http://www.517manhua.com/zhenren/searchPage.html&&萝莉::http://www.517manhua.com/luoli/searchPage.html&&御姐::http://www.517manhua.com/yujie/searchPage.html&&架空::http://www.517manhua.com/jiakong/searchPage.html&&彩虹::http://www.517manhua.com/caihong/searchPage.html&&游戏::http://www.517manhua.com/youxi/searchPage.html&&魔法::http://www.517manhua.com/mofa/searchPage.html&&舰娘::http://www.517manhua.com/jianniang/searchPage.html&&神鬼::http://www.517manhua.com/shengui/searchPage.html&&伪娘::http://www.517manhua.com/weiniang/searchPage.html&&东方::http://www.517manhua.com/dongfang/searchPage.html&&颜艺::http://www.517manhua.com/yanyi/searchPage.html&&短篇::http://www.517manhua.com/duanpian/searchPage.html&&杂志::http://www.517manhua.com/zazhi/searchPage.html&&青年::http://www.517manhua.com/qingnian/searchPage.html&&单行::http://www.517manhua.com/danxing/searchPage.html&&吸血::http://www.517manhua.com/xixue/searchPage.html&&音乐::http://www.517manhua.com/yinle/searchPage.html&&性转换::http://www.517manhua.com/xingzhuanhuan/searchPage.html&&轻小说::http://www.517manhua.com/qingxiaoshuo/searchPage.html&&绅士::http://www.517manhua.com/shenshi/searchPage.html&&其他::http://www.517manhua.com/qita/searchPage.html`,

  // 搜索

  ruleSearchAuthor: '@css:.mh-works-decs@text',
  ruleSearchCid: '@css:.mh-works-title h4>a@href@js:result=result.substring(1,result.length-1);result=result.replace("/","_");',
  ruleSearchCoverUrl: '@css:.mh-nlook-w > img@src',
  ruleSearchList: '@css:.mh-search-list > li',
  ruleSearchTitle: '@css:.mh-works-title h4@text',
  ruleSearchUpdate: '@css:.mh-up-time@text',
  ruleSearchUrl:
  'http://www.517manhua.com/statics/search.aspx?key=searchKey&page=searchPage',


  sort: '27',
  type: 27
};



module.exports = source27;