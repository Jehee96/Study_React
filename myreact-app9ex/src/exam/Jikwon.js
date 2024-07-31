import React, {useState, useEffect} from "react";

// useEffect를 통해 AJAX처리
const Jikwon = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/web_react/def.jsp", {method:'GET'})
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result.list);
                console.log(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);

    // error가 나면 에러 메세지를, isLoaded가 false이면 로딩 메세지를, 그 외에는 items를 출력(렌더링)한다.
    if(error) {
        return <div>ERROR : {error.message}</div>
    } else if(!isLoaded) {
        return <div>자료 수신중..</div>
    }else{
        return (
            <>
            <table border={1}>
            <tr>
                <th>사번</th><th>이름</th><th>부서</th><th>직급</th>
            </tr>
                {items.map(item => (
                    <tr>
                        <td>
                            {item.jikwon_no} 
                        </td>

                        <td>
                            {item.jikwon_name} 
                        </td>

                        <td>
                            {item.buser_name} 
                        </td>

                        <td>
                            {item.jikwon_jik} 
                        </td>
                    </tr>
                ))}
            </table>
            인원수 : {items.length} 
            </>
        )
    }
}
    
export default Jikwon;
