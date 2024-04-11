import { Button, Col, Row, Typography } from "antd";
import moment from "moment";
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import ShortUniqueId from "short-unique-id";
import SMForm from "../../../components/form/SMForm";
import SMInput from "../../../components/form/SMInput";
import SMSelect from "../../../components/form/SMSelect";
import {
  shoeColorOptions,
  shoeMaterialOptions,
  shoeSizesOptions,
  shoeStylesOptions,
} from "../../../constants/global";
import { useCreateProductMutation } from "../../../redux/features/product/productApi";
import { TResponse } from "../../../types/global.type";

const CreateVariant = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // RTK Query
  const [addProduct] = useCreateProductMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { randomUUID } = new ShortUniqueId({ length: 6 });

    const productInfo = {
      ...data,
      productID: randomUUID(),
      releaseDate: moment(new Date(data.releaseDate)).format("YYYY-MM-DD"),
      price: Number(data.price),
      quantity: Number(data.quantity),
    };

    try {
      const res = (await addProduct(productInfo)) as TResponse<any>;
      if (res.data.success) {
        toast.success("Created Shoes Successfully");
        navigate("/seller/products");
      }
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };

  return (
    <Row>
      <Col span={24}>
        <Typography.Title level={2}>Create New Variant</Typography.Title>
        <SMForm onSubmit={onSubmit} defaultValues={state.shoesInfo}>
          <Row gutter={8}>
            <Col span={24} md={12} lg={8}>
              <SMInput type="text" name="name" label="Product Name" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <SMInput type="text" name="price" label="Price" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <SMInput type="text" name="quantity" label="Quantity" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <SMSelect name="size" label="Size" options={shoeSizesOptions} />
            </Col>
            <Col span={24} md={12} lg={8}>
              <SMSelect name="color" label="Color" options={shoeColorOptions} />
            </Col>
            <Col span={24} md={12} lg={8}>
              <SMSelect name="style" label="Style" options={shoeStylesOptions} />
            </Col>
            <Col span={24} md={12} lg={8}>
              <SMInput type="text" name="brand" label="Brand" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <SMInput type="text" name="model" label="Model" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <SMSelect name="material" label="Material" options={shoeMaterialOptions} />
            </Col>
            <Col span={24} md={12} lg={8}>
              <SMInput type="text" name="releaseDate" label="Release Date" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <SMInput type="text" name="productID" label="Product ID" />
            </Col>
          </Row>
          <Button htmlType="submit">Create Variant</Button>
        </SMForm>
      </Col>
    </Row>
  );
};
export default CreateVariant;
