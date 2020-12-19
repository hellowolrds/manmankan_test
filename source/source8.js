var source8 = { 
  comicSourceName: '57漫画',
  comicSourceUrl: 'http://m.wuqimh.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","http://m.wuqimh.com/")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'http://m.wuqimh.com/%s/',
  ruleComicTitle: '@css:div.main-bar > h1@text',
  ruleComicAuthor: '@css:div.book-detail > div.cont-list > dl:eq(3) > dd@text',
  ruleComicCover:
  '@css:div.book-detail > div.cont-list > div.thumb > img@src',
  ruleComicInstro: 'id.bookIntro@text',
  ruleComicStatus: false,
  ruleComicUpdate: '@css:div.book-detail > div.cont-list > dl:eq(7) > dd@text',
  ruleChapterList: '@css:#chapterList > ul > li > a',
  ruleChapterName: 'text',
  ruleChapterUrl: 'href@js:java.splitHref(result,1)',

  // 图片详情
  ruleContentUrl:
  'http://m.wuqimh.com/param1/param2.html',
 // /<script>var sFiles.+<\\/script>/ 要打\\两个反斜杠
  ruleComicContent:
  'importPackage(Packages.com.reader.comic.model);importClass(Packages.java.util.ArrayList);importClass(Packages.com.reader.comic.utils.DecryptionUtils);importPackage(Packages.org.json);importClass(Packages.com.reader.comic.utils.StringUtils);function parseImages(){var list=new ArrayList();var packed=StringUtils.match("eval(.*?)\\\\n",content,1);if(packed!=null){var result=DecryptionUtils.evalDecrypt(packed);var jsonString=StringUtils.match("\'fs\':\\\\s*(\\\\[.*?\\\\])",result,1);var array=new JSONArray(jsonString);var size=array.length();for(var i=0;i!=size;++i){var url=array.getString(i);if(url.indexOf("http://")==-1){url="http://images.lancaier.com"+url}list.add(new ImageUrl(i+1,url,false))}}return list};',

  // 推荐

  ruleFindAuthor: '@css:.info .desc@text@js:result.split(" ")[0]',
  ruleFindCid: 'tag.a@href@js:result=result.substring(1,result.length-1);result.replace("/", "_")',
  ruleFindCoverUrl:
  'tag.img@data-src',
  ruleFindList: '@css:.comic-list .item',
  ruleFindTitle: 'class.info@class.title@text',
  ruleFindUpdate: '@css:.info .desc@text@js:result.split(" ")[1]',
  ruleFindUrl:
  '全部::http://www.517mh.net/sort/index_searchPage.html&&少年热血::http://www.517mh.net/manhua/rexue/index_searchPage.html&&武侠格斗::http://www.517mh.net/manhua/gedou/index_searchPage.html&&科幻魔幻::http://www.517mh.net/manhua/kehuan/index_searchPage.html&&竞技体育::http://www.517mh.net/manhua/tiyu/index_searchPage.html&&爆笑喜剧::http://www.517mh.net/manhua/xiju/index_searchPage.html&&侦探推理::http://www.517mh.net/manhua/tuili/index_searchPage.html&&其他漫画::http://www.517mh.net/manhua/qita/index_searchPage.html&&恐怖灵异::http://www.517mh.net/manhua/kongbulingyi/index_searchPage.html&&耽美人生::http://www.517mh.net/manhua/danmeirensheng/index_searchPage.html&&少女爱情::http://www.517mh.net/manhua/shaonvaiqing/index_searchPage.html&&恋爱生活::http://www.517mh.net/manhua/lianaishenghuo/index_searchPage.html&&生活漫画::http://www.517mh.net/manhua/shenghuomanhua/index_searchPage.html&&战争漫画::http://www.517mh.net/manhua/zhanzhengmanhua/index_searchPage.html&&故事漫画::http://www.517mh.net/manhua/gushimanhua/index_searchPage.html&&韩国漫画::http://www.517mh.net/manhua/hanguomanhua/index_searchPage.html&&中国漫画::http://www.517mh.net/manhua/zhongguomanhua/index_searchPage.html',

  // 搜索

  ruleSearchAuthor: '@css:dl:eq(1) > a > dd@text',
  ruleSearchCid: '@css:a+dl>a@href@js:java.splitHref(result, 0)',
  ruleSearchCoverUrl: '@css:a:eq(0) > div.thumb > img@data-src',
  ruleSearchList: '@css:#data_list > li',
  ruleSearchTitle: '@css:a:eq(0) > h3@text',
  ruleSearchUpdate: '@css:dl:eq(4) > dd@text',
  ruleSearchUrl:
  'http://m.wuqimh.com/search/q_searchKey-p-searchPage',


  sort: '8',
  type: 8
};

module.exports = source8;