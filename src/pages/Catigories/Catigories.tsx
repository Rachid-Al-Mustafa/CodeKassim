import React, { useState } from "react";
import {
  Table,
  Popconfirm,
  Space,
  Tag,
  Button,
  Dropdown,
  Menu,
} from "antd";
import { useCategories, Category } from "../../hooks/useCategories";
import CategoryModal from "../../components/CategoryModal";
import { AddButton, DeleteButton, EditButton } from "../../generalComponents";
import ExportExcel from "../../components/exports/components/ExportExcel";
import ExportPDF from "../../components/exports/components/ExportPDF";
import { DownloadOutlined } from "@ant-design/icons";

export default function Categories() {
  const { categories, addCategory, updateCategory, deleteCategory } =
    useCategories();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  // Handle adding a new category
  const handleAdd = () => {
    setSelectedCategory(null);
    setModalVisible(true);
  };

  // Handle editing a category
  const handleEdit = (category: Category) => {
    setSelectedCategory(category);
    setModalVisible(true);
  };

  // Handle deleting a single category
  const handleDelete = (id: number) => {
    deleteCategory(id);
  };

  // Handle submitting form data for adding or updating a category
  const handleSubmit = (data: Omit<Category, "id">) => {
    selectedCategory
      ? updateCategory({ ...selectedCategory, ...data })
      : addCategory(data);
    setModalVisible(false);
  };

  // Handle bulk deletion of selected categories
  const handleBulkDelete = () => {
    selectedRowKeys.forEach((key) => deleteCategory(Number(key)));
    setSelectedRowKeys([]);
  };

  // Define table columns
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <Tag color="blue">{text}</Tag>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_: any, record: Category) => (
        <Space>
          <EditButton onClick={() => handleEdit(record)} />
          <Popconfirm
            title="Delete this category?"
            onConfirm={() => handleDelete(record.id)}
          >
            <DeleteButton />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  // Row selection configuration
  const rowSelection = {
    selectedRowKeys,
    onChange: (
      selectedKeys: React.Key[],
      selectedRows: Category[]
    ) => {
      setSelectedRowKeys(selectedKeys);
    },
    getCheckboxProps: (record: Category) => ({
      disabled: false, // Customize if needed
    }),
  };

  // Export dropdown menu
  const exportMenu = (
    <Menu>
      <Menu.Item key="excel">
        <ExportExcel data={categories} columns={columns} fileName="Categories" />
      </Menu.Item>
      <Menu.Item key="pdf">
        <ExportPDF data={categories} columns={columns} fileName="Categories" />
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600">Categories</h1>
        <div className="flex space-x-3">
          <AddButton onClick={handleAdd} label="Add Category" />
          <Dropdown overlay={exportMenu} trigger={["click"]}>
            <Button icon={<DownloadOutlined />} shape="circle" />
          </Dropdown>
          {selectedRowKeys.length > 0 && (
            <Popconfirm
              title={`Delete ${selectedRowKeys.length} selected categories?`}
              onConfirm={handleBulkDelete}
            >
              <Button danger>Delete Selected</Button>
            </Popconfirm>
          )}
        </div>
      </div>

      {/* Table Section */}
      <Table
        dataSource={categories}
        columns={columns}
        rowKey={(record) => record.id} // Ensure unique key for each row
        pagination={{ pageSize: 5 }}
        rowSelection={rowSelection}
      />

      {/* Modal for Adding/Editing Categories */}
      <CategoryModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleSubmit}
        initialData={selectedCategory}
      />
    </div>
  );
}