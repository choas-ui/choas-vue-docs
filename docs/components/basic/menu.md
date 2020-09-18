### 菜单 Menu
---

  <ul>
    <li>mode align水平  vertical竖直  vertical-inline竖直展开 自动控制展开方向</li>
    <li>collapsed 是否折叠  显示图标</li>
    <li>className</li>
    <li>childrenClassName (函数 或 字符串)</li>
    <li>disable 是否禁用</li>
    <li>openMenuValue 展开数组 仅在inline</li>
    <li>defaultOpenValues 展开数组</li>
    <li>dataList 数据渲染  title, key, icon, expandIcon, pickedUpIcon, type: outerLink</li>
    <li>selectedValue 点击值</li>
    <li>MenuItem</li>
    <li>MenuItemGroup title属性</li>
    <li>MenuSubItem</li>
  </ul>
  
#### 基础 basic
---
  <ul>
    <li>fontClass 字体图标。</li>
  </ul>

:::demo
```html
<template>
    <CMenu
        font-class="fa fa-clipboard"
        color="#666"
    >
      <CMenuItem key="123">
        123
      </CMenuItem>
      <CMenuItemGroup>
        123
      </CMenuItemGroup>
      <CMenuSubItem>
        123
      </CMenuSubItem>
    </CMenu>
    <script>
      export default {
          methods:{
             log(){console.log(123);},
          }
      }
    </script>
</template>
```
:::


#### 属性列表 props
---
  |属性|范围|类型|默认值|说明|
  |:-:|:---:|---|---|:---|
  |block|truthy falsy|Boolean|false|是否将按钮转化为块|
  |size|'ssmall' 'small' 'default' 'large' 'llarge'| String | 'default'|按钮内边距|
  |type|'primary''success''warning'<br/>'danger''disabled''ghost'| String| 'primary'|按钮样式|
  |slot|'left' 'right'| String | 无 |插入左/右图标插槽|
  |placeholder|无|String|无|提供一个悬停时的说明文字|
  |click|()=>{}|Function|无|点击|
  |class-name|无|String|无|组件最外层添加一个新的类名|
  |prefix|无|String|无|是否在该组件所有类前加前缀|

#### 问答 QAQ
---
  <ul>
    <li><b>Q:</b> 圆形图标？</li>
    <li><b>A:</b> 暂未提供圆形图标。</li>
  </ul>

#### 归类 Answer
---
  <ul>
    <li><b>Q:</b></li>
  </ul>
