import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
  
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
  
  return {
    locale,
    messages: {
      navigation: (await import(`../../messages/${locale}/navigation.json`)).default,
      hero: (await import(`../../messages/${locale}/hero.json`)).default,
      intro: (await import(`../../messages/${locale}/intro.json`)).default,
      featured_projects: (await import(`../../messages/${locale}/featured_projects.json`)).default,
      services_preview: (await import(`../../messages/${locale}/services_preview.json`)).default,
      design_philosophy: (await import(`../../messages/${locale}/design_philosophy.json`)).default,
      before_after: (await import(`../../messages/${locale}/before_after.json`)).default,
      contact_cta: (await import(`../../messages/${locale}/contact_cta.json`)).default,
      footer: (await import(`../../messages/${locale}/footer.json`)).default,
      contact: (await import(`../../messages/${locale}/contact.json`)).default,
      projects_page: (await import(`../../messages/${locale}/projects_page.json`)).default,
      project_detail: (await import(`../../messages/${locale}/project_detail.json`)).default,
      projects_data: (await import(`../../messages/${locale}/projects_data.json`)).default,
    }
  };
});
