import { Request, Response } from "express";
import News from "../../models/news";

export async function getAll(req: Request, res: Response) {
  News.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then(async (news) => {
      if (news.length === 0) {
        return res.status(400).json({ msg: "news not found" });
      }
      res.status(200).json({ msg: "all news", news });
    })
    .catch((err) => res.status(400).json(err));
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  News.findByPk(id, {
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((news) => {
      if (!news) {
        return res
          .status(400)
          .json({ msg: `news with id <${id}> not found` });
      }
      res.status(200).json({ msg: `news with id <${id}>`, news });
    })
    .catch((err) => res.status(400).json(err));
}

export async function getByName(req: Request, res: Response) {
  const { name } = req.params;
  News.findAll({
    where: { news_name: name },
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((news) => {
      if (news.length === 0) {
        return res
          .status(400)
          .json({ msg: `news with name <${name}> not found` });
      }
      res.status(200).json({ msg: `news with name <${name}>`, news });
    })
    .catch((err) => res.status(400).json(err));
}
