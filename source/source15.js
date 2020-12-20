var source15 = { 
  comicSourceName: '漫画天堂',
  comicSourceUrl: 'http://www.manhuatt.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("User-Agent","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'http://www.manhuatt.com/%s/',
  ruleComicTitle: '@css:.mh-date-info .mh-date-info-name h4@text',
  ruleComicAuthor: '@css:div.pic > dl:eq(2) > dd@text',
  ruleComicCover:
  '@css:.mh-date-bgpic img@src',
  ruleComicInstro: '@css:#workint@text',
  ruleComicStatus: false,
  ruleComicLianZai: '',
  ruleComicUpdate: '',
  ruleChapterList: '@css:#mh-chapter-list-ol-0 li',
  ruleChapterName: 'text',
  ruleChapterUrl: 'tag.a@href',

  // 图片详情
  ruleContentUrl:
  'http://www.manhuatt.com/param2',
 // /<script>var sFiles.+<\\/script>/ 要打\\两个反斜杠
  ruleComicContent:
  `importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);importClass(Packages.com.reader.comic.utils.StringUtils);importClass(Packages.com.reader.comic.utils.DecryptionUtils);function parseImages(){var list=new ArrayList();var data=StringUtils.match('qTcms_S_m_murl_e=\\\\\\"(.+)\\\\\\";',content,1);var image_urls=DecryptionUtils.base64Decrypt(data);var arr=image_urls.split("\\\\$qingtiandy\\\\$");for(var i=0;i<arr.length;i++){var url=arr[i];list.add(new ImageUrl(i+1,url,false));i++}return list};`,

  // 推荐

  ruleFindAuthor: '@css:.mh-works-author@text',
  ruleFindCid: '@css:.mh-works-title h4 a@href@js:result=result.substring(1,result.length-1);result=result.replace("/","_")',
  ruleFindCoverUrl:
  '@css:.mh-nlook-w img@src',
  ruleFindList: '@css:.mh-search-list li',
  ruleFindTitle: '@css:.mh-works-title h4 a@title',
  ruleFindUpdate: '@css:.mh-works-author@text',
  ruleFindUrl:
  `全部::http://www.manhuatt.com/all/searchPage.html&&热血::http://www.manhuatt.com/rexue/searchPage.html&&格斗::http://www.manhuatt.com/gedou/searchPage.html&&科幻::http://www.manhuatt.com/kehuan/searchPage.html&&竞技::http://www.manhuatt.com/jingji/searchPage.html&&搞笑::http://www.manhuatt.com/gaoxiao/searchPage.html&&推理::http://www.manhuatt.com/tuili/searchPage.html&&恐怖::http://www.manhuatt.com/kongbu/searchPage.html&&耽美::http://www.manhuatt.com/danmei/searchPage.html&&少女::http://www.manhuatt.com/shaonv/searchPage.html&&恋爱::http://www.manhuatt.com/lianai/searchPage.html&&生活::http://www.manhuatt.com/shenghuo/searchPage.html&&战争::http://www.manhuatt.com/zhanzheng/searchPage.html&&故事::http://www.manhuatt.com/gushi/searchPage.html&&冒险::http://www.manhuatt.com/maoxian/searchPage.html&&魔幻::http://www.manhuatt.com/mohuan/searchPage.html&&玄幻::http://www.manhuatt.com/xuanhuan/searchPage.html&&校园::http://www.manhuatt.com/xiaoyuan/searchPage.html&&悬疑::http://www.manhuatt.com/xuanyi/searchPage.html&&萌系::http://www.manhuatt.com/mengxi/searchPage.html&&穿越::http://www.manhuatt.com/chuanyue/searchPage.html&&后宫::http://www.manhuatt.com/hougong/searchPage.html&&都市::http://www.manhuatt.com/dushi/searchPage.html&&武侠::http://www.manhuatt.com/wuxia/searchPage.html&&历史::http://www.manhuatt.com/lishi/searchPage.html&&同人::http://www.manhuatt.com/tongren/searchPage.html&&励志::http://www.manhuatt.com/lizhi/searchPage.html&&百合::http://www.manhuatt.com/baihe/searchPage.html&&治愈::http://www.manhuatt.com/zhiyu/searchPage.html&&机甲::http://www.manhuatt.com/jijia/searchPage.html&&纯爱::http://www.manhuatt.com/chunai/searchPage.html&&美食::http://www.manhuatt.com/meishi/searchPage.html&&血腥::http://www.manhuatt.com/xuexing/searchPage.html&&僵尸::http://www.manhuatt.com/jiangshi/searchPage.html&&恶搞::http://www.manhuatt.com/egao/searchPage.html&&虐心::http://www.manhuatt.com/nuexin/searchPage.html&&动作::http://www.manhuatt.com/dongzuo/searchPage.html&&惊险::http://www.manhuatt.com/jingxian/searchPage.html&&唯美::http://www.manhuatt.com/weimei/searchPage.html&&震撼::http://www.manhuatt.com/zhenhan/searchPage.html&&复仇::http://www.manhuatt.com/fuchou/searchPage.html&&侦探::http://www.manhuatt.com/zhentan/searchPage.html&&脑洞::http://www.manhuatt.com/naodong/searchPage.html&&奇幻::http://www.manhuatt.com/qihuan/searchPage.html&&宫斗::http://www.manhuatt.com/gongdou/searchPage.html&&爆笑::http://www.manhuatt.com/baoxiao/searchPage.html&&运动::http://www.manhuatt.com/yundong/searchPage.html&&青春::http://www.manhuatt.com/qingchun/searchPage.html&&灵异::http://www.manhuatt.com/lingyi/searchPage.html&&古风::http://www.manhuatt.com/gufeng/searchPage.html&&权谋::http://www.manhuatt.com/quanmou/searchPage.html&&节操::http://www.manhuatt.com/jiecao/searchPage.html&&明星::http://www.manhuatt.com/mingxing/searchPage.html&&暗黑::http://www.manhuatt.com/anhei/searchPage.html&&社会::http://www.manhuatt.com/shehui/searchPage.html&&浪漫::http://www.manhuatt.com/langman/searchPage.html&&栏目::http://www.manhuatt.com/lanmu/searchPage.html&&仙侠::http://www.manhuatt.com/xianxia/searchPage.html`,

  // 搜索

  ruleSearchAuthor: '',
  ruleSearchCid: '@css:.mh-nlook-w a@href@js:result=result.substring(1,result.length-1);result=result.replace("/","_")',
  ruleSearchCoverUrl: '@css:.mh-nlook-w img@src',
  ruleSearchList: '@css:.mh-search-list > li',
  ruleSearchTitle: '@css:.mh-works-title h4@text',
  ruleSearchUpdate: '@css:.mh-works-author@text',
  ruleSearchUrl:
  'http://www.manhuatt.com/statics/search.aspx?key=searchKey&page=searchPage',


  sort: '15',
  type: 15
};

module.exports = source15;