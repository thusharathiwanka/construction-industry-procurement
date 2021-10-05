import axios from 'axios';
import React, { useState } from 'react'
import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";

const Inventory = () => {
    
    const [Inventory, setInventory] = useState({
        item:"Sand",
        maxCapacity:""

    })

    const inventoryHandler = async()=>{
        try{ 
            console.log(Inventory); 
            const res = await axios.patch("/orders",Inventory)
        }catch(Err){
            console.log(Err.response);
        }
    }
    return (
        <div>
            <Sidebar/>
            <div id="main" className="layout__content">
				<TopNav />
				<div className="layout__content-main">
                    <h1 className="page-header">Manage Inventory</h1>
                    <div className="row ">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="card">
                                <div className="row ">
                                    {/* <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%'}}> */}
                                    <div className="col-3"></div>
                                    <div className="col-3">
                                        <h3 style={{paddingTop:25}} >Select Item</h3>
                                    </div>
                                    <div className="col-3">
                                        <div className="rowuser">
											<select
                                                    name="position"
                                                    id="position"
                                                    value={Inventory.item}
                                                    onChange={(e)=>setInventory({...Inventory,item:e.target.value})}
                                                    required
                                                >
                                                    <option value="sand">Sand</option>
                                                    <option value="cement">Cement</option>
                                                    <option value="stone">Stone</option>
                                                    <option value="iron">Iron</option>
                                                </select>
										</div>
                                    </div>
                                    <div className="col-3"></div>
                                    {/* </div> */}
                                </div>
                                <div className="row ">
                                     {/* <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%'}}> */}
                                    <div className="col-3"></div>
                                    <div className="col-3">
                                        <h3 style={{paddingTop:25}}>Maximum Capacity</h3>
                                    </div>
                                    <div className="rowuser">
                                        <div className="col-10">
                                            <input
												type="number"
                                                min="1"
												placeholder="Capacity"
												value={Inventory.quantity}
                                                onChange={(e)=>setInventory({...Inventory,quantity:e.target.value})}
												required
											/>
                                        </div>
                                    </div>
                                    <div className="col-3"></div>
                                    {/* </div> */}
                                </div>
                                <div style={{paddingTop:50}}>
                                    <div className="row ">
                                        <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%'}}>
                                            <div className="rowuser">
                                        <button type="submit " >
                                            Update
                                        </button>
                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inventory
