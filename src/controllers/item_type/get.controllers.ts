import { Request, Response } from "express";
import { ItemType } from "../../models/item";

export async function getAll(req: Request, res: Response) {
  ItemType.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((item_type) => {
      if (item_type.length === 0) {
        return res
          .status(400)
          .json({ error: true, msg: "item type not found" });
      }
      res.status(200).json({ msg: "all items type", item_type });
    })
    .catch((err) => res.status(400).json({ error: true, msg: err }));
}
