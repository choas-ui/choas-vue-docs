### 标签 CTag
---
  <ul>
    <li>标签。</li>
  </ul>

#### 尺寸 size
---
  <ul>
    <li>提供五种尺寸。</li>
  </ul>
   
:::demo 
```html
<template>
    <CTag size="ssmall">标签</CTag>
    <CTag size="small">标签</CTag>
    <CTag>标签</CTag>
    <CTag size="default">标签</CTag>
    <CTag size="large">标签</CTag>
    <CTag size="llarge">标签</CTag>
</template>
<script>
export default {
}
</script>
```
:::

#### 类型 type
---
  <ul>
    <li>四种类型。</li>
  </ul>
   
:::demo 
```html
<template>
    <CTag type="primary">标签</CTag>
    <CTag type="success">标签</CTag>
    <CTag type="warning">标签</CTag>
    <CTag type="danger">标签</CTag>
</template>
<script>
export default {
}
</script>
```
:::

#### 颜色与背景 color&bgc
---
  <ul>
    <li>自定义的颜色与背景。</li>
    <li>出现type时这两个属性不生效。</li>
  </ul>
   
:::demo 
```html
<template>
    <CTag bgc="#55ec55" color="#811f1f">标签</CTag>
</template>
<script>
export default {
}
</script>
```
:::


#### 关闭 close
---
  <ul>
    <li>触发自定义事件。</li>
  </ul>
   
:::demo 
```html
<template>
    <CTag @close="logs" size="llarge">标签</CTag>
    <CTag @close="logs" size="large">标签</CTag>
    <CTag @close="logs" size="default">标签</CTag>
    <CTag @close="logs" size="small">标签</CTag>
    <CTag @close="logs" size="ssmall">标签</CTag>
</template>
<script>
export default {
    methods:{
        logs(){
            console.log('close')
        }
    }
}
</script>
```
:::


#### 属性列表 props
---
  |属性|范围|类型|默认值|说明|
  |:-:|:---:|---|---|:---|
  |size|'ssmall' 'small' 'default' '' 'large' 'llarge' |String|''|尺寸|
  |type|'primary' 'success' 'warning' 'danger'| String | ''|默认提供的样式|
  |color|无| String| 无|字体颜色|
  |bgc|无| String| 无|背景颜色|
  |close|无| Function| 无|显示关闭按钮，触发关闭事件|

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
