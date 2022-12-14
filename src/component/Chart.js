import React, { PureComponent } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
// import { useMemo } from "react";
// import { useCallback } from "react";

// const data = [
//   {
//     name: "1월",
//     2021: 4000,
//     2022: 2400,
//     amt: 2400,
//   },
//   {
//     name: "2월",
//     2021: 3000,
//     2022: 1398,
//     amt: 2210,
//   },
//   {
//     name: "3월",
//     2021: 2000,
//     2022: 9800,
//     amt: 2290,
//   },
//   {
//     name: "4월",
//     2021: 2780,
//     2022: 3908,
//     amt: 2000,
//   },
//   {
//     name: "5월",
//     2021: 1890,
//     2022: 4800,
//     amt: 2181,
//   },
//   {
//     name: "6월",
//     2021: 2390,
//     2022: 3800,
//     amt: 2500,
//   },
//   {
//     name: "7월",
//     2021: 3490,
//     2022: 4300,
//     amt: 2100,
//   },
//   {
//     name: "8월",
//     2021: 4000,
//     2022: 2400,
//     amt: 2400,
//   },
//   {
//     name: "9월",
//     2021: 3000,
//     2022: 1398,
//     amt: 2210,
//   },
//   {
//     name: "10월",
//     2021: 2000,
//     2022: 9800,
//     amt: 2290,
//   },
//   {
//     name: "11월",
//     2021: 2780,
//     2022: 3908,
//     amt: 2000,
//   },
//   {
//     name: "12월",
//     2021: 1890,
//     2022: 4800,
//     amt: 2181,
//   },
// ];

export default function Chart(props) {
  const [users, setUsers] = useState([]);
  const [date, setDate] = useState({});

  const [yearMonth, setYearMonth] = useState([]);

  //   const dateList = useMemo(() => countUser(users), [date]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(
          "https://adonde-kr.herokuapp.com/user/findAll"
        );
        setUsers(users.concat(res.data));
        setYearMonth([]);
        res.data.map((user) =>
          //   console.log(user.createdAt.split("T")[0].split("-")[0]);
          //   console.log(user.createdAt.split("T")[0].split("-")[1]);
          //2022-11 이런식으로 yearMonth에 저장
          yearMonth.push(
            `${user.createdAt.split("T")[0].split("-")[0]}-${
              user.createdAt.split("T")[0].split("-")[1]
            }`
          )
        );
        // console.log("yearMonth", yearMonth);
        // 클릭한 년도 값을 가지고 있는 값만 필터링..
        var searchtext = yearMonth.filter(function (str) {
          return !str.indexOf(props.value);
        });
        // 오름차순 sort
        searchtext.sort();
        // console.log("searchtext", searchtext);
        const result = {};
        searchtext.forEach((x) => {
          result[x] = (result[x] || 0) + 1;
        });

        setDate(
          Object.entries(result).map(([key, value]) => {
            const re = {};
            re["name"] = key;
            re[key.substring(0, 4)] = value;
            return re;
          })
        );
        // console.log(reobj);
      } catch (e) {
        // 실패 시 처리
        console.error(e);
      }
    };
    getUsers();
    // countUser(users);
    //props값이 바뀔 때 마다... 실행해줌
  }, [props, users, yearMonth]);
  //   const countDate = useCallback(() => {
  //     res.data.map((user) => {
  //       //   console.log(user.createdAt.split("T")[0].split("-")[0]);
  //       setDate([
  //         ...date,
  //         {
  //           ym: `${user.createdAt.split("T")[0].split("-")[0]}${
  //             user.createdAt.split("T")[0].split("-")[1]
  //           }`,
  //           count: 0,
  //         },
  //       ]);

  //       //   console.log(user.createdAt.split("T")[0].split("-")[1]);
  //       //   year.push(user.createdAt.split("T")[0].split("-")[0]);
  //     });
  //   });
  class CustomizedLabel extends PureComponent {
    render() {
      const { x, y, stroke, value } = this.props;

      return (
        <text
          x={x}
          y={y}
          dy={-8}
          dx={5}
          fill={stroke}
          fontSize={15}
          textAnchor="middle"
        >
          {value}
        </text>
      );
    }
  }

  class CustomizedAxisTick extends PureComponent {
    render() {
      const { x, y, payload } = this.props;

      return (
        <g transform={`translate(${x},${y})`}>
          <text
            x={0}
            y={0}
            dy={16}
            textAnchor="end"
            fill="#666"
            // transform="rotate(-10)"
          >
            {payload.value}
          </text>
        </g>
      );
    }
  }
  return (
    <React.Fragment>
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={date}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={props.value}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            label={<CustomizedLabel />}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
