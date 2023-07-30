import { Request, Response } from "express";
import Item from "../../models/item";
import * as itemValidation from "../../validation/item/post.validation";

export async function createOne(req: any, res: Response) {
  const { body } = req;
  console.log(body);
  const { error } = itemValidation.createOne(body);
  if (error)
    return res.status(401).json({ error: true, msg: error.details[0].message });
  // Check if item already exists
  Item.findOne({ where: { item_name: body.item_name } }).then((item) => {
    if (item) {
      res
        .status(400)
        .json({
          error: true,
          msg: `item with name <${body.item_name}> already exists`,
        });
    } else {
      body.item_author = req.user.user_id;
      Item.create({ ...body })
        .then((item) => {
          res.status(201).json({ msg: "item created", item });
        })
        .catch((err) => res.status(400).json({ error: true, msg: err }));
    }
  });
}
