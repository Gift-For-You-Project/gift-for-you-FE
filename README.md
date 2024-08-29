![Group 5043](https://github.com/Gift-For-You-Project/gift-for-you-FE/assets/153044803/4214754a-d17a-48ee-9049-7b439aeb1038)

## 기프티파이에서 정말 원하는 선물을 주고 받아요!

**원하는 선물을 받고 싶을 때**, 한 사람을 통해 받기에는 부담되는 가격의 선물을 받고 싶을 때가 있습니다.
이때 **선물 펀딩을 등록하여 지인들에게 링크를 공유하고, 지인들이 원하는 금액만큼 후원할 수 있는 서비스**입니다.

https://giftipie.vercel.app/

---


## 💗 팀원 소개 & 팀원 역할

![Group 5015](https://github.com/Gift-For-You-Project/gift-for-you-FE/assets/153044803/7f66225a-c433-4c33-ad25-48773a141824)

### 👥 팀원 역할

| 역할 | 이름 | 분담 |  |
| --- | --- | --- | --- |
| FE 👑 | 류지현 | 홈, 회원가입, 로그인, 404, 로딩스피너 페이지 생성, 소셜 로그인, 이메일 검증, 실시간 알림, 결제 기능 구현 |  |
| FE | 이현진 | 펀딩 상세, 생성, 수정, 결제페이지 반응형(모바일/웹) UI/UX 적용 및 펀딩 CRUD(펀딩 등록, 조회, 수정, 삭제) 기능 구현  |  |
| Design | 윤다인 | 디자인 담당 |  |


---

## 🏗️ 서비스 아키텍처

### ✅ 전체 아키텍처

![image](https://github.com/Gift-For-You-Project/gift-for-you-FE/assets/153044803/e3cca358-2c76-4918-85e4-dc2f0af41c46)

### ✅ Front-End

![image](https://github.com/Gift-For-You-Project/gift-for-you-FE/assets/153044803/4164b97a-b66c-4728-b319-cbdb69ae380b)


---


## 📌 기술적 의사결정

| 📌 사용 기술 | 📖 기술 설명 |
| --- | --- |
| Redux Toolkit | 상태 관리와 관련하여 초기 설정에 필요한 보일러플레이트와 불필요한 반복 작업을 최소한 할 수 있는 상태 관리툴로 미들웨어를 쉽게 통합할 수 있어 비동기 작업 및 다양한 확장 기능을 쉽게 추가할 수 있어서 선택하였습니다. |
| GitHub Actions | GitHub와의 통합이 용이하며 비교적 설정이 간단하고, 빠른 배포와 프로젝트의 규모가 작은 경우 유리하기 때문에 해당 기술을 선택하였습니다. |
| SSE (Server-Sent Events) | 서버에서 클라이언트로의 메세지 전달만 필요했기 때문에 단방향 통신 기술인 SSE가 가장 적합한 기술이라 판단하여 선택하였습니다. |


---


## 🔧 트러블 슈팅

- [FE] redux-persist 적용 시 발생한 오류
    
    `문제상황`
    
    로그인 상태를 유지하기 위해 redux-persist를 적용하다가 Uncaught TypeError: baseReducer is not a function 오류와 non-serializable 오류가 발생했다.
    
    `원인파악` 
    
    첫번째는 주어진 코드에서 "baseReducer"라는 변수 또는 함수가 기대한 형식이 아니라는 오류 메시지였고, 두번째는 redux의 serializable action을 유지하는 원칙에 어긋나는 비직렬화가 가능하지 않은 값이 action에 포함되어 있다는 오류 메시지였다. 
    
    `해결방법`
    
    첫번째 오류 해결: redux-persist를 사용할 때는 configureStore에 전달되는 reducer는 함수여야 한다. slice를 reducer로 변경했다. 또 rootReducer 객체를 함수로 변환해야 한다. store.js에서 combineReducers 함수를 사용했다.
    
    두번째 오류 해결: store.js 파일에서 serializableCheck를 false로 지정했다. 이것은 특별한 상황에서만 사용해야 하며, 주의가 필요한 설정이다.
    
- [FE] 소셜 관련 API 연결 시 404 페이지가 보여지는 현상
    
    `문제상황`
    
    라우터로 페이지를 구성할 때 지정한 페이지를 제외한 모든 경로는 404 페이지가 되도록 만들었다. 소셜 관련 API 연결 시 클라이언트에서 서버로 인증을 요청하고 기다리는 동안 보여지는 페이지는 지정한 페이지가 아니었기 때문에 404 페이지를 띄우게 된다.
    
    `원인파악` 
    
    사용자가 인증을 기다리는 동안 404 페이지 대신에 보여줄 새로운 페이지가 필요했다.
    
    `해결방법`
    
    React에서 로딩 상태를 시각적으로 나타내는 데 사용되는 react-spinners라는 라이브러리를 사용해서 새로운 로딩 페이지를 만들었다. 사용자에게 인증 작업이 진행 중이라는 것을 보여줄 수 있었다.


---


## 🔎 주요기능

## ✅ 회원가입 / 로그인

### 📌 일반 회원가입 / 로그인(Spring Security)

|일반 회원가입|일반 로그인|
|:--:|:--:|
|![image](https://github.com/Gift-For-You-Project/gift-for-you-BE/assets/151743721/cbb377ee-2f31-4e31-b42b-bd6f430c8e3a)|![image](https://github.com/Gift-For-You-Project/gift-for-you-BE/assets/151743721/10deb040-250b-4881-b3d4-4bcca6f6eb0a)|

- 유효성 검증과 약관 동의를 포함된 회원가입 기능을 구현했습니다.
- 개인정보 보안성에 중점을 둔 Spring Security 기반의 로그인 기능을 구현했습니다.

### 📌 일반 회원가입 시 이메일 인증

![회원가입인증메일짤](https://github.com/Gift-For-You-Project/gift-for-you-BE/assets/151743721/18a7f154-af62-4094-ae08-86cb99447975)

- 실제 사용 중인 이메일인지 인증 메일을 발송하고, 인증 코드를 발급하여 메일을 인증할 수 있습니다.
    
### 📌 소셜 로그인 (Kakao, Google)
    
![image](https://github.com/Gift-For-You-Project/gift-for-you-BE/assets/151743721/04c830ba-a8ed-4ae9-8376-b8ec1eb68e29)
    
- 사용자의 접근성에 중점을 둔 Social Login(Kakao & Google) 기능 구현을 구현했습니다.
    
## ✅ 펀딩 등록
    
![펀딩등록짤](https://github.com/Gift-For-You-Project/gift-for-you-BE/assets/151743721/90b78d0b-2855-4650-ba14-0a9840e209d9)
    
- 상품 정보가 있는 **링크**를 입력하여 이미지를 등록할 수 있습니다. 
- 이미지 등록 후 나머지 정보들을 모두 입력하여 펀딩을 등록할 수 있습니다.
    
## ✅ 펀딩 조회
    
![펀딩조회짤](https://github.com/Gift-For-You-Project/gift-for-you-BE/assets/151743721/c99b0b21-7064-46da-9248-83af3fe8b4ef)
    
- **최근 펀딩 구경하기 - 펀딩더보기** 를 눌러 최근 순으로 다른 유저들의 펀딩을 볼 수 있습니다.
- 전체, 진행중, 완료 탭을 눌러 상태별로 확인이 가능합니다.
    
## ✅ Kakaopay를 통한 후원(결제) 기능
    
![후원결제짤](https://github.com/Gift-For-You-Project/gift-for-you-BE/assets/151743721/0f528bb3-6350-4a9a-a496-3bba33938c20)
|1|2|3|4|
|:--:|:--:|:--:|:--:|
|![image](https://github.com/Gift-For-You-Project/gift-for-you-BE/assets/151743721/b6ad4b27-693a-4ae5-9205-2c0522c589e9)|![image](https://github.com/Gift-For-You-Project/gift-for-you-BE/assets/151743721/1154407b-2e49-45f1-b205-05cc7eccc989)|![image](https://github.com/Gift-For-You-Project/gift-for-you-BE/assets/151743721/76857c5c-74c8-4e2e-8918-fda270a4a950)|![image](https://github.com/Gift-For-You-Project/gift-for-you-BE/assets/151743721/bec6d585-10ae-4478-9dcd-000ea168ff80)|
    
- 원하는 펀딩에 후원을 진행하고, 후원 결제 내역을 수집하기 위해 Kakaopay 온라인 결제 기능을 구현했습니다.
    
## ✅ Giftipie에서 함께한 선물 - 통계 기능
    
![image](https://github.com/Gift-For-You-Project/gift-for-you-BE/assets/151743721/ed6e5c26-d232-4162-88a0-06b92553ed35)

- 펀딩에 참여한 총 인원, 목표 금액 달성으로 펀딩이 종료되어
  선물을 받은 인원, Giftipie에서 이루어진 펀딩의 총 금액을 계산하여 페이지에 보여줍니다. 
    
## ✅ 실시간 알림 기능

![후원알림짤](https://github.com/Gift-For-You-Project/gift-for-you-BE/assets/151743721/09a9ca0d-f173-4ada-b577-5bc078386994)

- 페이지 상단에 실시간 알림을 띄워줍니다. 
  실시간 알림은 **후원발생, 펀딩성공, 펀딩마감** 시에 동작합니다.

![알림목록짤](https://github.com/Gift-For-You-Project/gift-for-you-BE/assets/151743721/ce83adf0-f128-45fc-8b8d-470f1677aa4b)

- 우측 상단의 종모양 버튼을 누르면 알림 목록 페이지로 이동되어 받았던 알림메시지들을 확인할 수 있습니다.
- 해당 알림메시지를 누르면 관련 페이지로 이동합니다.
- 원하는 메시지를 선택하여 삭제할 수 있고, 읽은 메시지를 한번에 삭제할 수 있습니다.

![image](https://github.com/Gift-For-You-Project/gift-for-you-BE/assets/151743721/59fb96c3-f996-49f0-86ac-454a8faea09c)

- 회원 가입시에 이메일 수신 동의에 체크했다면 실시간 알림 발생 시 사이트에 접속 중이 아니더라도, 
  이메일로 알림 이메일을 받아볼 수 있습니다.


---


## 💟 로고

![image](https://github.com/Gift-For-You-Project/gift-for-you-FE/assets/153044803/9fa94138-4bee-43f0-adbb-21e2a24e3d44)

![항해18기 앙케이트 상장 pptx ](https://github.com/Gift-For-You-Project/gift-for-you-FE/assets/153044803/182c3a5b-e0a3-45bb-afec-b88143b92a22)
