import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import type { I18n, I18nOptions } from 'vue-i18n'

export let i18n: ReturnType<typeof createI18n>

const createI18nOptions = async (): Promise<I18nOptions> => {
  const locale = uni.getLocale() // 英语 en  中文简体 zh-Hans 繁体 zh-Hant 法语 fr 西班牙语 es
  const defaultLocal = await import(`../../locales/${locale}.ts`)
  const message = defaultLocal.default ?? {}

  return {
    legacy: false,
    locale: locale,
    messages: {
      [locale]: message
    },
    sync: true,
    silentTranslationWarn: true,
    missingWarn: false,
    silentFallbackWarn: true
  }
}

export const setupI18n = async (app: App<Element>) => {
  const options = await createI18nOptions()
  i18n = createI18n(options) as I18n
  app.use(i18n)
}
