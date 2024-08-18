import React, { useState } from "react";
import { Flex, Table } from "antd";
import { products } from "../../data/products";
import { Img } from "../../components/img-card/img";
const columns = [
  {
    title: "Image",
    dataIndex: "img",
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Brand",
    dataIndex: "brand",
  },
];

const dataSource = products.map(({ img, brand, price, title }) => ({
  brand,
  price: <h3>{price} Sum</h3>,
  title: <h4>{title}</h4>,
  img: <Img img={img} />,
}));
export const Products = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <Flex gap="middle" vertical style={{ height: "100%" }}>
      <Flex align="center" gap="middle">
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
      </Flex>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
      />
    </Flex>
  );
};
