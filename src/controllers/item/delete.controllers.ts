import { Request, Response } from "express";

import Item from "../../models/item";

export async function deleteById(req: Request, res: Response) {
  const { id } = req.params;

  Item.destroy({
    where: { item_id: id },
  })
    .then((product) => {
      res.status(200).json({ msg: `product with id ${id} deleted`, product });
    })
    .catch((err) => res.status(400).json(err));
}

// const [results, metadata] = await sequelize.query(
//   "UPDATE users SET y = 42 WHERE x = 12",
// );
// Results will be an empty array and metadata will contain the number of affected rows.

// export async function deleteById(req: Request, res: Response) {
//   const { id } = req.params;
//   req.getConnection((err, connection) => {
//     const query = connection.query(
//       "DELETE FROM item WHERE item_id = ?",
//       {id},
//     );
//   });
// };
