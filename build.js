const fs = require("fs");

var source1 = require("./source/source1");
var source2 = require("./source/source2");
var source3 = require("./source/source3");
var source4 = require("./source/source4");
var source5 = require("./source/source5");

var arr = [];

arr.push(source1);
arr.push(source2);
arr.push(source3);
arr.push(source4);
arr.push(source5);

var str = JSON.stringify(arr);


fs.writeFile("./data.json", str, error => {
  if (error) return console.log("写入文件失败,原因是" + error.message);
  console.log("写入成功");
});

