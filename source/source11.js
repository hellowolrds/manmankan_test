var source11 = { 
  comicSourceName: '百年漫画',
  comicSourceUrl: 'https://m.bnmanhua.com/list',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","https://m.bnmanhua.com")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'http://m.bnmanhua.com/comic/%s.html',
  ruleComicTitle: '@css:div.dbox > div.data > h4@text',
  ruleComicAuthor: '@css:div.dbox > div.data > p.dir@text@js:result.substring(3,result.length)',
  ruleComicCover:
  '@css:div.dbox > div.img > mip-img@src',
  ruleComicInstro: '@css:div.tbox_js@text',
  ruleComicStatus: false,
  ruleComicUpdate: '@css:span.list_item@text@js:result.substring(3,13);',
  ruleChapterList: '@css:div.tabs_block > ul > li > a',
  ruleChapterName: 'text',
  ruleChapterUrl: 'tag.a@href@js:java.splitHref(result,2)',

  // 图片详情
  ruleContentUrl:
  'http://m.bnmanhua.com/comic/param1/param2.html',
 // /<script>var sFiles.+<\\/script>/ 要打\\两个反斜杠
  ruleComicContent:
  `importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);importClass(Packages.com.reader.comic.utils.StringUtils);function parseImages(){var list=new ArrayList();var base_url="https://img.yaoyaoliao.com/";var image_list=StringUtils.match("z_img='(.*?)]';",content,1);image_list=image_list.replace("[","");var arr=image_list.split(",");for(var i=0;i<arr.length;i++){var url=arr[i];url=url.replace('"',"");url=base_url+url;list.add(new ImageUrl(i+1,url,false));i++}return list};`,

  // 推荐

  ruleFindAuthor: '',
  ruleFindCid: '@css:a.vbox_t@href@js:java.splitHref(result, -1);',
  ruleFindCoverUrl:
  '@css:a.vbox_t > mip-img@src',
  ruleFindList: '@css:.tbox_m > li',
  ruleFindTitle: '@css:a.vbox_t@title',
  ruleFindUpdate: '@css:.vbox_t > span@text',
  ruleFindUrl:
  `少年漫画::https://m.bnmanhua.com/list/shaonian/searchPage.html&&少女漫画::https://m.bnmanhua.com/list/shaonv/searchPage.html&&青年漫画::https://m.bnmanhua.com/list/qingnian/searchPage.html&&女性漫画::https://m.bnmanhua.com/list/nvxing/searchPage.html&&真人漫画::https://m.bnmanhua.com/list/zhenren/searchPage.html&&武侠格斗::https://m.bnmanhua.com/list/wuxiagedou/searchPage.html&&海外漫画::https://m.bnmanhua.com/list/haiwaimanhua/searchPage.html&&腐漫画::https://m.bnmanhua.com/list/fumanhua/searchPage.html`,

  // 搜索

  ruleSearchAuthor: '',
  ruleSearchCid: '@css:a.vbox_t@href@js:java.splitHref(result, -1);',
  ruleSearchCoverUrl: '@css:a.vbox_t > mip-img@src',
  ruleSearchList: '@css:ul.tbox_m > li.vbox',
  ruleSearchTitle: '@css:a.vbox_t@title',
  ruleSearchUpdate: '@css:span@text',
  ruleSearchUrl:
  'https://m.bnmanhua.com/search/searchKey/searchPage.html?Header{"Referer":"https://m.bnmanhua.com/","Host":"m.bnmanhua.com"}',


  sort: '11',
  type: 11
};

module.exports = source11;