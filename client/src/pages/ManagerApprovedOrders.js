import React, { useState, useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";
import Table from "../components/table/Table";
import Badge from "../components/badge/Badge";
import axios from "axios";
import Popup from "./Popup";

const ManagerApprovedOrders = () => {
  const fields = [
    "Order ID",
    "Item Name",
    "Quantity",
    "Total",
    "Created Date",
    "Status",
    "Actions",
  ];

  const [orders, setOrders] = useState(null);
  const [allorders, setAllOrders] = useState(null);

  const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

  const renderOrderBody = (item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item.itemName}</td>
      <td>{item.quantity}</td>
      <td>{item.total}</td>
      <td>{new Date(item.createdAt).toLocaleDateString()}</td>
      <td>
        <Badge
          type={permissionStatus[item.isApprovedByOfficer]}
          content={item.isApprovedByOfficer}
        />
      </td>
      <td>
        <button
          className="action-btn check"
          onClick={() => {
            changeStatusToApproved(item._id);
          }}
        >
          <i className="bx bx-check"></i>
        </button>
        <button
          className="action-btn x"
          onClick={() => {
            if (window.confirm("Are you sure to delete this request?")) {
              changeStatusToRejected(item._id);
            }
          }}
        >
          <i className="bx bx-x"></i>
        </button>
        {/* <button
          className="action-btn item-assign "
          onClick={() => {
            setTrigger(true);
          }}
        >
          <i className="bx bxs-user-plus"></i>
          <Popup
            trigger={trigger}
            setTrigger={setTrigger}
            order={item.itemName}
            sitemng={item.siteManagerId}
          />
        </button> */}
      </td>
    </tr>
  );

  const getApproveOrders = async () => {
    const res = await axios.get("orders/getApproveOrders");
    setAllOrders(res.data.orders);
    console.log(res);
  };
  const changeStatusToRejected = async (id) => {
    try {
      const res = await axios.put(`orders/changeStatusToRejected/${id}`);
      console.log(res);
    } catch (err) {
      console.log(err.response);
    }
  };
  const changeStatusToApproved = async (id) => {
    try {
      const res = await axios.put(`orders/changeStatusToApproved/${id}`);
      console.log(res);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getApproveOrders();
  }, []);
  const permissionStatus = {
    pending: "warning",
    approved: "success",
    rejected: "danger",
  };
  return (
    <div>
      <Sidebar />

      <div id="main" className="layout__content">
        <TopNav />
        <div className="layout__content-main">
          <div className="card">
            <h2>All Order Details</h2>
            {allorders && (
              <Table
                limit="5"
                headData={fields}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={allorders}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerApprovedOrders;
