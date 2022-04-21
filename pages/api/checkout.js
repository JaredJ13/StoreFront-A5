import { getProduct } from "../../libs/getProduct";

export default async function handler(req, res) {

  const product = await getProduct(req.body.uid)
  console.log(product)

  res.send("you have to return something")

}