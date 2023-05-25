import axios from "axios";
import { useEffect, useState } from "react";

const GuestList = () => {
  const [dddd, setdddd] = useState([]);
  // const handleSend = async () => {
  //   try {
  //     const data = await axios.get(
  //       `https://wedding-4b188-default-rtdb.asia-southeast1.firebasedatabase.app/guests.json?api_key=AIzaSyB7e-LYqyYjH9j8Hynpg-RJFwUeL6Bi8cI`,
  //     );
  //   } catch (error) {}

  //   // console.log(data);
  // };

  const getResponse = async () => {
    try {
      const response = await axios.get(
        `https://wedding-4b188-default-rtdb.asia-southeast1.firebasedatabase.app/guests.json?api_key=AIzaSyB7e-LYqyYjH9j8Hynpg-RJFwUeL6Bi8cI`,
      );
      console.log(response);
      setdddd(response.data);
    } catch (err) {
      console.log("err");
    }
  };
  useEffect(() => getResponse, []);
  console.log(dddd);
  return (
    <div>
      согласны:
      <table>
        <tr>
          <th>Name</th> <th>children</th> <th>people</th>{" "}
        </tr>
      </table>
    </div>
  );
};
export default GuestList;
