import { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  
  const onChange = (event) => {
    const { value } = event.target;
    let willUpdate = true;
  
    // 유효성 검증 '함수'가 넘어온 경우
    if (typeof validator === "function") {
      // willUpdate = maxLen(value);
      // 즉, validator는 maxLen과 같음..
      willUpdate = validator(value); // 검증 결과 return
    }

    if (willUpdate) { // 검증 결과에 따라 setValue
      setValue(value);
    }
  };
  return { value, onChange };
};



function CheckInput() {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Minhoo", maxLen);
  // const name = { value: "...", onChange: func }

  return (
    <>
      <h1>useInput</h1>
      {/* 커스텀 훅을 통해 업데이트 된 value 값 */}
      {/* 커스텀 훅의 onChange 함수 */}
      {/* value={name.value} onChange={name.onChange} */}
      <input placeholder="Name" {...name} />
    </>
  );
}
export default CheckInput;

