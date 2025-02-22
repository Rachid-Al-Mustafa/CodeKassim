// src/components/LoginForm.tsx
import React, { useState } from "react";
import { Button, Form } from "antd";
import EmailField from "../forms/components/EmailField";
import TextField from "../forms/components/TextField";
import PasswordField from "../forms/components/PasswordField";

type LoginFormProps = {
    onSubmit: (values: { email: string; password: string }) => void;
    initialEmail?: string;
    initialPassword?: string;
};

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, initialEmail = "", initialPassword = "" }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const handleFinish = async (values: { email: string; password: string }) => {
        setLoading(true);
        await onSubmit(values);
        setLoading(false);
    };

    return (
        <Form
            form={form}
            layout="vertical"
            initialValues={{ email: initialEmail, password: initialPassword }}
            onFinish={handleFinish}
            className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg"
        >
            <h2 className="text-2xl font-semibold text-center mb-6 text-red-600">Login</h2>

            <EmailField id="email" label="Email" />
            <PasswordField id="password" label="Password"  />
            <Form.Item>
                <Button type="primary" className="bg-red-500" htmlType="submit" loading={loading} block>
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
