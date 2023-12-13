import defaultAxios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = useState(0);

  if (!opts.url) {
    // fetch 하려는 url이 없는 경우, 종료
    return;
  }
  
  const refetch = () => {
    // 다른 상태 값은 현재를 유지하지만, lodaing 만 true로 변경
    setState({ ...state, loading: true });
    setTrigger(Date.now());
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // 트리거 발동 (fetch 하는 시간이 현재 시각으로 변경된 경우)
    axiosInstance(opts)
    // url fetch
      .then((data) => {
        // 성공
        setState({ ...state, loading: false, data });
      })
      // 실패
      .catch((error) => setState({ ...state, loading: false, error }));
  }, [trigger]);

  return { ...state, refetch };
};

function CheckAxios() {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });

  return (
    <>
      <h1>useAxios</h1>
      <p>{loading && "Loading"}</p>
      <p>{data && data.status}</p>
      <button onClick={refetch}>refetch</button>
    </>
  );
}

export default CheckAxios;
