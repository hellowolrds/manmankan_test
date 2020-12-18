var source1 = require("./source/source1");
const fs = require("fs");

var arr = [];

arr.push(source1);

var str = JSON.stringify(arr);


fs.writeFile("./data.json", str, error => {
  if (error) return console.log("写入文件失败,原因是" + error.message);
  console.log("写入成功");
});

