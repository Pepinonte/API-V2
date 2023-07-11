import { Request, Response } from "express";
import News from "../../models/news";

export async function deleteById(req: Request, res: Response) {
  const { id } = req.params;
  News.destroy({
    where: { news_id: id },
  })
    .then((news) => {
      if (news === 0) {
        return res
          .status(400)
          .json({ msg: `news with id <${id}> not found` });
      }
      res.status(200).json({ msg: `news with id <${id}> deleted`, news });
    })
    .catch((err) => res.status(400).json(err));
}

export async function deleteByName(req: Request, res: Response) {
  const { name } = req.params;
  News.destroy({
    where: { news_name: name },
  })
    .then((news) => {
      if (news === 0) {
        return res
          .status(400)
          .json({ msg: `news with name <${name}> not found` });
      }
      res
        .status(200)
        .json({ msg: `news with name <${name}> deleted`, news });
    })
    .catch((err) => res.status(400).json(err));
}
