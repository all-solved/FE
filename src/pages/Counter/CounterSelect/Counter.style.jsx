import styled from "styled-components";
import { Input, Select, Space, Table, Tag, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Search } = Input;

export const CounterBox = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 83%;
  padding: 5rem 6rem;
  margin: 3.5rem 3rem 0 3rem;

  border-radius: 12px;
  background-color: #eeeff7;
`;

export const CounterDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  width: 110rem;
  height: 57rem;
`;

export const CounterTitle = styled.span`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: ${(props) => props.theme.fontBold.bold};
`;

export const CounterSubtitle = styled.span`
  font-size: ${(props) => props.theme.fontSize.ssm};
  font-weight: ${(props) => props.theme.fontBold.regular};
  color: #7b7b7b;
  margin-top: 3px;
`;

export const SearchBox = styled(Search)`
  width: 400px;

  .ant-btn {
    background-color: #3a3e84;
    height: 40px;
  }
  .ant-input {
    height: 40px;
  }
`;

export const SelectDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  width: auto;
`;

export const SelectText = styled.span`
  font-size: 13px;
  color: #8b8b8b;
  margin-right: 8px;
  margin-left: ${(props) => props.marginLeft};
`;

export const SelectBox = styled(Select)`
  width: 125px;
  span {
    font-size: 12px;
  }
`;

export const SpaceFilter = styled(Space)`
  width: 300px;
  .ant-select-selector {
    height: 40px;
  }
`;

export const SelectFilter = styled(Select)`
  width: 300px;
`;

export const CounterTable = styled(Table)``;

export const CounterBtn = styled(Button)``;
