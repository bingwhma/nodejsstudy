let hex="0x29";//十六进制  
let charValue = String.fromCharCode(hex);//生成Unicode字符  
let charCode = charValue.charCodeAt(0);//获取指定字符的十进制表示.  
let hexOri="0x"+charCode.toString(16);;//将int值转换为十六进制  
  
console.log("hex:"+hex+"\ncharValue:"+charValue+"\ncharCode:"+charCode+"\nhexOri:"+hexOri);



var charValue2 = String.fromCharCode('40');
var charCode2 = charValue2.charCodeAt(0);//获取指定字符的十进制表示.  
var hexOri2="0x"+charCode2.toString(16);;//将int值转换为十六进制  
console.log('xxxxxxxxx',charValue2, '*******',charCode2, '********', hexOri2);



var hexString = (40).toString(16);
console.log('hexString:',hexString);

var yourNumber = parseInt('01000000b', 16);
console.log('yourNumber:',yourNumber);

if (hexString === '28') {
	console.log('ok');
}

