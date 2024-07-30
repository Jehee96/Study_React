// import React, {useState, memo} from "react";

// const boxstyle = {border:'2px solid', padding:'10px'};

// const UnitConv = memo(() => {
//     const [mt, setMt] = useState(0);
//     const [cm, setCm] = useState(0);
    

// const handleMtChange = (e) => {
//     const value = parseFloat(e.target.value);
//     setMt(value);
//     setCm(value * 100);
// };

// const handleCmChange = (e) => {
//     const value = parseFloat(e.target.value);
//     setCm(value);
//     setMt(value/100);
// };
//     return (
//         <div style={boxstyle}>
//             <p>🐎 미터 : <input type="number" value={mt} onChange={handleMtChange} /></p>
//             <p>🐌 센치미터 : <input type="number" value={cm} onChange={handleCmChange} /></p>
//         </div>
// );

// });

// export default UnitConv;



import React, {memo} from "react";

const UnitConv = ({unit, unitConv}) => {

    return(
        <div>
            미터 : {unit} / 센티미터 : {unitConv}
        </div>
    );
}

export default memo(UnitConv);