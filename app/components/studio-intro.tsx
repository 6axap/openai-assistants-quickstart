import React from 'react';
import './studio-intro.module.css';

const NavMenu = ({ onNavigate }) => {
  return (
      <div className="main-nav">
        <div className="nav-item" onClick={() => onNavigate('web')}>
          web design
          {/* <div className="sub-nav">
            <div className="nav-link" onClick={(e) => {
              e.stopPropagation();
              onNavigate('web/ecommerce');
            }}>- ecommerce</div>
            <div className="nav-link" onClick={(e) => {
              e.stopPropagation();
              onNavigate('web/seo');
            }}>- seo</div>
          </div> */}
        </div>

        <div className="nav-item" onClick={() => onNavigate('branding')}>
          branding
          {/* <div className="sub-nav">
            <div className="nav-link">- logo design</div>
            <div className="nav-link">- design language</div>
            <div className="nav-link">- typography</div>
            <div className="nav-link">- visuals</div>
            <div className="nav-link">- brand guideline</div>
          </div> */}
        </div>

        <div className="nav-item" onClick={() => onNavigate('marketing')}>
          marketing
          {/* <div className="sub-nav">
            <div className="nav-link">- social media</div>
            <div className="nav-link">- video content</div>
            <div className="nav-link">- custom printed tshirts</div>
            <div className="nav-link">- branded goodies/merchandise</div>
            <div className="nav-link">- business photography</div>
          </div> */}
        </div>

        <div className="nav-item" onClick={() => onNavigate('audio-video')}>
          audio / video
        </div>
      </div>
  );
};

export default NavMenu;
