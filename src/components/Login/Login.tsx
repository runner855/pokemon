import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import type { FormItemProps } from "antd";
import "../Login/Login.css";
import axios from "axios";
import { UsersDataProps } from "../../Types/appTypes";
import { getUserData } from "../../actions/UserData";
import { useAppDispatch } from "../../hook/Store";
import { useNavigate } from "react-router-dom";

const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}

function toArr(
  str: string | number | (string | number)[]
): (string | number)[] {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );

  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};

const MyFormItem = ({ name, ...props }: FormItemProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

  return <Form.Item name={concatName} {...props} />;
};

export const Login = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = (value: object) => {
    console.log(value);
  };
  const handleLogin = (event: any) => {
    userName &&
      password &&
      axios
        .get(
          ` http://localhost:3004/users?username=${userName}&password=${password}`,
          {}
        )
        .then((res) => dispatch(getUserData(res.data)));
    navigate("/");
  };

  return (
    <div className="form_container">
      <div className="pokemon_logo_login">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2880px-International_Pok%C3%A9mon_logo.svg.png"
          alt="logo"
        />
      </div>
      <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
        <MyFormItemGroup prefix={["user"]}>
          <MyFormItemGroup prefix={["name"]}>
            <MyFormItem
              name="UserName"
              label={<div className="user_name">User Name</div>}
              required
            >
              <Input
                type="text"
                name="User Name"
                placeholder="user name"
                value={userName}
                onChange={(event: any) => setUserName(event.target.value)}
              />
            </MyFormItem>
            <MyFormItem
              name="Password"
              label={<div className="password">Password</div>}
              required
            >
              <Input
                type="text"
                name="password"
                placeholder="password"
                value={password}
                onChange={(event: any) => setPassword(event.target.value)}
              />
            </MyFormItem>
          </MyFormItemGroup>
        </MyFormItemGroup>

        <Button type="primary" htmlType="submit" onClick={handleLogin}>
          Log in
        </Button>
      </Form>
    </div>
  );
};
