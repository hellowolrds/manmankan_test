
var source29 = { 
  comicSourceName: '漫画羊',
  comicSourceUrl: 'https://m.manhuayang.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","http://m.dmzj.com/")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'https://m.manhuayang.com/%s/?@Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}',
  ruleComicTitle: '@css:.comic-detail h1@text',
  ruleComicAuthor: '',
  ruleComicCover:
  '@css:.comic-cover img@data-src@js:"https://"+result',
  ruleComicInstro: '@css:#js_desc_content@text',
  ruleComicStatus: false,
  ruleComicUpdate: '@css:#js_read_catalog .update-time@text',
  ruleChapterList: '-@css:#js_chapter_list li',
  ruleChapterName: '@css:.chapter-name .name@text',
  ruleChapterUrl: '@css:a@href',

  // 图片详情
  ruleContentUrl:
  'https://m.manhuayang.comparam2?@Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}',
  ruleComicContent:
  'importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);importClass(Packages.com.reader.comic.soup.Node);importClass(Packages.com.reader.comic.utils.StringUtils);function parseImages(){var list=new ArrayList();var image_str=StringUtils.match("comicInfo=(.+)\\\\}\\\\}",content,1);eval("var data = "+image_str+"}}");var base_url="https://"+data.current_chapter.chapter_domain;var count=data.current_chapter.end_num;var img_url=base_url+data.current_chapter.rule+"-asmh.low.webp";for(var i=0;i<count;i++){var url=img_url.replace("$$",i+1);list.add(new ImageUrl(i+1,url,false))}return list};',

  // 推荐

  ruleFindAuthor: '$.comic_author',
  ruleFindCid: '$.comic_newid',
  ruleFindCoverUrl:
  '$.comic_id@js:"http://cover.feimh8.com/mh/"+result+".jpg-300x400.jpg"',
  ruleFindList: '$.data.data.*',
  ruleFindTitle: '$.comic_name',
  ruleFindUpdate: '$.last_chapter_name',
  ruleFindUrl:
  '热血::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=rexue&type=4&size=48&&机战::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=jizhan&type=4&size=48&&运动::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=yundong&type=4&size=48&&推理::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=tuili&type=4&size=48&&冒险::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=maoxian&type=4&size=48&&耽美::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=liaomei&type=4&size=48&&百合::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=baihe&type=4&size=48&&搞笑::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=gaoxiao&type=4&size=48&&战争::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=zhanzhen&type=4&size=48&&神魔::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=shenmo&type=4&size=48&&忍者::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=renzhe&type=4&size=48&&竞技::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=jingji&type=4&size=48&&悬疑::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=xuanyi&type=4&size=48&&社会::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=shehui&type=4&size=48&&恋爱::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=lianai&type=4&size=48&&宠物::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=chongwu&type=4&size=48&&吸血::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=xixue&type=4&size=48&&萝莉::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=luoli&type=4&size=48&&后宫::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=hougong&type=4&size=48&&御姐::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=yujie&type=4&size=48&&霸总::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=bazong&type=4&size=48&&玄幻::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=xuanhuan&type=4&size=48&&古风::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=gufeng&type=4&size=48&&历史::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=lishi&type=4&size=48&&漫改::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=mangai&type=4&size=48&&游戏::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=youxi&type=4&size=48&&穿越::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=chuanyue&type=4&size=48&&恐怖::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=kongbu&type=4&size=48&&真人::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=zhenren&type=4&size=48&&科幻::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=kehuan&type=4&size=48&&都市::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=dushi&type=4&size=48&&武侠::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=wuxia&type=4&size=48&&修真::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=xiuzhen&type=4&size=48&&生活::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=shenghuo&type=4&size=48&&动作::https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=dongzuo&type=4&size=48',

  // 搜索

  ruleSearchAuthor: '$.comic_author',
  ruleSearchCid: '$.comic_newid',
  ruleSearchCoverUrl: '$.comic_id@js:"http://cover.feimh8.com/mh/"+result+".jpg-300x400.jpg"',
  ruleSearchList: '$.data.data.*',
  ruleSearchTitle: '$.comic_name',
  ruleSearchUpdate: '$.last_chapter_name',
  ruleSearchUrl:
  'https://m.manhuayang.com/api/getsortlist/?page=searchPage&comic_sort=&orderby=click&search_key=searchKey&size=48',


  sort: '29',
  type: 29
};



module.exports = source29;