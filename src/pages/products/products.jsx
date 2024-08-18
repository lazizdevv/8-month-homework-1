import React, { useState } from "react";
import { Button, Flex, Table } from "antd";
import { products } from "../../data/products";
import { Img } from "../../components/img-card/img";
const columns = [
  {
    title: "Image",
    dataIndex: "img",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Title",
    dataIndex: "title",
  },
];
// const dataSource = Array.from({
//   length: 46,
// }).map((_, i) => ({
//   key: i,
//   name: `Edward King ${i}`,
//   age: 32,
//   address: `London, Park Lane no. ${i}`,
// }));

const dataSource = products.map(({ img, name, price, title }) => ({
  name,
  price: <h3>${price}</h3>,
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
    <Flex
      gap="middle"
      vertical
      style={{ height: "100%",}}
    >
      <Flex align="center" gap="middle" >
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
