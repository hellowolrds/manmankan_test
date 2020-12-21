
var source25 = { 
  comicSourceName: '下拉漫画',
  comicSourceUrl: 'https://xiala5.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","http://99770.hhxxee.com")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'https://xiala5.com/manhua/%s/',
  ruleComicTitle: '@css:#intro_l .cy_title h1@text',
  ruleComicAuthor: '@css:#intro_l .cy_xinxi span:first-child@text@js:result.replace("作者：", "")',
  ruleComicCover:
  '@css:#intro_l .cy_info_cover .pic@src',
  ruleComicInstro: '@css:#comic-description@text',
  ruleComicStatus: false,
  ruleComicLianZai: "",
  ruleComicUpdate: '',
  ruleChapterList: '@css:#mh-chapter-list-ol-0 li',
  ruleChapterName: '@css:a@text',
  ruleChapterUrl: '@css:a@href',

  // 图片详情
  ruleContentUrl:
  'https://xiala5.com/param2',
  ruleComicContent:
  `
  importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);importClass(Packages.com.reader.comic.utils.StringUtils);function parseImages(){var list=new ArrayList();var images_str=StringUtils.match('url\\":(.+)\\",\\"sum',content,1);images_str=images_str.replace('\\"',"").replace('\\"',"");var img_list=images_str.split("\\\\|72cms\\\\|");for(var i=0;i<img_list.length;i++){list.add(new ImageUrl(i+1,img_list[i],false))}return list};
  `,

  // 推荐

  ruleFindAuthor: '',
  ruleFindCid: '@css:.title > a@href@js:java.splitHref(result, 1)',
  ruleFindCoverUrl:
  '@css:li:first-child .pic img@src',
  ruleFindList: '@css:.cy_list_r .cy_list_mh > ul',
  ruleFindTitle: '@css:.title@text',
  ruleFindUpdate: '@css:.updata a@text',
  ruleFindUrl:
  `全部::https://xiala5.com/sort/searchPage.html&&热血::https://xiala5.com/sort/t1/searchPage.html&&机战::https://xiala5.com/sort/t2/searchPage.html&&运动::https://xiala5.com/sort/t3/searchPage.html&&推理::https://xiala5.com/sort/t4/searchPage.html&&冒险::https://xiala5.com/sort/t5/searchPage.html&&耽美::https://xiala5.com/sort/t6/searchPage.html&&百合::https://xiala5.com/sort/t7/searchPage.html&&搞笑::https://xiala5.com/sort/t8/searchPage.html&&战争::https://xiala5.com/sort/t9/searchPage.html&&神魔::https://xiala5.com/sort/t10/searchPage.html&&忍者::https://xiala5.com/sort/t11/searchPage.html&&竞技::https://xiala5.com/sort/t12/searchPage.html&&悬疑::https://xiala5.com/sort/t13/searchPage.html&&社会::https://xiala5.com/sort/t14/searchPage.html&&恋爱::https://xiala5.com/sort/t15/searchPage.html&&宠物::https://xiala5.com/sort/t16/searchPage.html&&吸血::https://xiala5.com/sort/t17/searchPage.html&&萝莉::https://xiala5.com/sort/t18/searchPage.html&&后宫::https://xiala5.com/sort/t19/searchPage.html&&御姐::https://xiala5.com/sort/t20/searchPage.html&&霸总::https://xiala5.com/sort/t21/searchPage.html&&玄幻::https://xiala5.com/sort/t22/searchPage.html&&古风::https://xiala5.com/sort/t23/searchPage.html&&历史::https://xiala5.com/sort/t24/searchPage.html&&漫改::https://xiala5.com/sort/t25/searchPage.html&&游戏::https://xiala5.com/sort/t26/searchPage.html&&穿越::https://xiala5.com/sort/t27/searchPage.html&&恐怖::https://xiala5.com/sort/t28/searchPage.html&&真人::https://xiala5.com/sort/t29/searchPage.html&&科幻::https://xiala5.com/sort/t30/searchPage.html&&都市::https://xiala5.com/sort/t31/searchPage.html&&武侠::https://xiala5.com/sort/t32/searchPage.html&&修真::https://xiala5.com/sort/t33/searchPage.html&&生活::https://xiala5.com/sort/t34/searchPage.html&&动作::https://xiala5.com/sort/t35/searchPage.html`,

  // 搜索

  ruleSearchAuthor: '',
  ruleSearchCid: '@css:.title > a@href@js:java.splitHref(result, 1)',
  ruleSearchCoverUrl: '@css:li:first-child .pic img@src',
  ruleSearchList: '@css:.cy_list_mh ul',
  ruleSearchTitle: '@css:.title@text',
  ruleSearchUpdate: '@css:.updata a@text',
  ruleSearchUrl:
  'https://xiala5.com/sort/?key=searchKey&page=searchPage',


  sort: '25',
  type: 25
};



module.exports = source25;