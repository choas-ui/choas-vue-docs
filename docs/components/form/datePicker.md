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
