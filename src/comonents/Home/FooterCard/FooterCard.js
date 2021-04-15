import React from 'react';
import { Link } from 'react-router-dom';

const FooterCard = (props) => {
    return (
        <div className="col-md-3">
            <h6 className="text-white">{props.menuTitle ? props.menuTitle : " "}</h6>
            <ul className="list-unstyled mt-4">
                {
                    props.menuItems.map((item, index) => <li key={index}><Link to={item.link} className="text-white" style={{ textDecoration: 'none' }}>{item.name}</Link></li>)
                }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCard;