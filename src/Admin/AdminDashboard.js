import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import AdminHeader from "./AdminHeader";
import Button from "@mui/material/Button";
import fireDB from "../utils/firebase";
import { async } from "@firebase/util";
// import { useParams } from "react-router-dom";

export default function EmployeeDashboard() {
  const [Data, setData] = useState();
  const [listData, setListData] = useState([]);
  // const {id} =useParams()
  //   useEffect(() => {
  //   fireDB.child(`user/${id}`).get().then((snapshot) => {
  //     if(snapshot.exists())
  //     {
  //         setData({...snapshot.val()});
  //     }
  //     else
  //     {
  //       console.log('abc')
  //     }
  // });
  // },[id]);
  // console.log("employee",data);

  const name = localStorage.getItem("adminName");
  const dataLoaded = [];
  const notAproved = [];
  const FetchData = async () => {
    const data = await fetch(
      "https://leave-app-7ae4f-default-rtdb.firebaseio.com/employee.json"
    );
    const resdata = await data.json();
    for (const key in resdata) {
      dataLoaded.push({
        id: key,
        name: resdata[key].name,
        email: resdata[key].email,
        aproved: resdata[key].aproved,
        department: resdata[key].department,
        organisation: resdata[key].organisation,
        phoneNo: resdata[key].phoneNo,
      });
    }
    console.log(dataLoaded);
    setListData(dataLoaded);
  };
  const displayData = async () => {
    await FetchData();
    dataLoaded.map((data, i) => {
      if (data.aproved === "Not") {
        notAproved.push({
          id: i,
          name: data.name,
          aproval: data.aproved,
        });
      }
    });
    console.log(notAproved);
  };

  displayData();

  //  async function AproveData() {
  //   const response = await fetch(
  //     "https://leave-app-7ae4f-default-rtdb.firebaseio.com/employee/-NEp88CyUtmMyX8TrySV",
  // //       { method: 'UPDATE',

  // // }
  // )
  // console.log(response)
  //   }

  return (
    <div>
      {name != null ? (
        <>
          <AdminHeader />
          <br />
          <div className="Card">
            <h2>Staff Aprovals</h2>
            {listData?.map((data, i) => {
              return <div key={i}>{data.name}</div>;
            })}
          </div>

          <br />
          <br />
          <br />
          <br />
          <Footer />
        </>
      ) : (
        <h1>Sorry You Cannot Access This Page..</h1>
      )}
    </div>
  );
}
