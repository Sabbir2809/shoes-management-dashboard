import { z } from "zod";

// create Product Validation Schema
const createProductValidationSchema = z.object({
  body: z.object({
    productID: z
      .string({
        invalid_type_error: "productID must be string",
        required_error: "productID is Required",
      })
      .optional(),
    verified: z
      .boolean({
        invalid_type_error: "shoes verified must be boolean",
      })
      .optional(),
    name: z.string({
      invalid_type_error: "shoes name must be string",
      required_error: "name is Required",
    }),
    price: z
      .number({
        invalid_type_error: "shoes price must be number",
        required_error: "price is Required",
      })
      .positive(),
    quantity: z
      .number({
        invalid_type_error: "shoes quantity must be number",
        required_error: "quantity is Required",
      })
      .int()
      .positive(),
    releaseDate: z.string({
      invalid_type_error: "shoes releaseDate must be string",
      required_error: "releaseDate is Required",
    }),
    brand: z.string({
      invalid_type_error: "shoes brand must be string",
      required_error: "releaseDate is Required",
    }),
    model: z.string({
      invalid_type_error: "shoes model must be string",
      required_error: "model is Required",
    }),
    style: z.string({
      invalid_type_error: "shoes style must be string",
      required_error: "style is Required",
    }),
    size: z.string({
      invalid_type_error: "shoes size must be string",
      required_error: "size is Required",
    }),
    color: z.string({
      invalid_type_error: "shoes size must be string",
      required_error: "size is Required",
    }),
    material: z
      .string({
        invalid_type_error: "shoes material must be string",
      })
      .optional(),
  }),
});

// update Product Validation Schema
const updateProductValidationSchema = z.object({
  body: z.object({
    productID: z
      .string({
        invalid_type_error: "productID must be string",
        required_error: "productID is Required",
      })
      .optional(),
    verified: z
      .boolean({
        invalid_type_error: "shoes verified must be boolean",
      })
      .optional(),
    name: z
      .string({
        invalid_type_error: "shoes name must be string",
        required_error: "name is Required",
      })
      .optional(),
    price: z
      .number({
        invalid_type_error: "shoes price must be number",
        required_error: "price is Required",
      })
      .positive()
      .optional(),
    quantity: z
      .number({
        invalid_type_error: "shoes quantity must be number",
        required_error: "quantity is Required",
      })
      .int()
      .positive()
      .optional(),
    releaseDate: z
      .string({
        invalid_type_error: "shoes releaseDate must be string",
        required_error: "releaseDate is Required",
      })
      .optional(),
    brand: z
      .string({
        invalid_type_error: "shoes brand must be string",
        required_error: "releaseDate is Required",
      })
      .optional(),
    model: z
      .string({
        invalid_type_error: "shoes model must be string",
        required_error: "model is Required",
      })
      .optional(),
    style: z
      .string({
        invalid_type_error: "shoes style must be string",
        required_error: "style is Required",
      })
      .optional(),
    size: z
      .string({
        invalid_type_error: "shoes size must be string",
        required_error: "size is Required",
      })
      .optional(),
    color: z
      .string({
        invalid_type_error: "shoes color must be string",
        required_error: "color is Required",
      })
      .optional(),
    material: z
      .string({
        invalid_type_error: "shoes material must be string",
      })
      .optional(),
  }),
});

// update Product Validation Schema
const updateCartValidationSchema = z.object({
  productColor: z.string({
    invalid_type_error: "productID must be string",
    required_error: "productID is Required",
  }),
  productSize: z.string({
    invalid_type_error: "productSize verified must be boolean",
    required_error: "productSize is Required",
  }),
  productQuantity: z.string({
    invalid_type_error: "productQuantity name must be string",
    required_error: "productQuantity is Required",
  }),
  productId: z.string({
    invalid_type_error: "productId must be number",
    required_error: "productId is Required",
  }),
});

export const ProductValidations = {
  createProductValidationSchema,
  updateProductValidationSchema,
  updateCartValidationSchema,
};
