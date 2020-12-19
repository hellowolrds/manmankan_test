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

  ruleFindAuthor: '',
  ruleFindCid: 'tag.a@href@js:java.splitHref(result,0)',
  ruleFindCoverUrl:
  '@css:.bcover > img@data-src',
  ruleFindList: '@css:#contList > li',
  ruleFindTitle: 'class.ell@text',
  ruleFindUpdate: 'class.tt@text',
  ruleFindUrl:
  '全部::http://www.wuqimh.com/list/p-searchPage&&热血::http://www.wuqimh.com/list/smid-1-order-id-p-searchPage&&武侠::http://www.wuqimh.com/list/smid-2-order-id-p-searchPage&&搞笑::http://www.wuqimh.com/list/smid-3-order-id-p-searchPage&&耽美::http://www.wuqimh.com/list/smid-4-order-id-p-searchPage&&爱情::http://www.wuqimh.com/list/smid-5-order-id-p-searchPage&&科幻::http://www.wuqimh.com/list/smid-6-order-id-p-searchPage&&魔法::http://www.wuqimh.com/list/smid-7-order-id-p-searchPage&&神魔::http://www.wuqimh.com/list/smid-8-order-id-p-searchPage&&竞技::http://www.wuqimh.com/list/smid-9-order-id-p-searchPage&&格斗::http://www.wuqimh.com/list/smid-10-order-id-p-searchPage&&机战::http://www.wuqimh.com/list/smid-11-order-id-p-searchPage&&体育::http://www.wuqimh.com/list/smid-12-order-id-p-searchPage&&运动::http://www.wuqimh.com/list/smid-13-order-id-p-searchPage&&校园::http://www.wuqimh.com/list/smid-14-order-id-p-searchPage&&励志::http://www.wuqimh.com/list/smid-15-order-id-p-searchPage&&历史::http://www.wuqimh.com/list/smid-16-order-id-p-searchPage&&伪娘::http://www.wuqimh.com/list/smid-17-order-id-p-searchPage&&百合::http://www.wuqimh.com/list/smid-18-order-id-p-searchPage&&后宫::http://www.wuqimh.com/list/smid-19-order-id-p-searchPage&&治愈::http://www.wuqimh.com/list/smid-20-order-id-p-searchPage&&美食::http://www.wuqimh.com/list/smid-21-order-id-p-searchPage&&推理::http://www.wuqimh.com/list/smid-22-order-id-p-searchPage&&悬疑::http://www.wuqimh.com/list/smid-23-order-id-p-searchPage&&恐怖::http://www.wuqimh.com/list/smid-24-order-id-p-searchPage&&职场::http://www.wuqimh.com/list/smid-25-order-id-p-searchPage&&BL::http://www.wuqimh.com/list/smid-26-order-id-p-searchPage&&剧情::http://www.wuqimh.com/list/smid-27-order-id-p-searchPage&&生活::http://www.wuqimh.com/list/smid-28-order-id-p-searchPage&&幻想::http://www.wuqimh.com/list/smid-29-order-id-p-searchPage&&战争::http://www.wuqimh.com/list/smid-30-order-id-p-searchPage&&仙侠::http://www.wuqimh.com/list/smid-33-order-id-p-searchPage&&性转换::http://www.wuqimh.com/list/smid-40-order-id-p-searchPage&&冒险::http://www.wuqimh.com/list/smid-41-order-id-p-searchPage&&其他::http://www.wuqimh.com/list/smid-32-order-id-p-searchPage',

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