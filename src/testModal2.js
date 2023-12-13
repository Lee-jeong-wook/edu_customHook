import { useState } from "react"

function CheckModal() {
    const [modal, setModal] = useState(false)

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
                    {/* setModal(true)가 여러 개인 경우? */}
                    <button onClick={setModal(true)}>열기1</button>
                    <button onClick={setModal(true)}>열기2</button>
                    <button onClick={setModal(true)}>열기3</button>
                </>
        }
        </>
    );
    }

export default CheckModal;
