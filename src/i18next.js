import React from 'react';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line import/prefer-default-export
export function MyComponent() {
    const { t, i18n } = useTranslation();
    // or const [t, i18n] = useTranslation();

    return <p>{t('my translated text')}</p>
}