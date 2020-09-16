### 开关 switch
---
  <ul>
    <li>status  opening closing pending</li>
  </ul>
  
#### 基础 basic

:::demo
```html
    <template>
        <CSwitch size="llarge"/>
        <br>
        <CSwitch size="large"/>
        <br>
        <CSwitch size="default"/>
        <br>
        <CSwitch size="small"/>
        <br>
        <CSwitch size="ssmall"/>
        <br>
   </template>
```
:::



#### shape 按钮形状

:::demo
```html
    <template>
        <CSwitch size="llarge" shape="circle"/>
        <br>
        <CSwitch size="large" shape="circle"/>
        <br>
        <CSwitch size="default" shape="circle"/>
        <br>
        <CSwitch size="small" shape="circle"/>
        <br>
        <CSwitch size="ssmall" shape="circle"/>
        <br>
   </template>
```
:::

#### click 点击

:::demo
```html
    <template>
        <CSwitch size="ssmall" shape="circle" v-model="status" @click="click"/>
        <br>
   </template>
   <script>
        export default {
            data(){
                return {
                    status: 'closing',
                }
            },
            methods:{
                click(){
                    this.status = this.status === 'closing'? 'opening':'closing';
                }
            }
        }
   </script>
```
:::

#### openText & closeText 状态提示

:::demo
```html
    <template>
        <CSwitch shape="circle" v-model="status" @click="click" closeText="关闭" openText="开启" />
        <br>
        <CSwitch v-model="status2" @click="click2" closeText="关闭" openText="开启" />
   </template>
   <script>
        export default {
            data(){
                return {
                    status: 'closing',
                    status2: 'closing',
                }
            },
            methods:{
                click(){
                    this.status = this.status === 'closing'? 'opening':'closing';
                },
                click2(){
                    this.status2 = this.status2 === 'closing'? 'opening':'closing';
                }
            }
        }
   </script>
```
:::


#### openBg & closeBg 状态文字

:::demo
```html
    <template>
        <CSwitch shape="circle" v-model="status" @click="click" closeBg="#ff5e5c" openBg="#19B5FE" closeText="关闭" openText="开启" />
        <br>
        <CSwitch v-model="status2" @click="click2" closeBg="#ff5e5c" openBg="#19B5FE" closeText="关闭" openText="开启" />
   </template>
   <script>
        export default {
            data(){
                return {
                    status: 'closing',
                    status2: 'closing',
                }
            },
            methods:{
                click(){
                    this.status = this.status === 'closing'? 'opening':'closing';
                },
                click2(){
                    this.status2 = this.status2 === 'closing'? 'opening':'closing';
                }
            }
        }
   </script>
```
:::


#### isOutText 状态文字

:::demo
```html
    <template>
        <CSwitch size="small" shape="circle" is-out-text v-model="status" @click="click" closeText="关闭" openText="开启" />
        <br />
        <CSwitch size="small" is-out-text v-model="status2" @click="click2" closeText="关闭" openText="开启" />
        <br>
   </template>
   <script>
        export default {
            data(){
                return {
                    status: 'closing',
                    status2: 'closing',
                }
            },
            methods:{
                click(){
                    this.status = this.status === 'closing'? 'opening':'closing';
                },
                click2(){
                    this.status2 = this.status2 === 'closing'? 'opening':'closing';
                }
            }
        }
   </script>
```
:::

#### 圆角 borderRadius
  <ul>
    <li>仅在方形下生效，修改按钮和边框的圆角。</li>
  </ul>

:::demo
```html
    <template>
        <CSwitch 
            size="small" 
            is-out-text 
            v-model="status" 
            @click="click" 
            closeText="关闭" 
            openText="开启"
            border-radius="8"
        />
        <br />
        <CSwitch
            size="ssmall"
            is-out-text
            v-model="status2"
            @click="click2"
            closeText="关闭"
            openText="开启"
            border-radius="12"
        />
        <br>
   </template>
   <script>
        export default {
            data(){
                return {
                    status: 'closing',
                    status2: 'closing',
                }
            },
            methods:{
                click(){
                    this.status = this.status === 'closing'? 'opening':'closing';
                },
                click2(){
                    this.status2 = this.status2 === 'closing'? 'opening':'closing';
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

