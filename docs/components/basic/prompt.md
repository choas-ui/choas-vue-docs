### 轻提示
---
  <ul>
    <li>直接在组件上出现一个小型的提示。</li>
  </ul>
  
#### 对话 dialog
----
  <ul>
    <li>dialog，传入一个简单的字符串。</li>
    <li>render-dialog，传入一个生成dialog的函数。</li>
  </ul>
  
:::demo
```html
    <template>
        <CPrompt dialog="你点击了提示……">
            <CButton size="ssmall">提示</CButton>
        </CPrompt>
    </template>
``` 
::: 

:::demo
```html
    <template>
        <CPrompt dialog="你点击了提示……" :render-dialog="renderDialog">
            <CButton size="ssmall">提示</CButton>
        </CPrompt>
    </template>
    <script>
        export default {
            methods:{
                renderDialog(h){
                    return h('div',["生成了一个dialog"])
                }
            }
        } 
    </script>
``` 
:::

#### 位置 placeSetting
----   
  <ul>
    <li>水平方向，left center right。</li>
    <li>竖直方向,top bottom。</li>
    <li>中间用短线隔开。</li>
    <li>边角，位置会强制重置。你可以通过noAutoSetting取消。</li>
  </ul>

:::demo
```html
    <template>
        <CPrompt dialog="你点击了提示……" place-setting="left-top">
            <CButton size="ssmall">left-top</CButton>
        </CPrompt>
        <CPrompt dialog="你点击了提示……"  place-setting="left-bottom">
            <CButton size="ssmall">left-bottom</CButton>
        </CPrompt>
        <CPrompt dialog="你点击了提示……" place-setting="right-top">
            <CButton size="ssmall">right-top</CButton>
        </CPrompt>
        <CPrompt dialog="你点击了提示……"  place-setting="right-bottom">
            <CButton size="ssmall">right-bottom</CButton>
        </CPrompt>
        <CPrompt dialog="你点击了提示……" place-setting="center-top">
            <CButton size="ssmall">center-top</CButton>
        </CPrompt>
        <CPrompt dialog="你点击了提示……"  place-setting="center-bottom">
            <CButton size="ssmall">center-bottom</CButton>
        </CPrompt>
    </template>
``` 
:::


#### 确认和取消 confirm&cancel
----   
  <ul>
    <li>如果没有绑定事件，按钮隐藏。</li>
    <li>提供confirmTxt cancelTxt改变按钮文字。</li>
  </ul>

:::demo
```html
    <template>
        <CPrompt dialog="你点击了提示……"
                 @confirm="log('好的')"
                 @cancel="log('谢谢')"
                 confirm-txt="好的"
                 cancel-txt="谢谢"
        >
            <CButton size="ssmall">left-top</CButton>
        </CPrompt>
    </template>
    <script>
        export default {
            methods:{
                log(msg){
                    alert(msg)
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
  |dialog|无|String|无|提示文字|
  |render-dialog|无|Function|无|通过函数生成提示内容|
  |placeSetting|'top' 'right' 'bottom' 'left' 'center'| String | 'left-top'|出现方位|
  |noAutoSetting|truthy falsy| Boolean| false|弹出提示不进行自动调整|
  |confirm|无|Function|无|确认时的回调|
  |confirmTxt|无|String|'确认'|确认按钮文字|
  |cancel|无|Function|无|取消时的回调|
  |cancelTxt|无|String|'取消'|取消按钮文字|
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