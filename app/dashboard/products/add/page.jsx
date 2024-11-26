import { addProduct } from "@/app/lib/actions"
import styles from "@/app/ui/dashboard/product/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="title" name="title" required/>
        <select name="cat" id="cat">
          <option value="general">Choose a category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="price" name="price" required/>
        <input type="number" placeholder="stock" name="stock" required/>
        <input type="text"  placeholder="color" name="color" />
        <input type="size" placeholder="size" name="size"/>
        <textarea name="desc" id="desc" placeholder="Description"  rows={16}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
