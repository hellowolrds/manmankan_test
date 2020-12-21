
var source20 = { 
  comicSourceName: '布卡漫画',
  comicSourceUrl: 'https://m.feimh8.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","http://m.buka.cn")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'http://m.buka.cn/m/%s?Header{"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1","Host":"m.buka.cn"}',
  ruleComicTitle: '@css:p.mangadir-glass-name@text',
  ruleComicAuthor: '@css:.mangadir-glass-author@text',
  ruleComicCover:
  '@css:.mangadir-glass-img > img@src',
  ruleComicInstro: '@css:span.description_intro@text',
  ruleComicStatus: false,
  ruleComicUpdate: '@css:span.top-title-right@text',
  ruleChapterList: '-@css:div.chapter-center > a',
  ruleChapterName: 'text',
  ruleChapterUrl: 'href@js:java.splitHref(result,-1)',

  // 图片详情
  ruleContentUrl:
  'http://m.buka.cn/read/param1/param2?Header{"user-agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}',
  ruleComicContent:
  'importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);importPackage(Packages.java.lang);function parseImages(){var list=new ArrayList();var m=Pattern.compile(\'<img class=\\"lazy\\" data-original=\\"(http.*?jpg)\\" />\').matcher(content);if(m.find()){var i=0;do{list.add(new ImageUrl(++i,StringUtils.match("http.*jpg",m.group(0),0),false))}while(m.find())}return list};',

  // 推荐

  ruleFindAuthor: '$.author',
  ruleFindCid: '$.mid',
  ruleFindCoverUrl:
  '$.logo',
  ruleFindList: '$.datas.items.*',
  ruleFindTitle: '$.name',
  ruleFindUpdate: '',
  ruleFindUrl:
  `今日热榜::@js:'http://m.buka.cn/category/ajax_group@fun=1&count=15&param=10018&gname=今日热榜&start='+(searchPage-1)*15&&已完结::@js:'http://m.buka.cn/category/ajax_group@fun=1&count=15&param=12022&gname=已完结&start='+(searchPage-1)*15&&高分精选::@js:'http://m.buka.cn/category/ajax_group@fun=1&count=15&param=12064&gname=高分精选&start='+(searchPage-1)*15&& 最近上新::@js:'http://m.buka.cn/category/ajax_group@fun=1&count=15&param=12084&gname=最近上新&start='+(searchPage-1)*15&&日韩::@js:'http://m.buka.cn/category/ajax_group@fun=1&count=15&param=12053&gname=日韩&start='+(searchPage-1)*15&&经典::@js:'http://m.buka.cn/category/ajax_group@fun=1&count=15&param=303&gname=经典&start='+(searchPage-1)*15&&联合出品::@js:'http://m.buka.cn/category/ajax_group@fun=1&count=15&param=12033&gname=联合出品&start='+(searchPage-1)*15&&条漫::@js:'http://m.buka.cn/category/ajax_group@fun=1&count=15&param=036&gname=条漫&start='+(searchPage-1)*15&&玄幻::@js:'http://m.buka.cn/category/ajax_group@fun=1&count=15&param=12041&gname=玄幻&start='+(searchPage-1)*15&&都市恋爱::@js:'http://m.buka.cn/category/ajax_group@fun=1&count=15&param=12116&gname=都市恋爱&start='+(searchPage-1)*15&&恋爱::@js:'http://m.buka.cn/category/ajax_group@fun=1&count=15&param=404&gname=恋爱&start='+(searchPage-1)*15&&游戏::@js:'http://m.buka.cn/category/ajax_group@fun=1&count=15&param=12018&gname=游戏&start='+(searchPage-1)*15&&治愈::@js:'http://m.buka.cn/category/ajax_group@fun=1&count=15&param=202&gname=治愈&start='+(searchPage-1)*15&&科幻::@js:'http://m.buka.cn/category/ajax_group@fun=1&count=15&param=403&gname=科幻&start='+(searchPage-1)*15&&搞笑::@js:'http://m.buka.cn/category/ajax_group@fun=1&count=15&param=10008&gname=搞笑&start='+(searchPage-1)*15&&架空::@js:'http://m.buka.cn/category/ajax_group@fun=1&count=15&param=211&gname=架空&start='+(searchPage-1)*15&&励志::@js:'http://m.buka.cn/category/ajax_group@fun=1&count=15&param=12023&gname=励志&start='+(searchPage-1)*15&&格斗::@js:'http://m.buka.cn/category/ajax_group@fun=1&count=15&param=410&gname=格斗&start='+(searchPage-1)*15&&少女漫::@js:'http://m.buka.cn/category/ajax_group@fun=1&count=15&param=12103&gname=少女漫&start='+(searchPage-1)*15&&少年漫::@js:'http://m.buka.cn/category/ajax_group@fun=1&count=15&param=12104&gname=少年漫&start='+(searchPage-1)*15&&真人漫::@js:'http://m.buka.cn/category/ajax_group@fun=1&count=15&param=12117&gname=真人漫&start='+(searchPage-1)*15`,

  // 搜索

  ruleSearchAuthor: '@css:.manga-author@text',
  ruleSearchCid: '@css:.manga-img@href@js:java.splitHref(result,-1)',
  ruleSearchCoverUrl: '@css:.manga-img img@src',
  ruleSearchList: '@css:.manga-list ul li',
  ruleSearchTitle: '@css:.manga-names .manga-name@text',
  ruleSearchUpdate: '@css:.manga-update@text',
  ruleSearchUrl:
  '!http://www.buka.cn/search?word=searchKey',


  sort: '20',
  type: 20
};



module.exports = source20;