# chih-chin-exam

1、封裝 axios, 要求是處理 http 請求的請求攔截和響應攔截. 請求攔截處理 : 將 token 和傳 lang（多
語言）添加在請求頭; 響應攔截處理接口調用成功或失敗的處理, 最好封裝成 Promise
```
@/axios.js
```

2、粗略寫一個 從頁面調接口開始到接口調用, vuex 中間層再到頁面渲染的例子, 不需要太複雜
```
/about
```

3、封裝一個父子組件通信的例子, 使用多種方式進行通信
```
/communication
```

4、封裝一個 echart 組件, 圖表類型隨意
```
/echarts
```

5、寫一個工具函數, 將上傳的圖片壓縮大小. 可以使用開源插件
```
@/tools/image-conversion.js
/about 裡的選擇文件按鈕
```

6、將一段 dom 結構生成一張 base64 圖片
```
無實作
```
