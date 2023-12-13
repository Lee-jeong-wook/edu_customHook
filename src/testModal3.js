import { useState } from "react"

function CheckModal() {
    const [modal, setModal] = useState(false)

    // 이 로직을 계속 생성해야함..
    const handleOpenModal = () => {
        // 핵심은 true로 바꾼다

        // 핵심은 false로 바꾼다
        setModal(true)
    }

    // handleOpenModal
    // handleOpenPopup
    // onPopup........

    return (
        <>
        <h1>testModal</h1>
        
        {
            modal ?
                <div style={{
                    width: 200,
                    height: 300,
                    border: '1px solid #000'
                }}>
                    <p>모달입니다</p>
                    <button onClick={setModal(false)}>닫기</button>
                </div>
            :
                <>
                    <button onClick={handleOpenModal}>열기1</button>
                    <button onClick={handleOpenModal}>열기2</button>
                    <button onClick={handleOpenModal}>열기3</button>
                </>
        }
        </>
    );
    }

export default CheckModal;
