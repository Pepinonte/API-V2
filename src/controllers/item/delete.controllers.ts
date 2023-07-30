import { Request, Response } from "express";
import Item from "../../models/item";

export async function deleteById(req: any, res: Response) {
  const { id } = req.params;
  Item.findByPk(id)
    .then((item: any) => {
      if (!item) {
        return res
          .status(400)
          .json({ error: true, msg: `item with id <${id}> not found` });
      }
      if (item.item_author !== req.user.user_id) {
        return res
          .status(401)
          .json({ error: true, msg: "you are not the author of this item" });
      }
      Item.destroy({
        where: { item_id: id },
      })
        .then((item) => {
          if (item === 0) {
            return res
              .status(400)
              .json({ error: true, msg: `item with id <${id}> not found` });
          }
          res.status(200).json({ msg: `item with id <${id}> deleted`, item });
        })
        .catch((err) => res.status(400).json({ error: true, msg: err }));
    })
    .catch((err) => res.status(400).json({ error: true, msg: err }));
}

export async function deleteByName(req: any, res: Response) {
  const { name } = req.params;
  Item.findOne({ where: { item_name: name } })
    .then((item: any) => {
      if (!item) {
        return res
          .status(400)
          .json({ error: true, msg: `item with name <${name}> not found` });
      }
      if (item.item_author !== req.user.user_id) {
        return res
          .status(401)
          .json({ error: true, msg: "you are not the author of this item" });
      }
      Item.destroy({
        where: { item_name: name },
      })
        .then((item) => {
          if (item === 0) {
            return res
              .status(400)
              .json({ msg: `item with name <${name}> not found` });
          }
          res
            .status(200)
            .json({ msg: `item with name <${name}> deleted`, item });
        })
        .catch((err) => res.status(400).json({ error: true, msg: err }));
    })
    .catch((err) => res.status(400).json({ error: true, msg: err }));
}
