<h1 align="center">unocss-preset-ponya</h1>
<p align="center">Ponya preset for UnoCSS</p>

## 시작하기
npm:
```bash
npm i -D unocss unocss-preset-ponya 
```

## 가이드 문서

### 유닛 별칭
| class | Unit | example |      CSS      |
|-------|------|---------|:-------------:|
| p     | %    | w100p   |  width: 100%  |

### 레이아웃
| class |         CSS properties          | default | example |                     CSS                     |
|:-----:|:-------------------------------:|:--------|:-------:|:-------------------------------------------:|
|   w   |              width              |         |   w10   |                width: 40px;                 | 
|   h   |             height              |         | h100vh  |               height: 100vh;                |
|   m   |             margin              |         |   m4    |                margin: 16px;                |
|  mt   |           margin-top            |         |   mt1   |              margin-top: 4px;               |
|  mr   |          margin-right           |         |   mr1   |             margin-right: 4px;              |
|  mb   |          margin-bottom          |         |   mb1   |             margin-bottom: 4px;             |
|  ml   |           margin-left           |         |   ml1   |              margin-left: 4px;              |
|  mx   |  margin-left <br> margin-right  |         | mx-auto |  margin-left: auto;<br>margin-right: auto;  |
|  my   |  margin-top <br> margin-bottom  |         |   my0   |     margin-top: 0;<br>margin-bottom: 0;     |
|   p   |             padding             |         |   p1    |                padding: 4px;                |
|  pt   |           padding-top           |         |   pt1   |              padding-top: 4px;              |
|  pr   |          padding-right          |         |   pr1   |             padding-right: 4px;             |
|  pb   |         padding-bottom          |         |   pb1   |            padding-bottom: 4px;             |
|  pl   |          padding-left           |         |   pl1   |             padding-left: 4px;              |
|  px   | padding-left <br> padding-right |         | px-auto | padding-left: auto;<br>padding-right: auto; |
|  py   | padding-top <br> padding-bottom |         |   py1   |  padding-top: 4px;<br>padding-bottom: 4px;  |
|   b   |          border-width           |         |   b1    |             border-width: 1px;              |

#### 길이
|    class     |        CSS Properties        |  example   |
|:------------:|:----------------------------:|:----------:|
|   w~[min]    |          max-width           |   w~100p   |
|   w[max]~    |          min-width           |   w100p~   |
| w[min]~[max] |  min-width <br /> max-width  | w100p~200p |  
|   h~[min]    |          max-height          |   h~100p   |
|   h[max]~    |          min-height          |   h100p~   |
| h[min]~[max] | min-height <br /> max-height | h100p~200p |  
