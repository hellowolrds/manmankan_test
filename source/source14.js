var source14 = { 
  comicSourceName: '古风漫画',
  comicSourceUrl: 'https://m.gufengmh8.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("User-Agent","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'https://m.gufengmh8.com/manhua/%s/',
  ruleComicTitle: '@css:h1.title@text',
  ruleComicAuthor: '@css:div.pic > dl:eq(2) > dd@text',
  ruleComicCover:
  '@css:#Cover > mip-img@src',
  ruleComicInstro: '@css:div.comic-view.clearfix > p@text',
  ruleComicStatus: false,
  ruleComicLianZai: '',
  ruleComicUpdate: 'div.pic > dl:eq(4) > dd',
  ruleChapterList: '!@css:ul[id^=chapter-list] > li > a',
  ruleChapterName: 'text',
  ruleChapterUrl: 'tag.a@href@js:java.splitHref(result,2)',

  // 图片详情
  ruleContentUrl:
  'https://m.gufengmh8.com/manhua/param1/param2.html',
 // /<script>var sFiles.+<\\/script>/ 要打\\两个反斜杠
  ruleComicContent:
  `importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);importClass(Packages.com.reader.comic.utils.StringUtils);function parseImages(){var list=new ArrayList();var str=StringUtils.match("chapterImages = \\\\[(.*?)\\\\]",content,1);var array=str.split(",");var urlPrev=StringUtils.match('chapterPath = \\"(.*?)\\"',content,1);for(var i=0;i<array.length;i++){var s=array[i].substring(1,array[i].length()-1);list.add(new ImageUrl(i+1,"https://res.gufengmh8.com/"+urlPrev+s,false))}return list};`,

  // 推荐

  ruleFindAuthor: '',
  ruleFindCid: '@css:.ImgA@href:java.splitHref(result, -1);',
  ruleFindCoverUrl:
  '@css:.ImgA mip-img@src',
  ruleFindList: '@css:#w0 .col_3_1 > .list-comic',
  ruleFindTitle: '@css:.txtA@text',
  ruleFindUpdate: '@css:.info@text',
  ruleFindUrl:
  `全部::https://m.gufengmh8.com/list_searchPage&&少年漫画::https://m.gufengmh8.com/list/shaonian/searchPage/&&少女漫画::https://m.gufengmh8.com/list/shaonv/searchPage/&&青年漫画::https://m.gufengmh8.com/list/qingnian/searchPage/&&真人漫画::https://m.gufengmh8.com/list/zhenrenmanhua/searchPage/`,

  // 搜索

  ruleSearchAuthor: '@css:div.itemTxt > p:eq(1)@text',
  ruleSearchCid: '@css:div.itemTxt > a@href@js:java.splitHref(result, -1);',
  ruleSearchCoverUrl: '@css:div.itemImg > a > mip-img@src',
  ruleSearchList: '@css:div.UpdateList > div.itemBox',
  ruleSearchTitle: '@css:div.itemTxt > a@text',
  ruleSearchUpdate: '@css:div.itemTxt > p:eq(3) > span.date@text',
  ruleSearchUrl:
  'https://m.gufengmh8.com/search/?keywords=searchKey&page=searchPage',


  sort: '14',
  type: 14
};

module.exports = source14;