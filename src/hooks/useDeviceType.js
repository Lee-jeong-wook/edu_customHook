import { useState, useEffect } from "react";

const useDeviceType = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        // 현재 width 값을 계산 후 state를 업데이트 하는 함수
        const handleResize = () => {
            // 767px 같거나 작은지? 확인
            // 같거나 작은 경우엔 isMobile이 true로 변경되도록
            setIsMobile(window.innerWidth <= 767);

            // 768px과 같거나 큰 경우 and 1023px과 같거나 작은 경우
            // isTablet이 true로 변경되도록
            setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1023);
        };

        // 화면의 크기가 변경될 때, handleResize가 실행되도록. 이벤트를 생성
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            // 커스텀 훅을 호출한 화면이 언마운트 될 때 (DOM에서 사라질 때)
            // 메모리 누수 방지를 위해 이벤트를 제거
            window.removeEventListener("resize", handleResize);
        };
        // 조건이 없으면 딱 한 번만 실행한다.
    }, []);

    return {
        isMobile,
        isTablet
    };
};

export default useDeviceType;
