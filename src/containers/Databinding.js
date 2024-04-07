import React, {useState} from 'react'
function DataBinding(){
    const [data, setData]= useState({
        name: "Mohan Kumar",
        age: 25
    })
    const handleChange=(event)=>{
        let value = event.traget.value;
        setData({
            ...data,name:value
        });
    }
    return(
        <div>
            <h2>Data Blinding</h2>
            <h4>
                One Way Blinding: {data.name}-{data.age}
            </h4>
            <div>
                <input type='text' value={data.name} onChange={handleChange}/>
            </div>
        </div>
    )
}
export default DataBinding;