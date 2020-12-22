
var source36 = { 
  comicSourceName: '云漫画线路2📱💡',
  comicSourceUrl: 'http://yunmanhua2.yueriji.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("user-agent","Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'http://yunmanhua2.yueriji.com/app/index.php?i=2&c=entry&id=%s&do=show&m=pinzhi_mh@Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}',
  ruleComicTitle: 'class.title@text',
  ruleComicAuthor: '',
  ruleComicCover:
  'class.bg@tag.img@src',
  ruleComicInstro: 'class.body@text',
  ruleComicStatus: false,
  ruleComicUpdate: '',
  ruleChapterList: '-@css:#html_box .item',
  ruleChapterName: '@css:a@text',
  ruleChapterUrl: '@css:a@href',
  ruleChapterAjax: ``,

  // 图片详情
  ruleContentUrl:
  'http://yunmanhua2.yueriji.com/app/param2?@Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}',
  ruleComicContent:
  `
  importClass(Packages.java.util.ArrayList)
importPackage(Packages.com.reader.comic.model)
importClass(Packages.com.reader.comic.utils.StringUtils)
importClass(Packages.com.reader.comic.soup.Node)
function parseImages() {
    var list = new ArrayList();
    var body = new Node(content);
    var img_list = body.list("figure.item");
    for(var i = 0; i < img_list.size();i++) {
      var node = img_list.get(i);
      list.add(new ImageUrl(i+1,node.attr("data-original")));
    }
    return list;
}
  `,

  // 推荐

  ruleFindAuthor: '',
  ruleFindCid: '@css:.sixz-a@href@js:java.splitHref(result,0)',
  ruleFindCoverUrl:
  '@css:.sixz-a@style@js:result=result.match(/url(.+)/g)[0];result=result.replace("url(","").replace(")","")',
  ruleFindList: '@css:#tjmanhua .am-avg-sm-3 .am-thumbnail',
  ruleFindTitle: '@css:.d-nowrap a@text',
  ruleFindUpdate: '@css:.pic-text_6z@text',
  ruleFindUrl:
  '冒险热血::http://m.kuman55.com/sort/1-searchPage.html&&武侠格斗::http://m.kuman55.com/sort/2-searchPage.html&&科幻魔幻::http://m.kuman55.com/sort/3-searchPage.html&&侦探推理::http://m.kuman55.com/sort/4-searchPage.html&&耽美爱情::http://m.kuman55.com/sort/5-searchPage.html&&生活漫画::http://m.kuman55.com/sort/6-searchPage.html&&推荐漫画::http://m.kuman55.com/sort/11-searchPage.html&&完结::http://m.kuman55.com/sort/12-searchPage.html&&连载中::http://m.kuman55.com/sort/13-searchPage.html',

  // 搜索

  ruleSearchAuthor: '',
  ruleSearchCid: 'tag.a@href@js:function getUrlParam(str,name){var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");var r=str.match(reg);var strValue="";if(r!=null){strValue=unescape(r[2])}return strValue};getUrlParam(result,"id")',
  ruleSearchCoverUrl: 'tag.img@src',
  ruleSearchList: 'class.item',
  ruleSearchTitle: 'class.title@text',
  ruleSearchUpdate: '@css:.text@text',
  ruleSearchUrl:
  '!http://yunmanhua2.yueriji.com/app/index.php?i=2&c=entry&do=search&m=pinzhi_mh@keyword=searchKey@Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}',


  sort: '36',
  type: 36
};



module.exports = source36;