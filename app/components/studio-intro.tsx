import React from 'react';
// import './studio-intro.module.css';
import './studio-intro.css';

const NavMenu = ({ onNavigate }) => {
  return (
      <div className="main-nav">
        <div className="nav-item" onClick={() => onNavigate('web')}>
          web design
          <div className="sub-nav">
            <div className="nav-link" onClick={(e) => {
              e.stopPropagation();
              onNavigate('web/ecommerce');
            }}>- ecommerce</div>
            <div className="nav-link" onClick={(e) => {
              e.stopPropagation();
              onNavigate('web/seo');
            }}>- seo</div>
          </div>
        </div>

        <div className="nav-item" onClick={() => onNavigate('branding')}>
          branding
        </div>

        <div className="nav-item" onClick={() => onNavigate('marketing')}>
          marketing
        </div>

        <div className="nav-item" onClick={() => onNavigate('audio-video')}>
          audio / video
        </div>
      </div>
  );
};

export default NavMenu;
