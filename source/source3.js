
var source3 = { 
  comicSourceName: '汗汗酷漫',
  comicSourceUrl: 'http://ssoonn.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","http://hhaass.com/")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'http://ssoonn.com/comic/%s/?d=123@Header:{"User-Agent": "Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166  Safari/535.19"}',
  ruleComicTitle: 'class.pic@class.con@tag.h3@text',
  ruleComicAuthor: 'class.pic@class.con@tag.p.0@text#作者：',
  ruleComicCover:
  'class.pic@tag.img@src',
  ruleComicInstro: '@css:#detail_block .ilist p@text',
  ruleComicStatus: false,
  ruleComicUpdate: '@css:.pic .con p:last-child@text##更新日期：',
  ruleChapterList: '@css:#sort_div_p a',
  ruleChapterName: 'text',
  ruleChapterUrl: 'href',

  // 图片详情
  ruleContentUrl:
  'param2@Header:{"User-Agent": "Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166  Safari/535.19"}',
  ruleComicContent:
  `
  importClass(Packages.android.util.Log)
importClass(Packages.android.util.Pair)
importClass(Packages.java.util.ArrayList)
importPackage(Packages.org.json)
importPackage(Packages.java.lang)
importClass(Packages.okhttp3.Request)
importClass(Packages.okhttp3.Headers)
importPackage(Packages.com.reader.comic.model)
importClass(Packages.com.reader.comic.utils.StringUtils)
importClass(Packages.com.reader.comic.soup.Node)
importClass(Packages.com.reader.comic.utils.StringUtils)

// 版本号
var version = 1.0;
// 是否启用
var enable = true;
// 源标题
var title = "汗汗酷漫";
// 类型，相当于java中TYPE
var sort = 3;

// 请求头
function getSearchRequest (keyword, page) {
    var url = "";
    if (page == 1) {
        url = "http://ssoonn.com/comicsearch/s.aspx?s="+keyword;
    }
    return new Request.Builder()
    .addHeader("User-Agent", "Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166  Safari/535.19")
    .url(url).build();
}

//解析搜索页面: content是脚本注入
function getSearchIterator() {
    var body = new Node(content);
    var searchList = body.list(".main .se-list li");
    var list = new ArrayList();
    for (var i = 0; i < searchList.size(); i ++) {
        var node = searchList.get(i);
        var cid = node.hrefWithSplit("a", -1);
        var title = node.text(".con h3");
        var cover = node.src("img");
        var author = node.text(".color_red");
        list.add(new Comic(sort, cid, title, cover, null, author));
    }

    return list;
}

//请求漫画详情
function getInfoRequest(cid) {
    var url = StringUtils.format("http://ssoonn.com/comic/%s/?d=123", cid);
    return new Request.Builder()
        .addHeader("User-Agent", "Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166  Safari/535.19")
        .url(url).build();
}

//解析漫画详情
function parseInfo() {
//    java代码中注入的网页源码 content
    var body = new Node(content);
    var title = body.text(".pic .con h3");
    var cover = body.src(".pic > img");
    var update = body.text(".pic .con p:last-child");
    update = update.replace("更新日期：", "");
    var intro = body.text("#detail_block .ilist p");
    var author = body.text(".pic .con h3 + p");
    author = author.replace("作者：", "");
    var status = false;
    var comic = new Comic(sort, "");
    comic.setInfo(title, cover, update, intro, author, status);
    return comic;
}

// 解析章节
function parseChapter () {
    var body = new Node(content);

    var chapterList = body.list("#sort_div_p a");
    var list = new ArrayList();

    for (var i = 0; i < chapterList.size(); i ++) {
        var node = chapterList.get(i);
        var title = node.text();
        var path = node.href();
        list.add(new Chapter(title, path));
    }

    return list;
}

// 请求漫画展示详情
function getImagesRequest(cid, path) {
    return new Request.Builder()
        .addHeader("User-Agent", "Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166  Safari/535.19")
        .url(path).build();
}

// 图片请求头： 必须要有
function getHeader () {
    return Headers.of("Referer", "http://hhaass.com/");
}
function getHeader2 (url) {
    return getHeader();
}
function getHeader3 () {
    return getHeader();
}

// 解析图片
function parseImages() {
   var list = new ArrayList();
   var reg = /<script>var sFiles.+<\/script>/g
   var result = content.match(reg)[0];
   result = result.replace("<script>", "").replace("</script>", "");
   eval(result);
   sFiles = unsuan(sFiles);
//   Log.d("测试", sFiles);
   var arrFiles = sFiles.split("|");
   var sDomain = "http://18.125084.com/dm03/";
   for(var i=0;i<arrFiles.length;i++) {
        var img = sDomain + arrFiles[i];
        var imageUrl = new ImageUrl(i + 1, img, false);
        Log.d("解析地址", img);
        list.add(imageUrl);
   }
   return list;
}

// 获取分类
function get_subject () {
    var list = new ArrayList();
    var url = "http://ssoonn.com/lists/%s/%%s/";
    list.add(Pair.create("萌系", StringUtils.format(url, "1")));
    list.add(Pair.create("搞笑", StringUtils.format(url, "2")));
    list.add(Pair.create("格斗", StringUtils.format(url, "3")));
    list.add(Pair.create("科幻", StringUtils.format(url, "4")));
    list.add(Pair.create("剧情", StringUtils.format(url, "5")));
    list.add(Pair.create("侦探", StringUtils.format(url, "6")));
    list.add(Pair.create("竞技", StringUtils.format(url, "7")));
    list.add(Pair.create("魔法", StringUtils.format(url, "8")));
    list.add(Pair.create("神鬼", StringUtils.format(url, "9")));
    list.add(Pair.create("校园", StringUtils.format(url, "10")));
    list.add(Pair.create("惊栗", StringUtils.format(url, "11")));
    list.add(Pair.create("厨艺", StringUtils.format(url, "12")));
    list.add(Pair.create("伪娘", StringUtils.format(url, "13")));
    list.add(Pair.create("图片", StringUtils.format(url, "14")));
    list.add(Pair.create("冒险", StringUtils.format(url, "15")));
    list.add(Pair.create("耽美", StringUtils.format(url, "21")));
    list.add(Pair.create("经典", StringUtils.format(url, "22")));
    list.add(Pair.create("亲情", StringUtils.format(url, "25")));
    return list;
}

// 请求漫画展示详情
function getCategoryRequest(format, page) {
    var url = StringUtils.format(format, page);
    return new Request.Builder()
    .addHeader("User-Agent", "Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166  Safari/535.19")
    .url(url).build();
}

//解析推荐
function parseCategory() {
    var list = new ArrayList();

    var body = new Node(content);
    var searchList = body.list(".main .se-list li");
    var list = new ArrayList();
    for (var i = 0; i < searchList.size(); i ++) {
        var node = searchList.get(i);
        var cid = node.hrefWithSplit("a", -1);
        var title = node.text(".con h3");
        var cover = node.src("img");
        var author = node.text(".con h3 + p");
        var update = node.text(".color_red");
        list.add(new Comic(sort, cid, title, cover, update, author));
    }

    return list;


 }



function getDomain(sPath)
{
    var sDS = "http://243.13ting.com/dm01/|http://243.13ting.com/dm02/|http://243.13ting.com/dm03/|http://243.13ting.com/dm04/|http://243.13ting.com/dm05/|http://243.13ting.com/dm06/|http://243.13ting.com/dm07/|http://243.13ting.com/dm08/|http://243.13ting.com/dm09/|http://243.13ting.com/dm10/|http://243.13ting.com/dm11/|http://243.13ting.com/dm12/|http://243.13ting.com/dm13/|http://243.13ting.com/dm14/|http://243.13ting.com/dm15/|http://243.13ting.com/dm16/";
    var arrDS = sDS.split('|');
    var u = "";
    for(var i=0;i<arrDS.length;i++)
    {
        if(sPath == (i+1))
        {
            u = arrDS[i];
            break;
        }
    }
    return u;
}


function unsuan(s)
{
	var sw="ssoonn.com|m.99comic.com|ssoozz.com";
	var su = "ssoonn.com";
	var b=false;
	for(var i=0;i<sw.split("|").length;i++) {
	    if(su.indexOf(sw.split("|")[i])>-1) {
	        b=true;
	        break;
        }
    }
    if(!b)return "";

    var x = s.substring(s.length-1);
    var xi="abcdefghijklmnopqrstuvwxyz".indexOf(x)+1;
    var sk = s.substring(s.length-xi-12,s.length-xi-1);
    s=s.substring(0,s.length-xi-12);
	var k=sk.substring(0,sk.length-1);
	var f=sk.substring(sk.length-1);
	for(var i=0;i<k.length;i++) {
	    eval("s=s.replace(/"+ k.substring(i,i+1) +"/g,'"+ i +"')");
	}
    var ss = s.split(f);
	s="";
	for(var i=0;i<ss.length;i++) {
	    s+=String.fromCharCode(ss[i]);
    }
    return s;
}
  `,

  // 推荐

  ruleFindAuthor: '$.authors',
  ruleFindCid: '$.id',
  ruleFindCoverUrl:
  '$.cover@js:"https://images.dmzj.com/"+result',
  ruleFindList: '$.*',
  ruleFindTitle: '$.name',
  ruleFindUpdate: '$.last_updatetime@js:java.getFormatTime("yyyy-MM-dd", result*1000)',
  ruleFindUrl:
  '全部::http://m.dmzj.com/classify/0-0-0-0-0-searchPage.json&&冒险::http://m.dmzj.com/classify/1-0-0-0-0-searchPage.json&&欢乐向::http://m.dmzj.com/classify/2-0-0-0-0-searchPage.json&&格斗::http://m.dmzj.com/classify/3-0-0-0-0-searchPage.json&&科幻::http://m.dmzj.com/classify/4-0-0-0-0-searchPage.json&&爱情::http://m.dmzj.com/classify/5-0-0-0-0-searchPage.json&&竞技::http://m.dmzj.com/classify/6-0-0-0-0-searchPage.json&&魔法::http://m.dmzj.com/classify/7-0-0-0-0-searchPage.json&&校园::http://m.dmzj.com/classify/8-0-0-0-0-searchPage.json&&悬疑::http://m.dmzj.com/classify/9-0-0-0-0-searchPage.json&&恐怖::http://m.dmzj.com/classify/10-0-0-0-0-searchPage.json&&生活亲情::http://m.dmzj.com/classify/11-0-0-0-0-searchPage.json&&百合::http://m.dmzj.com/classify/12-0-0-0-0-searchPage.json&&伪娘::http://m.dmzj.com/classify/13-0-0-0-0-searchPage.json&&耽美::http://m.dmzj.com/classify/14-0-0-0-0-searchPage.json&&后宫::http://m.dmzj.com/classify/15-0-0-0-0-searchPage.json&&萌系::http://m.dmzj.com/classify/16-0-0-0-0-searchPage.json&&治愈::http://m.dmzj.com/classify/17-0-0-0-0-searchPage.json&&武侠::http://m.dmzj.com/classify/18-0-0-0-0-searchPage.json&&职场::http://m.dmzj.com/classify/19-0-0-0-0-searchPage.json&&奇幻::http://m.dmzj.com/classify/20-0-0-0-0-searchPage.json&&节操::http://m.dmzj.com/classify/21-0-0-0-0-searchPage.json&&轻小说::http://m.dmzj.com/classify/22-0-0-0-0-searchPage.json&&搞笑::http://m.dmzj.com/classify/23-0-0-0-0-searchPage.json',

  // 搜索

  ruleSearchAuthor: '@css:.con h3+p@text',
  ruleSearchCid: 'class.pic@tag.a@href@js:result=java.splitHref(result, -1);',
  ruleSearchCoverUrl: 'tag.img@src',
  ruleSearchList: 'class.main@class.se-list@tag.li',
  ruleSearchTitle: 'class.con@tag.h3@text',
  ruleSearchUpdate: '',
  ruleSearchUrl:
  '!http://ssoonn.com/comicsearch/s.aspx?d=123&s=searchKey@Header:{"Host": "ssoonn.com","User-Agent": "Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166  Safari/535.19"}',


  sort: '3',
  type: 3 
};



module.exports = source3;