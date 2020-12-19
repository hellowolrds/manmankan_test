
var source6 = { 
  comicSourceName: '动漫屋',
  comicSourceUrl: 'http://m.dm5.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","http://www.u17.com")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'http://www.dm5.com/%s.html',
  ruleComicTitle: '@css:.banner_detail_form .info .title@text',
  ruleComicAuthor: '@css:div.banner_detail_form > div.info > p.subtitle > a@text',
  ruleComicCover:
  '@css:div.banner_detail_form > div.cover > img@src',
  ruleComicInstro: '@css:div.banner_detail_form > div.info > p.content@text',
  ruleComicStatus: false,
  ruleComicUpdate: '',
  ruleChapterList: '@css:#chapterlistload > ul  li > a',
  ruleChapterName: 'text@js:result.split(" ")[0]',
  ruleChapterUrl: 'href@js:java.splitHref(result, 0)',

  // 图片详情
  ruleContentUrl:
  'http://m.dm5.com/param2@Header:{"Referer": "http://m.dm5.com/param2"}',
 // /<script>var sFiles.+<\\/script>/ 要打\\两个反斜杠
  ruleComicContent:
  'importClass(Packages.java.util.ArrayList);importClass(Packages.com.reader.comic.utils.StringUtils);importClass(Packages.com.reader.comic.utils.DecryptionUtils);importPackage(Packages.com.reader.comic.model);function parseImages(){var list=new ArrayList();var str=StringUtils.match("eval\\(.*\\)",content,0);if(str!=null){str=DecryptionUtils.evalDecrypt(str,"newImgs");var array=str.split(",");for(var i=0;i!=array.length;++i){list.add(new ImageUrl(i+1,array[i],false))}}return list};',

  // 推荐

  ruleFindAuthor: '',
  ruleFindCid: '$.comic_id',
  ruleFindCoverUrl:
  '$.cover',
  ruleFindList: '$.comic_list.*',
  ruleFindTitle: '$.name',
  ruleFindUpdate: '',
  ruleFindUrl:
  '',

  // 搜索

  ruleSearchAuthor: '$.Author@js:result.join(" ")',
  ruleSearchCid: '$.Url@js:result.split("/")[1]',
  ruleSearchCoverUrl: '$.Pic',
  ruleSearchList: '$.*',
  ruleSearchTitle: '$.Title',
  ruleSearchUpdate: '$.LastPartTime',
  ruleSearchUrl:
  'http://m.dm5.com/pagerdata.ashx@t=7&pageindex=searchPage&title=searchKey@Header:{"Header": "http://m.dm5.com"}',


  sort: '6',
  type: 6
};



module.exports = source6;