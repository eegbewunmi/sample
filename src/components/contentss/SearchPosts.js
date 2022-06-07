import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import Axios from "axios";
import { Row, Col, Input } from "antd";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/dist/styles/ag-theme-alpine.css"; // Optional theme CSS
import ownerCellRenderer from "../../cell-renderers/ownerCellRenderer";
import likeCellRenderer from "../../cell-renderers/likeCellRenderer";
import actionCellRenderer from "../../cell-renderers/actionCellRenderer";
import "antd/dist/antd.css";
const { Search } = Input;

const SearchPosts = () => {
  const [rowData, setRowdata] = useState([]);
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const defaultColDef = useMemo(() => {
    return {
      sortable: true,
      resizable: true,
      filter: true,
      flex: 1,
      minWidth: 100,
    };
  }, []);

  const [columnDefs] = useState([
    {
      field: "id",
      headerName: "ID",
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },
    {
      field: "owner",
      headerName: "OWNER",
      cellStyle: {
        textAlign: "left",
      },
      cellRenderer: ownerCellRenderer,
    },
    { field: "text", headerName: "TITLE" },
    { field: "likes", headerName: "LIKES", cellRenderer: likeCellRenderer },
    { field: "publishDate", headerName: "PUBLISHED DATE" },
    {
      field: "ACTION",
      headerName: "XXXX",
      cellRenderer: actionCellRenderer,
      width: 30,
    },
  ]);

  const config = {
    headers: {
      "app-id": "629e74f9007a8808a4995bb2",
    },
  };
  const url = "https://dummyapi.io/data/v1/post";

  const onGridReady = useCallback((params) => {
    params.api.sizeColumnsToFit();
    Axios.get(url, config).then((response) => {
      console.log(response);
      setRowdata(response.data.data);
    });
  }, []);

  return (
    <Row>
      <div
        style={{
          "border-bottom": "1px solid grey",
          height: "50px",
          "margin-bottom": "40px",
          width: "100%",
        }}
      >
        <Input
          style={{
            width: "20vw",
            borderRadius: "20px",
          }}
          placeholder="Search any user"
          prefix={<SearchOutlined />}
        />
      </div>

      <Row className="ag-theme-alpine" type="flex" justify="center">
        <Col offset={4} span={25}>
          <div
            className="ag-theme-alpine"
            style={{ height: "50vh", width: "70vw" }}
          >
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              rowSelection={"multiple"}
              pagination={true}
              paginationPageSize={10}
              onGridReady={onGridReady}
              rowHeight={62}
              domLayout={"autoHeight"}
              rowStyle={{
                // "background-color": "white",
                "border-bottom": "#d3d3d3 6px solid",
              }}
            ></AgGridReact>
          </div>
        </Col>
      </Row>
    </Row>
  );
};

export default SearchPosts;
