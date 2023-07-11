import { Request, Response } from "express";
import News from "../../models/news";
import * as newsValidation from "../../validation/news/put.validation";

export async function updateById(req: Request, res: Response) {
  const { params } = req;
  const { body } = req;
  const { error } = newsValidation.updateById(body);
  if (error) return res.status(401).json(error.details[0].message);
  News.update(body, { where: { news_id: params.id } })
    .then((news) => {
      if (news[0] === 0) {
        return res.status(400).json({
          msg: `news with id <${params.id}> not found or element(s) provided are identical`,
        });
      }
      res
        .status(200)
        .json({ msg: `news with id <${params.id}> updated`, news });
    })
    .catch((err) => res.status(400).json(err));
}

export async function updateByName(req: Request, res: Response) {
  const { params } = req;
  const { body } = req;
  const { error } = newsValidation.updateByName(body);
  if (error) return res.status(401).json(error.details[0].message);
  News.update(body, { where: { news_name: params.name } })
    .then((news) => {
      if (news[0] === 0) {
        return res.status(400).json({
          msg: `news with name <${params.name}> not found or element(s) provided are identical`,
        });
      }
      res.status(200).json({
        msg: `news with name <${params.name}> updated`,
        news,
      });
    })
    .catch((err) => res.status(400).json(err));
}
