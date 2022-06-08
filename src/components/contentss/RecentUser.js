import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { useFormik } from "formik";
import Axios from "axios";
import { Row, Col, Input } from "antd";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import nameCellRenderer from "../../cell-renderers/nameCellRenderer";
import actionCellRenderer from "../../cell-renderers/actionCellRenderer";
import "antd/dist/antd.css";

//Table for users
const UserTable = () => {
  const gridRef = useRef();
  const [rowData, setRowdata] = useState([]);
  const [userFullData, setUserFullData] = useState([]);
  const userID = useRef("");
  // const userFullData = useRef([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const gridStyle = useMemo(() => ({ height: "50vh", width: "50vw" }), []);
  const defaultColDef = useMemo(() => {
    return {
      sortable: true,
      resizable: true,
      flex: 1,
      minWidth: 80,
    };
  }, []);

  const [columnDefs] = useState([
    {
      field: "id",
      headerName: "ID",
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },
    { field: "title", headerName: "TITLE", width: 40 },
    {
      field: "data",
      headerName: "NAME",
      cellStyle: {
        textAlign: "left",
      },
      cellRenderer: nameCellRenderer,
    },
    {
      field: "ACTION",
      headerName: "",
      cellRenderer: actionCellRenderer,
      width: 30,
    },
  ]);

  const config = {
    headers: {
      "app-id": "629e74f9007a8808a4995bb2",
    },
  };
  const url = "https://dummyapi.io/data/v1/user?limit=40";

  const onGridReady = useCallback((params) => {
    // params.api.sizeColumnsToFit();
    Axios.get(url, config).then((response) => {
      // console.log(response);
      setRowdata(response.data.data);
    });
  }, []);

  const onSelectionChanged = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows();

    if (selectedRows.length > 0) {
      userID.current = selectedRows[0].id;
      setIsModalVisible(true);
      console.log(selectedRows[0].id);
    } else {
      setIsModalVisible(false);
    }

    // setUserId(selectedRows[0].id);
    // document.querySelector('#selectedRows').innerHTML =
    //   selectedRows.length === 1 ? selectedRows[0].athlete : '';
    // console.log(userID);
    if (userID.current) {
      const userFullUrl = `https://dummyapi.io/data/v1/user/${userID.current}`;
      Axios.get(userFullUrl, config).then((response) => {
        // userFullData.current = response.data;
        setUserFullData(response.data);
      });
    }
  }, []);

  return (
    <Row>
      <Row>
        <Col>
          <div className="ag-theme-alpine" style={gridStyle}>
            <AgGridReact
              ref={gridRef}
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              rowSelection={"single"}
              pagination={true}
              paginationPageSize={10}
              onGridReady={onGridReady}
              rowHeight={58}
              onSelectionChanged={onSelectionChanged}
              // domLayout={"autoHeight"}
              rowStyle={{
                "border-bottom": "#d3d3d3 6px solid",
              }}
            ></AgGridReact>
          </div>
        </Col>
      </Row>
      {isModalVisible ? <UserData values={userFullData} /> : null}
    </Row>
  );
};

export { UserTable };

const UserData = (props) => {
  useEffect(() => {}, []);
  return (
    <div style={{ border: "1px solid red", height: "50vh", width: "20vw" }}>
      <div>
        <img />
        <label> FULL NAME </label>
        <div>
          {" "}
          {props.values.firstName} {props.values.lastName}{" "}
        </div>
        <label> EMAIL ADDRESS </label>
        <div> {props.values.email} </div>
        <label> PHONE NUMBER </label>
        <div> {props.values.phone} </div>
      </div>
    </div>
  );
};

export { UserData };

const RecentUser = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "10%" }}>
      <UserTable />
      {/* <div
          style={{
            background: "#FFFFFF",
            boxShadow: "0px 0px 7px 3px rgba(40, 40, 40, 0.03)",
            borderRadius: "4px",
          }}
        ></div> */}

      {/* <UserData values={userFullData.current} /> */}
    </div>
  );
};

export default RecentUser;
