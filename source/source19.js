
var source19 = { 
  comicSourceName: '扑飞漫画',
  comicSourceUrl: 'http://m.pufei8.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","http://m.pufei8.com")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'http://m.pufei8.com/manhua/%s',
  ruleComicTitle: '@css:div.main-bar > h1@text',
  ruleComicAuthor: '@css:div.book-detail > div.cont-list > dl:eq(3) > dd@text',
  ruleComicCover:
  '@css:div.book-detail > div.cont-list > div.thumb > img@src',
  ruleComicInstro: '@css:#bookIntro@text',
  ruleComicStatus: false,
  ruleComicLianZai: "@css:div.book-detail > div.cont-list > div.thumb > i@text",
  ruleComicUpdate: '@css:div.book-detail > div.cont-list > dl:eq(2) > dd@text',
  ruleChapterList: '@css:#chapterList2 > ul > li > a',
  ruleChapterName: 'title',
  ruleChapterUrl: 'href@js:java.splitHref(result, 2)',

  // 图片详情
  ruleContentUrl:
  'http://m.pufei8.com/manhua/param1/param2.html',
  ruleComicContent:
  'importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);importClass(Packages.com.reader.comic.utils.StringUtils);importClass(Packages.com.reader.comic.utils.DecryptionUtils);function parseImages(){var list=new ArrayList();var str=StringUtils.match(\'cp=\\"(.*?)\\"\',content,1);if(str!=null){str=DecryptionUtils.evalDecrypt(DecryptionUtils.base64Decrypt(str));var array=str.split(",");for(var i=0;i<array.length;i++){list.add(new ImageUrl(i+1,"http://res.img.youzipi.net/"+array[i],false))}}return list};',

  // 推荐

  ruleFindAuthor: '@css:dl > dd@text',
  ruleFindCid: '@css:.order+a@href@js:java.splitHref(result,1)',
  ruleFindCoverUrl:
  '@css:div > img@data-src',
  ruleFindList: '@css:#detail li',
  ruleFindTitle: 'tag.h3@text',
  ruleFindUpdate: '@css:dl:eq(4) > dd@text',
  ruleFindUrl:
  `少年热血::@js:searchPage==1?'http://m.pufei8.com/shaonianrexue/index.html':'http://m.pufei8.com/shaonianrexue/index_'+searchPage+'.html'&&少女爱情::@js:searchPage==1?'http://m.pufei8.com/shaonvaiqing/index.html':'http://m.pufei8.com/shaonvaiqing/index_'+searchPage+'.html'&&武侠格斗::@js:searchPage==1?'http://m.pufei8.com/wuxiagedou/index.html':'http://m.pufei8.com/wuxiagedou/index_'+searchPage+'.html'&&科幻魔幻::@js:searchPage==1?'http://m.pufei8.com/kehuan/index.html':'http://m.pufei8.com/kehuan/index_'+searchPage+'.html'&&竞技体育::@js:searchPage==1?'http://m.pufei8.com/jingjitiyu/index.html':'http://m.pufei8.com/jingjitiyu/index_'+searchPage+'.html'&&搞笑喜剧::@js:searchPage==1?'http://m.pufei8.com/gaoxiaoxiju/index.html':'http://m.pufei8.com/gaoxiaoxiju/index_'+searchPage+'.html'&&耽美BL::@js:searchPage==1?'http://m.pufei8.com/danmeirensheng/index.html':'http://m.pufei8.com/danmeirensheng/index_'+searchPage+'.html'&&侦探推理::@js:searchPage==1?'http://m.pufei8.com/zhentantuili/index.html':'http://m.pufei8.com/zhentantuili/index_'+searchPage+'.html'&&恐怖灵异::@js:searchPage==1?'http://m.pufei8.com/kongbulingyi/index.html':'http://m.pufei8.com/kongbulingyi/index_'+searchPage+'.html'`,

  // 搜索

  ruleSearchAuthor: '@css:dl > dd@text',
  ruleSearchCid: '@css:.order+a@href@js:java.splitHref(result,1)',
  ruleSearchCoverUrl: '@css:div > img@data-src',
  ruleSearchList: '@css:#detail > li',
  ruleSearchTitle: 'tag.h3@text',
  ruleSearchUpdate: '@css:dl:eq(4) > dd@text',
  ruleSearchUrl:
  'http://m.pufei8.com/e/search/?searchget=1&tbname=mh&show=title&tempid=4&keyboard=searchKey&page=searchPage',


  sort: '19',
  type: 19
};



module.exports = source19;