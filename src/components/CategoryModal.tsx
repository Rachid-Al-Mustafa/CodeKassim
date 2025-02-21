// src/components/CategoryModal.tsx
import React, { useEffect } from "react";
import { Modal, Form, Input } from "antd";
import { Category } from "../hooks/useCategories";
import TextField from "./forms/components/TextField";
import TextAreaField from "./forms/components/TextAreaField";

type Props = {
    visible: boolean;
    onClose: () => void;
    onSubmit: (category: Omit<Category, "id">) => void;
    initialData?: Category | null;
};

const CategoryModal: React.FC<Props> = ({ visible, onClose, onSubmit, initialData }) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (initialData) form.setFieldsValue(initialData);
        else form.resetFields();
    }, [initialData, form]);

    const handleFinish = (values: Omit<Category, "id">) => {
        onSubmit(values);
        onClose();
    };

    return (
        <Modal
            open={visible}
            title={initialData ? "Edit Category" : "Add Category"}
            onCancel={onClose}
            onOk={() => form.submit()}
            okText="Save"
        >
            <Form form={form} layout="vertical" onFinish={handleFinish}>
                <TextField id="name" label="name" />
                <TextAreaField id="description" label="Description" />
            </Form>
        </Modal>
    );
};

export default CategoryModal;
