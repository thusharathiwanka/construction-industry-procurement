import React from 'react'
import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";

const inventory = () => {
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
                                    
                                </div>
                                <div className="row ">
                                    
                                </div>
                                <div className="row ">
                                    
                                </div>
                                <div className="row ">
                                    
                                </div>
                                <div style={{paddingTop:50}}>
                                    <div className="row ">
                                        <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%'}}>
                                            <div className="rowuser">
                                        <button type="submit " >
                                            Add
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

export default inventory
