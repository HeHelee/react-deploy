# 카카오톡 선물하기 클론코딩

- **version** : `2.319.1`
- **배포일** : `2024-09-03`
- https://hehelee.github.io/react-deploy/

 ## 프로젝트 개요
 - **대상 사용자** : 카카오톡을 이용하는 모든 유저
 - **프로젝트 목적** : 카카오테크 캠퍼스 부트캠프에서 진행한 수업으로 FE의 실무적인 지식을 함양하기 위함.

## 기능

### [주요 기능]
- 로그인 & 회원가입 기능
- 나에게 선물하기 기능

### [추가 기능]
- 상품 추가, 삭제, 수정 기능
- 관심 상품 등록 기능

### 배포
- github page를 활용해 배포합니다.
- API 명세서 : http://43.201.17.220:8080/swagger-ui/index.html#/

### 팀원
- **구희원** : 컴포넌트 설계 및 전체적인 UI 담당, API 호출 및 데이터 비동기적 관리, 페이지간 이동 시 경로 설정 담당

---

## 개발 환경
- **에디터(IDE)** : VS Code
- **서버 및 패키지 관리** : Node.js(v20.13.1), npm(v10.8.1)
- **버전 관리** : Git, Github
- **문서 관리** : Notion

---

### 컴포넌트
```
📦components
 ┣ 📂common
 ┃ ┣ 📂AsyncBoundary
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Button
 ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Form
 ┃ ┃ ┗ 📂Input
 ┃ ┃ ┃ ┣ 📜UnderlineTextField.stories.tsx
 ┃ ┃ ┃ ┗ 📜UnderlineTextField.tsx
 ┃ ┣ 📂GoodsItem
 ┃ ┃ ┣ 📜Default.stories.tsx
 ┃ ┃ ┣ 📜Default.tsx
 ┃ ┃ ┣ 📜Ranking.stories.tsx
 ┃ ┃ ┗ 📜Ranking.tsx
 ┃ ┣ 📂Image
 ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂layouts
 ┃ ┃ ┣ 📂Container
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Grid
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Spacing
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📂SplitLayout
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Spinner
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂View
 ┃ ┃ ┗ 📜LoadingView.tsx
 ┃ ┗ 📂VisibilityLoader
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜useIntersectionObserver.ts
 ┗ 📂features
 ┃ ┣ 📂Category
 ┃ ┃ ┣ 📂CategoryHeroSection
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📂CategoryProductsSection
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Goods
 ┃ ┃ ┗ 📂Detail
 ┃ ┃ ┃ ┣ 📂OptionItem
 ┃ ┃ ┃ ┃ ┗ 📜CountOptionItem.tsx
 ┃ ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜OptionSection.tsx
 ┃ ┣ 📂Home
 ┃ ┃ ┣ 📂AiDiscoveryBanner
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂CategorySection
 ┃ ┃ ┃ ┣ 📜CategoryItem.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📂SelectFriendsBanner
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Layout
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜ScrollToTop.tsx
 ┃ ┗ 📂Order
 ┃ ┃ ┗ 📂OrderForm
 ┃ ┃ ┃ ┣ 📂Common
 ┃ ┃ ┃ ┃ ┣ 📜HeadingText.tsx
 ┃ ┃ ┃ ┃ ┗ 📜LabelText.tsx
 ┃ ┃ ┃ ┣ 📂Fields
 ┃ ┃ ┃ ┃ ┣ 📜CashReceiptFields.tsx
 ┃ ┃ ┃ ┃ ┗ 📜MessageCardFields.tsx
 ┃ ┃ ┃ ┣ 📂GoodsInfo
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂MessageCard
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂OrderInfo
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜Order.test.tsx

## 회고
### @구희원

- **기획부터 배포까지** : 웹이 전체적으로 돌아가는 흐름을 배울 수 있어서 뜻깊었던 프로젝트 였습니다. step1 때 배웠던 Ts, React의 기초지식만으로 컴포넌트 설계 방법, Context API를 이용하여 전역으로 상태 관리하는 법, Reat Query를 이용해 비동기적 데이터를 처리하는 방법을 배울 수 있어서 뜻깊었습니다. 또한 마지막 6주차 때에는 BE팀과 함께 협업을 했는데 이때 BE팀이 만들어주신 API 명세서를 바탕으로 앤드포인트를 수정하고 서버를 직접 연결함으로써 웹 사이트를 github page로 배포할 수 있어서 좋았습니다.
- **주기적인 코드 리팩토링 작업** : 저는 클론 코딩 프로젝트가 끝난 이후에도 리팩토링을 진행했습니다. 특히 파일 구조가 복잡해서 비슷한 기능이 모여있는 폴더로 다시 옮겼고, 또한 코드가 모듈화 될 필요가 있는 작업들을 살폈습니다. 그리고 ErrorBoundary와 Suspense를 이용하여 오류 처리하려고 노력했고, 상위 컴포넌트에서 오류처리가 되었는데 하위 컴포넌트에서도 이를 실행함으로써 불필요하다고 느꼈습니다. 그래서 상위 컴포넌트에서만 에러 처리를 하도록 리팩토링 작업을 진행하고 있습니다.
- **다음 프로젝트에서의 자신감** : 현재 저는 step2를 마치고 다음 프로젝트를 실행하기 위해 노력하고 있습니다. 또한 교내 순한 버스의 노선도가 업데이트 되어 이를 리팩토링 해보려 합니다. 


 

  

  

