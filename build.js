const fs = require("fs");

var source1 = require("./source/source1");
var source2 = require("./source/source2");
var source3 = require("./source/source3");
var source4 = require("./source/source4");
var source5 = require("./source/source5");
var source6 = require("./source/source6");
var source7 = require("./source/source7");
var source8 = require("./source/source8");
var source9 = require("./source/source9");
var source10 = require("./source/source10");
var source11 = require("./source/source11");
var source12 = require("./source/source12");
var source13 = require("./source/source13");
var source14 = require("./source/source14");
var source15 = require("./source/source15");
var source16 = require("./source/source16");
var source17 = require("./source/source17");
var source18 = require("./source/source18");
var source19 = require("./source/source19");
var source20 = require("./source/source20");
var source21 = require("./source/source21");
var source22 = require("./source/source22");
var source23 = require("./source/source23");
var source24 = require("./source/source24");
var source25 = require("./source/source25");
var source26 = require("./source/source26");
var source27 = require("./source/source27");
var source28 = require("./source/source28");
var source29 = require("./source/source29");
var source30 = require("./source/source30");
var source31 = require("./source/source31");
var source32 = require("./source/source32");
var source33 = require("./source/source33");
var source34 = require("./source/source34");
var source35 = require("./source/source35");


// 异次元
var source36 = require("./yiciyuan/source1");
var source37 = require("./yiciyuan/source2");
var source38 = require("./yiciyuan/source3");
var source39 = require("./yiciyuan/source4");
var source40 = require("./yiciyuan/source5");
var source41 = require("./yiciyuan/source6");
var source42 = require("./yiciyuan/source7");
var source43 = require("./yiciyuan/source8");
var source44 = require("./yiciyuan/source9");
var source45 = require("./yiciyuan/source10");
var source46 = require("./yiciyuan/source11");
var source47 = require("./yiciyuan/source12");
var source48 = require("./yiciyuan/source13");
var source49 = require("./yiciyuan/source14");
var source50 = require("./yiciyuan/source15");
var source51 = require("./yiciyuan/source16");
var source52 = require("./yiciyuan/source17");
var source53 = require("./yiciyuan/source18");
var source54 = require("./yiciyuan/source19");
var source55 = require("./yiciyuan/source20");
var source56 = require("./yiciyuan/source21");
var source57 = require("./yiciyuan/source22");
var source58 = require("./yiciyuan/source23");
var source59 = require("./yiciyuan/source24");
var source60 = require("./yiciyuan/source25");
var source61 = require("./yiciyuan/source26");
var source62 = require("./yiciyuan/source27");
var source63 = require("./yiciyuan/source28");
var source64 = require("./yiciyuan/source29");

var arr = [];

arr.push(source1);
arr.push(source2);
arr.push(source3);
arr.push(source4);
arr.push(source5);
arr.push(source6);
arr.push(source7);
arr.push(source8);
arr.push(source9);
arr.push(source10);
arr.push(source11);
arr.push(source12);
arr.push(source13);
arr.push(source14);
arr.push(source15);
arr.push(source16);
arr.push(source17);
arr.push(source18);
arr.push(source19);
arr.push(source20);
arr.push(source21);
arr.push(source22);
arr.push(source23);
arr.push(source24);
arr.push(source25);
arr.push(source26);
arr.push(source27);
arr.push(source28);
arr.push(source29);
arr.push(source30);
arr.push(source31);
arr.push(source32);
arr.push(source33);
arr.push(source34);
arr.push(source35);

// 异次元
arr.push(source36);
arr.push(source37);
arr.push(source38);
arr.push(source39);
arr.push(source40);
arr.push(source41);
arr.push(source42);
arr.push(source43);
arr.push(source44);
arr.push(source45);
arr.push(source46);
arr.push(source47);
arr.push(source48);
arr.push(source49);
arr.push(source50);
arr.push(source51);
arr.push(source52);
arr.push(source53);
arr.push(source54);
arr.push(source55);
arr.push(source56);
arr.push(source57);
arr.push(source58);
arr.push(source59);
arr.push(source60);
arr.push(source61);
arr.push(source62);
arr.push(source63);
arr.push(source64)


var str = JSON.stringify(arr);


fs.writeFile("./data.json", str, error => {
  if (error) return console.log("写入文件失败,原因是" + error.message);
  console.log("写入成功");
});

