# blob 类型文件前端下载

### 1. 安装
```
npm install blobdownload -S
```

### 2. 引入
```
import blobdownload from 'blobdownload'
```

### 3.使用
```
blobdownload(data, type, fileName)
```
参数说明:
- data ( 必需 | blob ):  需要下载的 ``` blob``` 数据；
- type ( 必需 | string ):  文件的类型,也就是扩展名;
- fileName(可选 | string): 文件名。