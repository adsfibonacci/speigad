
export interface Point {
    x: number;
    y: number;
}

export function generate2DGaussianPoints(
    numPoints: number, 
    width: number, 
    height: number, 
    stdX: number, 
    stdY: number, 
    theta: number
): Point[] {
    const points: Point[] = [];
    const cosTheta = Math.cos(theta);
    const sinTheta = Math.sin(theta);

    const generateGaussianRandom = () => {
        let u = 0, v = 0;
        while (u === 0) u = Math.random(); // Converting [0,1) to (0,1)
        while (v === 0) v = Math.random();
        return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    };

    for (let i = 0; i < numPoints; i++) {
        // Generate random points from a standard Gaussian distribution
        const z0 = generateGaussianRandom();
        const z1 = generateGaussianRandom();

        // Scale points to desired standard deviation
        const xStd = stdX * z0;
        const yStd = stdY * z1;

        // Rotate points by theta to form an ellipse
        const x = cosTheta * xStd - sinTheta * yStd;
        const y = sinTheta * xStd + cosTheta * yStd;

        // Translate points to center of canvas
        const xPos = x + width / 2; // Center around width/2
        const yPos = y + height / 2; // Center around height/2

        points.push({ x: xPos, y: yPos });
    }

    return points;
}
