const crypto = require('crypto');

// 要加密的内容
let str = 'Hello World!';
// 创建一个 Hash 实例, 然后对内容进行 md5 摘要, 然后转成 16 进制输出
let hash = crypto.createHash('md5').update(str).digest('hex');
// 密钥相关的 Hash 实例
let hmac = crypto.createHmac('sha1', 'a secret key').update(str).digest('hex');
