"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Point } from '@/components/math';

const GaussianEllipse = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [points, setPoints] = useState<Point[]>([]);
	const [windowDimensions, setWindowDimensions] = React.useState<{ width: number; height: number }>({
		width: typeof window !== "undefined" ? window.innerWidth : 0,
		height: typeof window !== "undefined" ? window.innerHeight : 0,
	});

	useEffect(() => {
		const fetchPoints = async () => {
			const response = await fetch('/gaussianPoints.json');
			const data = await response.json();
			setPoints(data);
		};

		fetchPoints();
	}, []);

	useEffect(() => {
		const handleResize = () => {
			setWindowDimensions({
				width: window.innerWidth,
				height: window.innerHeight
			});
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas && points.length > 0) {
            const context = canvas.getContext('2d');
            if (context) {
                // Clear the canvas
                context.clearRect(0, 0, canvas.width, canvas.height);
                // Set canvas size
                canvas.width = windowDimensions.width;
                canvas.height = windowDimensions.height;
                // Set fill style for points
                context.fillStyle = 'rgba(0,0,0,0.6)';
                // Center points
                const offsetX = (windowDimensions.width/1950 - 1) * windowDimensions.width;
                const offsetY = (windowDimensions.height/1000 - 1) * windowDimensions.height;
                // Draw points
                points.forEach(point => {
                    context.fillRect(point.x + offsetX, point.y + offsetY, 1, 1);
                });
            }
        }
    }, [points, windowDimensions]);

    return <canvas ref={canvasRef}></canvas>;

	//return (
	//	<div className="relative w-full h-full overflow-hidden">
	//		{points.map((point, index) => (
	//			<div
	//				key={index}
	//				className="absolute bg-dot rounded-full"
	//				style={{
	//					left: `${point.x}px`,
	//					top: `${point.y}px`,
	//					width: '1px',
	//					height: '1px'
	//				}}
	//			/>
	//		))}
	//	</div>
	//);
};

export default GaussianEllipse;
