import axios from 'axios';
import React, { useEffect, useState } from 'react'

const GoodsReceipt = ({id,item}) => {

    const [Report, setReport] = useState({})
	const [Loading, setLoading] = useState(false);

    const FetchData = async () => {
			const resReport= await axios.get("/");
			setLoading(resReport.data.materials);

			if(resReport.statusText === "OK" ){
				setLoading(true)
			}

		};

    useEffect(() => {
        FetchData()
        
    }, [])
    return (
        <div style={{ width: "400px", height: "400px" }} >
            <div>
                    <h1 className="S " style={{position:'relative', top:"-80px", fontSize:40, display: "flex",
												justifyContent: "center", alignItems: "center",width: "100%",
												}}>Goods Receipt</h1>

                    <h3>{item}</h3>
            </div>
        </div>
    )
}

export default GoodsReceipt
