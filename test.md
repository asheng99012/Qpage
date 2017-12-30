
 <link rel="stylesheet" href="https://github.com/iamcco/markdown.css/blob/master/dest/github/markdown.css">

# 一级标题

## 二级标题

### 三级标题

在 标题底下 加上任意个=代表一级标题，-代表二级标题

一级标题
======

二级标题
----------
- 列表
-  列表
- - 列表

- Red
- Green
- Blue

* Red
* Green
* Blue

+ Red
+ Green
+ Blue

> 引用

> 引用

> 这是一段引用    //在`>`后面有 1 个空格
> 
>     这是引用的代码块形式    //在`>`后面有 5 个空格
>     
> 代码例子：
>   
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

> 一级引用
> > 二级引用
> > > 三级引用

> #### 这是一个四级标题
> 
> 1. 这是第一行列表项
> 2. 这是第二行列表项



图片为：![这是图片](http://public.wutongwan.org/public-20171227-FiBKA_szmpTa8-gsCj83BGc3M0is?imageView2/1/w/380/h/285)

链接为：[百度](http://www.baidu.com)

**加粗文本** 或者 __加粗文本__

*斜体文本*  或者_斜体文本_

~~删除文本~~

<u>下划线文本</u>

[url]: http://connorlin.github.io/ "ConnorLin's Blog"


| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |



|标题|标题|标题|
|:---|:---:|---:|
|居左测试文本|居中测试文本|居右测试文本|
|居左测试文本1|居中测试文本2|居右测试文本3|
|居左测试文本11|居中测试文本22|居右测试文本33|
|居左测试文本111|居中测试文本222|居右测试文本333|
分割线 
***
***
---
___
在行尾添加两个空格加回车表示  
换行：

* * *


这是行内式链接：[ConnorLin's Blog](http://connorlin.github.io)。

这是参考式链接：[ConnorLin's Blog][url]，其中url为链接标记，可置于文中任意位置。

代码分为行内代码和代码块。

行内代码使用 `代码` 标识，可嵌入文字中

代码块使用4个空格或```标识

```
这里是代码
```

代码语法高亮在 ```后面加上空格和语言名称即可

``` 语言
//注意语言前面有空格
这里是代码
```


这是行内代码`onCreate(Bundle savedInstanceState)`的例子。

这是代码块和语法高亮：

``` java
// 注意java前面有空格
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
}
```

代码

``` javascript
function hello(){
    alert("这是代码");    
}
```


``` mermaid
graph TD;
A-->B;
A-->C;
B-->D;
C-->D;
```

``` mermaid
graph LR
    id1>This is the text in the box]
    id2{This is the text in the box}
    
    A[ssss]-->B[vvv]
    B-->C((cccc))
    B-->B1{gg}
    C-->|one| D[ddd]
    C-->|插入文本| E[ddd]
    A-- This is the text ---B
    A-->|This is the text|B
    A-.->B;
    A-. text .-> B
    A ==> B
    
```