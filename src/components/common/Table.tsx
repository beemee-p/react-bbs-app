import { ReactElement, useMemo } from "react";
import styled from "styled-components";
import { keyLabelMapType } from "type";

interface TableProps {
  list: any[];
  columns: keyLabelMapType[];
}

const Table = (props: TableProps): ReactElement => {
  const columnData = useMemo(() => {
    return props.list?.map((issue) => {
      return {
        id: issue.id,
        title: issue.title,
        login: issue.user.login,
        created_at: issue.created_at,
        updated_at: issue.updated_at,
        comments: issue.comments,
      };
    });
  }, [props.list]);

  return (
    <DivTable>
      <thead className="table-column-wrap">
        {props.columns.map((column) => (
          <th>{column.label}</th>
        ))}
      </thead>

      <tbody>
        {columnData?.map((item) => (
          <div>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.login}</td>
            <td>{item.created_at}</td>
            <td>{item.updated_at}</td>
            <td>{item.comments}</td>
          </div>
        ))}
      </tbody>
    </DivTable>
  );
};

const DivTable = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;

  .table-column-wrap {
    display: flex;
    justify-content: space-between;
    background-color: #f2f2f2;
    font-weight: bold;
  }

  th {
    padding: 10px;
  }

  tbody {
    display: flex;
    flex-direction: column;
  }

  td {
    padding: 10px;
    border: 1px solid #ddd;
  }
`;
export default Table;
