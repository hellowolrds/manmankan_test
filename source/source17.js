var source17 = { 
  comicSourceName: '漫画DB',
  comicSourceUrl: 'https://www.manhuadb.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","https://www.manhuadb.com")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'https://www.manhuadb.com/manhua/%s/',
  ruleComicTitle: '@css:h1.comic-title@text',
  ruleComicAuthor: '@css:a.comic-creator@text',
  ruleComicCover:
  '@css:td.comic-cover > img@src',
  ruleComicInstro: '@css:p.comic_story@text',
  ruleComicStatus: false,
  ruleComicLianZai: '@css:a.comic-pub-state@text',
  ruleComicUpdate: '@css:a.comic-pub-end-date',
  ruleChapterList: '-@css:#comic-book-list > div > ol > li > a',
  ruleChapterName: 'text',
  ruleChapterUrl: 'tag.a@href@js:java.splitHref(result, 2)',

  // 图片详情
  ruleContentUrl:
  'https://www.manhuadb.com/manhua/param1/param2.html',
 // /<script>var sFiles.+<\\/script>/ 要打\\两个反斜杠
  ruleComicContent:
  `importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);importClass(Packages.com.reader.comic.utils.StringUtils);importClass(Packages.com.reader.comic.utils.DecryptionUtils);importPackage(Packages.org.json);function parseImages(){var list=new ArrayList();var imageHost=StringUtils.match('data-host=\\"(.*?)\\"',content,1);var imagePre=StringUtils.match('data-img_pre=\\"(.*?)\\"',content,1);var base64Data=StringUtils.match("var img_data = '(.*?)';",content,1);var jsonStr=DecryptionUtils.base64Decrypt(base64Data);var imageList=new JSONArray(jsonStr);for(var i=0;i<imageList.length();i++){var image=imageList.getJSONObject(i);var imageUrl=imageHost+imagePre+image.getString("img");list.add(new ImageUrl(i+1,imageUrl,false))}return list};`,

  // 推荐

  ruleFindAuthor: '@css:.list-inline-item a@text',
  ruleFindCid: '@css:.d-block@href@js:java.splitHref(result, -1)',
  ruleFindCoverUrl:
  '@css:.comic-book-cover@data-original',
  ruleFindList: '@css:.comic-main-section > .comic-book-unit',
  ruleFindTitle: '@css:.h3 a@text',
  ruleFindUpdate: '',
  ruleFindUrl:
  `爱情::https://www.manhuadb.com/manhua/list-c-26-page-searchPage.html&&东方::https://www.manhuadb.com/manhua/list-c-66-page-searchPage.html&&冒险::https://www.manhuadb.com/manhua/list-c-12-page-searchPage.html&&欢乐向::https://www.manhuadb.com/manhua/list-c-64-page-searchPage.html&&百合::https://www.manhuadb.com/manhua/list-c-39-page-searchPage.html&&搞笑::https://www.manhuadb.com/manhua/list-c-41-page-searchPage.html&&科幻::https://www.manhuadb.com/manhua/list-c-20-page-searchPage.html&&校园::https://www.manhuadb.com/manhua/list-c-40-page-searchPage.html&&生活::https://www.manhuadb.com/manhua/list-c-33-page-searchPage.html&&魔幻::https://www.manhuadb.com/manhua/list-c-48-page-searchPage.html&&热血::https://www.manhuadb.com/manhua/list-c-46-page-searchPage.html&&奇幻::https://www.manhuadb.com/manhua/list-c-13-page-searchPage.html&&格斗::https://www.manhuadb.com/manhua/list-c-44-page-searchPage.html&&其他::https://www.manhuadb.com/manhua/list-c-71-page-searchPage.html&&神鬼::https://www.manhuadb.com/manhua/list-c-52-page-searchPage.html&&魔法::https://www.manhuadb.com/manhua/list-c-43-page-searchPage.html&&悬疑::https://www.manhuadb.com/manhua/list-c-27-page-searchPage.html&&动作::https://www.manhuadb.com/manhua/list-c-18-page-searchPage.html&&竞技::https://www.manhuadb.com/manhua/list-c-55-page-searchPage.html&&纯爱::https://www.manhuadb.com/manhua/list-c-72-page-searchPage.html&&喜剧::https://www.manhuadb.com/manhua/list-c-32-page-searchPage.html&&萌系::https://www.manhuadb.com/manhua/list-c-59-page-searchPage.html&&耽美::https://www.manhuadb.com/manhua/list-c-53-page-searchPage.html&&恐怖::https://www.manhuadb.com/manhua/list-c-16-page-searchPage.html&&四格::https://www.manhuadb.com/manhua/list-c-56-page-searchPage.html&&伪娘::https://www.manhuadb.com/manhua/list-c-60-page-searchPage.html&&治愈::https://www.manhuadb.com/manhua/list-c-54-page-searchPage.html&&励志::https://www.manhuadb.com/manhua/list-c-47-page-searchPage.html&&舰娘::https://www.manhuadb.com/manhua/list-c-73-page-searchPage.html&&职场::https://www.manhuadb.com/manhua/list-c-58-page-searchPage.html&&战争::https://www.manhuadb.com/manhua/list-c-30-page-searchPage.html&&侦探::https://www.manhuadb.com/manhua/list-c-51-page-searchPage.html&&惊悚::https://www.manhuadb.com/manhua/list-c-21-page-searchPage.html&&职业::https://www.manhuadb.com/manhua/list-c-22-page-searchPage.html&&体育::https://www.manhuadb.com/manhua/list-c-11-page-searchPage.html&&ゆり::https://www.manhuadb.com/manhua/list-c-80-page-searchPage.html&&历史::https://www.manhuadb.com/manhua/list-c-9-page-searchPage.html&&美食::https://www.manhuadb.com/manhua/list-c-45-page-searchPage.html&&性转换::https://www.manhuadb.com/manhua/list-c-67-page-searchPage.html&&秀吉::https://www.manhuadb.com/manhua/list-c-68-page-searchPage.html&&推理::https://www.manhuadb.com/manhua/list-c-19-page-searchPage.html&&音乐舞蹈::https://www.manhuadb.com/manhua/list-c-70-page-searchPage.html&&后宫::https://www.manhuadb.com/manhua/list-c-57-page-searchPage.html&&料理::https://www.manhuadb.com/manhua/list-c-29-page-searchPage.html&&机战::https://www.manhuadb.com/manhua/list-c-61-page-searchPage.html&&节操::https://www.manhuadb.com/manhua/list-c-76-page-searchPage.html&&音乐::https://www.manhuadb.com/manhua/list-c-17-page-searchPage.html&&武侠::https://www.manhuadb.com/manhua/list-c-23-page-searchPage.html&&西方魔幻::https://www.manhuadb.com/manhua/list-c-65-page-searchPage.html&&AA::https://www.manhuadb.com/manhua/list-c-78-page-searchPage.html&&社会::https://www.manhuadb.com/manhua/list-c-37-page-searchPage.html&&资料集::https://www.manhuadb.com/manhua/list-c-28-page-searchPage.html&&宅男::https://www.manhuadb.com/manhua/list-c-49-page-searchPage.html&&传记::https://www.manhuadb.com/manhua/list-c-10-page-searchPage.html&&黑道::https://www.manhuadb.com/manhua/list-c-62-page-searchPage.html&&舞蹈::https://www.manhuadb.com/manhua/list-c-50-page-searchPage.html&&灾难::https://www.manhuadb.com/manhua/list-c-34-page-searchPage.html&&轻小说::https://www.manhuadb.com/manhua/list-c-69-page-searchPage.html&&杂志::https://www.manhuadb.com/manhua/list-c-42-page-searchPage.html&&宅系::https://www.manhuadb.com/manhua/list-c-77-page-searchPage.html&&颜艺::https://www.manhuadb.com/manhua/list-c-74-page-searchPage.html&&腐女::https://www.manhuadb.com/manhua/list-c-63-page-searchPage.html`,

  // 搜索

  ruleSearchAuthor: '@css:.comic-author@text',
  ruleSearchCid: 'href@js:java.splitHref(result, 1)',
  ruleSearchCoverUrl: '@css:img@data-original',
  ruleSearchList: '@css:a.d-block',
  ruleSearchTitle: '@css:a@title',
  ruleSearchUpdate: '',
  ruleSearchUrl:
  'https://www.manhuadb.com/search?q=searchKey&p=searchPage',


  sort: '17',
  type: 17
};

module.exports = source17;