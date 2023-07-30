import { Request, Response } from "express";
import Item from "../../models/item";
import * as itemValidation from "../../validation/item/put.validation";

export async function updateById(req: any, res: Response) {
  const { params } = req;
  const { body } = req;
  const { error } = itemValidation.updateById(body);
  if (error)
    return res.status(401).json({ error: true, msg: error.details[0].message });
  // Check if item author is the same as the one in the token
  Item.findByPk(params.id)
    .then((item: any) => {
      if (!item) {
        return res
          .status(400)
          .json({ error: true, msg: `item with id ${params.id} not found` });
      }
      if (item.item_author !== req.user.user_id) {
        return res
          .status(401)
          .json({ error: true, msg: "you are not the author of this item" });
      } else {
        Item.update(body, { where: { item_id: params.id } })
          .then((item) => {
            if (item[0] === 0) {
              return res
                .status(400)
                .json({
                  msg: `item with id ${params.id}, element(s) provided are identical`,
                });
            }
            res
              .status(200)
              .json({ msg: `item with id ${params.id} updated`, item });
          })
          .catch((err) => res.status(400).json({ error: true, msg: err }));
      }
    })
    .catch((err) => res.status(400).json({ error: true, msg: err }));
}

export async function updateByName(req: any, res: Response) {
  const { params } = req;
  const { body } = req;
  const { error } = itemValidation.updateByName(body);
  if (error)
    return res.status(401).json({ error: true, msg: error.details[0].message });
  // Check if item author is the same as the one in the token
  Item.findOne({ where: { item_name: params.name } })
    .then((item: any) => {
      if (!item) {
        return res
          .status(400)
          .json({ error: true, msg: `item with name ${params.name} not found` });
      }
      if (item.item_author !== req.user.user_id) {
        return res
          .status(401)
          .json({ error: true, msg: "you are not the author of this item" });
      } else {
        Item.update(body, { where: { item_name: params.name } })
          .then((item) => {
            if (item[0] === 0) {
              return res
                .status(400)
                .json({
                  msg: `item with name ${params.name}, element(s) provided are identical`,
                });
            }
            res
              .status(200)
              .json({ msg: `item with name ${params.name} updated`, item });
          })
          .catch((err) => res.status(400).json({ error: true, msg: err }));
      }
    })
}
