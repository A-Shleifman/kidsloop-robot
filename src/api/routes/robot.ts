import { Request, Router } from 'express';
import * as RobotService from 'services/robot';

const router = Router();

router.get('/', (req: Request<{}, {}, {}, { threshold: number }>, res) => {
  const safeCellCount = RobotService.countSafeCells(Number(req.query.threshold ?? 23));

  res.json({ safeCellCount });
});

export const robotRouter = router;
