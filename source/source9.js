var source9 = { 
  comicSourceName: '漫画160',
  comicSourceUrl: 'https://www.mh160.xyz',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","http://m.wuqimh.com/")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'https://www.mh160.xyz/kanmanhua/%s@Header:{"Referer":"https://www.mh160.xyz","Host":"www.mh160.xyz"}',
  ruleComicTitle: '@css:.mh-date-bgpic > a > img@title',
  ruleComicAuthor: '@css:span.one > em@text',
  ruleComicCover:
  '@css:.mh-date-bgpic > a > img@src',
  ruleComicInstro: '@css:#workint > p@text',
  ruleComicStatus: false,
  ruleComicUpdate: '@css:p.works-info-tc > span:eq(3)@text',
  ruleChapterList: '@css:#mh-chapter-list-ol-0 li',
  ruleChapterName: 'tag.a@text',
  ruleChapterUrl: 'tag.a@href',

  // 图片详情
  ruleContentUrl:
  'https://www.mh160.xyzparam2',
 // /<script>var sFiles.+<\\/script>/ 要打\\两个反斜杠
  ruleComicContent:
  'importClass(Packages.java.util.ArrayList);importPackage(Packages.org.json);importPackage(Packages.com.reader.comic.model);importClass(Packages.com.reader.comic.utils.StringUtils);importClass(Packages.com.reader.comic.utils.DecryptionUtils);function parseImages(){var list=new ArrayList();var str=StringUtils.match(\'qTcms_S_m_murl_e="(.*?)"\',content,1);var str_id=StringUtils.match(\'qTcms_S_p_id="(.*?)"\',content,1);if(str!=null){str=DecryptionUtils.base64Decrypt(str);var array=str.split("\\\\$qingtiandy\\\\$");var preUrl="";if(Integer.parseInt(str_id)>542724){preUrl="https://mhpic5.miyeye.cn:20208"}else{preUrl="https://res.gezhengzhongyi.cn:20207"}if(Integer.parseInt(str_id)>884998){preUrl="https://mhpic88.miyeye.cn:20207"}for(var i=0;i!=array.length;++i){var url=preUrl+array[i];list.add(new ImageUrl(i+1,url,false))}}return list};',

  // 推荐

  ruleFindAuthor: '@css:.mh-works-tags span em@text',
  ruleFindCid: '@css:.mh-works-title h4 a@href@js:java.splitHref(result,1)',
  ruleFindCoverUrl:
  '@css:.mh-nlook-w > a img@src',
  ruleFindList: '@css:.mh-search-list li',
  ruleFindTitle: '@css:.mh-works-title h4@text',
  ruleFindUpdate: '@css:.mh-works-author@text@js:result.replace("状态:","")',
  ruleFindUrl:
  '全部::https://www.mh160.xyz/kanmanhua/all/searchPage.html&&热血::https://www.mh160.xyz/kanmanhua/rexue/searchPage.html&&格斗::https://www.mh160.xyz/kanmanhua/gedou/searchPage.html&&科幻::https://www.mh160.xyz/kanmanhua/kehuan/searchPage.html&&竞技::https://www.mh160.xyz/kanmanhua/jingji/searchPage.html&&搞笑::https://www.mh160.xyz/kanmanhua/gaoxiao/searchPage.html&&推理::https://www.mh160.xyz/kanmanhua/tuili/searchPage.html&&恐怖::https://www.mh160.xyz/kanmanhua/kongbu/searchPage.html&&耽美::https://www.mh160.xyz/kanmanhua/danmei/searchPage.html&&少女::https://www.mh160.xyz/kanmanhua/shaonv/searchPage.html&&恋爱::https://www.mh160.xyz/kanmanhua/lianai/searchPage.html&&生活::https://www.mh160.xyz/kanmanhua/shenghuo/searchPage.html&&战争::https://www.mh160.xyz/kanmanhua/zhanzheng/searchPage.html&&故事::https://www.mh160.xyz/kanmanhua/gushi/searchPage.html&&冒险::https://www.mh160.xyz/kanmanhua/maoxian/searchPage.html&&魔幻::https://www.mh160.xyz/kanmanhua/mohuan/searchPage.html&&玄幻::https://www.mh160.xyz/kanmanhua/xuanhuan/searchPage.html&&校园::https://www.mh160.xyz/kanmanhua/xiaoyuan/searchPage.html&&悬疑::https://www.mh160.xyz/kanmanhua/xuanyi/searchPage.html&&萌系::https://www.mh160.xyz/kanmanhua/mengxi/searchPage.html&&穿越::https://www.mh160.xyz/kanmanhua/chuanyue/searchPage.html&&后宫::https://www.mh160.xyz/kanmanhua/hougong/searchPage.html&&都市::https://www.mh160.xyz/kanmanhua/dushi/searchPage.html&&武侠::https://www.mh160.xyz/kanmanhua/wuxia/searchPage.html&&历史::https://www.mh160.xyz/kanmanhua/lishi/searchPage.html&&同人::https://www.mh160.xyz/kanmanhua/tongren/searchPage.html&&励志::https://www.mh160.xyz/kanmanhua/lizhi/searchPage.html&&百合::https://www.mh160.xyz/kanmanhua/baihe/searchPage.html&&治愈::https://www.mh160.xyz/kanmanhua/zhiyu/searchPage.html&&机甲::https://www.mh160.xyz/kanmanhua/jijia/searchPage.html&&纯爱::https://www.mh160.xyz/kanmanhua/chunai/searchPage.html&&美食::https://www.mh160.xyz/kanmanhua/meishi/searchPage.html&&血腥::https://www.mh160.xyz/kanmanhua/xuexing/searchPage.html&&僵尸::https://www.mh160.xyz/kanmanhua/jiangshi/searchPage.html&&恶搞::https://www.mh160.xyz/kanmanhua/egao/searchPage.html&&虐心::https://www.mh160.xyz/kanmanhua/nuexin/searchPage.html&&动作::https://www.mh160.xyz/kanmanhua/dongzuo/searchPage.html&&惊险::https://www.mh160.xyz/kanmanhua/jingxian/searchPage.html&&唯美::https://www.mh160.xyz/kanmanhua/weimei/searchPage.html&&震撼::https://www.mh160.xyz/kanmanhua/zhenhan/searchPage.html&&复仇::https://www.mh160.xyz/kanmanhua/fuchou/searchPage.html&&侦探::https://www.mh160.xyz/kanmanhua/zhentan/searchPage.html&&脑洞::https://www.mh160.xyz/kanmanhua/naodong/searchPage.html&&奇幻::https://www.mh160.xyz/kanmanhua/qihuan/searchPage.html&&宫斗::https://www.mh160.xyz/kanmanhua/gongdou/searchPage.html&&爆笑::https://www.mh160.xyz/kanmanhua/baoxiao/searchPage.html&&运动::https://www.mh160.xyz/kanmanhua/yundong/searchPage.html&&青春::https://www.mh160.xyz/kanmanhua/qingchun/searchPage.html&&灵异::https://www.mh160.xyz/kanmanhua/lingyi/searchPage.html&&古风::https://www.mh160.xyz/kanmanhua/gufeng/searchPage.html&&权谋::https://www.mh160.xyz/kanmanhua/quanmou/searchPage.html&&节操::https://www.mh160.xyz/kanmanhua/jiecao/searchPage.html&&明星::https://www.mh160.xyz/kanmanhua/mingxing/searchPage.html&&暗黑::https://www.mh160.xyz/kanmanhua/anhei/searchPage.html&&社会::https://www.mh160.xyz/kanmanhua/shehui/searchPage.html&&浪漫::https://www.mh160.xyz/kanmanhua/langman/searchPage.html&&栏目::https://www.mh160.xyz/kanmanhua/lanmu/searchPage.html&&仙侠::https://www.mh160.xyz/kanmanhua/xianxia/searchPage.html&&其他::https://www.mh160.xyz/kanmanhua/qita/searchPage.html&&伪娘::https://www.mh160.xyz/kanmanhua/weiniang/searchPage.html',

  // 搜索

  ruleSearchAuthor: '',
  ruleSearchCid: '@css:.mh-works-info > a@href@js:java.splitHref(result, 1)',
  ruleSearchCoverUrl: 'tag.img@src',
  ruleSearchList: '@css:.mh-search-result > ul > li',
  ruleSearchTitle: 'tag.h4@text',
  ruleSearchUpdate: '@css:.mh-up-time.fr@text@js:result.replace("最后更新时间：","")',
  ruleSearchUrl:
  '!https://www.mh160.xyz/statics/search.aspx?key=searchKey@Header:{"Referer":"https://www.mh160.xyz","Host":"www.mh160.xyz"}',


  sort: '9',
  type: 9
};

module.exports = source9;