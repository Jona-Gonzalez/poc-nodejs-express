import { Request, Response } from 'express';
import { Product } from '../model/Product.model';
import { IRequestById } from '../types/request.interface';

const getAllProducts = async (req: Request, res: Response) => {
  const products = await Product.find();

  res.status(200).json({
    message: 'All products',
    products,
  });
};

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = new Product(req.body);
    await product.save();

    res.json({
      message: 'Product saved successfully',
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).send({ message: 'Internal server error', error: error });
  }
};

const deleteProduct = async (req: IRequestById, res: Response) => {
  const { ID } = req.params;
  try {
    const product = await Product.findByIdAndDelete(ID);

    if (product === null) {
      return res.json({
        message: 'Product not found',
      });
    }

    res.status(200).json({
      message: 'Product Deleted',
      success: true,
      product,
    });
  } catch (error: any) {
    res
      .status(500)
      .send({ message: 'Internal server error', error: error?.message });
  }
};

const getProductAndEdit = async (req: IRequestById, res: Response) => {
  const { ID } = req.params;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(ID, req.body, {
      returnOriginal: false,
    });

    if (updatedProduct === null) {
      return res.json({
        message: 'Product not found',
      });
    }

    res.json({
      message: 'Product edited',
      success: true,
      updatedProduct: updatedProduct,
    });
  } catch (error: any) {
    res
      .status(500)
      .send({ message: 'Internal server error', error: error?.message });
  }
};

export { getAllProducts, createProduct, getProductAndEdit, deleteProduct };
