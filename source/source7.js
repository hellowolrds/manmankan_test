var source7 = { 
  comicSourceName: '517漫画',
  comicSourceUrl: 'http://m.dm5.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","http://www.hhmmoo.com")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'http://www.517mh.net/%s/',
  ruleComicTitle: '@css:.warp-main .title-warper .title@text',
  ruleComicAuthor: '',
  ruleComicCover:
  '@css:.warp-main .comic-cover img@data-src',
  ruleComicInstro: 'id.layerOpenCon@text',
  ruleComicStatus: false,
  ruleComicUpdate: '@css:#randomColor c1@text',
  ruleChapterList: '@css:#chapterList li',
  ruleChapterName: 'text',
  ruleChapterUrl: 'tag.a@href',

  // 图片详情
  ruleContentUrl:
  'http://www.517mh.net/param2',
 // /<script>var sFiles.+<\\/script>/ 要打\\两个反斜杠
  ruleComicContent:
  'importClass(Packages.java.util.ArrayList);importClass(Packages.com.reader.comic.utils.StringUtils);importPackage(Packages.com.reader.comic.model);function parseImages(){var list=new ArrayList();var base_url="http://image.xmanhua.com/";var data=StringUtils.match("chapter_list_all:(.+)]",content,1);data=data.replace("[","");var image_urls=data.split(",");for(var i=0;i<image_urls.length;i++){var url=image_urls[i];url=url.replace(\'"\',"").replace(\'"\',"");list.add(new ImageUrl(i+1,url,false))}return list};',

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

  ruleSearchAuthor: '@css:.info .desc@text@js:result.split(" ")[0]',
  ruleSearchCid: 'tag.a@href@js:result=result.substring(1,result.length-1);result.replace("/", "_")',
  ruleSearchCoverUrl: 'tag.img@data-src',
  ruleSearchList: 'class.comic-list@class.item',
  ruleSearchTitle: 'class.info@class.title@text',
  ruleSearchUpdate: '@css:.info .desc@text@js:result.split(" ")[1]',
  ruleSearchUrl:
  '!http://www.517mh.net/sort/?key=searchKey',


  sort: '7',
  type: 7
};

module.exports = source7;