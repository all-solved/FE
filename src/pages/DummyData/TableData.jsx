import { Input, Select, Space, Table, Tag } from "antd";

export const columns = [
  {
    title: "번호",
    dataIndex: "counterNum",
    key: "counterNum",
    render: (text) => <a>{text}</a>,
    align: "center",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "미해결 처리 수",
    dataIndex: "notSolve",
    key: "notSolve",
    align: "center",
  },
  {
    title: "만료날짜",
    dataIndex: "endDate",
    key: "endDate",
  },
  // {
  //   title: "상세보기",
  //   dataIndex: "detail",
  //   key: "detail",
  // },
  // {
  //   title: "Tags",
  //   key: "tags",
  //   dataIndex: "tags",
  //   render: (_, { tags }) => (
  //     <>
  //       {tags.map((tag) => {
  //         let color = tag.length > 5 ? "geekblue" : "green";
  //         if (tag === "loser") {
  //           color = "volcano";
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },
];
export const data = [
  {
    key: "1",
    counterNum: "1",
    name: "학식 메뉴 추천받기 어플 민원",
    notSolve: "6",
    endDate: "2023-07-07",
  },
  {
    key: "2",
    counterNum: "2",
    name: "강의실 시설 민원처리",
    notSolve: "1",
    endDate: "2023-07-03",
  },
  {
    key: "3",
    counterNum: "3",
    name: "가톨릭대 시설보수",
    notSolve: "0",
    endDate: "2023-06-14",
  },
];
