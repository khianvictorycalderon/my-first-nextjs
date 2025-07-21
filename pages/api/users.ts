// pages/api/users.ts ✅

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    { id: 1, name: "Jake" },
    { id: 2, name: "John" },
    { id: 3, name: "James" },
  ]);
}
