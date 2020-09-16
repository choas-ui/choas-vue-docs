### 日期选择框  DatePicker
---
  <ul>
    <li>type 控制类型。</li>
    <li>todayStyle今天类型。</li>
    <li>disableDayHandle禁选天。</li>
    <li>disableMouthHandle禁选月。</li>
    <li>disableHours 数组。</li>
    <li>disableMinutes 数组。</li>
    <li>disableSeconds 数组。</li>
    <li>Format 数组。</li>
    <li>timeSpan 可选一个时间跨度。</li>
    <li>快速选择时间跨度 此刻 今天 本周 本月 本季度 选择按钮，可输入。</li>
    <li>快速禁用时间跨度 此刻 今天 本周 本月 本季度 选择按钮，可输入。</li>
  </ul>
  
::: demo
```html
<template>
    <CDatePicker />
</template>    
<script>
    export default {
        name: 'demo1',
        data(){
            return {
            }
        },
        mounted() {
        },
    }
</script>
```
:::

#### 宽度 width
---

::: demo
```html
<template>
    <CDatePicker width="100" />
    <br/>
    <CDatePicker width="200" />
    <br/>
    <CDatePicker width="400" />
</template>    
<script>
    export default {
        name: 'demo2',
        data(){
            return {
            }
        },
        mounted() {
        },
    }
</script>
```
:::

#### 大小 size
---

::: demo
```html
<template>
    <CDatePicker size="ssmall" />
    <br/>
    <CDatePicker size="default" />
    <br/>
    <CDatePicker size="llarge" />
</template>    
<script>
    export default {
        name: 'demo3',
        data(){
            return {
            }
        },
        mounted() {
        },
    }
</script>
```
:::

#### 快选按钮 quickSelectBox
---

::: demo
```html
<template>
    <CDatePicker width="200" quickSelectBox />
    <br/>
    <CDatePicker width="200" size="small" quickSelectBox />
    <br/>
    <CDatePicker width="200" size="ssmall" quickSelectBox />
</template>    
<script>
    export default {
        name: 'demo4',
        data(){
            return {
            }
        },
        mounted() {
        },
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
