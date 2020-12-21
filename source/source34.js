
var source34 = { 
  comicSourceName: '奇漫屋',
  comicSourceUrl: 'http://m.qiman6.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("user-agent","Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'http://m.qiman6.com/%s/?@Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}',
  ruleComicTitle: '@css:.box-back2 h1@text',
  ruleComicAuthor: '',
  ruleComicCover:
  '@css:.comic-info-box .box-back1 img@src',
  ruleComicInstro: '@css:.comic-intro@text',
  ruleComicStatus: false,
  ruleComicUpdate: '@css:.box-back2 .txtItme:eq(3)@text@js:result.replace("更新时间：","")',
  ruleChapterList: '@css:.chapter-item',
  ruleChapterName: '@css: a@text',
  ruleChapterUrl: '@css: a@href',
  ruleChapterAjax: `
  importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);importClass(Packages.com.reader.comic.soup.Node);importClass(Packages.com.reader.comic.utils.StringUtils);importPackage(Packages.java.lang);importPackage(Packages.org.json);importClass(Packages.okhttp3.FormBody);importClass(Packages.okhttp3.Headers);importClass(Packages.okhttp3.Request);importClass(Packages.okhttp3.RequestBody);importClass(Packages.okhttp3.OkHttpClient);function parseChapter(){var list=new ArrayList();var body=new Node(content);var cid=body.hrefWithSplit(".chapter-item:first-child a",0);var client=new OkHttpClient();var body=new FormBody.Builder().add("id",cid).add("id2","1").build();var request=new Request.Builder().url("http://m.qiman6.com/bookchapter/").post(body).build();var response=client.newCall(request).execute();if(response.isSuccessful()){var chapterList=new JSONArray(response.body().string());for(var i=0;i<chapterList.length();i++){var json=chapterList.getJSONObject(i);var title=json.getString("name");var path="/"+cid+"/"+json.getString("id")+".html";list.add(new Chapter(title,path))}}return list};
  `,

  // 图片详情
  ruleContentUrl:
  'http://m.qiman6.comparam2?@Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}',
  ruleComicContent:
  `
  importClass(Packages.java.util.ArrayList)
importPackage(Packages.com.reader.comic.model)
importPackage(Packages.java.lang)


function parseImages() {
    var list = new ArrayList();
    var reg = /\\}\\('(.+\\])',([0-9]*),([0-9]*),('.+'\\)),([0-9]*),(\\{.*\\})/g;
    var params = reg.exec(content);
    params[1] = params[1].replace(/\\\\/g, "");
    eval(get_img(params[1], params[2], params[3], params[4], 0, {}));

    for (var i = 0; i < newImgs.length; i ++) {
        var url = newImgs[i];
        list.add(new ImageUrl(i+1, url, false));
    }

    return list;
}

function get_img (p, a, c, k, e, d) {
    eval("k="+k+";")
   if (!''.replace(/^/, String)) {
        while (c--) {
            d[c.toString(a)] = k[c] || c.toString(a)
        }
        k = [function(e) {
            return d[e]
        }];
        e = function() {
            return '\\\\w+'
        };
        c = 1
    };
    while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp('\\\\b' + e(c) + '\\\\b', 'g'), k[c])
        }
    }
    return p
}
  
  `,

  // 推荐

  ruleFindAuthor: '$.author',
  ruleFindCid: '$.id',
  ruleFindCoverUrl:
  '$.imgurl',
  ruleFindList: '$.*',
  ruleFindTitle: '$.name',
  ruleFindUpdate: '$.remarks',
  ruleFindUrl:
  '冒险热血::http://m.qiman6.com/ajaxf/sort/?page_num=searchPage&type=1&&武侠格斗::http://m.qiman6.com/ajaxf/sort/?page_num=searchPage&type=2&&科幻魔幻::http://m.qiman6.com/ajaxf/sort/?page_num=searchPage&type=3&&侦探推理::http://m.qiman6.com/ajaxf/sort/?page_num=searchPage&type=4&&耽美爱情::http://m.qiman6.com/ajaxf/sort/?page_num=searchPage&type=5&&生活漫画::http://m.qiman6.com/ajaxf/sort/?page_num=searchPage&type=6&&推荐漫画::http://m.qiman6.com/ajaxf/sort/?page_num=searchPage&type=11&&完结::http://m.qiman6.com/ajaxf/sort/?page_num=searchPage&type=12&&连载中::http://m.qiman6.com/ajaxf/sort/?page_num=searchPage&type=13',

  // 搜索

  ruleSearchAuthor: '@css:.comic-author@text',
  ruleSearchCid: '@css:.comic-name a@href@js:java.splitHref(result,0)',
  ruleSearchCoverUrl: '@css:.cover img@src',
  ruleSearchList: '@css:.search-result .comic-list-item',
  ruleSearchTitle: '@css:.comic-name a@text',
  ruleSearchUpdate: '@css:.comic-update-at@text',
  ruleSearchUrl:
  '!http://m.qiman6.com/spotlight/?keyword=searchKey@Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}',


  sort: '34',
  type: 34
};



module.exports = source34;