import axios from "axios";
import { useState } from "react";
export const UserList = () => {
  // var rdata;
  const [value, setvalue] = useState([]);
  axios.get("http://localhost:3001/userList").then((res) => {
    console.log(res.data.user);
    // setvalue()
    //    rdata=res
    setvalue(res.data.user);
  });
  return (
    <table>
      <th>name</th>
      <th>sname</th>

      {value.map((user, index, array) => {
        return (
          <tr>
            <td>{user.name}</td>
            <td>{user.sname}</td>
          </tr>
        );
      })}
    </table>
  );
};
