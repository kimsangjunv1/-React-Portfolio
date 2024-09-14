import { useEffect, useState } from "react";
import imagesLoaded from "imagesloaded";

const useRouteLoading = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadingCount, setLoadingCount] = useState(0);

    useEffect(() => {
        let imgLoaded = 0;
        let current = 0;

        const imgLoad = imagesLoaded("body");
        const imgTotal = imgLoad.images.length;

        const updateProgress = () => {
            const target = (imgLoaded / imgTotal) * 100;
            current += (target - current) * 0.1;

            if (current >= 99) {
                setLoadingCount(100);
                setIsLoaded(true);
                clearInterval(progressTimer);
            } else {
                setLoadingCount(Math.floor(current));
            }
        };

        const handleProgress = () => {
            imgLoaded++;
        };

        imgLoad.on("progress", handleProgress);

        const progressTimer = setInterval(updateProgress, 1000 / 60);

        return () => {
            clearInterval(progressTimer);
            imgLoad.off("progress", handleProgress);
        };
    }, []);

    return { isLoaded, loadingCount };
};

export default useRouteLoading;