### 单选框 radio
---
<ul>
    <li>在一组数据中选择一个。</li>
</ul>

### 简单模式 option
--- 

:::demo
```html
    <template>
        <p>{{ selectData }}</p>
        <CRadio option="a" v-model="selectData" />
        <CRadio option="b" v-model="selectData" />
        <CRadio option="c" v-model="selectData" />
    </template>
    <script>
        export default {
            data(){
                return {
                    selectData: ['a'],
                }
            }
        }
    </script>
```
:::

#### 禁止操作
---

:::demo
```html
    <template>
        <p>{{ selectData }}</p>
        <CRadio option="a" disabled v-model="selectData" />
        <CRadio option="b" disabled v-model="selectData" />
        <CRadio option="c" disabled v-model="selectData" />
    </template>
    <script>
        export default {
            data(){
                return {
                    selectData: ['a'],
                }
            }
        }
    </script>
```
:::


#### 图标插槽 slot
---
  <ul>
    <li>selected-icon，选中插槽。</li>
    <li>disabled-icon，禁用插槽。</li>
  </ul>

:::demo
```html
    <template>
        <p>{{ selectData }}</p>
        <CRadio option="a" v-model="selectData" >
            <CIcon icon-name="choas-selected"
               slot="selected-icon"
               color="green"
               :style="{
                    position: 'absolute', 
                    left: '-1px', 
                    top: '-1px', 
               }"
            />
            <CIcon icon-name="choas-forbid"
               slot="disabled-icon"
               color="#ff5e5c"
               :style="{
                    position: 'absolute', 
                    left: '-1px', 
                    top: '-1px', 
               }"
            />
        </CRadio>
        <CRadio option="b" disabled v-model="selectData" >
            <CIcon icon-name="choas-selected"
               slot="selected-icon"
               color="green"
               :style="{
                    position: 'absolute', 
                    left: '-1px', 
                    top: '-1px', 
               }"
            />
            <CIcon icon-name="choas-forbid"
               slot="disabled-icon"
               color="#ff5e5c"
               :style="{
                    position: 'absolute', 
                    left: '1px', 
                    top: '1px', 
                    width: '14px', 
                    height: '14px', 
                    lineHeight: '14px', 
               }"
            />
        </CRadio>
    </template>
    <script>
        export default {
            data(){
                return {
                    selectData: ['a'],
                }
            }
        }
    </script>
```
:::

### 数据模式
---
  <ul>
    <li>value值不再和视图直接相关。</li>
    <li>自动将checked为falsy的值从选中值中移除。</li>
    <li>自动将checked为truthy的值默认选中。</li>
  </ul>
  
:::demo
```html
<template>
    <p>{{ selectedData }}</p>
    <CRadio
        :option="{key: 'a', value: 'a'}"
        v-model="selectedData"
    />
    <CRadio
        :option="{key: 'b', value: 'b'}"
        v-model="selectedData"
    />
    <CRadio
        :option="{key: 'c', value: 'c', disabled: true}"
        v-model="selectedData"
    />
    <CRadio
        :option="{key: 'd', value: 'd', disabled: true, checked: true}"
        v-model="selectedData"
    />
</template>
<script>
    export default {
        data(){
            return {
                selectedData: [{key: 'a', value: 'a'}],
            }
        }
    }
</script>
```
:::

#### 键值映射 reflectKey
---
  <ul>
    <li>不推荐使用reflectKey，除非不得不。</li>
  </ul>
  
:::demo 
```html
<template>
    <p>{{ selectedData }}</p>
    <CRadio
        :option="{key: 'a', value: 'a'}"
        v-model="selectedData"
    />
    <CRadio
        :option="{key: 'b', value: 'b' }"
        v-model="selectedData"
    />
    <CRadio
        :option="{key: 'c', value: 'c', checked: true}"
        v-model="selectedData"
    />
    <CRadio
        :option="{name: 'laowang', id: '1268', checked: false}"
        v-model="selectedData"
        :reflect-key="{key: 'name', value: 'id'}"
    />
</template>
<script>
    export default {
        data(){
            return {
                selectedData: [{key: 'a', value: 'a'}],
            }
        }
    }
</script>
```
:::

---
---
---
---

### 单选框组 RadioGroup
---
  <ul>
    <li>提供数据与插槽两种可选的模式。</li>
    <li>数据模式可以生成快速视图。</li>
    <li>插槽模式可以生成个性试图。</li>
    <li>不能一起使用，插槽优先级高。</li>
  </ul>

### 数据模式
---
  <ul>
    <li>提供简单、数据两种数据模式。</li>
  </ul>

:::demo
```html
    <template>
        <p>{{ selectData }}</p>
        <CRadioGroup :list-data="listData" v-model="selectData" />
    </template>
    <script>
        export default {
            data(){
                return {
                    selectData: ['a'],
                    listData: ['a', 'b', 'c']
                }
            }
        }
    </script>
```
:::

:::demo
```html
<template>
    <p>{{ selectData }}</p>
    <CRadioGroup v-model="selectData" :list-data="listData"/>   
    <script>
        export default {
            data(){
                return{
                    selectData:[
                        {key: 'a', value: 'a'}
                    ],
                    listData: [
                        {key: 'a', value: 'a'},
                        {key: 'b', value: 'b'},
                        {key: 'c', value: 'c'}
                    ]
                }
            },
        }
    </script> 
</template>
```
:::

#### 单选按钮 type
---
  <ul>
    <li>值只能为button,不与插槽模式共存。</li>
    <li>normal-style,未选中样式。</li>
    <li>active-style,选中样式。</li>
  </ul>

:::demo
```html
<template>
    <p>{{ selectData }}</p>
    <CRadioGroup v-model="selectData"
                    :list-data="listData"
                    type="button"
                    :normal-style="{background: '#fff', color: '#333'}"
                    :active-style="{background: 'green'}"
    />   
    <script>
        export default {
            data(){
                return{
                    selectData:[{key: 'a', value: 'a'}],
                    listData: [{key: 'a', value: 'a'}, {key: 'b', value: 'b'}, {key: 'c', value: 'c'}]
                }
            },
        }
    </script> 
</template>
```
:::

:::demo
```html
<template>
    <p>{{ selectData }}</p>
    <CRadioGroup v-model="selectData"
                    :list-data="listData"
                    type="button"
                    :normal-style="{background: '#fff', color: '#333'}"
                    :active-style="{background: 'green'}"
    />   
    <script>
        export default {
            data(){
                return{
                    selectData:[{key: 'a', value: 'a', checked: true}],
                    listData: [{key: 'a', value: 'a'}, {key: 'b', value: 'b'}, {key: 'c', value: 'c'}]
                }
            },
        }
    </script> 
</template>
```
:::

### 插槽模式
---

:::demo
```html
<template>
    <p>{{ selectedData }}</p>
    <CRadioGroup>
         <CRadio
           option="a"
           v-model="selectedData"
         />
         <CRadio
           option="b"
           v-model="selectedData"
         />
         <CRadio
           option="c"
           v-model="selectedData"
         />
    </CRadioGroup>   
    <script>
        export default {
            data(){
                return{
                    selectedData:['a'],
                }
            },
        }
    </script> 
</template>
```
:::

:::demo
```html
<template>
    <p>{{ selectedData }}</p>
    <CRadioGroup>
         <CRadio
           :option="{key: 'a', value: 'a', checked: true}"
           v-model="selectedData"
         />
         <CRadio
           :option="{key: 'b', value: 'b'}"
           v-model="selectedData"
         />
         <CRadio
           :option="{key: 'c', value: 'c'}"
           v-model="selectedData"
         />
    </CRadioGroup>   
    <script>
        export default {
            data(){
                return{
                    selectedData:[],
                }
            },
        }
    </script> 
</template>
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
