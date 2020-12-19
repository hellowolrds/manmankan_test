
var source4 = { 
  comicSourceName: '极速漫画',
  comicSourceUrl: 'http://www.js518.net',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","http://m.tuku.cc")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'http://www.js518.net/%s',
  ruleComicTitle: 'class.mh-date-info@class.mh-date-info-name@tag.h4@text',
  ruleComicAuthor: 'class.mh-pdt30@class.one@tag.em@text',
  ruleComicCover:
  'class.mh-date-bgpic@tag.img@src',
  ruleComicInstro: 'id.workint@text',
  ruleComicStatus: false,
  ruleComicUpdate: '',
  ruleChapterList: 'id.mh-chapter-list-ol-0@tag.li',
  ruleChapterName: 'text',
  ruleChapterUrl: 'tag.a@href',

  // 图片详情
  ruleContentUrl:
  'http://www.js518.net/param2',
 // /<script>var sFiles.+<\\/script>/ 要打\\两个反斜杠
  ruleComicContent:
  'importClass(Packages.com.reader.comic.utils.StringUtils);importPackage(Packages.com.reader.comic.model);importClass(Packages.java.util.ArrayList);importClass(Packages.com.reader.comic.utils.DecryptionUtils);function parseImages(){var list=new ArrayList();var base_url="http://j.aiwenwo.net/";var data=StringUtils.match(\'qTcms_S_m_murl_e=\\"(.+)\\";\',content,1);var image_urls=DecryptionUtils.base64Decrypt(data);var temp=image_urls.split("\$qingtiandy\$");for(var i=0;i<temp.length;i++){var url=temp[i];list.add(new ImageUrl(i+1,base_url+url,false));i++}return list};',

  // 推荐

  ruleFindAuthor: '@css:.con h3+p@text',
  ruleFindCid: 'class.pic@tag.a@href@js:result=java.splitHref(result, -1);',
  ruleFindCoverUrl:
  'tag.img@src',
  ruleFindList: 'class.main@class.se-list@tag.li',
  ruleFindTitle: 'class.con@tag.h3@text',
  ruleFindUpdate: '',
  ruleFindUrl:
  '萌系::http://ssoonn.com/lists/1/searchPage/&&搞笑::http://ssoonn.com/lists/2/searchPage/&&格斗::http://ssoonn.com/lists/3/searchPage/&&科幻::http://ssoonn.com/lists/4/searchPage/&&剧情::http://ssoonn.com/lists/5/searchPage/&&侦探::http://ssoonn.com/lists/6/searchPage/&&竞技::http://ssoonn.com/lists/7/searchPage/&&魔法::http://ssoonn.com/lists/8/searchPage/&&神鬼::http://ssoonn.com/lists/9/searchPage/&&校园::http://ssoonn.com/lists/10/searchPage/&&惊栗::http://ssoonn.com/lists/11/searchPage/&&厨艺::http://ssoonn.com/lists/12/searchPage/&&伪娘::http://ssoonn.com/lists/13/searchPage/&&图片::http://ssoonn.com/lists/14/searchPage/&&冒险::http://ssoonn.com/lists/15/searchPage/&&小说::http://ssoonn.com/lists/19/searchPage/&&港漫::http://ssoonn.com/lists/20/searchPage/&&耽美::http://ssoonn.com/lists/21/searchPage/&&经典::http://ssoonn.com/lists/22/searchPage/&&欧美::http://ssoonn.com/lists/23/searchPage/&&日文::http://ssoonn.com/lists/24/searchPage/&&亲情::http://ssoonn.com/lists/25/searchPage/',

  // 搜索

  ruleSearchAuthor: '',
  ruleSearchCid: 'tag.a@href@js:result=result.substring(1,result.length-1);result.replace("/", "_")',
  ruleSearchCoverUrl: 'class.mh-nlook-w@tag.img@src',
  ruleSearchList: 'class.mh-search-list@tag.li',
  ruleSearchTitle: 'class.mh-works-title@tag.h4@text',
  ruleSearchUpdate: 'class.mh-works-author@text',
  ruleSearchUrl:
  'http://www.js518.net/statics/search.aspx?key=searchKey&page=searchPage',


  sort: '4',
  type: 4
};



module.exports = source4;