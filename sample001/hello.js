
// Node.js 提供了 exports 和 require 两个对象，
// 其中 exports 是模块公开的接口，require 用于从外部获取一个模块的接口，
// 即 所获取模块的 exports 对象。

exports.world = function() {
  console.log('***hello world***');

}

// 在以上示例中，hello.js 通过 exports 对象把 world 作为模块的访问接口，
// 通过 require('./hello') 加载这个模块，然后就可以直接访 问 hello.js 中 exports 对象的成员函数了。