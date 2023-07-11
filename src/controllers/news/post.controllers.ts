import { Request, Response } from "express";
import News from "../../models/news";
import * as newsValidation from "../../validation/news/post.validation";

export async function createOne(req: Request, res: Response) {
  const { body } = req;
  console.log(body);
  const { error } = newsValidation.createOne(body);
  if (error) return res.status(401).json(error.details[0].message);

  News.create({ ...body })
    .then((news) => {
      res.status(201).json({ msg: "news created", news });
    })
    .catch((err) =>
      res.status(400).json({ msg: `error creating news ${err}` }),
    );
}
