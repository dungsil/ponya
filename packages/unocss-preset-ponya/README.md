<h1 align="center">unocss-preset-ponya</h1>
<p align="center">Ponya preset for UnoCSS</p>

## 시작하기
npm:
```bash
npm i -D unocss unocss-preset-ponya 
```

## 가이드 문서

### 유닛 별칭
| class | Unit | example | result      |
|-------|------|---------|-------------|
| p     | %    | w100p   | width: 100% |

### 레이아웃
| class | CSS properties | default | example |
|:-----:|:--------------:|:--------|:-------:|
|   w   |     width      | auto    |  w100   |
|   h   |     height     | auto    | h100vh  |
|   m   |     margin     | auto    |   m4    |
|   p   |    padding     | 1px     |   p1    |
|   b   |     border     | 1px     |   b1    |

#### 길이
|    class     |        CSS Properties        |  example   |
|:------------:|:----------------------------:|:----------:|
|   w~[min]    |          min-width           |   w~100p   |
|   w[max]~    |          max-width           |   w100p~   |
| w[min]~[max] |  min-width <br /> max-width  | w100p~200p |  
|   h~[min]    |          min-height          |   h~100p   |
|   h[max]~    |          max-height          |   h100p~   |
| h[min]~[max] | min-height <br /> max-height | h100p~200p |  

### 색상
| class |  CSS properties  |    example    |
|:-----:|:----------------:|:-------------:|
|  bg   | background-color |  bg-gray-50   |
| text  |      color       | text-gray-800 |
