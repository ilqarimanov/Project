import React from 'react';
import { useTranslation} from "react-i18next";

const DeliveryTime = () => {
  const { t } = useTranslation();
  return(
    <div className='deliverytime'>
      <div className="bg d-flex flex-column align-items-center justify-content-center">
        <p1 className="p1">{t('text54')}</p1>
        <h1>{t('text55')}</h1>
        <p className="p2">{t('text56')}</p>
      </div>
    </div>
    )
};

export default DeliveryTime;
