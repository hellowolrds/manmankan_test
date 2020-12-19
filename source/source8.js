var source8 = { 
  comicSourceName: '57漫画',
  comicSourceUrl: 'http://m.wuqimh.com',
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
  ruleComicUpdate: 'class.update@text@js:result.replace("最后更新", "")',
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

  ruleFindAuthor: '@css:.info .desc@text@js:result.split(" ")[0]',
  ruleFindCid: 'tag.a@href@js:result=result.substring(1,result.length-1);result.replace("/", "_")',
  ruleFindCoverUrl:
  'tag.img@data-src',
  ruleFindList: '@css:.comic-list .item',
  ruleFindTitle: 'class.info@class.title@text',
  ruleFindUpdate: '@css:.info .desc@text@js:result.split(" ")[1]',
  ruleFindUrl:
  '全部::http://www.517mh.net/sort/index_searchPage.html&&少年热血::http://www.517mh.net/manhua/rexue/index_searchPage.html&&武侠格斗::http://www.517mh.net/manhua/gedou/index_searchPage.html&&科幻魔幻::http://www.517mh.net/manhua/kehuan/index_searchPage.html&&竞技体育::http://www.517mh.net/manhua/tiyu/index_searchPage.html&&爆笑喜剧::http://www.517mh.net/manhua/xiju/index_searchPage.html&&侦探推理::http://www.517mh.net/manhua/tuili/index_searchPage.html&&其他漫画::http://www.517mh.net/manhua/qita/index_searchPage.html&&恐怖灵异::http://www.517mh.net/manhua/kongbulingyi/index_searchPage.html&&耽美人生::http://www.517mh.net/manhua/danmeirensheng/index_searchPage.html&&少女爱情::http://www.517mh.net/manhua/shaonvaiqing/index_searchPage.html&&恋爱生活::http://www.517mh.net/manhua/lianaishenghuo/index_searchPage.html&&生活漫画::http://www.517mh.net/manhua/shenghuomanhua/index_searchPage.html&&战争漫画::http://www.517mh.net/manhua/zhanzhengmanhua/index_searchPage.html&&故事漫画::http://www.517mh.net/manhua/gushimanhua/index_searchPage.html&&韩国漫画::http://www.517mh.net/manhua/hanguomanhua/index_searchPage.html&&中国漫画::http://www.517mh.net/manhua/zhongguomanhua/index_searchPage.html',

  // 搜索

  ruleSearchAuthor: '@css:dl:eq(1) > a > dd@text',
  ruleSearchCid: '@css:a:eq(0)@href@js:java.splitHref(result, 0)',
  ruleSearchCoverUrl: '@css:a:eq(0) > div.thumb > img@data-src',
  ruleSearchList: '@css:#data_list > li',
  ruleSearchTitle: '@css:a:eq(0) > h3@text',
  ruleSearchUpdate: '@css:dl:eq(4) > dd@text',
  ruleSearchUrl:
  'http://m.wuqimh.com/search/q_searchKey-p-searchPage',


  sort: '8',
  type: 8
};

module.exports = source8;