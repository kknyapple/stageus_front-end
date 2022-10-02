const DivComponent = () => {
  //common js로 개발 했을 때
  //   const tmpDiv = document.createElement("div");
  //   tmpDiv.type = "button";
  //   tmpDiv.value = "스테이지어스";
  //   return tmpDiv

  //react를 사용했을 때
  //   const tmpDiv = React.createElement("input", {
  //     type: "button",
  //     value: "스테이지어스",
  //   });
  //   return tmpDiv;

  //react+jsx를 사용했을 때
  return <input type="button" value="스테이지어스" />;
};

const app = () => {
  //   for (let index = 0; index < 4; index++) {
  //     document.getElementById("root").appendChild(divComponent());
  //   }

  //   document.getElementById("root").appendChild(divComponent());

  //react를 사용했을 때
  //ReactDOM.render(divComponent(), document.getElementById("root")); //html에 쓴 코드 출력 x //물리적 dom x, 가상돔으로만

  //react+jsx를 사용했을 때
  ReactDOM.render(<DivComponent />, document.getElementById("root"));
};

window.onload = () => {
  app();
};
