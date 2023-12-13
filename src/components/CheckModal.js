import useModal from "../hooks/useModal";

function CheckModal() {
    const [modal, toggle] = useModal(false)

    return (
        <>
        <h1>useModal</h1>
        
        {
            modal ?
                <div style={{
                    width: 200,
                    height: 300,
                    border: '1px solid #000'
                }}>
                    <p>모달입니다</p>
                    <button onClick={toggle}>닫기</button>
                </div>
            :
            <>
                <button onClick={toggle}>열기1</button>
                <button onClick={toggle}>열기2</button>
            </>
        }
        </>
    );
    }

export default CheckModal;
