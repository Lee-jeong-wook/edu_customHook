import useDeviceType from "../hooks/useDeviceType";

function CheckDeviceType() {
    const { isMobile, isTablet } = useDeviceType();

    console.log('isMobile :: ', isMobile)
    // console.log('isTablet :: ', isTablet)

    return (
        <>
            <h1>useDeviceType</h1>
        </>
    );
    }

export default CheckDeviceType;
