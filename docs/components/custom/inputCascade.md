### 输入框级联  InputCascade
---

:::demo
```html
    <template>
        <CInputCascade type="text" 
            :list-data="listData"
            v-model="value"
            mutilple
        />
    </template>
    <script>
        export default {
            data(){
                return {
                    listData: [],
                    value: []
                }
            }
        }
    </script>
```
:::
