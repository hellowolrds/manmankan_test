
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
  ruleFindCid: '$.UrlKey',
  ruleFindCoverUrl:
  '$.ShowConver',
  ruleFindList: '$.UpdateComicItems.*',
  ruleFindTitle: '$.Content',
  ruleFindUpdate: '$.LastUpdateTime',
  ruleFindUrl:
  '全部::http://www.dm5.com/dm5.ashx@pagesize=68&pageindex=searchPage&tagid=0&areaid=0&status=0&usergroup=0&pay=&data[group_id]=-1&char=&sort=10&action=getclasscomics&&热血::http://www.dm5.com/dm5.ashx@pagesize=68&pageindex=searchPage&tagid=31&areaid=0&status=0&usergroup=0&pay=&data[group_id]=-1&char=&sort=10&action=getclasscomics&&恋爱::http://www.dm5.com/dm5.ashx@pagesize=68&pageindex=searchPage&tagid=26&areaid=0&status=0&usergroup=0&pay=&data[group_id]=-1&char=&sort=10&action=getclasscomics&&校园::http://www.dm5.com/dm5.ashx@pagesize=68&pageindex=searchPage&tagid=1&areaid=0&status=0&usergroup=0&pay=&data[group_id]=-1&char=&sort=10&action=getclasscomics&&百合::http://www.dm5.com/dm5.ashx@pagesize=68&pageindex=searchPage&tagid=3&areaid=0&status=0&usergroup=0&pay=&data[group_id]=-1&char=&sort=10&action=getclasscomics&&耽美::http://www.dm5.com/dm5.ashx@pagesize=68&pageindex=searchPage&tagid=27&areaid=0&status=0&usergroup=0&pay=&data[group_id]=-1&char=&sort=10&action=getclasscomics&&冒险::http://www.dm5.com/dm5.ashx@pagesize=68&pageindex=searchPage&tagid=2&areaid=0&status=0&usergroup=0&pay=&data[group_id]=-1&char=&sort=10&action=getclasscomics&&后宫::http://www.dm5.com/dm5.ashx@pagesize=68&pageindex=searchPage&tagid=8&areaid=0&status=0&usergroup=0&pay=&data[group_id]=-1&char=&sort=10&action=getclasscomics&&科幻::http://www.dm5.com/dm5.ashx@pagesize=68&pageindex=searchPage&tagid=25&areaid=0&status=0&usergroup=0&pay=&data[group_id]=-1&char=&sort=10&action=getclasscomics&&战争::http://www.dm5.com/dm5.ashx@pagesize=68&pageindex=searchPage&tagid=12&areaid=0&status=0&usergroup=0&pay=&data[group_id]=-1&char=&sort=10&action=getclasscomics&&悬疑::http://www.dm5.com/dm5.ashx@pagesize=68&pageindex=searchPage&tagid=17&areaid=0&status=0&usergroup=0&pay=&data[group_id]=-1&char=&sort=10&action=getclasscomics&&推理::http://www.dm5.com/dm5.ashx@pagesize=68&pageindex=searchPage&tagid=33&areaid=0&status=0&usergroup=0&pay=&data[group_id]=-1&char=&sort=10&action=getclasscomics&&搞笑::http://www.dm5.com/dm5.ashx@pagesize=68&pageindex=searchPage&tagid=37&areaid=0&status=0&usergroup=0&pay=&data[group_id]=-1&char=&sort=10&action=getclasscomics&&奇幻::http://www.dm5.com/dm5.ashx@pagesize=68&pageindex=searchPage&tagid=14&areaid=0&status=0&usergroup=0&pay=&data[group_id]=-1&char=&sort=10&action=getclasscomics&&魔法::http://www.dm5.com/dm5.ashx@pagesize=68&pageindex=searchPage&tagid=15&areaid=0&status=0&usergroup=0&pay=&data[group_id]=-1&char=&sort=10&action=getclasscomics&&恐怖::http://www.dm5.com/dm5.ashx@pagesize=68&pageindex=searchPage&tagid=29&areaid=0&status=0&usergroup=0&pay=&data[group_id]=-1&char=&sort=10&action=getclasscomics&&神鬼::http://www.dm5.com/dm5.ashx@pagesize=68&pageindex=searchPage&tagid=20&areaid=0&status=0&usergroup=0&pay=&data[group_id]=-1&char=&sort=10&action=getclasscomics&&历史::http://www.dm5.com/dm5.ashx@pagesize=68&pageindex=searchPage&tagid=4&areaid=0&status=0&usergroup=0&pay=&data[group_id]=-1&char=&sort=10&action=getclasscomics&&同人::http://www.dm5.com/dm5.ashx@pagesize=68&pageindex=searchPage&tagid=30&areaid=0&status=0&usergroup=0&pay=&data[group_id]=-1&char=&sort=10&action=getclasscomics&&运动::http://www.dm5.com/dm5.ashx@pagesize=68&pageindex=searchPage&tagid=34&areaid=0&status=0&usergroup=0&pay=&data[group_id]=-1&char=&sort=10&action=getclasscomics&&绅士::http://www.dm5.com/dm5.ashx@pagesize=68&pageindex=searchPage&tagid=36&areaid=0&status=0&usergroup=0&pay=&data[group_id]=-1&char=&sort=10&action=getclasscomics&&机战::http://www.dm5.com/dm5.ashx@pagesize=68&pageindex=searchPage&tagid=40&areaid=0&status=0&usergroup=0&pay=&data[group_id]=-1&char=&sort=10&action=getclasscomics',

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