import { writeFileSync } from 'fs';
import { generate2DGaussianPoints } from '@/components/math';

import path from 'path';

export default function savePoints() {
    // Example parameters
    const numPoints = 25000;
    const stdX = 75;
    const stdY = 200;
    const theta = Math.PI / 12;
    const width = 2000;
    const height = 960;

    // Generate points
    const points = generate2DGaussianPoints(numPoints, width, height, stdX, stdY, theta);

    // Get the path to the public directory
    const filePath = path.join(process.cwd(), 'public', 'gaussianPoints.json');

    // Save points to a JSON file
    writeFileSync(filePath, JSON.stringify(points, null, 2));

	console.log("Saved");
    //res.status(200).json({ message: 'Points saved to gaussianPoints.json' });
}
