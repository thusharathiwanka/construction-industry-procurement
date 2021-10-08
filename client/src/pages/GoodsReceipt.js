import axios from 'axios';
import React, { useEffect, useState } from 'react'

const GoodsReceipt = ({id,item}) => {

    const [Report, setReport] = useState({})
	const [Loading, setLoading] = useState(false);
    const [GoodsReport, setGoodsReport] = useState({
            agreed:false,
            // item:
            // supplier:
            // description:
            // date:
            // quantity:
            // review:
    })


    const goodsReportHandler = async(e)=>{
            e.preventDefault();
            try{
			const resReport= await axios.post(`/reports/deliveryreport/${id}`, GoodsReceipt);
			setLoading(resReport.data.reports);
            console.log(resReport.data.reports);
			if(resReport.statusText === "OK" ){
				setLoading(true)
			}
        }catch(Err){
            console.log(Err.response);
        }
    }
    const FetchData = async () => {
        try{
			const resReport= await axios.get(`/reports/deliveryreport/${id}`);
			setReport(resReport.data);
            console.log(resReport.data);
			if(resReport.statusText === "OK" ){
				setLoading(true)
			}
        }catch(Err){
            console.log(Err.response);
        }
		};

    useEffect(() => {
        FetchData()
        
    }, [])
    return Loading ? (
        <div style={{ width: "700px", height: "400px" }} >
            <div>
                    <h1 className="S " style={{position:'relative', top:"-80px", fontSize:40, display: "flex",
												justifyContent: "center", alignItems: "center",width: "100%",
												}}>Goods Receipt</h1>
                    <form onSubmit={goodsReportHandler}>
                    <div className="row " >
                        <div className="col-12">
                            <div className="col-3">
                                <h3>Item Name</h3>
                            </div>
                            <div className="col-3">
                                <h3>{Report.item}</h3>
                            </div>
                            <div className="col-3">
                                <h3>Quantity</h3>
                            </div>
                            <div className="col-3">
                                <h3>{Report.quantity}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row " >
                        <div className="col-12">
                            <div className="col-3">
                                <h3>Supplier</h3>
                            </div>
                            <div className="col-3">
                                <h3>{item}</h3>
                            </div>
                            <div className="col-3">
                                <h3>Delivery Date</h3>
                            </div>
                            <div className="col-3">
                                <h3>{Report.description}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row " >
                        <div className="col-12">
                            <div className="col-3">
                                <h3>Description</h3>
                            </div>
                            <div className="col-9">
                                <h3>{Report.description}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row " >
                    <div className="row-user" style={{display:'inline',paddingTop: "20px", marginLeft:"28px"}} >
										
						<input type="checkbox" onChange={(e)=>{setGoodsReport({ ...GoodsReport, agreed:!GoodsReport.agreed})
						console.log(setGoodsReport.agreed);}} style={{width:17, height:17, display:'inline'}} />
						<h4 style={{ marginLeft:12,display:'inline'}}>You agreed with this delivery</h4>
					</div>
                    </div>
                    <div className="row "  style={{marginTop:"10px"}}>
                        <div className="col-12">
                            <div className="col-2">
                                <h3 style={{marginTop:"25px"}}>Review</h3>
                            </div>
                            <div className="col-10">
                                <div className="row-user">
                                    <input  required onChange={(e)=>{setGoodsReport({...GoodsReport, review: e.target.value})}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ paddingTop: 10 }}>
									<div className="row ">
										<div
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												width: "100%",
											}}
										>
											<div className="row-user">
												<button type="submit " >
													submit
												</button>
											</div>
										</div>
									</div>
								</div>
                                </form>
            </div>
        </div>
    ):""
}

export default GoodsReceipt
