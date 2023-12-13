const useNotification = (title, options) => {
  // 현재 브라우저가 Notification API를 지원하는지 확인
  if (!("Notification" in window)) {
    // 지원하지 않는 브라우저인 경우 종료함
    return;
  }

  const fireNotif = () => {
    // 사용자가 알림 권한을 부여하지 않은 경우
    if (Notification.permission !== "granted") {
      // 알림 권한을 요청
      //                              허용 했거나, 거절한 경우의 값이
      //                              then 내부의 permission 변수에 들어간다
      Notification.requestPermission().then((permission) => { 
        if (permission === "granted") {
          // 허용된 경우 즉시 푸시 알림 생성
          new Notification(title, options);
        } else {
          // 허용하지 않은 경우 종료
          return;
        }
      });
    } else {
      // 이미 허용되어 있던 경우
      new Notification(title, options);
    }
  };
  return fireNotif;
};








function CheckNotification() {
  const triggerNotif = useNotification("Notification!!!!", { body: "hello" });
  return (
    <>
      <h1>useNotification</h1>
      <button onClick={triggerNotif}>Trigger Notificatiton</button>
    </>
  );
}

export default CheckNotification;
