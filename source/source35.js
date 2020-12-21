
var source35 = { 
  comicSourceName: '酷漫屋',
  comicSourceUrl: 'http://m.kuman55.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("user-agent","Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'http://m.kuman55.com/%s/?@Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}',
  ruleComicTitle: '@css:h1.txtItme@text',
  ruleComicAuthor: '@css:.sub_r .txtItme@text@js:result.replace("作者：","")',
  ruleComicCover:
  '@css:#Cover>img@src',
  ruleComicInstro: '@css:.d-nowrap-clamp@text',
  ruleComicStatus: false,
  ruleComicUpdate: '@css:.txtItme:nth-child(4)@text@js:result.replace("更新时间：","")',
  ruleChapterList: '@css:#chapterList_ul_2 li',
  ruleChapterName: '@css:a@text',
  ruleChapterUrl: '@css:a@href',
  ruleChapterAjax: ``,

  // 图片详情
  ruleContentUrl:
  'http://m.kuman55.comparam2?@Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}',
  ruleComicContent:
  `
  importClass(Packages.java.util.ArrayList)
importPackage(Packages.com.reader.comic.model)
importClass(Packages.com.reader.comic.utils.DecryptionUtils)
importClass(Packages.com.reader.comic.utils.StringUtils)
importClass(Packages.android.util.Log)
function parseImages() {
    var list = new ArrayList();
    var base_url = "http://image.xmanhua.com/";
    var data = StringUtils.match("km5_img_url=\\'(.+)\\'", content, 1);

    var image_urls = DecryptionUtils.base64Decrypt(data);
    
    var arr = image_urls;
    for (var i = 0; i < arr.length; i ++) {
        var url = arr[i];
        url = url.split("\\\\|");
        Log.d("测试",url[0]);
        url = url[1].replace("\\\\","");
        list.add(new ImageUrl(i+1, url,false));
        i++;
    }
    return list;
}
  `,

  // 推荐

  ruleFindAuthor: '',
  ruleFindCid: '@css:a@href@js:java.splitHref(result,0)',
  ruleFindCoverUrl:
  '@css:.sixz-a@style@js:result=result.match(/url(.+)/g)[0];result=result.replace("url(","").replace(")","")',
  ruleFindList: '@css:.am-thumbnails .am-thumbnail',
  ruleFindTitle: '@css:.d-nowrap a@text',
  ruleFindUpdate: '@css:.pic-text_6z@text',
  ruleFindUrl:
  '冒险热血::http://m.kuman55.com/sort/1-searchPage.html&&武侠格斗::http://m.kuman55.com/sort/2-searchPage.html&&科幻魔幻::http://m.kuman55.com/sort/3-searchPage.html&&侦探推理::http://m.kuman55.com/sort/4-searchPage.html&&耽美爱情::http://m.kuman55.com/sort/5-searchPage.html&&生活漫画::http://m.kuman55.com/sort/6-searchPage.html&&推荐漫画::http://m.kuman55.com/sort/11-searchPage.html&&完结::http://m.kuman55.com/sort/12-searchPage.html&&连载中::http://m.kuman55.com/sort/13-searchPage.html',

  // 搜索

  ruleSearchAuthor: '',
  ruleSearchCid: '@css:a@href@js:java.splitHref(result,0)',
  ruleSearchCoverUrl: '@css:.sixz-a@style@js:result=result.match(/url(.+)/g)[0];result=result.replace("url(","").replace(")","")',
  ruleSearchList: '@css:.am-thumbnails .am-thumbnail',
  ruleSearchTitle: '@css:.d-nowrap a@text',
  ruleSearchUpdate: '@css:.pic-text_6z@text',
  ruleSearchUrl:
  '!http://m.kuman55.com/search.php?key=searchKey@Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}',


  sort: '35',
  type: 35
};



module.exports = source35;