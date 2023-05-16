import { Input, Select, Space, Table, Tag } from "antd";

export const columns = [
  {
    title: "번호",
    dataIndex: "num",
    key: "num",
    render: (text) => <a>{text}</a>,
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
  },
  {
    title: "만료날짜",
    dataIndex: "endDate",
    key: "endDate",
  },
  {
    title: "상세보기",
    dataIndex: "detail",
    key: "detail",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];
export const data = [
  {
    key: "1",
    num: "1",
    name: "가톨릭대 행정관련 민원",
    notSolve: "5",
    endDate: "2023-08-30",
    tags: ["nice", "developer"],
    detail: "상세보기",
  },
  {
    key: "2",
    num: "2",
    name: "강의실 시설 민원처리",
    notSolve: "1",
    endDate: "2023-07-30",
    tags: ["loser"],
    detail: "상세보기",
  },
  {
    key: "3",
    num: "3",
    name: "<<학식 메뉴 추천받기 민원>>",
    notSolve: "6",
    endDate: "2023-06-30",
    tags: ["cool", "teacher"],
    detail: "상세보기",
  },
];
