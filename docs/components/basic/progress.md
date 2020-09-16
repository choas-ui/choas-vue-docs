### 进度条 progress
---
  <ul>
    <li>用于显示进度信息</li>
  </ul>

#### 值 value 
---
 <ul>
    <li>进度条百分比。</li>
 </ul>
 
:::demo
```html
<template>
    <CProgress :value="20"
            type="ssmall"
            color="#fff"
    ></CProgress>
    <br/>
    <CProgress :value="40"
            type="ssmall"
            color="#fff"
    ></CProgress>
    <br/>
    <CProgress :value="60"
            type="ssmall"
            color="#fff"
    ></CProgress>
</template>
<script>
    export default{
        data(){
            return {
                value: 20
            }
        },
        mounted(){
           setInterval(()=>{
                if(this.value<100){
                    this.value++
                }
           },100)
        }
    } 
</script>
```
:::

#### 高度 height 
---
 <ul>
    <li>进度条高度。</li>
 </ul>

:::demo
```html
<template>
    <CProgress height="20"
            :value="20"
            color="#fff"
    ></CProgress>
    <br/>
    <CProgress height="10"
            :value="40"
    ></CProgress>
    <br/>
    <CProgress height="5"
            :value="60"
    ></CProgress>
</template>
<script>
    export default{
        data(){
            return {
                value: 20
            }
        },
        mounted(){
           setInterval(()=>{
                if(this.value<100){
                    this.value++
                }
           },100)
        }
    } 
</script>
```
:::

#### 动画速度 timeSpan 
---
 <ul>
    <li>进度条高度。</li>
 </ul>

:::demo
```html
<template>
    <CProgress height="10"
            :value="20"
            :timeSpan="6"
            color="#fff"
    ></CProgress>
    <br/>
    <CProgress height="5"
            :timeSpan="4"
            :value="40"
    ></CProgress>
    <br/>
    <CProgress height="5"
            :timeSpan="2"
            :value="60"
    ></CProgress>
</template>
<script>
    export default{
        data(){
            return {
                value: 20
            }
        },
        mounted(){
           setInterval(()=>{
                if(this.value<100){
                    this.value++
                }
           },100)
        }
    } 
</script>
```
:::

#### 进度条配置 barConfig 
---
 <ul>
    <li>配置进度条的呈现效果。</li>
    <li>color数组，如果长度为1，纯色背景，如果长度为2，条纹背景。</li>
    <li>deg，条纹背景时控制条纹的角度。</li>
    <li>completeColor，完成时背景色。</li>
    <li>errorColor，错误时背景。</li>
    <li>stopColor，中断时背景色。</li>
 </ul>
 
        const barConfig = {
            color:  ['green', '#fff'],
            deg: 45,
            completeColor: '#1ac756',
            errorColor: '#ff5e5c',
            stopColor: '#ffbb50',
        }

:::demo
```html
<template>
    <CProgress height="18"
            :value="24"
            :barConfig="barConfig1"
            color="#fff"
            :time-span="0.5"
            ></CProgress>
    <br/>
    <CProgress height="18"
            :value="18"
            :barConfig="barConfig2"
            color="#fff"
            :time-span="0.8"
            ></CProgress>
    <br/>
    <CProgress height="18"
            :value="20"
            :barConfig="barConfig3"
            color="#fff"
            ></CProgress>
    <br/>
    <CProgress height="18"
            :value="30"
            :barConfig="barConfig4"
            color="#fff"
            ></CProgress>
    <br/>
    <CProgress height="18"
            :value="100"
            :barConfig="barConfig4"
            status="complete"
            outside
            ></CProgress>
    <br/>
    <CProgress height="18"
            :value="99.9"
            :barConfig="barConfig4"
            status="stop"
            outside
            ></CProgress>
    <br/>
    <CProgress height="18"
            :value="10"
            :barConfig="barConfig4"
            status="error"
            outside
            ></CProgress>
    <br/>
</template>
<script>
    export default{
        data(){
            return {
                value: 60,
                barConfig1: {
                    color:  ['#19B5FE', '#0ff'],
                    deg: 45,
                    completeColor: '#1ac756',
                    errorColor: '#ff5e5c',
                    stopColor: '#ffbb50',
                },
                barConfig2: {
                    color:  ['#19B5FE', '#ff0'],
                    deg: 45,
                    completeColor: '#1ac756',
                    errorColor: '#ff5e5c',
                    stopColor: '#ffbb50',
                },
                barConfig3: {
                    color:  ['#19B5FE', '#ff0'],
                    deg: 135,
                    completeColor: '#1ac756',
                    errorColor: '#ff5e5c',
                    stopColor: '#ffbb50',
                },
                 barConfig4: {
                    color:  ['', '#19B5FE'],
                    deg: 135,
                    completeColor: '#1ac756',
                    errorColor: '#ff5e5c',
                    stopColor: '#ffbb50',
                }
            }
        }
    } 
</script>
```
:::

#### 文字位置 outside
--- 
 <ul>
    <li>outside控制文字位置。</li>
    <li>当高度小于12px时文字强制显示在外部。</li>
 </ul>

:::demo
```html
<template>
    <CProgress height="18"
            :value="30"
            :barConfig="barConfig1"
            color="#fff"
            ></CProgress>
    <br/>
    <CProgress height="18"
            :value="60"
            :barConfig="barConfig2"
            outside
            ></CProgress>
    <br/>
    <CProgress height="12"
            :value="40"
            :barConfig="barConfig2"
            outside
            ></CProgress>
</template>
<script>
    export default{
        data(){
            return {
                barConfig1: {
                    color:  ['#19B5FE', '#0ff'],
                    deg: 45,
                    completeColor: '#1ac756',
                    errorColor: '#ff5e5c',
                    stopColor: '#ffbb50',
                },
                barConfig2: {
                    color:  ['#19B5FE', '#ff0'],
                    deg: 45,
                    completeColor: '#1ac756',
                    errorColor: '#ff5e5c',
                    stopColor: '#ffbb50',
                }
            }
        }
    } 
</script>
```
:::

#### 禁用文字 noText
---
 <ul>
    <li>禁用文字。</li>
 </ul>

:::demo
```html
<template>
    <CProgress height="18"
            :value="30"
            :barConfig="barConfig1"
            color="#fff"
            no-text
            ></CProgress>
</template>
<script>
    export default{
        data(){
            return {
                barConfig1: {
                    color:  ['#19B5FE', '#0ff'],
                    deg: 45,
                    completeColor: '#1ac756',
                    errorColor: '#ff5e5c',
                    stopColor: '#ffbb50',
                }
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
  |value|无|Number|0|进度条长度|
  |height|无| String | '26'|高度|
  |timeSpan|[10,]| Number| 10|动画时间|
  |barConfig|无| Object | 无 |{color:  ['green', '#fff'],deg: 45,completeColor: '#1ac756',errorColor: '#ff5e5c',stopColor: '#ffbb50',}|
  |outside|无|String|无|值显示在外部|
  |noText|无|Boolean|false|是否显示文字|

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
