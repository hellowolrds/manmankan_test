
var source18 = { 
  comicSourceName: '漫画台',
  comicSourceUrl: 'https://m.manhuatai.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","http://m.dmzj.com/")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'https://www.manhuatai.com/%s/',
  ruleComicTitle: '@css:h1#detail-title@title',
  ruleComicAuthor: '$.authors[*].tag_name',
  ruleComicCover:
  '@css:div.detail-cover > img@data-src@js:"https:"+result',
  ruleComicInstro: '@css:div#js_comciDesc > p.desc-content@text',
  ruleComicStatus: false,
  ruleComicUpdate: '@css:span.update@text@js:result.substring(0,10)',
  ruleChapterList: '@css:ol#j_chapter_list > li > a',
  ruleChapterName: 'title',
  ruleChapterUrl: 'href@js:java.splitHref(result, 1)',

  // 图片详情
  ruleContentUrl:
  'https://m.manhuatai.com/api/getcomicinfo_body?product_id=2&productname=mht&platformname=wap&comic_newid=param1',
  ruleComicContent:
  'importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);importClass(Packages.com.reader.comic.utils.StringUtils);i;importPackage(Packages.java.lang);importPackage(Packages.org.json);function parseImages(){var list=new ArrayList();var temp=new JSONObject(content);if(temp.getInt("status")!=0){return list}var chapters=temp.getJSONObject("data").getJSONArray("comic_chapter");var chapter=null;for(var i=0;i<chapters.length();i++){chapter=chapters.getJSONObject(i);var a=chapter.getString("chapter_id");if(a.equals(path)){break}}var ImagePattern="http://mhpic."+chapter.getString("chapter_domain")+chapter.getString("rule")+"-mht.low.webp";for(var index=chapter.getInt("start_num");index<=chapter.getInt("end_num");index++){var image=ImagePattern.replace("$$",Integer.toString(index));list.add(new ImageUrl(index,image,false))}return list};',

  // 推荐

  ruleFindAuthor: '$.comic_author',
  ruleFindCid: '$.comic_newid',
  ruleFindCoverUrl:
  '$.comic_id@js:"https://image.yqmh.com/mh/" + result + ".jpg-300x400.webp"',
  ruleFindList: '$.data.data.*',
  ruleFindTitle: '$.comic_name',
  ruleFindUpdate: '$.last_chapter_name',
  ruleFindUrl:
  '全部::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=story&size=48&&热血::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=rexue&size=48&&机战::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=jizhan&size=48&&运动::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=yundong&size=48&&推理::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=tuili&size=48&&冒险::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=maoxian&size=48&&耽美::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=liaomei&size=48&&百合::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=baihe&size=48&&搞笑::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=gaoxiao&size=48&&战争::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=zhanzhen&size=48&&神魔::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=shenmo&size=48&&忍者::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=renzhe&size=48&&竞技::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=jingji&size=48&&悬疑::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=xuanyi&size=48&&社会::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=shehui&size=48&&恋爱::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=lianai&size=48&&宠物::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=chongwu&size=48&&吸血::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=xixue&size=48&&萝莉::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=luoli&size=48&&后宫::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=hougong&size=48&&御姐::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=yujie&size=48&&霸总::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=bazong&size=48&&玄幻::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=xuanhuan&size=48&&古风::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=gufeng&size=48&&历史::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=lishi&size=48&&漫改::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=mangai&size=48&&游戏::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=youxi&size=48&&穿越::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=chuanyue&size=48&&恐怖::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=kongbu&size=48&&真人::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=zhenren&size=48&&科幻::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=kehuan&size=48&&都市::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=dushi&size=48&&武侠::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=wuxia&size=48&&修真::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=xiuzhen&size=48&&生活::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=shenghuo&size=48&&动作::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=dongzuo&size=48&&防疫::https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&page=searchPage&pageSize=48&comic_sort=fangyi&size=48',

  // 搜索

  ruleSearchAuthor: '',
  ruleSearchCid: '$.comic_newid',
  ruleSearchCoverUrl: '$.comic_id@js:"https://image.yqmh.com/mh/" + result + ".jpg-300x400.webp"',
  ruleSearchList: '$.data.data.*',
  ruleSearchTitle: '$.comic_name',
  ruleSearchUpdate: '$.last_chapter_name',
  ruleSearchUrl:
  'https://m.manhuatai.com/api/getsortlist/?product_id=2&productname=mht&platformname=wap&orderby=click&search_key=searchKet&page=searchPage&size=48',


  sort: '18',
  type: 18
};



module.exports = source18;