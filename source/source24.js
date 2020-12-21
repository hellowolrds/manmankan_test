
var source24 = { 
  comicSourceName: '997700',
  comicSourceUrl: 'http://99770.hhxxee.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","http://99770.hhxxee.com")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'http://99770.hhxxee.com/comic/%s',
  ruleComicTitle: '@css:.cTitle@text',
  ruleComicAuthor: '@css:.cInfoTxt tr:nth-child(2) td:last-child@text',
  ruleComicCover:
  '@css:.cDefaultImg > img@src',
  ruleComicInstro: '@css:.cCon@text',
  ruleComicStatus: false,
  ruleComicLianZai: "",
  ruleComicUpdate: '@css:.cInfoTxt tr:nth-child(5) td:last-child a@text',
  ruleChapterList: '@css:#subBookListAct > div',
  ruleChapterName: '@css:a@text',
  ruleChapterUrl: '@css:a@href@js:java.splitHref(result, 2)',

  // 图片详情
  ruleContentUrl:
  'http://99770.hhxxee.com/comic/param1/param2/',
  ruleComicContent:
  'importPackage(Packages.java.lang);importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);importClass(Packages.com.reader.comic.utils.StringUtils);function parseImages(){var serverstr="http://20.125084.com/dm01/|http://20.125084.com/dm02/|http://20.125084.com/dm03/|http://20.125084.com/dm04/|http://20.125084.com/dm05/|http://20.125084.com/dm06/|http://20.125084.com/dm07/|http://20.125084.com/dm08/|http://20.125084.com/dm09/|http://20.125084.com/dm10/|http://20.125084.com/dm11/|http://20.125084.com/dm12/|http://20.125084.com/dm13/|http://20.125084.com/dm14/|http://20.125084.com/dm15/|http://20.125084.com/dm16/";var servers=serverstr.split("|");var list=new ArrayList();var str=StringUtils.match(\'var sFiles=\\"(.*?)\\"\',content,1);if(str!=null){var array=str.split("\\|");for(var i=0;i!=array.length;++i){list.add(new ImageUrl(i+1,servers[getPictureServers(array[i])]+array[i],false))}}return list}function getPictureServers(url){return Integer.parseInt(StringUtils.match("ok\\\\-comic(\\\\d+)",url,1))-1};',

  // 推荐

  ruleFindAuthor: '@css:.ctor@text',
  ruleFindCid: '@css:a@href@js:java.splitHref(result, -1)',
  ruleFindCoverUrl:
  '@css:img@src',
  ruleFindList: '@css:.cComicList > li',
  ruleFindTitle: '@css:a@title',
  ruleFindUpdate: '@css:.clw1@text',
  ruleFindUrl:
  `漫畫列表::http://99770.hhxxee.com/comiclist/0/searchPage/&&萌系::http://99770.hhxxee.com/comiclist/1/searchPage/&&搞笑::http://99770.hhxxee.com/comiclist/2/searchPage/&&格斗::http://99770.hhxxee.com/comiclist/3/searchPage/&&科幻::http://99770.hhxxee.com/comiclist/4/searchPage/&&劇情::http://99770.hhxxee.com/comiclist/5/searchPage/&&偵探::http://99770.hhxxee.com/comiclist/6/searchPage/&&競技::http://99770.hhxxee.com/comiclist/7/searchPage/&&魔法::http://99770.hhxxee.com/comiclist/8/searchPage/&&神鬼::http://99770.hhxxee.com/comiclist/9/searchPage/&&校園::http://99770.hhxxee.com/comiclist/10/searchPage/&&驚栗::http://99770.hhxxee.com/comiclist/11/searchPage/&&廚藝::http://99770.hhxxee.com/comiclist/12/searchPage/&&偽娘::http://99770.hhxxee.com/comiclist/13/searchPage/&&圖片::http://99770.hhxxee.com/comiclist/14/searchPage/&&冒險::http://99770.hhxxee.com/comiclist/15/searchPage/&&小說::http://99770.hhxxee.com/comiclist/19/searchPage/&&港漫::http://99770.hhxxee.com/comiclist/20/searchPage/&&耽美::http://99770.hhxxee.com/comiclist/21/searchPage/&&經典::http://99770.hhxxee.com/comiclist/22/searchPage/&&歐美::http://99770.hhxxee.com/comiclist/23/searchPage/&&日文::http://99770.hhxxee.com/comiclist/24/searchPage/&&親情::http://99770.hhxxee.com/comiclist/25/searchPage/`,

  // 搜索

  ruleSearchAuthor: '@css:.cl1_2@text@js:result.substring(3,result.length)',
  ruleSearchCid: '@css:.cListTitle > a@href@js:java.splitHref(result, -1)',
  ruleSearchCoverUrl: '@css:.cListSlt > img@src',
  ruleSearchList: '@css:.cInfoItem',
  ruleSearchTitle: '@css:.cListTitle > span@text@js:result.substring(1,result.length-1)',
  ruleSearchUpdate: '@css:.cListh2 > span@text@js:result.substring(8,result.length)',
  ruleSearchUrl:
  '!http://99770.hhxxee.com/search/s.aspx@tbSTxt=searchKey',


  sort: '24',
  type: 24
};



module.exports = source24;