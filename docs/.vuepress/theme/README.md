## 前端重要知识点汇总

### 01 html

#### 1.1 标签类型

- 块级元素

  > 特性：独占一行，可以设置宽高
  >
  > 举例：div、p、ul、h1~h6

- 行内元素

  > 特性：一行显示多个，不能设置宽高，只能依靠内容撑开元素
  >
  > 举例：span、em、strong

- 行内块元素

  > 特性：具备块级和内联的优势，一行显示多个，可以设置宽高，默认由内容撑开
  >
  > 举例：button、input



#### 1.2 表单类型

```
文本框：<input type="text" name='name'>
单选框：<input type="radio"  name='one'>
多选框：<input type="checkbox" name='all'>
```

> 备注：
>
> 1.type是决定表单类型的值
>
> 2.name是控制表单分组和命名的



###  02 css

#### 2.1 选择器

| 选择器     | 写法                | 说明              |
| ---------- | ------------------- | ----------------- |
| 标签选择器 | div{}               |                   |
| 类选择器   | .class{}            |                   |
| id选择器   | #id{}               |                   |
| 后代选择器 | .boxA .boxB{}       |                   |
| 伪类选择器 | li:nth-of-type(n){} | 获取li的第n个元素 |



#### 2.2 常用样式

| 样式         | 写法       | 值                |
| ------------ | ---------- | ----------------- |
| 颜色         | color      |                   |
| 文本对齐方式 | text-align | left/center/right |
|              |            |                   |
|              |            |                   |
|              |            |                   |
|              |            |                   |
|              |            |                   |
|              |            |                   |
|              |            |                   |
|              |            |                   |
|              |            |                   |
|              |            |                   |
|              |            |                   |
|              |            |                   |
|              |            |                   |
|              |            |                   |
|              |            |                   |
|              |            |                   |
|              |            |                   |



#### 2.3 标准里

元素从上至下、从左至右排列（行内、块级）

#### 2.4 浮动 float

让元素一排显示，并且脱离标准流

#### 2.5 定位 position

让一个元素压在另一个元素身上

#### 2.6 弹性布局 flex

元素更灵活的排列方式



### 03 js基础

介绍：

js基础学的就是ECMAScript，是整个javascript语言的一个基础，所有代码都按这个规范执行



#### 3.1 变量

```
var myName = '黑马彭于晏';
```

> 备注：myName 是变量名，变量名尽量做见名知意（驼峰命名或用下划线my_name）



#### 3.2 数据类型

  - 字符串 （凡事被引号引起来的都是字符串）
  - 数字 （正负数、小数、NaN）
  - 布尔 （真、假）
  - undefined
  - null



#### 3.3 数据检测

```
typeof myName
```

> 无法检测对象和数组，所以后面还会有其他用于检测 instanceof



#### 3.4 数据类型的转换

- 任何类型转为字符串类型 

```javascript
var num = 10;
var str = num.toString();
```

  - 任何类型转为数值类型


```javascript
var str = '3.14px'
var num1 = parseInt(str);//3
var num2 = parseFloat(str); //3.14
```

- 任何类型转为布尔类型

```js
var str = 
- ''  空字符串
- 0
- NaN
- undefined
- null
var boolean = Boolean(str);
```

> 5种带有否定意义的变量会转成false，其他都会转为true



#### 3.5 +号的作用

- 拼接

  ```
  var num = 1;
  var str = '2';
  var res = num + str;// 12
  ```

  > 备注：+号两边存在字符串，那么结果就是拼接

- 计算

  ```
  var num1 = 1;
  var num2 = 2;
  var res = num1 + num2;// 3
  ```

  > 备注：+号两边都是数字，那么结果就是计算



#### 3.6 运算符

- 算数运算符

  ```
  加、减、乘、除、取余
  + - * / %
  ```

  > 备注：% 是取余，获取除法后面的余数

- 递增递减运算符

  ```
  i++  i--
  ++i  --i
  ```

  > 备注：对于正常开发 ++i 和i++ 没有任何区别，就把他们当做自加一即可！

- 比较运算符

  ```
  >      大于
  >=     大于等于
  <      小于
  <=     小于等于
  ==     值相等        1 == '1'  结果为 true
  ===    值和类型相等   1 === '1' 结果为 false
  ```

  

- 逻辑运算符

  ```
  &&  并
  举例：上5楼的两个条件：单身并且有钱，同时满足结果才真
  ||  或
  举例：免费乘车的两个条件：小于12岁或大于70岁，其中任意一个为真结果就为真
  !  非
  举例：非男 就是女
  ```

  

- 赋值运算符

  ```
  =
  var num = 1;
把右边的内容，放到左边的变量中
  --------------------------
  +=、-=、*=、/=
  num = num + 10;
  等价于
  num += 10;
  ```
  
  > 备注：+=的赋值运算符，只是一个简写，并不着急熟练使用，项目中看的懂即可，以后自然用的6



#### 3.7 判断

- 条件判断

```javascript
  if(判断条件){
     满足条件执行
  }
```

> 备注：满足条件执行，不满足不执行

- 二选一

```javascript
  if(判断条件){
     满足条件执行
  }else{
     不满足条件执行
  }
```

> 备注：二选一的过程，总会选一条执行

- 多选一

```javascript
  if(判断条件){
     满足条件执行
  }else if(判断条件){
     满足条件执行         
  }else{
     不满足条件执行
  }
```

> 备注：
>
> 1.多选一的过程，总会选一条执行
>
> 2.此外还有switch case的判断语法，但优先使用if语法



- 三元表达式


```
var flag = 判断条件 ? 满足条件执行 : 不满足条件执行
```

> 备注：if else 的简写形式，默认多一个return功能。



#### 3.8 循环

for基本语法

```javascript
for(初始化变量; 条件表达式; 操作表达式 ){
	//循环体
}
```

```javascript
// 打印10次代码
for(var i = 1; i <= 10; i++){
	console.log('黑马彭于晏来了！');
}
```

>备注：
>
>1.做重复的事情就用for循环
>
>2.如果一个for循环处理不了，才需要用到双重for循环（实战项目中，如果能用一个for解决问题的，千万别用双重for循环！）
>
>3.此外还有 while、do while 的循环语法，但优先使用for语法

跳出循环

- continue

  ```
  for(var i = 1; i <= 10; i++){
  	console.log('黑马彭于晏来了！');
  	if(i == 5){	
  		continue
  	}
  }
  //遇到continue 跳出当次循环，最终执行 10 次
  ```

  

- break

  ```
  for(var i = 1; i <= 10; i++){
  	console.log('黑马彭于晏来了！');
  	if(i == 5){
  		break
  	}
  }
  //遇到 break 跳出当前循环，最终执行 5 次
  ```

  



#### 3.9 数组

##### 3.9.1 概念

存储一组有序的数据集合

##### 3.9.2 声明

```
var 数组名 = new Array();
var arr = new Array(); // 创建一个新的空数组
```

```
var 数组名 = [];
var arr = []; // 创建一个新的空数组
var arr = [1,2,'3','4',false,true,[1,2,3]]; // 创建一个新的有数据的数组
```

> 备注：
>
> 1.后者声明方式为简写，完全等价前者
>
> 2.数组中可以存放任何数据



##### 3.9.3 调用

- 读

  ```
  数组[ 索引 ] = 新数据;
  arr[index] = 1;
  ```

  > 备注：index是索引，从0开始数

- 取

  ```
  arr //获取整个数组
  arr[index] //获取数组中的某一个
  ```

- 遍历

  ```
  var arr = ['red','green', 'blue'];
  for(var i = 0; i < arr.length; i++){
  	console.log(arrStus[i]);
  }
  ```

  > 备注：遍历就是循环数组的每一项，把里面的具体数据获取出来



#### 3.10 对象

##### 3.10.1 概念

存储一组无序的数据集合



##### 3.10.2 声明

- 标准

```
var 对象名 = new Obect();
var star = new Obect();// 创建一个新的空对象
star.name = 'pink';// 给对象一个一个的赋值
star.age = 18;
star.sex = '男';
star.sayHi = function(){
	alert('大家好啊~');
}
```

- 简写

```
var 对象名 = {};
var star = {};// 创建一个新的空对象
var star = {
    name : 'pink',
    age : 18,
    sex : '男',
    sayHi : function(){
    	alert('大家好啊~');
    }
}; // 创建一个新的有内容的对象
```

> 备注：
>
> 1.后者声明方式为简写，完全等价前者
>
> 2.对象中可以存放任何数据

- 构造函数

```
function 构造函数名(形参1,形参2,形参3) {
    this.属性名1 = 参数1;
    this.属性名2 = 参数2;
    this.属性名3 = 参数3;
    this.方法名 = 函数体;
}
var obj = new 构造函数名(实参1，实参2，实参3);
```

> 备注：构造函数可以批量创建对象

> 优势：可以把对象中一些公共的属性和方法抽取出来，每次创建后，自带这些属性和方法（省心）



##### 3.10.3 调用

- 点语法

  ```
  var star = {
      name : 'pink',
      sayHi : function(){
      	alert('大家好啊~');
      }
  };
  star //对象本身
  star.name //pink 使用对象身上的属性
  star.sayHi() // 弹框 大家好啊~ 调用对象身上的方法
  ```

- 中括号法

  ```
  star //对象本身
  star['name'];// pink 使用对象身上的属性
  star['sayHi'](); // 弹框 大家好啊~ 调用对象身上的方法
  ```

  ```
  star['name'];// pink
  变化：
  var myname = 'name';
  star[myname] // pink
  ```

  > 备注：注意[]中的变量和字符串的变化，myname变量在使用的时候，会自动被替换为字符串'name',性质和效果一致

- 遍历

  ```
  for (变量 in 对象名字) {
  	// 在此执行代码
  }
  
  for (var k in obj) {
      console.log(k); // 这里的 k 是属性名
      console.log(obj[k]); // 这里的 obj[k] 是属性值
  }
  ```

  



#### 3.11 函数

##### 3.11.1 概念

帮我们处理重复的事情



##### 3.11.2 申明

```javascript
function 函数名() {
	//函数体代码
}
```

```javascript
var 函数名 = function (){
	//函数体代码
}
```

> 备注：两者基本等价



##### 3.11.3 调用

```javascript
函数名()
```

> 备注： （）可以调用函数 ，函数不调用不执行



##### 3.11.4 参数

函数的参数分为形参和实参，实参是实际的内容，真实的诉求，而形参是函数内用来接收实参的一个变量

```javascript
function 函数名(形参1,形参2) {// 可以定义任意多的参数，用逗号分隔
	//函数体代码
}
// 带参数的函数调用
函数名(实参1,实参2)
```

> 备注：
>
> 1.在函数体内 相当于 var 形参1 = 实参1 ...
>
> 2.实参和形参个数尽量做到一一匹配



##### 3.11.5 arguments

arguments 相当于函数的实参集合，

```javascript
function 函数名(形参1, 形参2 , 形参3...) {
	// 函数体
	arguments // 实参集合，是一个伪数组 相当于 var arguments = [形参1, 形参2 , 形参3,...]
}
函数名(实参1, 实参2, 实参3...);
```



##### 3.11.6 return

1. 返回数据

   将函数 return后的内容 返回到函数调用处，方便其他地方使用

   ```
   function 函数名(){
   	...
   	return 需要返回的值；
   }
   console.log(函数名());
   ```

   > 备注：需要返回的值可以是函数运行最终的结果，也可以是任意的内容

   

2. 停止函数

   终止函数后续代码的运行

   ```
   function 函数名(){
   	执行代码1
   	return
   	不执行代码2
   }
   ```

   >备注：执行代码1 ，但不执行代码2

   



#### 3.12 内置对象

##### 3.12.1 常用数学对象

| 属性、方法名          | 功能                                    |
| --------------------- | --------------------------------------- |
| Math.floor()          | 向下取整                                |
| Math.ceil()           | 向上取整                                |
| Math.round()          | 四舍五入版 就近取整 注意 -3.5 结果是 -3 |
| Math.abs()            | 绝对值                                  |
| Math.max()/Math.min() | 求最大和最小值                          |
| Math.random()         | 获取范围在[0,1)内的随机值               |



##### 3.12.2 常用日期对象

使用Date实例化日期对象

- 获取时间对象

```
var now = new Date();
```



- 设置时间对象

```
var future = new Date('2020/6/1');
```



- 获取对应时间日期 

| 属性、方法名       | 功能     | 特殊情况                        |
| ------------------ | -------- | ------------------------------- |
| date.getFullYear() | 返回年   |                                 |
| data.getMonth()    | 返回月   | 0-11  --- 0代表1月              |
| data.getDate()     | 返回日   |                                 |
| data.getDay()      | 返回星期 | 0-6  --- 0代表周日 --- 6代表周6 |
| data.getHours()    | 返回时   |                                 |
| data.getMinutes()  | 返回分   |                                 |
| data.getSeconds()  | 返回秒   |                                 |

> 备注：date是new Date()来的实例对象



##### 3.12.3 常用数组对象

| 方法名           | 功能                 | 说明                                                   |
| ---------------- | -------------------- | ------------------------------------------------------ |
| push(num）       | 添加数据             | 把num添加至数组的最后                                  |
| join(‘,’)        | 拼接（数组转字符串） | 把数组拼接成一个字符串，中间用  ‘,’ 号连接             |
| indexOf(‘num’)   | 获取索引             | 获取num内容对应的索引，如果不存在返回  -1              |
| slice(start,end) | 截取                 | 从数组的索引star位开始截取，截取至end位(但取不到end位) |



##### 3.12.4 常用字符串对象

| 方法名           | 功能                 | 返回值                                                   |
| ---------------- | -------------------- | -------------------------------------------------------- |
| replace(old,new) | 替换字符串           | 返回新的字符串                                           |
| slice(start,end) | 截取                 | 从字符串的索引star位开始截取，截取至end位(但取不到end位) |
| split("str")     | 切割（字符串转数组） | 返回新的数组                                             |







































### 04 jsApi

#### 4.1 获取元素

- 获取单个元素

  ```js
  var el = document.querySelector('选择器')
  ```

  >备注：获取的是单个元素，可直接使用

- 获取多个元素

  ```js
  var els = document.querySelectorAll('选择器')
  ```

  > 备注：获取的是多个元素的集合（伪数组），不能直接使用，需要通过数组方式获取出里面的元素





#### 4.2 操作元素内容

- 获取元素内容  

  ```js
  var html = el.innerText
  ```

- 设置或修改元素内容

  ```js
  el.innerHTML= '<h1>标题</h1>';
  ```

  > 备注：innerHTML可以设置页面内容，并且把html变成页面结构



#### 4.3 操作元素属性

- 获取元素属性

  ```js
  var attr = el.src
  var attr = el.href
  var attr = el.checked
  ```

  >备注：获取元素属性分为普通属性和表单属性，把元素当作对象使用，所以获取方式一致

- 设置元素属性

  ```js
  el.src = './1.img';
  el.href = './1.html';
  el.checked = true;
  ```

  >type：类型、value：表单值、checked单选复选被选中状态、selected下拉被选中状态、disabled禁用

#### 4.4 操作元素自定义属性

- 获取元素自定义属性

  ```js
  var attr = 对象.getAttribute('属性名');
  var attr = el.getAttribute('data-id');
  ```

  > 备注：html5标准要求在写自定义属性的时候前面加上data-，方便区分普通属性和自定义属性

- 设置元素自定义属性

  ```js
  var attr = el.setAttribute('属性名','属性值');
  var attr = el.setAttribute('data-id','myid');
  ```



#### 4.5 操作元素行内样式

- 获取元素行内样式

  ```js
  语法：元素.style.样式属性
  var style = el.style.width
  var style = el.style.backgroundImage
  ```

- 设置元素行内样式

  ```js
  语法：元素.style.样式属性 = '样式属性值'
  el.style.width = '100px'
  el.style.backgroundImage = './1.img'
  ```
  
  > 备注：
  >
  > 1.通过el.style.样式的方法，设置的为行内样式
  >
  > 2.设置的css属性过长，请使用驼峰命名



#### 4.6 操作元素类名

-  获取元素类名

  ```js
  语法：元素.className
  var myclass = el.className;
  ```

- 设置元素类名

  ```js
  语法：元素.style.样式属性 = '样式属性值';
  el.className = 'class1';
  el.className = 'class1 class2';
  ```

  > 备注：
  >
  > 1.class是关键字，所以不能直接使用class来设置类名
  >
  > 2.设置类名的时候，会覆盖之前元素身上的类名



#### 4.7 操作元素节点

- 获取父元素

  ```js
  var el = el.parentNode
  ```

- 获取所有子元素

  ```js
  var els = el.children
  ```

  **@yihua**

  获取到的是一个数组，我们可以通过索引号进行对指定元素的使用。

- 获取第1个子元素

  ```js
  var el = el.firstElementChild
  ```

  > 备注：也可以采用el.children[index]对元素进行获取，el.children[0]用于获取第一个子级元素节点

- 获取最后1个子元素

  ```js
  var el = el.lastElementChild
  ```

  >备注：也可以采用el.children[index]对元素进行获取，el.children[children.length-1]用于获取最后一个子级元素节点

- 获取上一个兄弟元素

  ```js
  var el = el.previouElementSibling
  ```

- 获取下一个兄弟元素

  ```js
  var el = el.nextElementSibling
  ```

- 创建元素

  ```js
  var divNode = document.createElement('div');
  ```

- 添加节点(后面)

  ```js
  el.appendChild(divNode)
  ```

  > 备注：把divNode这个元素放在el元素内部的最后

- 添加节点(指定位置)

  ```js
  el.insertBefore(divNode,targetNode)
  ```

  > 备注：把divNode这个元素放在el元素内部并且是targetNode元素的前面

- 删除元素

  ```js
  el.removeChild(child);
  ```

  > 备注：必须要先找到被删除元素的父级，再在父级元素内删掉里面的子元素

- 克隆元素

  ```js
  var cloneNode = el.cloneNode(Boolean);
  ```

  >备注：
  >
  >1.如果Boolean为false（默认）,则为浅拷贝，只拷贝最外层的标签元素
  >
  >2.如果Boolean为true,则为深拷贝，拷贝元素并且拷贝元素内的所有后代元素



#### 4.8 主要事件

| 鼠标事件类型 | 单词                     | 备注                      |
| ------------ | ------------------------ | ------------------------- |
| 鼠标点击     | onclick                  |                           |
| 鼠标移入     | onmouseover/onmouseenter | onmouseenter 没有冒泡问题 |
| 鼠标移动     | onmousemove              |                           |
| 鼠标移出     | onmouseout/onmouseleave  | onmouseleave 没有冒泡问题 |
| 键盘按下     | onkeydown                | 识别功能键                |
| 键盘按下     | onkeypress               | 识别大小写                |
| 键盘弹起     | onkeyup                  |                           |
| 键盘聚焦     | onfocus                  |                           |
| 键盘失焦     | onblur                   |                           |
| 表单内容改变 | onchange                 |                           |
| 页面加载     | onload                   |                           |
| 页面尺寸改变 | onresize                 |                           |
| 页面滚动     | onscroll                 |                           |

#### 4.9 事件监听

##### 4.9.1 传统绑定事件

语法：

```js
事件源.事件类型 = function(){}	
```

举例：

```js
var btn = document.querySelector('button');
btns.onclick = function() {
	alert('hi');
}
```



##### 4.9.2 事件监听绑定事件

语法：

```js
事件源.addEventListener('事件类型',funtion(){})
```

举例：

```js
var btn = document.querySelector('button');
btn.addEventListener('click', function() {
	alert('hi');
})
```



##### 4.9.3 传统解绑事件

语法：

```js
事件源.事件类型 = null
```

举例：

```js
var btn = document.querySelector('button');
btns.onclick = null
```

##### 4.9.4 事件监听解绑事件

语法：

```js
事件源.removeEventListener('click',同一个回调函数)
```

举例：

```js
var btn = document.querySelector('button');
var fn = function(){
	alert('hi');
}
btn.addEventListener('click', fn)
btn.removeEventListener('click', fn)
```

>备注：
>
>1.用事件监听方式绑定和解绑的函数必须是同一个地址的函数
>
>2.传统事件的绑定针对于同一个元素的同一种类型事件绑定只能有一次，如果多次绑定会被覆盖。所有建议采用事件监听。



#### 4.10 事件流

##### 4.10.1 主要阶段

1. 捕获阶段   从大变小的触发
2. 当前目标阶段
3. 冒泡阶段  从小到大的触发

> 备注1：
>
> 1.执行事件流的时候，不可能同时触发捕获阶段和冒泡阶段，只会二取其一
>
> 2.事件流是默认存在的，只是父子级绑定事件后会把事件流的过程体现出来



> 备注2：需要同时具备2个条件才会体现出问题
>
> 1.绑定元素是包含关系的（祖父辈元素和子孙后代元素）而不是兄弟之类的关系
>
> 2.绑定的是同一个类型的事件



##### 4.10.2 事件流的优势

事件委托，减少dom绑定次数

举例：

```js
<ul>
    <li>知否知否，点我应有弹框在手！</li>
    <li>知否知否，点我应有弹框在手！</li>
    <li>知否知否，点我应有弹框在手！</li>
    <li>知否知否，点我应有弹框在手！</li>
    <li>知否知否，点我应有弹框在手！</li>
</ul>
<script>
// 事件委托的核心原理：给父节点添加侦听器， 利用事件冒泡影响每一个子节点
var ul = document.querySelector('ul');
ul.addEventListener('click', function(e) {
    // e.target 这个可以得到我们点击的对象
    e.target.style.backgroundColor = 'pink';
})
</script>
```



##### 4.10.3 事件流的缺点

造成不必要的事件触发



#### 4.11 事件对象

事件对象是浏览器默认给每一个事件提供

事件发生后，跟事件相关的一系列信息数据的集合都放到这个对象里面，这个对象就是事件对象。

```js
function(e){
	e   这个e就是事件对象，浏览器默认就提供了的
}
```



- 阻止默认事件

  ```js
  e.preventDefault()
  ```

- 阻止冒泡事件

  ```js
  e.stopPropagation()
  ```

  >备注：阻止冒泡事件，只能防止这一层冒泡，所以往往被冒泡的所有函数都写一个阻止冒泡的事件

- 获取鼠标坐标

  ```js
  client 鼠标在可视区的x和y坐标
  e.clientX
  e.clientY
  
  page 鼠标在页面文档的x和y坐标
  e.pageX
  e.pageY
  
  screen 鼠标在电脑屏幕的x和y坐标
  e.screenX
  e.screenY
  ```

- 获取用户输入的哪个键

  ```js
  e.keyCode //获取到的是按键对应的Ascll值
  ```
  
  举例：我们可以通过e.keyCode进行对应键盘事件的绑定列子如下
  
  ```js
   document.addEventListener('keydown', function(e) {
       if(e.keyCode==13){
       	console.log('我按下了enter键')
       }
   })
  ```
  
  

#### 4.12 定时器

##### 4.12.1 炸弹型定时器

介绍：等待一定时间执行里面的回调函数

语法：

```js
设置  var timer = setTimeout(回调函数, 时间);
清除  clearTimeout(timer);
```

使用方法：

1. ```js
   setTimeout(function() {
       console.log('炸弹型定时器只触发一次');
   }, 1000);
   ```

2. ```js
   function fn(){
   	console.log('炸弹型定时器只触发一次');
   }
   setTimeout(fn, 1000);
   ```

3. ```js
   function fn(num){
   	console.log('炸弹型定时器只触发一次,并且可以传参哦'+num);
   }
   setTimeout('fn(100)', 1000);
   ```

   

##### 4.12.2 间歇型定时器

介绍：每隔一定时间就执行里面的回调函数

语法：

```js
设置  var timer = setInterval(回调函数, 时间);
清除  clearInterval(timer);
```

使用方法：

1. ```js
   setInterval(function() {
       console.log('间歇性定时器每隔一段时间触发一次');
   }, 1000);
   ```

2. ```js
   function fn(){
   	console.log('炸弹型定时器只触发一次');
   }
   setInterval(fn, 1000);
   ```

3. ```js
   function fn(num){
   	console.log('炸弹型定时器只触发一次,并且可以传参哦'+num);
   }
   setInterval('fn(100)', 1000);
   ```

   

#### 4.13 BOM

##### 4.13.1 location对象

介绍：获取或设置浏览器url

主要方法：

- 获取浏览器url地址 

  ```js
  var href = location.href
  ```

- 获取浏览器url的返回参数

  ```js
  location.search
  ```

  

##### 4.13.2 navigator对象

介绍：获取浏览器的信息

主要方法：

- 获取浏览器的客户机版本

  ```js
  navigator.userAgent
  ```

  

##### 4.13.3 history对象

介绍：获取浏览器历史

主要方法：

- 控制浏览器返回按钮

  ```js
  history.back()
  ```

- 控制浏览器前进按钮

  ```js
  history.forward()
  ```

- 跳转到浏览历史列表的任意位置

  ```js
  history.go(); 
  ```

   位置标志： 当前页为第0个，前一个页面第1个，后一个页面-1个

#### 4.14 同步异步

​	异步代码： 定时器、触发事件、ajax

​	同步代码：剩下的都是同步代码

​	概念：优先执行所有的同步代码，再执行异步代码



#### 4.15 网页的三大系列

##### offset 系列


```js
获取当前元素距离定位父级的距离
var left = el.offsetLeft
var top = el.offsetTop
```

##### client  系列


```js
获取当前元素自身的宽度和高度（内容+内边框）
var width = el.clientWdith、
var height = el.clientHeight
```

##### scroll  系列


```js
获取元素被卷去的距离（部分）
var top = el.scrollTop;
获取浏览器被卷去的距离
var top = window.pageYOffset;
```



### 05 jQuery

#### 5.1入口函数

```
$(function () {   
    ...  // 此处是页面 DOM 加载完成的入口
})
```



#### 5.2 获取元素

##### 语法

```
var jq元素集合 = $('选择器');
```

##### 举例

```
var dom = $('div');   //通过标签选择
var dom = $('.class');//通过类名选择
var dom = $('#id');	  //通过id选择
var dom = $('ul li'); //通过后代选择
```



#### 5.3 获取元素（筛选方法）

- 获取父级

  ```
  var el = $(dom).parent()
  ```

- 获取祖先中的某一个元素

  ```
  var el = $(dom).parents('选择器')
  ```

- 获取子级

  ```
  var el = $(dom).children()
  ```

- 获取子孙后代中的某一个

  ```
  var el = $(dom).find()
  ```

- 获取上一个兄弟

  ```
  var el = $(dom).prev()	
  ```

- 获取之前所有兄弟

  ```
  var el = $(dom).prevAll()
  ```

- 获取下一个兄弟

  ```
  var el = $(dom).next()
  ```

- 获取之后所有兄弟

  ```
  var el = $(dom).nextAll()
  ```

- 获取所有兄弟

  ```
  var el = $(dom).siblings()
  ```

- 获取集合中第N个

  ```
  $("dom").eq(N)
  ```

  

#### 5.4 操作样式

##### 5.4.1 操作行内样式

###### 5.4.1.1 获取单个行内样式

```
var width = $(dom).css('width');
```

###### 5.4.1.2 设置单个行内样式

```
$(dom).css('width','300px');
```

##### 5.4.2 操作行内样式

###### 5.4.2.1 设置多个行内样式

```
$(dom).css({
	'width':'300px',
	'height':'300px',
	'backgroundColor':'red'
});
```



#### 5.5 操作类名

##### 5.5.1 新增类名

```
$(dom).addClass('myclass');
$(dom).addClass('myclass1 myclass2');
```

> 备注：不会覆盖之前的class，只做新增

##### 5.5.1 删除类名

```
$(dom).removeClass('myclass');
```

##### 5.5.1 切换类名

```
$(dom).toggleClass('myclass');
```



#### 5.6 操作页面

##### 5.6.1 获取标签内容

```
var html = $(dom).html();
```

##### 5.6.2 设置标签内容

```
$(dom).html('<p>标签</p>');
```

##### 5.6.3 获取表单内容

```
var html = $(dom).val();
```

##### 5.6.4 设置表单内容

```
$(dom).val('内容');
```



#### 5.6 操作元素属性

##### 5.6.1 获取固有属性

```
var prop = $(dom).prop('type');
```

##### 5.6.2 设置固有属性

```
$(dom).prop(‘type’,'text');
```

##### 5.6.3 获取自定义属性

```
var prop = $(dom).attr('data-index');
```

##### 5.6.4 设置自定义属性

```
$(dom).attr('data-index','999');
```



#### 5.7 页面效果

##### 5.7.1 显示元素

```
$(dom).show();
```

##### 5.7.2 隐藏元素

```
$(dom).hide();
```



#### 5.8 操作元素

##### 5.8.1 创建

```
var html = $('<h1>新标签</h1>');
```

##### 5.8.2 添加

- 元素内部后面添加

  ```
  $(dom).append(html);
  ```

- 元素内部前面添加

  ```
  $(dom).prepend(html);
  ```

##### 5.8.3 删除

```
$(dom).remove();
```

> 备注：找到dom元素，一起删除掉



#### 5.9 遍历

```
$(dom).each(function(i,el){
	i  索引
	el 元素
});
```

> 备注：类似于for循环，找到所有dom元素，依次循环



#### 5.10 元素尺寸、位置、卷去距离

##### 5.10.1 获取元素宽度

```
$(dom).width();
```

##### 5.10.2 设置元素宽度

```
$(dom).width(300);
```

##### 5.10.3 获取元素高度

```
$(dom).height();
```

##### 5.10.4 设置元素高度

```
$(dom).height(300);
```

##### 5.10.5 获取元素到文档顶部的位置

```
$(dom).offset().top
```

##### 5.10.6 设置元素到文档顶部的位置

```
$(dom).offset({
	top:300
})
```

##### 5.10.7 获取元素到文档左侧的位置

```
$(dom).offset().left
```

##### 5.10.8 设置元素到文档左侧的位置

```
$(dom).offset({
	left:300
})
```

##### 5.10.9 获取元素被卷去的距离（顶部）

```
$(dom).scrollTop()
```

##### 5.10.10 设置元素被卷去的距离（顶部）

```
$(dom).scrollTop(300)
```



#### 5.11 绑定事件

##### 5.11.1 普通事件绑定

```
$(dom).click(function(){})
$(dom).mouseenter(function(){})
$(dom).focus(function(){})
```



##### 5.11.2 on方法绑定事件

```
$(dom).on('click',function(){})
$(dom).on('mouseenter',function(){})
$(dom).on('mouseenter mouseleave',function(){})
```

> 备注：给dom元素绑定一个click 事件



##### 5.11.3 on方法给动态添加的元素绑定事件

```
$(dom).on('click','.mybox',function(){})
```

> 备注：给dom元素下面，类名叫mybox的元素绑定点击事件 （mybox这个元素可以是通过js动态添加进页面的内容）





### 06 js高级

