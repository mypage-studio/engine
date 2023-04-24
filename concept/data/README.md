# data

데이터 구조에 대한 가이드
json 데이터 하나로 페이지의 정보를 담고있다. 이 데이터를 토대로 `html`과 `style`을 구성한다.

> 예제는 편의를 위하여 `javascript` 형식으로 작성되어 있지만 실질적인 데이터 공유는 `json` 형식으로 사용된다.

```javascript
const data = {
  head: [],
  body: {},
  main: {},
  container: []
}
```


## head

`<head/>` 엘리먼트에서 사용되는 요소다.  
자세한 내용은 `./head.md` 페이지 참고


## body

`<body/>` 엘리먼트에서 사용되는 요소다.  
자세한 내용은 `./body.md` 페이지 참고


## main

`<main/>` 엘리먼트에서 사용되는 요소다. 


## component

페이지 본문에 사용되는 컴포넌트 목록이다.  
자세한 내용은 `./component.md` 페이지 참고
