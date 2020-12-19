
var source6 = { 
  comicSourceName: '动漫屋',
  comicSourceUrl: 'http://m.dm5.com',
  enable: true,
  imgHeaders:
  'importClass(Packages.com.reader.comic.utils.StringUtils);function getHeader(){return Headers.of("Referer","http://m.dm5.com/")}function getHeader2(url){var cid="m".concat(StringUtils.match("cid=(\\d+)",url,1));return Headers.of("Referer","http://m.dm5.com/".concat(cid))}function getHeader3(){var cid="";if(list!=null){cid=list.get(0).getChapter()}return Headers.of("Referer","http://m.dm5.com/".concat(cid))};',
 
  // 漫画详情
  ruleComicInfoUrl: 'http://m.dm5.com/%s/',
  ruleComicTitle: 'class.normal-top-title@text',
  ruleComicAuthor: 'class.detail-main-info-author@tag.a@text',
  ruleComicCover:
  '@css:.detail-main-bg@src',
  ruleComicInstro: 'id.detail-desc@text',
  ruleComicStatus: false,
  ruleComicUpdate: 'class.detail-list-title-3@text',
  ruleChapterList: '-@css:#detail-list-select-1 li',
  ruleChapterName: 'class.detail-list-2-info-title@text',
  ruleChapterUrl: 'tag.a@href@js:java.splitHref(result, 0)',

  // 图片详情
  ruleContentUrl:
  'http://m.dm5.com/param2@Header:{"Referer": "http://m.dm5.com/param2"}',
 // /<script>var sFiles.+<\\/script>/ 要打\\两个反斜杠
  ruleComicContent:
  'importClass(Packages.java.util.ArrayList);importClass(Packages.com.reader.comic.utils.StringUtils);importClass(Packages.com.reader.comic.utils.DecryptionUtils);importPackage(Packages.com.reader.comic.model);function parseImages(){var list=new ArrayList();var str=StringUtils.match("eval\\\\(.*\\\\)",content,0);if(str!=null){str=DecryptionUtils.evalDecrypt(str,"newImgs");var array=str.split(",");for(var i=0;i!=array.length;++i){list.add(new ImageUrl(i+1,array[i],false))}}return list};',

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

  ruleSearchAuthor: '$.Author',
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