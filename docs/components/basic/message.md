### 提醒 Message
---
  <ul>
    <li>轻提醒。</li>
    <li>提供一个当前页的提示队列。</li>
  </ul> 

#### 基础 basic
---
  <ul>
    <li>message用于设置提示内容。</li>
    <li>txtColor用于设置内容颜色。</li>
    <li>timeSpan用于设置显示时间。</li>
  </ul>

:::demo
```html
<template>
    <CButton @click="info">info</CButton>
    <CButton @click="success" type="success">success</CButton>
    <CButton @click="warning" type="warning">warning</CButton>
    <CButton @click="danger" type="danger">danger</CButton>
</template>
<script>
    export default {
        methods:{
            info(){
                this.$cMessage.info({
                    message: '提示!',
                    timeSpan: 2,
                })
            },
            success(){
                this.$cMessage.success({
                    message: '提示!',
                    timeSpan: 2,
                })
            },
            warning(){
                this.$cMessage.warning({
                    message: '提示!',
                    timeSpan: 2,
                })
            },
            danger(){
                this.$cMessage.danger({
                    message: '提示!',
                    timeSpan: 2,
                })
            }
        }
    }
</script>
```
:::

#### 图标与颜色 iconName&iconColor
---
  <ul>
    <li>iconName 用于设置图标。当然,你也可以提供fontClass或者src。</li>
    <li>iconColor用于设置图标颜色。</li>
  </ul>

:::demo
```html
<template>
    <CButton @click="success" type="success">success</CButton>
</template>
<script>
    export default {
        methods:{
            success(){
                this.$cMessage.success({
                    message: '提示!',
                    iconName: 'choas-voice',
                    timeSpan: 2,
                })
            }
        }
    }
</script>
```
:::

#### 回调 callback
---
  <ul>
    <li>callback提示结束后的回调。</li>
  </ul>

:::demo
```html
<template>
    <CButton @click="success" type="success">success</CButton>
</template>
<script>
    export default {
        methods:{
            success(){
                this.$cMessage.success({
                    message: '提示!',
                    timeSpan: 2,
                    callback: ()=>{
                        console.log('callback')
                    },
                })
            }
        }
    }
</script>
```
:::

#### 属性列表 props
---
  <ul>
    <li>Message的属性以对象的形式传入调用函数中。</li>
  </ul>
  
  |属性|范围|类型|默认值|说明|
  |:-:|:---:|---|---|:---|
  |message|无|String|无|提示文字|
  |txtColor|无|String|无|默认与当前提示类型对应颜色一致|
  |timeSpan|无| Number | 2|默认两秒显示|
  |iconName|无| String| 无|默认与当前提示类型对应的内置图标一致|
  |fontClass|无| String| 无|Icon的属性|
  |src|无| String| 无|Icon的属性|
  |iconColor|无| String | 无 |默认与当前提示类型对应颜色一致|
  |click|无|Function|无|提示结束后的回调|
  |class-name|无|String|无|组件最外层添加一个新的类名|
  |prefix|无|String|无|是否在该组件所有类前加前缀|

#### 问答 QAQ
---
  <ul>
    <li><b>Q:</b></li>
  </ul>

#### 归类 Answer
---
  <ul>
    <li><b>Q:</b></li>
  </ul>

