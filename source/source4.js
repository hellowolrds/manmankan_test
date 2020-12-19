
var source4 = { 
  comicSourceName: '极速漫画',
  comicSourceUrl: 'http://www.js518.net',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("User-Agent","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'http://www.js518.net/%s',
  ruleComicTitle: 'class.mh-date-info@class.mh-date-info-name@tag.h4@text',
  ruleComicAuthor: 'class.mh-pdt30@class.one@tag.em@text',
  ruleComicCover:
  'class.mh-date-bgpic@tag.img@src',
  ruleComicInstro: 'id.workint@text',
  ruleComicStatus: false,
  ruleComicUpdate: '',
  ruleChapterList: 'id.mh-chapter-list-ol-0@tag.li',
  ruleChapterName: 'text',
  ruleChapterUrl: 'tag.a@href',

  // 图片详情
  ruleContentUrl:
  'http://www.js518.net/param2',
 // /<script>var sFiles.+<\\/script>/ 要打\\两个反斜杠
  ruleComicContent:
  'importClass(Packages.com.reader.comic.utils.StringUtils);importPackage(Packages.com.reader.comic.model);importClass(Packages.java.util.ArrayList);importClass(Packages.com.reader.comic.utils.DecryptionUtils);function parseImages(){var list=new ArrayList();var base_url="http://j.aiwenwo.net/";var data=StringUtils.match(\'qTcms_S_m_murl_e=\\"(.+)\\";\',content,1);var image_urls=DecryptionUtils.base64Decrypt(data);var temp=image_urls.split("\\\\$qingtiandy\\\\$");for(var i=0;i<temp.length;i++){var url=temp[i];list.add(new ImageUrl(i+1,base_url+url,false));i++}return list};',

  // 推荐

  ruleFindAuthor: '',
  ruleFindCid: 'tag.a@href@js:result=result.substring(1,result.length-1);result.replace("/", "_")',
  ruleFindCoverUrl:
  'class.mh-nlook-w@tag.img@src',
  ruleFindList: 'class.mh-search-list@tag.li',
  ruleFindTitle: 'class.mh-works-title@tag.h4@text',
  ruleFindUpdate: 'class.mh-works-author@text',
  ruleFindUrl:
  '全部::http://www.js518.net/all/searchPage.html&&热血::http://www.js518.net/rexueshaonian/searchPage.html&&格斗::http://www.js518.net/wuxiagedou/searchPage.html&&科幻::http://www.js518.net/kehuanmohuan/searchPage.html&&竞技::http://www.js518.net/jingjitiyu/searchPage.html&&搞笑::http://www.js518.net/gaoxiaomanhua/searchPage.html&&推理::http://www.js518.net/tuilizhentan/searchPage.html&&恐怖::http://www.js518.net/kongbulingyi/searchPage.html&&耽美::http://www.js518.net/danmeih/searchPage.html&&少女::http://www.js518.net/shaonvmanhua/searchPage.html&&恋爱::http://www.js518.net/lianaishenghuo/searchPage.html&&生活::http://www.js518.net/shenghuomanhua/searchPage.html&&战争::http://www.js518.net/zhanzhengmanhua/searchPage.html&&故事::http://www.js518.net/gushimanhua/searchPage.html&&冒险::http://www.js518.net/mxmh/searchPage.html&&魔幻::http://www.js518.net/mohuanmanhua/searchPage.html&&玄幻::http://www.js518.net/xuanhuanmanhua/searchPage.html&&校园::http://www.js518.net/xiaoyuanmanhua/searchPage.html&&悬疑::http://www.js518.net/xuanyimanhua/searchPage.html&&萌系::http://www.js518.net/mengximanhua/searchPage.html&&穿越::http://www.js518.net/chuanyuemanhua/searchPage.html&&后宫::http://www.js518.net/hougongmanhua/searchPage.html&&都市::http://www.js518.net/dushimanhua/searchPage.html&&武侠::http://www.js518.net/wuxiamanhua/searchPage.html&&历史::http://www.js518.net/lishimanhua/searchPage.html&&同人::http://www.js518.net/tongrenmanhua/searchPage.html&&励志::http://www.js518.net/lizhimanhua/searchPage.html&&百合::http://www.js518.net/baihemanhua/searchPage.html&&治愈::http://www.js518.net/zhiyumanhua/searchPage.html&&机甲::http://www.js518.net/jijiamanhua/searchPage.html&&纯爱::http://www.js518.net/chunaimanhua/searchPage.html&&美食::http://www.js518.net/meishimanhua/searchPage.html&&血腥::http://www.js518.net/xuexingmanhua/searchPage.html&&僵尸::http://www.js518.net/jiangshimanhua/searchPage.html&&恶搞::http://www.js518.net/egaomanhua/searchPage.html&&虐心::http://www.js518.net/nuexinmanhua/searchPage.html&&动作::http://www.js518.net/dongzuomanhua/searchPage.html&&惊险::http://www.js518.net/jingxianmanhua/searchPage.html&&唯美::http://www.js518.net/weimeimanhua/searchPage.html&&震撼::http://www.js518.net/zhenhanmanhua/searchPage.html&&复仇::http://www.js518.net/fuchoumanhua/searchPage.html&&侦探::http://www.js518.net/zhentanmanhua/searchPage.html&&脑洞::http://www.js518.net/naodongmanhua/searchPage.html&&奇幻::http://www.js518.net/qihuanmanhua/searchPage.html&&宫斗::http://www.js518.net/gongdoumanhua/searchPage.html&&爆笑::http://www.js518.net/baoxiaomanhua/searchPage.html&&运动::http://www.js518.net/yundongmanhua/searchPage.html&&青春::http://www.js518.net/qingchunmanhua/searchPage.html&&灵异::http://www.js518.net/lingyimanhua/searchPage.html&&古风::http://www.js518.net/gufengmanhua/searchPage.html&&权谋::http://www.js518.net/quanmoumanhua/searchPage.html&&节操::http://www.js518.net/jiecaomanhua/searchPage.html&&明星::http://www.js518.net/mingxingmanhua/searchPage.html&&暗黑::http://www.js518.net/anheimanhua/searchPage.html&&社会::http://www.js518.net/shehuimanhua/searchPage.html&&浪漫::http://www.js518.net/langmanmanhua/searchPage.html&&栏目::http://www.js518.net/lanmumanhua/searchPage.html&&仙侠::http://www.js518.net/xianxiamanhua/searchPage.html',

  // 搜索

  ruleSearchAuthor: '@css:.mh-works-tags em@text',
  ruleSearchCid: 'tag.a@href@js:result=result.substring(1,result.length-1);result.replace("/", "_")',
  ruleSearchCoverUrl: 'class.mh-nlook-w@tag.img@src',
  ruleSearchList: 'class.mh-search-list@tag.li',
  ruleSearchTitle: 'class.mh-works-title@tag.h4@text',
  ruleSearchUpdate: 'class.mh-works-author@text',
  ruleSearchUrl:
  'http://www.js518.net/statics/search.aspx?key=searchKey&page=searchPage',


  sort: '4',
  type: 4
};



module.exports = source4;