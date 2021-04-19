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
// function getFileByPath(_path, errcb, successcb) {
//   fs.readFile(
//     _path,
//     'utf-8',
//     (err, dataStr) => {
//       if (err) return errcb(err);
//       successcb(dataStr);
//     });
//
// }

// getFileByPath(path.join(__dirname, '/11.txt'), function (err){
//   console.log(err.message)
// },function (data){
//   console.log(data)
// })

// 需求： 按照先读取文件1 在读取文件2 最后读取文件3 的顺序读取

// getFileByPath(path.join(__dirname, '/1.txt'),
//   function (err) {
//     console.log(err.message);
//   },
//   function (data) {
//     console.log(data);
//     getFileByPath(path.join(__dirname, '/2.txt'), function (err) {
//         console.log(err.message);
//       },
//       function (data) {
//         console.log(data);
//         getFileByPath(path.join(__dirname, '/3.txt'), function () {
//           },
//           function (data) {
//             console.log(data);
//           });
//       });
//   });

// 每当new一个promise实例后就会立即执行实例的异步代码
// var promise=new Promise(function (resolve, reject) {
//   fs.readFile(path.join(__dirname, '/1.txt'),'utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data)
//   })
// })

function getFileByPath(_path) {
  return new Promise(function (resolve, reject) {
     fs.readFile(_path, 'utf-8', (err, data) => {
       if (err) return reject(err)
       resolve(data);
     })
   })
}


//  getFileByPath(path.join(__dirname, '/1.txt')).then(function (data){
//   console.log(data)
// },function (err){
//   console.log(err.message)
// })


 // 使用Promise改写的代码
 //  getFileByPath(path.join(__dirname, '/1.txt')).then(function (data){
 //    console.log(data)
 //    return getFileByPath(path.join(__dirname, '/2.txt'))
 //  }).then(function (data){
 //    console.log(data)
 //    return getFileByPath(path.join(__dirname, '/3.txt'))
 //  }).then(function (data){
 //    console.log(data)
 //  })


// 使用Promise改写的代码
// 读取当前文件失败后打印失败信息，并继续执行读取后续文件
// getFileByPath(path.join(__dirname, '/1.txt')).then(function (data){
//   console.log(data)
//   return getFileByPath(path.join(__dirname, '/2.txt'))
// },function (err){
//   console.log("读取1.txt文件内容失败，失败原因："+err.message)
//   return getFileByPath(path.join(__dirname, '/2.txt'))
// }).then(function (data){
//   console.log(data)
//   return getFileByPath(path.join(__dirname, '/3.txt'))
// },function (err){
//   console.log("读取2.txt文件内容失败，失败原因："+err.message)
//   return getFileByPath(path.join(__dirname, '/3.txt'))
// }).then(function (data){
//   console.log(data)
// })
//
// console.log("ok")


//如果后续Promise执行依赖于前面Promise执行的结果。一旦有报错则立即终止所有的promise执行
// catch()的作用是捕获异常并立即终止程序继续执行

getFileByPath(path.join(__dirname, '/11.txt')).then(function (data){
  console.log(data)
  return getFileByPath(path.join(__dirname, '/2.txt'))
}).then(function (data){
  console.log(data)
  return getFileByPath(path.join(__dirname, '/3.txt'))
}).then(function (data){
  console.log(data)
}).catch(function (err){
  console.log(err.message)
})

console.log("ok")

 getFileByPath(path.join(__dirname, '/1.txt')).then(function (data){
  console.log(data)
},function (err){
  console.log(err.message)
})

