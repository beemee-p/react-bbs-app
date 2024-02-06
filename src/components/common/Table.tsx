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
          <th className={column.key}>{column.label}</th>
        ))}
      </thead>

      <tbody>
        {columnData?.map((item) => (
          <tr>
            <td className="id">{item.id}</td>
            <td className="title">{item.title}</td>
            <td className="login">{item.login}</td>
            <td className="created">{item.created_at}</td>
            <td className="updated">{item.updated_at}</td>
            <td className="comments">{item.comments}</td>
          </tr>
        ))}
      </tbody>
    </DivTable>
  );
};

const DivTable = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px auto;

  thead {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgb(233, 235, 237);
    background-color: #f2f2f2;
    font-weight: bold;
  }

  tr {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgb(233, 235, 237);
  }

  th {
    flex-basis: 10rem;
    text-align: left;
    padding: 14px 24.5px;

    &.title {
      flex-basis: 20rem;
    }
  }

  tbody {
  }

  td {
    flex-basis: 10rem;
    padding: 14px 24.5px;

    &.title {
      flex-basis: 20rem;
      max-width: 20rem;
    }
  }
`;
export default Table;
