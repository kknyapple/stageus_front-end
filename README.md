## 목차
1. [ES6](#week1-es6)
2. [Component](#week2-component)
3. [hook](#week3-hook)
4. [CRA](#week4-cra)
5. [Redux](#week5-redux)
6. [Recoil](#week6-recoil)
7. [Style Component](#week7-styled-component)
8. [Bundler](#week8-bundler)

# week1 ES6

## ✏️ 구현 내용

### yotube 클론 코딩

- youtube 첫 페이지 구현하기
    
    (page 이동, video 클릭 없이 오직 UI 부분만 구현)
    
- 왼쪽 상단의 메뉴 버튼을 눌렀을 때 다른 메뉴 슬라이드로 나오게 하기
- video에 마우스 올리면 커지고 빼면 작아지게 하기

** SEO, Media query 적용하기 → semantic tag, 화면 크기에 따라 nav바 유무와 video 크기 조정

### ES6 문법 적용하기

- var → let, const
- 반목문 → forEach, map
- Event delegation
- destructing
- 함수 람다식

## 👩‍💻 Issue

- css 적용 ⭕
    
    → flex로 구성
    
- menu, video에서 중복 코드 제거 ⭕
    
    → forEach로 createvideo, createmenu 함수 여러개 만들어 줌
    
- CORS 에러 ⭕
    
    → http-server로 해결
    

## ⛏️ 피드백

### 1️. type=module 제거

```jsx
<script src="src/header/header.js"></script>
<script src="src/headerMenu/headerMenu.js"></script>
<script src="src/headerMenu/headerMenuHover.js"></script>
<script src="src/headerMenu/menuBar.js"></script>
<script src="src/menu/menu.js"></script>
<script src="src/menu/menuHover.js"></script>
<script src="src/video/video.js"></script>
<script src="src/video/videoHover.js"></script>
<script src="src/svg.js"></script>
<script src="src/index.js"></script>
```

type=module로 선언해 CORS 에러가 발생하여 http-server을 이용했는데 사용해야 할 이유가 없다. js 파일로 나누어 script 태그에 넣어주기만 하면 된다.

### 2️. body html 태그에 style 금지

```jsx
<body style="margin: 0">
```

```css
body {
  margin: 0;
}
```

### 3️. Sementic tag 적용

```jsx
<header id="header"></header>
<nav id="menus"></nav>
<main id="container"></main>
```

SEO를 위해 sementic tag를 적용한다.

### 4️. Mediaquery로 Nav, SearchBar 사라지게 하기

```jsx
@media screen and (max-width: 792px) {
  #menus {
    display: none;
  }
}
```

```jsx
@media screen and (max-width: 656px) {
  #search > input {
    display: none;
  }
  #searchButton {
    outline: 0;
    border: 0;
    background-color: white;
  }
}

@media screen and (max-width: 500px) {
  #search > input {
    display: none;
  }
  #searchButton {
    outline: 0;
    border: 0;
    background-color: white;
  }
}
```

mediaquery로 화면 크기에 따라 nav바와 검색창이 줄어들게 한다. max-width는 유튜브 창을 조절해보며 얻은 값이다.
# week2 Component

## ✏️ 구현 내용

### React 적용

- script로 react, react-dom

### Compoent 단위로 구현하기

- HeaderComponent
- ContainerComponent
    - VideoComponent
    - NavComponent
- SideNavComponent
    - GrayBoxComponent
    - WhiteBoxComponent

### Props 전달

- props 전달 최대한 적게 하기

## 👩‍💻 Issue

- event delegation 사용 ❌

       → event delegation을 사용하는 이유?

- menu, video에서 중복 컴포넌트 제거 ⭕
    
    → map 이용 (component를 return 해줘야 해서 forEach가 아닌 map 이용)
    

## ⛏️ 피드백

### 1️. 화면 크기에 따라 video 크기 조정

```css
#videos {
  display: flex;
  flex-wrap: wrap;
}
```

flex와 flex-wrap을 이용해 화면 크기에 맞게 한 줄에 나오는 video 개수를 조정한다.

### 2️. Event delegation로 상위 태그에 이벤트 등록

```jsx
React.useEffect(() => {
	document
  .getElementById("header-menus")
  .addEventListener("mouseover", whiteBoxOnMouseOver);

  document
  .getElementById("header-menus")
  .addEventListener("mouseout", whiteBoxOnMouseOut);
}, []);
```

```jsx
React.useEffect(() => {
	document
  .getElementById("menus")
  .addEventListener("mouseover", navOnMouseOver);

  document
  .getElementById("menus")
  .addEventListener("mouseout", navOnMouseOut);
}, []);
```

```jsx
React.useEffect(() => {
	document
  .getElementById("videos")
  .addEventListener("click", videoOnClickHandler);
	  return () => {
	    document
      .getElementById("videos")
      .removeEventListener("click", videoOnClickHandler);
    };
});
```

상위 태그에 event를 등록해 조건문으로 특정 id일 때만 event가 실행되게 해준다.

### 3️. HeaderComponent 세분화

```jsx
const HeaderEndContainerComponent = () => {
	return (
		<header id="header">
			<HeaderStartContainerComponent />
			<HeaderMiddleContainerComponent />
			<HeaderEndContainerComponent />
		</header>
	);
}
```

HeaderComponent를 더 작은 Component 들로 나누었다.
# week3 hook

## ✏️ 구현 내용

### Custom Hook

- video 클릭하면 커지고 다시 클릭하면 작아지게 하기

### State

- menu 열고 닫는 기능 → true면 열고 false면 닫고 (애니매이션 x)
- 태그에 직접 event 주지 않고 addEventListner로 등록하기

## 👩‍💻 Issue

- useEffect에 event를 넣고 인자로 [ ]을 전달하여도 video 클릭하면 이벤트가 중복 실행 ⭕
    
    → removeEventListner 이용
    
    → 하지만 아직까지 [ ] 넣으면 왜 안되는 지 모르겠음 ❓
    
- custom hook으로 video 하나마다 state 주기 ❌
    
    → useState를 사용하면 모든 video가 하나의 state를 공유하게 됨
    
- 전달 되는 object에 대한 props 줄이기 ⭕
    
    → spread 연산자, destructing 이용
    
- HeaderComponent에 있는 메뉴 버튼과 WhiteBoxComponent에 있는 메뉴 버튼 연결 ⭕
    
    → 상위 컴포넌트인 App 컴포넌트에 HeaderComponent, WhiteBoxComponent를 자식 컴포넌트로 넣고, useState로 state를 만들고 props로 각 컴포넌트에 전달
    

## ⛏️ 피드백

### 1️. useEffect 한 번만 실행되게 하기

useEffect에 [ ]나 removeEventListner 사용으로 evnet가 한번만 실행되게 해야한다. 이벤트 스케쥴러로 인해 이벤트는 Component rerendering과 별개로 따로 실행된다.

### 2️. 낭비되는 div 태그 줄이기

```jsx
const VideoItemComponent = (props) => {
	return (
     <>
        {id.map((a, index) => {
	        return (
	          <div key={index} id={`video${index}`}>
					)
				}
		</>
}

const VideoComponent = (props) => {
	return (
    <div id="videos">
      <VideoItemComponent {...videoInfoObj} />
    </div>
  );
}
```

```jsx
const VideoItemComponent = (props) => {
return (
    <div id={`video${props.index}`}></div>
  );
}
	
const VideoComponent(props) = () => {
	return (
    <div id="videos">
      {videoInfoObj.id.map((a, index) => {
        return (
          <VideoItemComponent key={index} index={index} {...videoInfoObj} />
        );
      })}
    </div>
  );
}
```

낭비되는 태그를 줄이고 <></> 태그를 쓰지 않는다.

### 3️. 리랜더링을 줄이는 방안 고민

### 4️. Component 이름 수정

component 이름만 보고 알 수 있게 GrayBoxComponent, WhiteBoxComponent 등의 component 이름 수정

# week4 CRA

## ✏️ 구현 내용

### AWS

- 한국 서버로 수정
- EC2 보안그룹 인바운드 규칙 추가 (port number 3000)
- putty로 연결 (.pem/private key 저장하기)

### create-react-app

- ubuntu/frontend/youtube에 프로젝트 생성
- ftp-simple로 접속

**FileZilla 이용

### 구조

- public
    - index.css
    - index.html
    - images
- src
    - App.js
    - index.js
    - Component
        - Container
            - Nav
            - Video
        - Header
        - SideNav

## 👩‍💻 Issue

- ftp-simple workspace 연결이 안됨 ⭕
    
    → ubuntu 20.04 버전으로 진행 (22버전은 unstable)
    
- component 이름 정하기, 파일 분류 ⭕
    
    → 유지보수 향상
    
- AWS에서 이미지 삽입 ❌
    
    → process.env.PUBLIC_URL, 직접 경로 설정도 안됨
    

## ⛏️ 피드백

### 1️. FileZilla로 이미지 넣기

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/591da47e-f87a-47ed-a767-a11c7528e937/Untitled.png)

nodejs는 path 접근 권한을 막아 css는 src 폴더에 넣으면 안된다. public 폴더는 path 접근 권한을 허용 해준다. 

jpeg 파일을 public 폴더에 넣으려면 FileZilla를 사용해야 한다. 

process.env.PUBLIC_URL 가 현재 경로

### 2️. Component 이름 / 부모,자식 구조 수정

- component
    - Header
        
        HeaderComponent.js
        
        HeaderStartContainerComponent.js
        
        HeaderMiddleContainerComponent.js
        
        HeaderEndContainerComponent.js
        
    - Container
        - Nav
            
            NavComponent.js
            
            NavItemComponent.js
            
        - Video
        
        ContainerCompoent.js
        
        VideoComponent.js
        
        VideoIemCompoent.js
        
    - SlideMenu
        - SlideMenuContainer
            
            SlideMenuContainerComponent.js
            
            SlideMenuHeaderComponent.js
            
            SlideMenuNavContainerComponent.js
            
            SlideMenuNavItemComponent.js
            
        
        SlideMenuPageComponent.js
        

component 이름 지을 때 container → ? → Item

component의 부모 자식 관계를 폴더로 나누어준다.

# week5 Redux

## ✏️ 구현 내용

### Redux

- store, reducer, action
- custom hook 사용

### Nav page

- youtube 나머지 페이지 구성
- nav 클릭하면 video 화면 대신 다른 page 출력 (html만 보이게 하기)

## 👩‍💻 Issue

- store은 한 개만 존재해야 하는데 reducer가 여러 개 있음 ⭕ → 하지만 reducer 1개만 사용하기
    
    → combineReducer로 여러 개의 reducer을 rootReducer에 합침
    
- nav 메뉴마다 state를 주고 싶은데 중복되는 코드가 너무 많음 (action, reducer 함수) ❌
- nav에 따라 page를 바꿀 때 videoComponent를 null 상태로 바꿔주는데 useEffect에 removeEventListner에서 에러 발생 ⭕
    
    → useEffect에 []전달하여 에러 해결, 하지만 이번에는 video 클릭 이벤트가 작동 되지 않는 에러 발생
    
    → custom hook을 이벤트가 발생하는 태그에 직접 이벤트 등록
    
- props로 간단하게 해결할 수 있는 것은 redux 사용 안 함 ⭕
- 데이터 object 수정 ⭕
    - videosData
        
        ```jsx
        const videosData = [
            {
              id: "0",
              img: "img0",
              content: "content0",
            },
            {
              id: "1",
              img: "img0",
              content: "content0",
            },
            {
              id: "2",
              img: "img0",
              content: "content0",
            },
            {
              id: "3",
              img: "img0",
              content: "content0",
            },
            {
              id: "4",
              img: "img0",
              content: "content0",
            },
            {
              id: "5",
              img: "img0",
              content: "content0",
            },
            {
              id: "6",
              img: "img0",
              content: "content0",
            },
            {
              id: "7",
              img: "img0",
              content: "content0",
            },
            {
              id: "8",
              img: "img0",
              content: "content0",
            },
            {
              id: "9",
              img: "img0",
              content: "content0",
            },
            {
              id: "10",
              img: "img0",
              content: "content0",
            },
          ];
        ```
        
    - menusData
        
        ```jsx
        const menusData = [
            {
              id: "0",
              img: "menu0",
              name: "home",
            },
            {
              id: "1",
              img: "menu1",
              name: "search",
            },
            {
              id: "2",
              img: "menu2",
              name: "shorts",
            },
            {
              id: "3",
              img: "menu3",
              name: "describe",
            },
            {
              id: "4",
              img: "menu4",
              name: "originals",
            },
            {
              id: "5",
              img: "menu5",
              name: "music",
            },
            {
              id: "6",
              img: "menu6",
              name: "storage",
            },
            {
              id: "7",
              img: "menu7",
              name: "offline",
            },
          ];
        ```
        
    - NavItemComponent
        
        ```jsx
        const { menu } = props;
        
          return (
            <div id={`menu${menu.id}`}>
              <div id="menu">
                <div id="button-menu">
                  <img src={`./images/${menu.img}.jpg`} />
                  {menu.name}
                </div>
              </div>
            </div>
          );
        ```
        
    - VideoItemComponet
        
        ```jsx
        const { video } = props;
        
        return (
            <div id={video.id} onClick={videoOnClickHandler}>
              <div id="video">
                <div id="thumbnail">
                  <img src={`./images/${video.img}.jpg`} />
                </div>
                <div id="video-content">
                  <img src={`./images/${video.content}.jpg`} />
                </div>
              </div>
            </div>
          );
        ```
        

## ⛏️ 피드백

### 1️. 백엔드 state 만들기

비디오처럼 개수가 정해져 있지 않고 자주 바뀌는 데이터는 state로 관리해준다. 백엔드에서 받아오는 데이터는 state로 만들어준다.

```jsx
//dataReducer.js
import { videosData } from "../data/videoData";

const initState = {
  data: videosData,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "SHOW_VIDEO":
      return {
        data: action.data,
      };

    default:
      return state;
  }
};
```

```jsx
//action.js
const showVideo = (data) => {
  return { type: "GET_VIDEO", data };
};
```

```jsx
//VideoItemComponent.js
const data = useSelector((state) => state.dataReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showVideo(data));
  }, [dispatch]);
```

### 2️. type 명, navReducer 하나로 합치기

```jsx
const showMenu0 = () => {
  return {
    type: "MENU_0", //type: CHANGE_MENU, SET_MENU로 //매개변수로 index 받기
  };
};

const showMenu1 = () => {
  return { type: "MENU_1" };
};

const showMenu2 = () => {
  return { type: "MENU_2" };
};
```

```jsx
const showMenu = (menu) => {
  return { type: "CHANGE_MENU", menu };
};
```

```jsx
const initState = {
  menu: "home",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_MENU":
      return {
        menu: action.menu,
      };

    default:
      return state;
  }
```

### 3️. 조건에 따라 보여지는 component 바꾸기

```jsx
<main id="container">
      <NavComponent />
      {
        //1. 삼항연산자
				 page == 0 ? <VideoComponent /> : <div>{`page${page}`}</div>

        //2. 컴포넌트를 넣을 때 추천 방식
        (page == 0 && <VideoComponent />) ||
          (page == 1 && <div>다른 컴포넌트</div>)

        //3. if, switch문
      }
</main>
```

```jsx
<main id="container">
      <NavComponent />
      {(menu == "home" && <VideoComponent />) ||
        (menu == "search" && <div>Component1</div>) ||
        (menu == "shorts" && <div>Component2</div>) ||
        (menu == "describe" && <div>Component3</div>) ||
        (menu == "originals" && <div>Component4</div>) ||
        (menu == "music" && <div>Component5</div>) ||
        (menu == "storage" && <div>Component6</div>) ||
        (menu == "offline" && <div>Component7</div>)}
    </main>
```

### 4️. custom hook 다른 폴더로

custom hook은 component에 넣지 않는다. 참고로 custom hook은 state로 관리하지 않는다. 상태 관리는 주로 state의 시작 지점과 도착 지점이 다를 때 사용한다.

### 5️. reducer와 store는 1:1 매칭

reducer 한 개 당 store 한 개, reducer가 너무 많을 때 나누기

### 6️. map 에 null이면 실행되지 않게 하기

```jsx
<div id="videos">
      {data &&
        data.map((video) => {
          return <VideoItemComponent key={video.id} video={video} />;
        })}
    </div>
```

# week6 Recoil

## ✏️ 구현 내용

### Recoil로 state 관리하기

- slide menu button → 버튼 누르면 슬라이드 메뉴 열고 닫기
- set menu → nav에 menu 클릭하면 video main 바꾸기
- get video data → video data 가져오기

### Recoil 사용

- atom, useRecoilState, useRecoilValue

## 👩‍💻 Issue

- 기능 구현 ⭕

## ⛏️ 피드백

### 1️.

```jsx
const [data, setData] = useRecoilState(getVideoData);
useEffect(() => {
    setData(data); //수정
  }, [data]);
```

```jsx
import { videoData } from "../../../data/videoData";

useEffect(() => {
    setData(videoData);
  }, [data]);
```

### 2. video 초기 데이터 null로

```jsx
export const getVideoData = atom({
  key: "video",
  default: null,
});	
```

### 3️. recoil 폴더 만들어서 atom 파일 넣기

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/aa7d5c61-090b-4847-8377-8d0763a1cbb8/Untitled.png)

atom.js → common.js 파일 명 수정, recoil 폴더에 넣기 

recoil 폴더 → frontendState 폴더, backendState 폴더 나누기 (redux는 action, reducer, store로 나누기 때문에 복잡해져 하지 않지만, recoil은 가능)

### 4️. map 에 null이면 실행되지 않게 하기

```jsx
{data &&
  data.map((video) => {
    return <VideoItemComponent key={video.id} video={video} />;
  })}
```

### 5️. value 값이 문자열이면 주석 처리

```jsx
export const navState = atom({
  key: "menu",
  default: "home", // home, search, shorts, describe, originals, music, storage, offline
});
```

문자열 값으로 어떤 값이 들어올 수 있는 지 주석으로 나타내 줌

### 6️. 함수 이름에서 set, get 차이점

```jsx
export const setVideoData = atom({
  key: "videoData",
  default: null,
});
```

set은 설정해준다는 의미, get은 가져온다는 의미로 set이 적절함

# week7 Styled Component

## ✏️ 구현 내용

### Styled component

- css styled components로 변경
- 기본 태그 컴포넌트 만들기
- styled component 상속 찾아보고 적용

## 👩‍💻 Issue

- account image를 recoil atom으로 관리 ⭕
    
    → 백엔드 data 만들 때 객체, 배열 형태 조심
    
- 사용할 필요 없는 div태그 줄이기 ⭕
- flex-wrap, justify-content: center 사용하면 동영상이 한줄에 1개라도 아이템이 가운데 정렬 ❌

## ⛏️ 피드백

### 1️. nav, header tag는 상속으로 하지 않는다

css 재사용성을 고려하여 기본 tag를 미리 만들고 상속을 하는 것이다. nav, header은 재사용 x

### 2️. global style 활용

```jsx
const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <SlideNavPageComponent />
      <HeaderComponent />
      <ContainerComponent />
    </React.Fragment>
  );
};
```

```jsx
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    //color: ${props.color ? "white" : "black"}
    //font-family: ${props};
  }
`;

export default GlobalStyle;
```

body, color, font 속성은  global style로 빼준다. color 같은 속성은 dark mode를 만들 때를 생각해 보면 된다.

### 3️. container에 nav 따로 빼주기

```
const ContainerComponent = () => {
  return (
    <Box>
      <NavComponent />
      <MainComponent />
    </Box>
  );
}
```

```jsx
const MainComponent = () => {
  const menu = useRecoilValue(navState);
  return (
    <React.Fragment>
      {(menu == "home" && <VideoComponent />) ||
        (menu == "search" && <SearchComponent />) ||
        (menu == "shorts" && <ShortsComponent />) ||
        (menu == "describe" && <DescribeComponent />) ||
        (menu == "originals" && <OriginalsComponent />) ||
        (menu == "music" && <MusicComponent />) ||
        (menu == "storage" && <StorageComponent />) ||
        (menu == "offline" && <OfflineComponent />)}
    </React.Fragment>
  );
};
```

main이 리랜더링 되면 nav도 같이 리랜더링 되기 때문에 따로 설정한다.

### 4️. 컴포넌트 잘 나누기

```jsx
// SlideMenuContainerComponent.js

return (
    <SlideMenuBox>
      <HeaderBox>
        <SlideMenuButton
          onClick={() => {
            setButton(!button);
          }}
        >
          <SlideMenuButtonImg src={`./images/menu.jpg`} />
        </SlideMenuButton>
        <SlideMenuLogo>
          <SlideMenuLogoImg src={`./images/logo.jpg`} />
        </SlideMenuLogo>
      </HeaderBox>
      <SlideMenuItemBox>
        {menusData.map((menu) => {
          return <SlideMenuNavItemComponent key={menu.id} menu={menu} />;
        })}
      </SlideMenuItemBox>
    </SlideMenuBox>
  );
```

컴포넌트를 너무 잘게 나누지 않는다. 컴포넌트 재활용, 리랜더링, 데이터베이스 접속을 기준으로 나눈다.

# week8 Bundler

## ✏️ 구현 내용

### Webpack 만들기

- CRA 쓰지 않고 youtube 프로젝트 만들기
- CRA는 Webpack을 통해 프로젝트를 만들어 주는 패키지
- Bundler는 조각난 파일을 하나의 파일로 합쳐주는 기능

## 👩‍💻 Issue

- npm script 사용하기
    
    → react-scripts 설치해 json 파일에 “start”: “react-scripts start”  추가
    
    → npm start로 서버 시작
    

## ⛏️ 피드백

### 1️. webpack.config.js → plugin 찾아보기

### 2️. styled-components 태그 정하기

### 3️. react-query 공부해 보기
