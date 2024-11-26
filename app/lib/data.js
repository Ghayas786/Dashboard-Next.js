import { Product, User } from "./model";
import { connectToDB } from "./utils";

export const fetchUsers = async ({ q, page }) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;
  try {
    await connectToDB();
    const count = await User.countDocuments({ username: { $regex: regex } });
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))
      .exec();
    return { count, users };
  } catch (err) {
    console.error("Error fetching users:", err);
    throw new Error("Failed to fetch users.");
  }
};

export const fetchProducts = async ({ q, page }) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;
  try {
    await connectToDB();
    const count = await Product.countDocuments({
      title: { $regex: regex },
    });
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))
      .exec();
    return { count, products };
  } catch (err) {
    console.error("Error fetching products:", err);
    throw new Error("Failed to fetch products.");
  }
};
export const fetchUser = async (id) => {

  try {
    await connectToDB();
    const user = User.findById(id);
    return user;
  } catch (err) {
    console.error("Error fetching user:", err);
    throw new Error("Failed to fetch user.");
  }
};
export const fetchProduct = async (id) => {

  try {
    await connectToDB();
    const product = Product.findById(id);
    return product;
  } catch (err) {
    console.error("Error fetching product:", err);
    throw new Error("Failed to fetch product.");
  }
};

