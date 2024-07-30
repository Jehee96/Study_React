import { useState } from "react";

function MyForm() {
    const [formData, setFormData] = useState({
        name:'',
        age:'',
        menu:'마라탕'
    })

    // 이벤트 핸들러
    const dataChange = (e) => {
        const name = e.target.name; // form tag 내의 name
        const value = e.target.value; // form tag 내의 value
        setFormData({
            ...formData,
            [name]:value
        });
    }

    const dataSubmit = (e) => { // 02. dataSubmit 이벤트 핸들러가 실행된다.
        e.preventDefault();
        const {age} = formData; // formData 객체에서 age를 추출해 age 변수에 치환

        if(!Number(age) || isNaN(Number(age))) { // 나이 입력 자료
            alert('나이는 숫자로 입력하세요.')
        }else{
            alert('처리 성공')
        }
    }

    return(
        <>
        <h2>결과 : 난 {formData.name}, 나이는 {formData.age}살, 지금 먹고 싶은음식은 {formData.menu}🍲</h2>
        <form onSubmit={dataSubmit}>
            이름 입력 : <input type="text" name="name" onChange={dataChange}/><br />
            나이 입력 : <input type="text" name="age" onChange={dataChange}/><br />
            야식 메뉴 : &nbsp;
            <select name="menu" value={formData.menu} onChange={dataChange}>
                <option value="치킨">치킨</option>
                <option value="마라탕">마라탕</option>
                <option value="삼겹살">삼겹살</option>
            </select>
            <br /><br />
            <button type="submit">전송</button> {/* 01. submit을 누르면(20줄로 이동)*/}

        </form>
    </>
    )
}

export default MyForm;