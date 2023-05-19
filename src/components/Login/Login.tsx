import React from "react";
import { Form, Input, Button } from "antd";
import type { FormItemProps } from "antd";
import "../Login/Login.css";
import axios from "axios";

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
  const onFinish = (value: object) => {
    console.log(value);

    const handleLogin = (event: any) => {
      axios
        .get(
          ` http://localhost:3004/users?username=<username>&password=<password>`,
          {}
        )
        .then((res) => console.log(res));
    };
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
              <Input />
            </MyFormItem>
            <MyFormItem
              name="Password"
              label={<div className="password">Password</div>}
              required
            >
              <Input />
            </MyFormItem>
          </MyFormItemGroup>
        </MyFormItemGroup>

        <Button
          type="primary"
          htmlType="submit"
          onClick={() =>
            axios
              .get(
                ` http://localhost:3004/users?username=pippo&password=ciao1.`,
                {}
              )
              .then((res) => console.log(res))
          }
        >
          Login
        </Button>
      </Form>
    </div>
  );
};
