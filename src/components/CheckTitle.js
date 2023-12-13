import { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title"); // 현재 title을 쥐고
    htmlTitle.innerText = title; // title 변경
  };

  

  // state 를 감시하고 있고, 값이 변경되면 document.title 변경
  useEffect(updateTitle, [title]);

  return setTitle;
};



function CheckTitle() {
  const titleUpdater = useTitle("Loading...");

  return (
    <>
      <h1>useTitle</h1>
      {/* submit 할 경우 titleUpdater 실행 -> title state 업데이트 */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // 입력된 값이 form 을 통해서 서브밋 되었을 때
          // 커스텀 훅으로 반환된 setTitle을 실행한다
          //
          // 커스텀 훅 내부 로직은 title 값이 변경되면
          // 현재 페이지의 title 값을 변경하는 함수를 실행한다.
          titleUpdater(event.target.title.value);
        }}>
        <input name="title" placeholder="새로운 Title" />
        <button>수정하기</button>
      </form>
    </>
  );
}

export default CheckTitle;

