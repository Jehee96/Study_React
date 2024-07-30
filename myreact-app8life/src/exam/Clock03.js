import {useState, useEffect} from "react";

const Clock03 = () => {
    // useState로 state 초기화
    const [date, setDate] = useState(new Date()); // 초기치로 new Date

    // useEffect를 사용하면 내부적으로 생명주기 메소드가 처리된다.
    useEffect(() => {
        // 클래스의 componentDidMount()를 아래처럼 기술
        const timerID = setInterval(() => showHour(), 1000);

        // 클래스의 componentWillUnmount()를 아래처럼 기술
        return () => {
            clearInterval(timerID); // 사용 메모리를 깨끗이 clear할 수 있다.
        }

    }, []) // useEffect는 코드 끝에 배열이 있어야 함...!

    const showHour = () => {
        setDate(new Date());
    }

    return (
        <div>
            <h1>🖐🏻🖐🏻🖐🏻</h1>
            <h2>지금은 {new Date().toLocaleTimeString()}</h2>
            <h2>현재 시간은 {date.toLocaleTimeString()}</h2> {/* state가 관리하는 date */}
        </div>
    )
}

export default Clock03;