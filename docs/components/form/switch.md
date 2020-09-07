### 开关 switch
---
  <ul>
    <li>shape</li>
    <li>openText</li>
    <li>closeText</li>
    <li>openBg</li>
    <li>closeBg</li>
    <li>outText</li>
    <li>noText</li>
    <li>borderRadius</li>
    <li>status  opening closing pending</li>
    <li>switchHandle</li>
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

#### closeText & openText 状态文字

:::demo
```html
    <template>
        <CSwitch shape="circle" v-model="status" @click="click" closeText="关闭" openText="开启" />
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
