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

var str = JSON.stringify(arr);


fs.writeFile("./data.json", str, error => {
  if (error) return console.log("写入文件失败,原因是" + error.message);
  console.log("写入成功");
});

