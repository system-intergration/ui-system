import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
} from "antd";
import axiosClient from "api/config";
import React from "react";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { InfoEmployeeAdd, Pay_Rate } from "types";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const { Option } = Select;

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
export const AddEmployeePAge = () => {
  const [Gender, setGender] = React.useState(false);
  const [Shareholder_Status, setShareholderStatus] = React.useState(false);

  const mutation = useMutation((body: InfoEmployeeAdd) => {
    return axiosClient.post("/add-employee", {
      ...body,
    });
  });

  const { data } = useQuery("query-pay_rates", () => {
    return axiosClient.get("/pay-rate") as unknown as Pay_Rate[];
  });

  React.useEffect(() => {
    toast.dismiss();
    if (mutation.isLoading) {
      toast.loading("Loading...");
      return;
    }
    if (mutation.isSuccess) {
      toast.success("Add Employee Successfully");
      return;
    }
  }, [mutation.isSuccess, mutation.isLoading]);
  const onFinish = (values: { user: InfoEmployeeAdd }) => {
    mutation.mutate({
      ...values.user,
      Shareholder_Status,
      Gender,
    });
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "First_Name"]}
        label="First Name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "Last_Name"]}
        label="Last Name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "SSN"]}
        label="SSN"
        rules={[{ type: "number" }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        name={["user", "vacation"]}
        label="Vacation Days"
        rules={[{ type: "number" }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={["user", "City"]}
        rules={[{ type: "string" }]}
        label="City"
      >
        <Input />
      </Form.Item>
      <Form.Item name={["user", "Department"]} label="Department" required>
        <Input />
      </Form.Item>
      <Form.Item name={["user", "Gender"]} label="Gender" required>
        <Radio.Group
          defaultValue={Gender}
          value={Gender}
          onChange={(event) => {
            setGender(Boolean(event.target.value));
          }}
        >
          <Radio.Button value={true}>Male</Radio.Button>
          <Radio.Button value={false}>Female</Radio.Button>
        </Radio.Group>{" "}
      </Form.Item>

      <Form.Item
        name={["user", "Shareholder_Status"]}
        label="ShareHolder Status"
        required
      >
        <Checkbox
          defaultChecked={Shareholder_Status}
          value={Shareholder_Status}
          onChange={() => {
            setShareholderStatus(!Shareholder_Status);
          }}
        />
      </Form.Item>

      <Form.Item name={["user", "pay_rate"]} label="Pay Rate">
        <Select defaultValue={""}>
          <Option value={""}>Select Pay Rate</Option>
          {data?.map((item, index) => (
            <Option key={index} value={item.idPay_Rates}>
              {item.Pay_Rate_Name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
