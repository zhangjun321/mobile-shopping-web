// 需求：封装一个方法，将给定文件路径的文件内容读取并返回

const fs = require('fs');
const path = require('path');
// //这是普通读取文件的方式
// fs.readFile(
//   path.join(__dirname, '/1.txt'),
//   'utf-8',
//   (err, dataStr) => {
//     if (err) throw err;
//     console.log(dataStr);
//   });


// 自定义方法
// 封装没有实现给定路径返回文件内容，
function getFileByPath(_path, errcb, successcb) {
  fs.readFile(
    _path,
    'utf-8',
    (err, dataStr) => {
      if (err) return errcb(err);
      successcb(dataStr);
    });

}

// getFileByPath(path.join(__dirname, '/11.txt'), function (err){
//   console.log(err.message)
// },function (data){
//   console.log(data)
// })

// 需求： 按照先读取文件1 在读取文件2 最后读取文件3 的顺序读取

getFileByPath(path.join(__dirname, '/1.txt'),
  function (err) {
    console.log(err.message);
  },
  function (data) {
    console.log(data);
    getFileByPath(path.join(__dirname, '/2.txt'), function (err) {
        console.log(err.message);
      },
      function (data) {
        console.log(data);
        getFileByPath(path.join(__dirname, '/3.txt'), function () {
          },
          function (data) {
            console.log(data);
          });
      });
  });
