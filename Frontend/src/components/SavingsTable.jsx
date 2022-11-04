import React, { useEffect, useState } from "react";
import MaterialTable, { MTableBody } from "material-table";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
import { Alert, AlertTitle } from "@material-ui/lab";
import { forwardRef } from "react";
import { TableCell, TableFooter, TableRow } from "@material-ui/core";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

// regex for email validation
const validateEmail = (email) => {
  const re = /^(0|[1-9][0-9]*)$/;
  return re.test(String(email).toLowerCase());
};

const App = () => {
  const [user, setUser] = useState([]);
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [TotalIncome, setTotalIncome] = useState(0);
  const [addedRow, setIsRowAdded] = useState(false);
  const [updatedRow, setIsRowUpdated] = useState(false);
  const [deleteRow, setIsRowDeleted] = useState(false);

  const calculateTotalIncome = () => {
    let value = 0;
    user.forEach((singleUser) => {
      value = value + parseInt(singleUser.Amount);
    });
    setTotalIncome(value);
  };

  let columns = [
    { title: "Id", field: "index" },
    { title: "Category", field: "TxnType" },
    { title: "Amount Spent", field: "Amount" },
  ];


  const getData = async () => {
    const user_id = sessionStorage.getItem("username")
    await axios.get(`http://localhost:9090/home?user_id=${user_id}`).then((res) => {
      const users = res.data;
      let incomeRecords = users.filter((a) => {
        return a.Category !== "Expense";
      });
      setUser(incomeRecords);
    });
  };
  useEffect(() => {
    // handleRowAdd();
    getData();
  }, []);

  useEffect(() => {
    //console.log("asdff")
    getData();
    calculateTotalIncome();
  }, [addedRow, updatedRow, deleteRow]);

  useEffect(()=>{
    calculateTotalIncome();
  })

  //function for updating the existing row details
  const handleRowUpdate = async (newData, oldData, resolve) => {
    console.log(newData, "kkkk-", oldData);

    let txntype =
      newData.TxnType === "" || newData.TxnType === oldData.TxnType
        ? oldData.TxnType
        : newData.TxnType;
    let amount =
      newData.Amount === "" || newData.Amount === oldData.Amount
        ? oldData.Amount
        : newData.Amount;

    const newRecord = {
      TxnType: txntype,
      Amount: amount,
    };
    let errorList = [];
    if (newData.TxnType === "") {
      errorList.push("Try Again, You didn't enter the name field");
    }
    if (newData.Amount === "") {
      errorList.push("Try Again, You didn't enter the Username field");
    }

    if (errorList.length < 1) {
      console.log("koo");
      const res = await axios.put(
        `http://localhost:9090/updateRecord?id=${oldData.index}`,
        newRecord
      );
      if (res.status === 201 || res.status === 200) {
        console.log("success");
        setIsRowUpdated(true);
        resolve();
        setErrorMessages([]);
        setIserror(false);
      } else {
        console.log("success12");
        setErrorMessages(["Cannot add data. Server error!"]);
        setIserror(true);
        resolve();
      }
    } else {
      setErrorMessages(errorList);
      setIserror(true);
      resolve();
    }
  };

  //function for deleting a row
  const handleRowDelete = (oldData, resolve) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${oldData.id}`)
      .then((response) => {
        const dataDelete = [...user];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setUser([...dataDelete]);
        resolve();
      })
      .catch((error) => {
        setErrorMessages(["Delete failed! Server error"]);
        setIserror(true);
        resolve();
      });
  };

  //function for adding a new row to the table
  const handleRowAdd = async (newData, resolve) => {
    const newRecord = {
      TxnType: newData.TxnType,
      Category: "Income",
      Amount: newData.Amount,
      user_id: sessionStorage.getItem("username"),
    };
    let errorList = [];
    if (newData.TxnType === "") {
      errorList.push("Try Again, You didn't enter the name field");
    }
    if (newData.Amount === "") {
      errorList.push("Try Again, You didn't enter the Username field");
    }

    if (errorList.length < 1) {
      console.log(newRecord);
      const res = await axios.post(
        "http://localhost:9090/addActivity",
        newRecord
      );
      if (res.status == 201 || res.status == 200) {
        setIsRowAdded(true);
        resolve();
        setErrorMessages([]);
        setIserror(false);
      } else {
        setErrorMessages(["Cannot add data. Server error!"]);
        setIserror(true);
        resolve();
      }
    } else {
      setErrorMessages(errorList);
      setIserror(true);
      resolve();
    }
  };

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  return (
    <div className="app">
      <MaterialTable
        icons={tableIcons}
        title="Income"
        columns={columns}
        data={user}
        options={{
          headerStyle: {
            borderBottomColor: "lightGray",
            borderBottomWidth: "3px",
            fontFamily: "verdana",
          },
          actionsColumnIndex: -1,
        }}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              handleRowUpdate(newData, oldData, resolve);
            }),
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              handleRowAdd(newData, resolve);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              handleRowDelete(oldData, resolve);
            }),
        }}
        components={{
          Body: (props) => (
            <>
              <MTableBody {...props} />
              <TableFooter>
                <TableRow>
                  <TableCell />
                  <TableCell
                    colSpan={1}
                    style={{ fontSize: "15px", fontWeight: 700 }}
                  >
                    Total
                  </TableCell>
                  <TableCell
                    colSpan={2}
                    style={{ fontSize: "15px", fontWeight: 700 }}
                  >
                    {TotalIncome}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </>
          ),
        }}
      />

      <div>
        {iserror && (
          <Alert severity="error">
            <AlertTitle>ERROR</AlertTitle>
            {errorMessages.map((msg, i) => {
              return <div key={i}>{msg}</div>;
            })}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default App;
