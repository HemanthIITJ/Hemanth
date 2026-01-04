import React from 'react';
import './PremiumFiller.css';
import sphereImg from '../../assets/exp_sphere.png';
import mechImg from '../../assets/exp_mech.png';

type FillerVariant = 'watch' | 'schematic' | 'typography';

interface PremiumFillerProps {
    variant?: FillerVariant;
    year?: string; // Kept for compatibility but might not be used
}

const PremiumFiller: React.FC<PremiumFillerProps> = ({ variant = 'watch' }) => {

    // Map variants to images
    const getImage = () => {
        switch (variant) {
            case 'watch': return sphereImg;
            case 'schematic': return mechImg;
            case 'typography': return sphereImg; // Fallback or alternate
            default: return sphereImg;
        }
    };

    return (
        <div className="premium-filler glass-container">
            <div className="filler-image-wrapper">
                <img
                    src={getImage()}
                    alt="Premium Detail"
                    className="premium-3d-asset floating-animation"
                />
            </div>
            {/* Optional: Add a glow or shadow element behind */}
            <div className="asset-glow"></div>
        </div>
    );
};

export default PremiumFiller;
